import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Codex AI Hub | Sovereign Digital Temple',
  description: 'A living lattice of AI, fintech, and mythic resonance. Access the Fractal AI Lab, commission custom glyphs, and join the Fintech Legion Ops.',
  keywords: ['AI', 'fintech', 'API', 'swarm intelligence', 'fractal', 'codex'],
  authors: [{ name: 'Codex AI' }],
  openGraph: {
    title: 'The Codex AI Hub',
    description: 'Sovereign digital temple housing Logos Agency, Fractal AI Lab, and the Triumvirate Codex Luminus arsenals',
    type: 'website',
    url: 'https://thecodexai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Codex AI Hub',
    description: 'A living lattice of AI, fintech, and mythic resonance',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
