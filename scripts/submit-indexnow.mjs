import { readFile } from 'node:fs/promises';
const origin = 'https://horizonte-vocacional.blubier.chatgpt.site';
const key = (await readFile(new URL('../public/indexnow-key.txt', import.meta.url), 'utf8')).trim();
const keyLocation = origin + '/indexnow-key.txt';
const deployed = await fetch(keyLocation);
if (!deployed.ok || (await deployed.text()).trim() !== key) throw new Error('Publish and verify the current IndexNow key before submitting.');
const response = await fetch('https://api.indexnow.org/indexnow', {
 method:'POST',
 headers:{'Content-Type':'application/json; charset=utf-8'},
 body:JSON.stringify({host:new URL(origin).host,key,keyLocation,urlList:[origin+'/']})
});
console.log('IndexNow HTTP '+response.status);
if (![200,202].includes(response.status)) { console.error(await response.text()); process.exitCode=1; }
else console.log(response.status===202?'URL received; key validation pending. This is not confirmation of indexing.':'URL received. This is not confirmation of indexing.');