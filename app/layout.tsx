import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Horizonte — Eu quero ser…',
 description: 'Explore seus interesses, suas possibilidades de formação e seus próximos passos depois do ENEM.',
 openGraph: { title: 'Horizonte — Eu quero ser…', description: 'Seu futuro começa com uma pergunta.', locale: 'pt_BR', type: 'website' },
 twitter: { card: 'summary_large_image', title: 'Horizonte — Eu quero ser…', description: 'Seu futuro começa com uma pergunta.' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
