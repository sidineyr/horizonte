export const dimensions = [
 { key:'R', name:'Prático', description:'Construir, testar e colocar ideias em funcionamento.' },
 { key:'I', name:'Investigativo', description:'Pesquisar, analisar e entender como as coisas funcionam.' },
 { key:'A', name:'Criativo', description:'Expressar ideias e imaginar novas possibilidades.' },
 { key:'S', name:'Social', description:'Escutar, ensinar e contribuir com outras pessoas.' },
 { key:'E', name:'Empreendedor', description:'Mobilizar pessoas, negociar e conduzir iniciativas.' },
 { key:'C', name:'Organizador', description:'Estruturar informações, processos e detalhes.' },
] as const;
export type Dimension = typeof dimensions[number]['key'];
export type Question = { id:string; title:string; hint:string; section:string; kind:'interest'|'skill'|'context'; dimension?:Dimension; options?:string[] };
const activities: Record<Dimension,string[]> = {
 R:['Montar um protótipo e testar se ele funciona.','Cuidar de uma horta e observar o que melhora seu desenvolvimento.','Investigar e resolver um problema em um equipamento.'],
 I:['Comparar fontes para descobrir se uma informação é confiável.','Usar dados para investigar um problema da comunidade.','Formular e testar uma hipótese em um experimento.'],
 A:['Criar uma história, um vídeo ou uma identidade visual.','Imaginar diferentes formas de melhorar uma experiência.','Expressar uma ideia por meio de arte, música ou escrita.'],
 S:['Ajudar alguém a entender um assunto difícil.','Escutar uma pessoa e pensar com ela em possibilidades.','Participar de uma ação de cuidado ou inclusão na comunidade.'],
 E:['Apresentar uma proposta e conquistar apoio para ela.','Organizar uma equipe para tirar uma ideia do papel.','Negociar prioridades em um projeto coletivo.'],
 C:['Organizar uma planilha e conferir se os dados estão corretos.','Planejar etapas e prazos para uma atividade acontecer.','Criar um processo para que informações não se percam.'],
};
const skills = ['Aprender a usar uma ferramenta na prática.','Interpretar evidências e explicar um raciocínio.','Criar uma solução original e comunicar uma ideia.','Escutar e colaborar com pessoas diferentes.','Tomar iniciativa e coordenar uma atividade.','Organizar tarefas e acompanhar prazos.'];
export const questions: Question[] = [
 ...[0,1,2].flatMap(n=>dimensions.map(d=>({id:`${d.key}${n}`,title:activities[d.key][n],hint:'Quanto você gostaria de fazer isso? Imagine que teria oportunidade de aprender, mesmo sem experiência.',section:'Seus interesses',kind:'interest' as const,dimension:d.key}))),
 ...dimensions.map((d,i)=>({id:`skill${d.key}`,title:skills[i],hint:'Como você percebe essa habilidade hoje? Habilidades podem ser desenvolvidas; esta resposta não exclui caminhos.',section:'Seu ponto de partida',kind:'skill' as const,dimension:d.key})),
 {id:'subject',title:'Em qual área você mais gosta de aprender?',hint:'Pense no interesse, não apenas na nota. Escolha a opção que mais se aproxima de você.',section:'Sua realidade',kind:'context',options:['Linguagens e redação','Ciências humanas','Ciências da natureza','Matemática','Gosto de várias / ainda estou descobrindo']},
 {id:'value',title:'O que você mais quer encontrar no trabalho?',hint:'Não existe resposta certa. Escolha o que tem mais peso neste momento.',section:'Sua realidade',kind:'context',options:['Contribuir com pessoas e sociedade','Criar e ter autonomia','Aprender e resolver desafios','Ter previsibilidade e organização','Conquistar renda e crescimento']},
 {id:'study',title:'Como os estudos podem caber na sua rotina?',hint:'Isso orienta os próximos passos, sem diminuir suas possibilidades.',section:'Sua realidade',kind:'context',options:['Posso priorizar os estudos','Vou precisar conciliar estudo e trabalho','Preciso de horários flexíveis','Ainda preciso planejar isso']},
 {id:'access',title:'O que mais precisa entrar no seu planejamento?',hint:'Não pedimos renda ou documentos. Marque sua prioridade de apoio.',section:'Sua realidade',kind:'context',options:['Acesso a uma instituição pública','Bolsas e apoio para permanência','Cursos perto de casa ou a distância','Conhecer melhor os tipos de formação','Prefiro não responder']},
 {id:'certainty',title:'Como você se sente sobre a escolha hoje?',hint:'A escolha pode mudar. Este é um ponto de partida, não um compromisso.',section:'Sua realidade',kind:'context',options:['Tenho um caminho e quero explorá-lo','Estou entre algumas possibilidades','Ainda não sei por onde começar','Sinto pressão para decidir logo']},
];
export const interestLabels = ['Não gostaria','Gostaria pouco','Talvez','Gostaria','Gostaria muito'];
export const skillLabels = ['Ainda não explorei','Preciso de apoio','Estou desenvolvendo','Tenho facilidade','Tenho muita facilidade'];
export const careers: {name:string; fields:string; primary:Dimension; secondary:Dimension; experiment:string; attention:string}[] = [
 {name:'Tecnologia e desenvolvimento',fields:'Ciência da Computação · Sistemas de Informação · Análise e Desenvolvimento de Sistemas',primary:'I',secondary:'R',experiment:'Crie uma página ou um pequeno programa para resolver um problema real.',attention:'Investigue lógica, matemática, acessibilidade e uso responsável de IA no currículo.'},
 {name:'Saúde e cuidado',fields:'Enfermagem · Medicina · Fisioterapia · Terapia Ocupacional',primary:'S',secondary:'I',experiment:'Converse com estudantes e profissionais sobre rotina, estágios e cuidado com pessoas.',attention:'Compare atividades práticas, carga horária e exigências profissionais de cada curso.'},
 {name:'Design e comunicação',fields:'Design · Publicidade e Propaganda · Jornalismo',primary:'A',secondary:'E',experiment:'Produza uma campanha ou um protótipo e peça feedback de quem usaria.',attention:'Observe pesquisa, repertório cultural, portfólio, ética e ferramentas digitais.'},
 {name:'Educação e desenvolvimento humano',fields:'Pedagogia · Licenciaturas · Psicologia',primary:'S',secondary:'A',experiment:'Prepare uma pequena atividade educativa e observe como cada pessoa aprende.',attention:'Psicologia e licenciaturas têm formações e campos de atuação distintos; compare as grades.'},
 {name:'Engenharias e soluções práticas',fields:'Engenharia Civil · Engenharia Mecânica · Engenharia Elétrica',primary:'R',secondary:'I',experiment:'Desenhe e teste um protótipo simples e seguro para um desafio do cotidiano.',attention:'Conheça laboratórios, fundamentos de matemática e projetos de extensão.'},
 {name:'Negócios e gestão',fields:'Administração · Gestão Comercial · Processos Gerenciais',primary:'E',secondary:'C',experiment:'Planeje uma pequena iniciativa: público, custos, responsabilidades e proposta de valor.',attention:'Compare bacharelados e cursos superiores de tecnologia; confira a matriz e o reconhecimento.'},
 {name:'Dados e organização financeira',fields:'Estatística · Ciências Contábeis · Economia',primary:'C',secondary:'I',experiment:'Analise dados públicos e escreva o que eles permitem — e não permitem — concluir.',attention:'Compare o peso de matemática, legislação, programação e análise em cada formação.'},
 {name:'Ambiente e território',fields:'Agronomia · Engenharia Ambiental · Gestão Ambiental · Geografia',primary:'R',secondary:'S',experiment:'Mapeie um problema ambiental local e investigue suas causas com fontes confiáveis.',attention:'Explore trabalho de campo, políticas ambientais e tecnologias de monitoramento.'},
 {name:'Direito e atuação pública',fields:'Direito · Gestão Pública · Ciências Sociais',primary:'E',secondary:'S',experiment:'Compare pontos de vista sobre uma política pública e construa um argumento fundamentado.',attention:'Investigue leitura, escrita, instituições e requisitos específicos de cada atuação.'},
 {name:'Ciências e pesquisa',fields:'Química · Física · Ciências Biológicas · Biomedicina',primary:'I',secondary:'C',experiment:'Escolha uma pergunta científica, compare artigos introdutórios e apresente as evidências.',attention:'Diferencie bacharelado e licenciatura e conheça a iniciação científica.'},
 {name:'Artes e produção cultural',fields:'Artes Visuais · Cinema e Audiovisual · Música · Produção Cultural',primary:'A',secondary:'S',experiment:'Crie uma peça autoral e documente as escolhas do processo criativo.',attention:'Verifique portfólio, eventuais provas de habilidades e diferentes modos de atuação.'},
 {name:'Logística e operações',fields:'Logística · Engenharia de Produção · Gestão da Qualidade',primary:'C',secondary:'R',experiment:'Mapeie um processo cotidiano e proponha uma melhoria que possa ser medida.',attention:'Explore planejamento, indicadores, sustentabilidade e automação de processos.'},
];
export function evaluate(answers:Record<string,number>) {
 if(questions.some(q=>!Number.isInteger(answers[q.id]) || answers[q.id]<0 || answers[q.id]>((q.options?.length ?? 5)-1))) throw new Error('Responda a todas as perguntas para gerar seu mapa.');
 const scores = Object.fromEntries(dimensions.map(d=>[d.key,Math.round(questions.filter(q=>q.kind==='interest'&&q.dimension===d.key).reduce((sum,q)=>sum+answers[q.id],0)/12*100)])) as Record<Dimension,number>;
 const ranked = careers.map(c=>({...c,score:Math.round(scores[c.primary]*.6+scores[c.secondary]*.4)})).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name,'pt-BR'));
 return {scores,ranked};
}
export function contextAnswer(id:string, answers:Record<string,number>) {return questions.find(q=>q.id===id)?.options?.[answers[id]] ?? '';}
export function nextSteps(answers:Record<string,number>) {
 const study = ['Reserve um horário semanal para conhecer cursos e experimentar atividades.','Compare turnos, deslocamento, estágios obrigatórios e apoios à permanência antes de conciliar trabalho e estudo.','Confira horários reais, avaliações presenciais e práticas obrigatórias, inclusive em cursos a distância.','Monte uma semana possível com tempo de estudo, descanso, transporte e outras responsabilidades.'][answers.study];
 const access = ['Consulte o Sisu e os processos próprios de instituições públicas; confira os editais atuais.','Pesquise bolsas, Prouni e assistência estudantil. Critérios e benefícios variam; consulte as fontes oficiais.','Mapeie instituições e polos acessíveis e confira a modalidade e o reconhecimento no e-MEC.','Compare curso técnico, tecnólogo, bacharelado e licenciatura: são percursos diferentes, com objetivos próprios.','Compare opções de ingresso e apoios à permanência nas instituições que interessam a você.'][answers.access];
 return [study,access,answers.certainty===3?'Converse com alguém de confiança ou um orientador. Você não precisa resolver toda a sua vida agora.':'Converse com dois estudantes ou profissionais e registre o que combina — e o que não combina — com você.'];
}
