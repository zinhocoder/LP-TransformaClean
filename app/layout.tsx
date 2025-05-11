import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transforma Clean – Renovando Seu Estofado, Transformando Seu Lar',
  description: 'Especialistas em limpeza profunda de estofados, carpetes, colchões e interiores automotivos. Na Transforma Clean, unimos tecnologia, produtos ecológicos e profissionais qualificados para devolver a beleza, o conforto e a higiene dos seus ambientes. Atendimento rápido, eficaz e com garantia de satisfação.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
