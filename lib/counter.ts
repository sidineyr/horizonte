import { env } from 'cloudflare:workers';
import { counterSchema } from '../db/schema';
export async function counterDatabase() {
 const db = (env as unknown as { DB: D1Database }).DB;
 if (!db) throw new Error('Counter database unavailable');
 await db.prepare(counterSchema).run();
 return db;
}
