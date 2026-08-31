'use client';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const examples = ['professor(a)', 'desenvolvedor(a) de software', 'enfermeiro(a)', 'designer', 'engenheiro(a) ambiental', 'técnico(a) em automação'];
const defaultHint = 'Uma profissão, um sonho ou ainda não sei';

export function DreamField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
 const [suggestion, setSuggestion] = useState<string | null>(null);
 const [paused, setPaused] = useState(false);
 useEffect(() => {
  setSuggestion(null);
  if (value.length > 0 || paused) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer: ReturnType<typeof setTimeout>;
  let word = 0;
  let length = 0;
  let deleting = false;
  function tick() {
   if (motion.matches) { setSuggestion(examples[0]); return; }
   const current = examples[word];
   length += deleting ? -1 : 1;
   setSuggestion(current.slice(0, length));
   let delay = deleting ? 45 : 105;
   if (length === current.length) { deleting = true; delay = 1800; }
   else if (length === 0) { deleting = false; word = (word + 1) % examples.length; delay = 350; }
   timer = setTimeout(tick, delay);
  }
  function preferenceChanged() {
   clearTimeout(timer);
   setSuggestion(motion.matches ? examples[0] : null);
   if (!motion.matches) { word = 0; length = 0; deleting = false; timer = setTimeout(tick, 10000); }
  }
  timer = setTimeout(tick, 10000);
  motion.addEventListener('change', preferenceChanged);
  return () => { clearTimeout(timer); motion.removeEventListener('change', preferenceChanged); };
 }, [value, paused]);
 return <>
  <div className="dream-field">
   <Input id="dream" aria-describedby="dream-hint entry-privacy" value={value} onChange={e => onChange(e.target.value)} placeholder={suggestion ?? defaultHint} maxLength={120} required autoComplete="off"/>
   <Button type="submit" aria-label="Começar minha descoberta" disabled={!value.trim()}><ArrowRight/></Button>
  </div>
  <div className="dream-help">
   <p id="dream-hint">Os exemplos são apenas inspiração. Escreva sua escolha ou “ainda não sei”.</p>
   <Button type="button" variant="ghost" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Ativar sugestões' : 'Pausar sugestões'}</Button>
  </div>
 </>;
}