const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const originalResolve=Module._resolveFilename;
Module._resolveFilename=function(specifier,...args){return originalResolve.call(this,specifier.startsWith('@/')?path.join(root,specifier.slice(2)):specifier,...args);};
for(const extension of ['.ts','.tsx'])require.extensions[extension]=(module,filename)=>{
 const source=ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}});
 module._compile(source.outputText,filename);
};
const {translations}=require('../lib/translations.ts');
const {languages,translate}=require('../lib/i18n.ts');
const {questions,dimensions,careers,interestLabels,skillLabels,nextSteps,evaluate}=require('../lib/vocational.ts');
const {createReport}=require('../lib/report.ts');
const {translateTree}=require('../components/language.tsx');
const React=require('react');
const {renderToStaticMarkup}=require('react-dom/server');

test('all questionnaire and career content has five complete translations',()=>{
 const strings=[...questions.flatMap(q=>[q.title,q.hint,q.section,...(q.options??[])]),...dimensions.flatMap(d=>[d.name,d.description]),...careers.flatMap(c=>[c.name,c.fields,c.experiment,c.attention]),...interestLabels,...skillLabels];
 for(let study=0;study<4;study++)for(let access=0;access<5;access++)for(let certainty=0;certainty<4;certainty++)strings.push(...nextSteps({study,access,certainty}));
 for(const text of strings){assert.ok(translations[text],text);assert.equal(translations[text].length,5);assert.ok(translations[text].every(s=>typeof s==='string'&&s.length>0),text);}
});
test('static visible copy is translated; bibliography and names remain original',()=>{
 const retained=new Set(['horizonte','Sidiney Rodrigues.','LinkedIn','GitHub','NATIONAL CENTER FOR O*NET DEVELOPMENT.','O*NET Interest Profiler.','HOLLAND, John L.','Making Vocational Choices: A Theory of Vocational Personalities and Work Environments.','3. ed. Odessa, FL: Psychological Assessment Resources, 1997.','SAVICKAS, Mark L.','Career Counseling.','2. ed. Washington, DC: American Psychological Association, 2019. DOI: 10.1037/0000105-000.']);
 const missing=new Set();
 for(const file of ['app/page.tsx','components/site-credits.tsx','components/questionnaire-method.tsx','components/dream-field.tsx','components/completion-count.tsx']){
  const source=ts.createSourceFile(file,fs.readFileSync(path.join(root,file),'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  function visit(node){if(ts.isJsxText(node)){const text=node.text.replace(/\s+/g,' ').trim();if(/[a-zÀ-ÿ]/i.test(text)&&!translations[text]&&!retained.has(text))missing.add(text);}ts.forEachChild(node,visit);}
  visit(source);
 }
 assert.deepEqual([...missing],[]);
});
test('localization preserves user input, handlers, links and semantic ids',()=>{
 const onClick=()=>{};
 const source=React.createElement('div',{id:'unchanged'},React.createElement('span',{translate:'no'},'Social'),React.createElement('input',{value:'Social',readOnly:true,placeholder:'Ainda não sei'}),React.createElement('button',{onClick,'aria-label':'Voltar'},'Voltar'),React.createElement('a',{href:'https://example.org/Voltar'},'Voltar'));
 for(const {code} of languages){
  const localized=translateTree(source,code);
  assert.equal(localized.props.id,'unchanged');
  const children=React.Children.toArray(localized.props.children);
  assert.equal(children[0].props.children,'Social');
  assert.equal(children[1].props.value,'Social');
  assert.equal(children[2].props.onClick,onClick);
  assert.equal(children[2].props.children,translate('Voltar',code));
  assert.equal(children[2].props['aria-label'],translate('Voltar',code));
  assert.equal(children[3].props.href,'https://example.org/Voltar');
  assert.ok(renderToStaticMarkup(localized).includes('translate="no"'));
 }
});
test('reports translate all 29 answers without changing user text or scores',()=>{
 const answers=Object.fromEntries(questions.map((q,i)=>[q.id,i%(q.options?.length??5)]));
 const before=JSON.stringify(answers),result=JSON.stringify(evaluate(answers));
 for(const {code} of languages){
  const report=createReport(answers,'Social <script>Minha escolha</script>',code);
  assert.ok(report.includes('Social <script>Minha escolha</script>'));
  for(const q of questions)assert.ok(report.includes(translate(q.title,code)),q.id);
  for(const d of dimensions)assert.ok(report.includes(translate(d.name,code)+': '+evaluate(answers).scores[d.key]+'/100'));
 }
 assert.equal(JSON.stringify(answers),before);
 assert.equal(JSON.stringify(evaluate(answers)),result);
 assert.equal(translate('2 de 29 perguntas concluídas','en'),'2 of 29 questions completed');
 assert.equal(translate('Prático: 75 de 100','zh-CN'),'实践型: 75/100');
});
