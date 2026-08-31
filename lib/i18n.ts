import { translations } from './translations';
export const languages = [
 {code:'pt-BR',label:'Português'}, {code:'en',label:'English'}, {code:'es',label:'Español'},
 {code:'de',label:'Deutsch'}, {code:'fr',label:'Français'}, {code:'zh-CN',label:'中文（简体）'}
] as const;
export type Locale = typeof languages[number]['code'];
export function translate(text:string,locale:Locale):string {
 if(locale==='pt-BR')return text;
 const key=text.replace(/\s+/g,' ').trim();
 const index=languages.findIndex(l=>l.code===locale)-1;
 const entry=translations[key];
 if(entry)return (text.match(/^\s*/)?.[0]??'')+entry[index]+(text.match(/\s*$/)?.[0]??'');
 const progress=key.match(/^(\d+) de (\d+) perguntas concluídas$/);
 if(progress){
  const [,a,b]=progress;
  return [`${a} of ${b} questions completed`,`${a} de ${b} preguntas completadas`,`${a} von ${b} Fragen abgeschlossen`,`${a} questions terminées sur ${b}`,`已完成${a}/${b}题`][index];
 }
 const score=key.match(/^(.+): (\d+) de 100$/);
 if(score)return `${translate(score[1],locale)}: ${score[2]}/100`;
 return text;
}
