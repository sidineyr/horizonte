import { test } from 'node:test';
import assert from 'node:assert/strict';
import { questions, dimensions, evaluate, nextSteps } from '../lib/vocational.ts';
const fill = (n=0) => Object.fromEntries(questions.map(q=>[q.id, Math.min(n,(q.options?.length??5)-1)]));
test('incomplete and malformed answers never produce a result',()=>{
 assert.throws(()=>evaluate({}));
 for(const value of [-1,5,NaN,undefined,1.5]) assert.throws(()=>evaluate({...fill(),R0:value}));
});
test('all-low and all-high interests retain honest scale endpoints',()=>{
 assert.ok(Object.values(evaluate(fill()).scores).every(n=>n===0));
 assert.ok(Object.values(evaluate(fill(4)).scores).every(n=>n===100));
 assert.ok(evaluate(fill(4)).ranked.every(c=>c.score===100));
});
test('interests determine the ranking, not finances or present skills',()=>{
 const a=fill();for(const q of questions.filter(q=>q.kind==='interest'&&(q.dimension==='S'||q.dimension==='I'))) a[q.id]=4;
 const b={...a};for(const q of questions.filter(q=>q.kind!=='interest')) b[q.id]=(q.options?.length??5)-1;
 assert.deepEqual(evaluate(a),evaluate(b));
 assert.equal(evaluate(a).ranked[0].name,'Saúde e cuidado');
 assert.notDeepEqual(nextSteps(a),nextSteps(b));
});
test('balanced item counts and valid randomized results',()=>{
 for(const d of dimensions) assert.equal(questions.filter(q=>q.kind==='interest'&&q.dimension===d.key).length,3);
 for(let i=0;i<100;i++) { const a=Object.fromEntries(questions.map(q=>[q.id,Math.floor(Math.random()*(q.options?.length??5))]));const r=evaluate(a); assert.equal(r.ranked.length,12); assert.ok(r.ranked.every(c=>c.score>=0&&c.score<=100));assert.ok(nextSteps(a).every(Boolean)); }
});
