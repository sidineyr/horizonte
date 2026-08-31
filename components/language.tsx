'use client';
import { createContext, useContext, useEffect, useMemo, useState, Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from 'react';
import { Languages } from 'lucide-react';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { languages, translate, type Locale } from '@/lib/i18n';

type LanguageState = {locale:Locale;setLocale:(locale:Locale)=>void;t:(text:string)=>string};
const Context=createContext<LanguageState>({locale:'pt-BR',setLocale:()=>{},t:s=>s});
export function LanguageProvider({children}:{children:ReactNode}){
 const [locale,setLocale]=useState<Locale>('pt-BR');
 const state=useMemo(()=>({locale,setLocale,t:(text:string)=>translate(text,locale)}),[locale]);
 useEffect(()=>{document.documentElement.lang=locale;document.title='Horizonte — '+translate('Eu quero ser',locale)+'…';},[locale]);
 return <Context.Provider value={state}>{children}</Context.Provider>;
}
export function useLanguage(){return useContext(Context);}
export function LanguageBar(){
 const {locale,setLocale,t}=useLanguage();
 return <aside className="language-bar">
  <div className="language-control"><Languages size={18} aria-hidden="true"/><label htmlFor="site-language">{t('Idioma')}</label>
   <NativeSelect id="site-language" value={locale} onChange={e=>{const next=languages.find(l=>l.code===e.target.value);if(next)setLocale(next.code);}}>
    {languages.map(l=><NativeSelectOption key={l.code} value={l.code} lang={l.code}>{l.label}</NativeSelectOption>)}
   </NativeSelect>
  </div>
  {locale!=='pt-BR'&&<p>{t('Tradução local. O questionário continua voltado ao contexto brasileiro e ao ENEM.')}</p>}
 </aside>;
}
// Translate React text and accessible labels before rendering; never mutate the DOM,
// input values, event handlers, URLs, keys, or user-written text marked translate="no".
export function translateTree(node:ReactNode,locale:Locale):ReactNode{
 if(typeof node==='string')return translate(node,locale);
 if(Array.isArray(node))return Children.map(node,child=>translateTree(child,locale));
 if(!isValidElement(node))return node;
 const element=node as ReactElement<Record<string,unknown>>;
 const props=element.props;
 if(props.translate==='no')return element;
 const updates:Record<string,unknown>={};
 for(const attr of ['aria-label','placeholder','title','alt']){
  if(typeof props[attr]==='string')updates[attr]=translate(props[attr] as string,locale);
 }
 if(props.children!==undefined)updates.children=translateTree(props.children as ReactNode,locale);
 return cloneElement(element,updates);
}
export function Localize({children}:{children:ReactNode}){
 const {locale}=useLanguage();
 return <>{translateTree(children,locale)}</>;
}
