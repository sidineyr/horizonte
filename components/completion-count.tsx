'use client';
import { useEffect, useState } from 'react';
export function CompletionCount() {
 const [total,setTotal] = useState<number|null>(null);
 const [failed,setFailed] = useState(false);
 useEffect(()=>{
  const controller = new AbortController();
  fetch('/api/completions',{cache:'no-store',signal:controller.signal})
   .then(r=>{if(!r.ok)throw new Error();return r.json();})
   .then(data=>{if(typeof data!=='object'||data===null||!('total' in data)||typeof data.total!=='number'||!Number.isSafeInteger(data.total)||data.total<0)throw new Error();setTotal(data.total);})
   .catch(error=>{if(error.name!=='AbortError')setFailed(true);});
  return ()=>controller.abort();
 },[]);
 return <div className="completion-count" aria-live="polite">
  <strong>{total===null ? (failed?'Contador temporariamente indisponível':'Carregando participações…') : total===0 ? 'Seja a primeira pessoa a concluir este teste!' : <><span>{total.toLocaleString('pt-BR')}</span> {total===1?'pessoa já fez esse teste!':'pessoas já fizeram esse teste!'}</>}</strong>
  <small>Conclusões registradas desde 31/08/2026. Uma pessoa pode participar mais de uma vez. Apenas visitar a página não aumenta o contador.</small>
 </div>;
}
