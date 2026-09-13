'use client';
import { Localize } from '@/components/language';
import { ExternalLink } from 'lucide-react';

export function SiteCredits() {
  return (<Localize>
    <footer className="site-credits page-width" aria-labelledby="credits-title">
      <div className="credits-intro">
        <span className="eyebrow">CRÉDITOS E CONEXÕES</span>
        <h2 id="credits-title">Um projeto de<br/><span>Sidiney Rodrigues.</span></h2>
        <p>Idealização, direção e decisões editoriais do Horizonte. Um convite para explorar interesses e construir possibilidades de formação.</p>
        <nav className="credits-links" aria-label="Perfis e projetos de Sidiney Rodrigues">
          <a href="https://www.linkedin.com/in/sidineyrodrigues/?locale=pt" target="_blank" rel="noopener noreferrer"><ExternalLink size={17} aria-hidden="true"/> LinkedIn <span className="sr-only">(abre em nova aba)</span></a>
          <a href="https://github.com/sidineyr" target="_blank" rel="noopener noreferrer"><ExternalLink size={17} aria-hidden="true"/> GitHub <span className="sr-only">(abre em nova aba)</span></a>
          <a href="https://sidineyr.github.io/Chemical/" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden="true"/> Projeto Chemical <span className="sr-only">(abre em nova aba)</span></a>
          <a href="http://lattes.cnpq.br/6984746568461949" target="_blank" rel="noopener noreferrer"><ExternalLink size={17} aria-hidden="true"/> Currículo Lattes <span className="sr-only">(abre em nova aba)</span></a>
        </nav>
      </div>
      <div className="credits-details">
        <div><h3>Desenvolvimento e identidade visual</h3><p>Programação, interface, testes e documentação com apoio do OpenAI Codex, sob direção humana. Imagem de apresentação criada com geração de imagem da OpenAI.</p></div>
        <div><h3>Conhecimento e referências</h3><p>Exploração educativa inspirada nas áreas de interesse RIASEC, com referência conceitual ao O*NET. Não é um teste psicológico validado nem possui vínculo institucional com O*NET ou MEC.</p></div>
        <a className="credits-source" href="https://github.com/sidineyr/horizonte" target="_blank" rel="noopener noreferrer">Código e documentação do Horizonte <ExternalLink size={14} aria-hidden="true"/><span className="sr-only">(abre em nova aba)</span></a>
      </div>
    
      <p style={{ width: '100%', marginTop: '0.65rem', fontSize: '0.75rem', lineHeight: 1.5, opacity: 0.72 }}>
        Este projeto nasceu do desejo de ensinar e cuidar. Se ele tocou você,{' '}
        <a href="https://pequenoprincipe.org.br/doadores/apoie-o-pequeno-principe/" target="_blank" rel="noopener noreferrer">
          considere doar diretamente ao Hospital Pequeno Príncipe
        </a>. Iniciativa voluntária, independente e sem intermediação financeira.
      </p>
</footer>
  </Localize>);
}
