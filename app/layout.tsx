import type { Metadata } from 'next';
import './globals.css';
const title = 'Horizonte — Eu quero ser…';
const description = 'Explore seus interesses, suas possibilidades de formação e seus próximos passos depois do ENEM.';
const image = 'https://horizonte-vocacional.blubier.chatgpt.site/og.png';
export const metadata: Metadata = {
 title, description,
 metadataBase: new URL('https://horizonte-vocacional.blubier.chatgpt.site'),
 icons: {icon:'/favicon.svg'},
 openGraph: { title, description, locale: 'pt_BR', type: 'website', images: [{url:image,alt:'Horizonte — Eu quero ser…'}] },
 twitter: { card: 'summary_large_image', title, description, images: [image] },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
