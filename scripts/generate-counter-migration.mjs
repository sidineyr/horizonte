import { mkdir, writeFile } from 'node:fs/promises';
import { counterSchema } from '../db/schema.ts';
await mkdir('drizzle/meta',{recursive:true});
await writeFile('drizzle/0000_completion_counter.sql', counterSchema + ';\n');
await writeFile('drizzle/meta/_journal.json',JSON.stringify({version:'7',dialect:'sqlite',entries:[{idx:0,version:'6',when:1788192000000,tag:'0000_completion_counter',breakpoints:true}]},null,2)+'\n');
