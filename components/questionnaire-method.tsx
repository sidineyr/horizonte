import { ExternalLink } from 'lucide-react';

export function QuestionnaireMethod() {
  return (
    <section id="como-esse-teste-foi-elaborado" className="questionnaire-method page-width" aria-labelledby="method-title">
      <span className="eyebrow">TRANSPARÊNCIA E REFERÊNCIAS</span>
      <h2 id="method-title">Como esse teste foi elaborado</h2>
      <p className="method-intro">Um roteiro autoral para explorar possibilidades depois do ENEM. Aqui você pode conhecer as escolhas por trás das perguntas e os limites do que elas mostram.</p>
      <details className="method-disclosure">
        <summary>Entender as perguntas, a pontuação e a bibliografia</summary>
        <div className="method-content">
          <div className="method-notice"><strong>Exploração educativa, não diagnóstico.</strong><p>Apesar do nome “teste”, o Horizonte não é um teste psicológico validado. Não mede aptidão nem prevê sucesso, salário, empregabilidade ou aprovação no ENEM. Não substitui orientação profissional individual.</p></div>
          <h3>1. Como as perguntas foram construídas</h3>
          <p>O projeto foi idealizado e dirigido por Sidiney Rodrigues, com elaboração assistida pelo OpenAI Codex. As atividades foram redigidas para este site, em linguagem voltada a estudantes do Ensino Médio. Não foram copiadas de um inventário psicológico.</p>
          <p>A organização dos interesses usa como referência conceitual as seis áreas RIASEC descritas pelo O*NET: realista, investigativa, artística, social, empreendedora e convencional. Na interface, usamos os nomes prático, investigativo, criativo, social, empreendedor e organizador.</p>
          <dl className="method-blocks">
            <div><dt>18 perguntas de interesses</dt><dd>Três atividades por área. Você informa quanto gostaria de realizá-las, mesmo sem experiência anterior.</dd></div>
            <div><dt>6 perguntas de habilidades</dt><dd>Registram como você percebe suas habilidades hoje. Elas não reduzem o índice nem eliminam caminhos.</dd></div>
            <div><dt>5 perguntas de contexto</dt><dd>Mostram suas preferências e condições de estudo. Rotina, apoio e sentimento sobre a escolha orientam os próximos passos.</dd></div>
          </dl>
          <h3>2. Como suas respostas viram um mapa</h3>
          <p>Cada resposta de interesse recebe de 0 a 4 pontos. Somamos os três itens da área, dividimos por 12 e multiplicamos por 100, arredondando. Por exemplo: 4 + 3 + 2 = 9 pontos; 9 ÷ 12 × 100 = 75.</p>
          <p>Cada um dos 12 grupos de caminhos combina 60% do índice de um interesse principal com 40% de um secundário. Os grupos e os pesos são escolhas editoriais do Horizonte, não regras extraídas dos livros abaixo. Empates são ordenados alfabeticamente, sem indicar preferência.</p>
          <p>O texto “Eu quero ser…” reaparece para reflexão, mas não é interpretado por IA nem altera o ranking. Habilidades, área escolar, prioridades e condições financeiras também não alteram os índices. As sugestões não representam todas as profissões possíveis.</p>
          <h3>3. O que foi verificado — e o que ainda não foi</h3>
          <p>Foram feitas verificações de programação, cálculos e navegação. Isso não equivale a validação científica. Não foram realizados estudos psicométricos com estudantes para estabelecer validade, precisão, normas ou poder de previsão. Uma pontuação de 75 não significa 75% de chance de sucesso.</p>
          <h3>4. Fonte consultada na criação</h3>
          <p><strong>NATIONAL CENTER FOR O*NET DEVELOPMENT.</strong> <cite>O*NET Interest Profiler.</cite> O*NET Resource Center. A página institucional foi consultada para a organização conceitual das seis áreas de interesse. O Horizonte não é o O*NET Interest Profiler e não herda sua validação.</p>
          <a className="method-reference" href="https://www.onetcenter.org/IP.html" target="_blank" rel="noopener noreferrer">Consultar a fonte institucional <ExternalLink size={14} aria-hidden="true"/><span className="sr-only">(abre em nova aba)</span></a>
          <h3>5. Livros recomendados para aprofundamento</h3>
          <p>As obras abaixo são sugestões bibliográficas relacionadas ao tema. Seus dados bibliográficos foram verificados para esta seção; não foram consultadas integralmente na criação das perguntas. Citá-las não transforma este roteiro em um instrumento validado.</p>
          <ol className="method-books">
            <li><p><strong>HOLLAND, John L.</strong> <cite>Making Vocational Choices: A Theory of Vocational Personalities and Work Environments.</cite> 3. ed. Odessa, FL: Psychological Assessment Resources, 1997.</p><p className="book-purpose">Para aprofundar a teoria dos interesses e dos ambientes profissionais associada ao modelo RIASEC. Referência teórica; não é a fonte dos itens ou dos pesos do Horizonte.</p><a className="method-reference" href="https://ndlsearch.ndl.go.jp/books/R100000136-I1971993809750310729" target="_blank" rel="noopener noreferrer">Ver registro bibliográfico <ExternalLink size={14} aria-hidden="true"/><span className="sr-only">(abre em nova aba)</span></a></li>
            <li><p><strong>SAVICKAS, Mark L.</strong> <cite>Career Counseling.</cite> 2. ed. Washington, DC: American Psychological Association, 2019. DOI: 10.1037/0000105-000.</p><p className="book-purpose">Para ampliar a reflexão sobre a construção da trajetória profissional, além de uma correspondência entre interesses e ocupações. Leitura complementar; o site não aplica o protocolo de aconselhamento do autor.</p><a className="method-reference" href="https://doi.org/10.1037/0000105-000" target="_blank" rel="noopener noreferrer">Ver a publicação <ExternalLink size={14} aria-hidden="true"/><span className="sr-only">(abre em nova aba)</span></a><a className="method-reference" href="https://www.apa.org/pubs/books/Career-Counseling-2e-Chapter-1-Sample.pdf" target="_blank" rel="noopener noreferrer">Amostra oficial da editora (PDF, em inglês) <ExternalLink size={14} aria-hidden="true"/><span className="sr-only">(abre em nova aba)</span></a></li>
          </ol>
          <p className="note">Referências verificadas em 31 de agosto de 2026. Os links permitem consultar registros e materiais oficiais; não garantem acesso gratuito aos livros completos. Não há vínculo institucional ou endosso dos autores ao Horizonte.</p>
          <p className="note">Suas respostas ficam apenas na memória desta página, sem cadastro próprio ou envio a um banco de respostas. Atualizar ou fechar a página apaga o progresso. O serviço de hospedagem pode registrar dados técnicos de acesso.</p>
        </div>
      </details>
    </section>
  );
}
