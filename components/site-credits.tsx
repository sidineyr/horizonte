import { ExternalLink } from 'lucide-react';

export function SiteCredits() {
  return (
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
    </footer>
  );
}
