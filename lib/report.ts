import { dimensions, questions, evaluate, nextSteps, interestLabels, skillLabels } from './vocational';
import { translate, type Locale } from './i18n';
export function createReport(answers:Record<string,number>,dream:string,locale:Locale){
 const t=(s:string)=>translate(s,locale), result=evaluate(answers);
 return [
 t('HORIZONTE — MEU MAPA DE POSSIBILIDADES'),t('Eu quero ser:')+' '+dream,'',
 t('EXPLORAÇÃO EDUCATIVA. Não é teste psicológico validado nem previsão de sucesso.'),'',
 ...dimensions.map(d=>t(d.name)+': '+result.scores[d.key]+'/100'),'',
 t('CAMINHOS PARA INVESTIGAR'),
 ...result.ranked.slice(0,3).flatMap(c=>[t(c.name)+' ('+c.score+'/100 '+t('no índice exploratório')+')',t(c.fields),t('Experimente:')+' '+t(c.experiment)]),'',
 t('PRÓXIMOS PASSOS'),...nextSteps(answers).map(t),'',
 t('MINHAS RESPOSTAS'),...questions.flatMap(q=>[t(q.title),t((q.options??(q.kind==='skill'?skillLabels:interestLabels))[answers[q.id]])]),'',
 t('Método: 3 itens por interesse, notas 0 a 4, soma / 12 × 100. Caminhos: 60% do interesse principal + 40% do secundário. Empates não indicam preferência. Habilidades e contexto não reduzem o índice.'),
 t('Fontes:')+' https://www.onetcenter.org/IP.html | https://acessounico.mec.gov.br/ | https://emec.mec.gov.br/'
 ].join('\n');
}
