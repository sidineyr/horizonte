import { counterDatabase } from '@/lib/counter';
const headers = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' };
export async function GET() {
 try {
  const db = await counterDatabase();
  const row = await db.prepare('SELECT total FROM completion_counter WHERE id = 1').first<{total:number}>();
  return Response.json({total:row?.total ?? 0}, {headers});
 } catch { return Response.json({error:'Contador temporariamente indisponível'}, {status:503,headers}); }
}
export async function POST(request: Request) {
 const allowed = ['https://horizonte-vocacional.blubier.chatgpt.site','http://localhost:3000','http://127.0.0.1:3000'];
 if (!allowed.includes(request.headers.get('origin') ?? '')) return new Response(null,{status:403,headers});
 if (request.headers.get('content-type') !== 'application/json') return new Response(null,{status:415,headers});
 // No questionnaire data or user identifiers accepted.
 if (request.headers.get('content-length') && Number(request.headers.get('content-length')) > 64) return new Response(null,{status:413,headers});
 let body: string;
 try { body = await request.text(); } catch { return new Response(null,{status:400,headers}); }
 if (body !== '{"completed":true}') return new Response(null,{status:400,headers});
 try {
  const db = await counterDatabase();
  const row = await db.prepare('INSERT INTO completion_counter (id,total) VALUES (1,1) ON CONFLICT(id) DO UPDATE SET total = total + 1 RETURNING total').first<{total:number}>();
  return Response.json({total:row!.total}, {headers});
 } catch { return Response.json({error:'Contador temporariamente indisponível'}, {status:503,headers}); }
}
