"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Sparkles,
  Shield,
  Heart,
  Award,
  Star,
  Car,
  SailboatIcon as Boat,
  Brush,
  HomeIcon,
} from "lucide-react"
import ServiceCarousel from "@/components/service-carousel"
import ServicesGrid from "@/components/services-grid"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#f8f7f4] to-[#eae8e0]">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 z-0"></div>
        {/* Blue accent effect */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#7ab8d6]/20 to-transparent"></div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <div className="flex flex-col text-left">
              <div className="mb-6">
                <Image src="/logo.png" alt="Transforma Clean" width={250} height={80} className="h-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2d2d2d] max-w-4xl mb-6">
                Transforme Seu Lar, <span className="text-[#5fb5a0]">Transforme Sua Vida</span>
              </h1>
              <p className="text-lg md:text-xl text-[#4a4a4a] max-w-3xl mb-8">
                Na Transforma Clean, não apenas limpamos, mas transformamos cada ambiente em um refúgio de saúde,
                conforto e bem-estar para você e sua família.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button
                  className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-14 px-8 text-lg font-medium w-full"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Transforma%20Clean.",
                      "_blank",
                    )
                  }
                >
                  Fale Conosco no WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-12">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#5fb5a0]/20 flex items-center justify-center border-2 border-white">
                    <span className="text-[#5fb5a0] font-bold text-xs">JM</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#5fb5a0]/20 flex items-center justify-center border-2 border-white">
                    <span className="text-[#5fb5a0] font-bold text-xs">RL</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#5fb5a0]/20 flex items-center justify-center border-2 border-white">
                    <span className="text-[#5fb5a0] font-bold text-xs">AC</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#5fb5a0]/20 flex items-center justify-center border-2 border-white">
                    <span className="text-[#5fb5a0] font-bold text-xs">+</span>
                  </div>
                </div>
                <div className="text-sm text-[#4a4a4a]">
                  <span className="font-bold">+500 clientes</span> satisfeitos este mês
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image - visible only on desktop, positioned at the bottom right */}
        <div className="hidden md:block absolute right-0 bottom-0 w-1/2 h-[600px]">
          <Image
            src="/hero-cleaner.png"
            alt="Profissional Transforma Clean"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </section>

      {/* Serviços Carousel Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#7ab8d6]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#7ab8d6]/15 to-transparent rounded-tl-full"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#5fb5a0]/10 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-[#5fb5a0]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2d2d2d] mb-4">
              Transformações Impressionantes
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-3xl">
              Confira o antes e depois dos nossos serviços de higienização profissional que transformam completamente
              seus ambientes.
            </p>
          </div>

          <ServiceCarousel />

          <div className="mt-12 flex justify-center">
            <Button
              className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-12 px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Transforma%20Clean.",
                  "_blank",
                )
              }
            >
              Solicite um Orçamento via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Todos os Serviços Section */}
      <section className="py-20 bg-gradient-to-r from-[#f8f7f4] to-white relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-[#7ab8d6]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[#7ab8d6]/25 to-transparent rounded-tr-full"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#5fb5a0]/10 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-[#5fb5a0]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2d2d2d] mb-4">
              Nossos Serviços Completos
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-3xl">
              Oferecemos soluções personalizadas para todos os tipos de ambientes e materiais, garantindo resultados
              excepcionais.
            </p>
          </div>

          <ServicesGrid />

          <div className="mt-12 flex justify-center">
            <Button
              className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-12 px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20completos%20da%20Transforma%20Clean.",
                  "_blank",
                )
              }
            >
              Conheça Todos os Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#7ab8d6]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-[#7ab8d6]/15 to-transparent rounded-tl-full"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#5fb5a0]/10 rounded-full mb-4">
              <Award className="h-6 w-6 text-[#5fb5a0]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2d2d2d] mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-[#4a4a4a] max-w-3xl">
              Conheça os serviços exclusivos que nos destacam no mercado e garantem soluções completas para todas as
              suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8f7f4] rounded-2xl p-8 shadow-lg overflow-hidden flex flex-col">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#5fb5a0]/10 flex items-center justify-center flex-shrink-0">
                  <Car className="h-8 w-8 text-[#5fb5a0]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-3">Higienização Automotiva</h3>
                  <p className="text-[#4a4a4a] mb-4 min-h-[80px]">
                    Serviço especializado para bancos, estofados e carpetes de veículos, removendo odores, manchas e
                    alérgenos para uma experiência de condução mais saudável e confortável.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button
                  className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-10 px-6 w-full sm:w-1/2 md:w-auto mx-auto md:mx-0"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20higienização%20automotiva.",
                      "_blank",
                    )
                  }
                >
                  Saiba Mais
                </Button>
              </div>
            </div>

            <div className="bg-[#f8f7f4] rounded-2xl p-8 shadow-lg overflow-hidden flex flex-col">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#5fb5a0]/10 flex items-center justify-center flex-shrink-0">
                  <Boat className="h-8 w-8 text-[#5fb5a0]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-3">Higienização de Embarcações e Aviação</h3>
                  <p className="text-[#4a4a4a] mb-4 min-h-[80px]">
                    Limpeza especializada para interiores de barcos, iates e aeronaves, com técnicas e produtos
                    específicos para ambientes expostos a condições extremas.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button
                  className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-10 px-6 w-full sm:w-1/2 md:w-auto mx-auto md:mx-0"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20higienização%20de%20embarcações%20e%20aviação.",
                      "_blank",
                    )
                  }
                >
                  Saiba Mais
                </Button>
              </div>
            </div>

            <div className="bg-[#f8f7f4] rounded-2xl p-8 shadow-lg overflow-hidden flex flex-col">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#5fb5a0]/10 flex items-center justify-center flex-shrink-0">
                  <Brush className="h-8 w-8 text-[#5fb5a0]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-3">Limpeza e Hidratação de Couro</h3>
                  <p className="text-[#4a4a4a] mb-4 min-h-[80px]">
                    Tratamento de alta qualidade para estofados e móveis de couro, com produtos que removem sujeiras,
                    hidratam e prolongam a vida útil do material.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button
                  className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-10 px-6 w-full sm:w-1/2 md:w-auto mx-auto md:mx-0"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20limpeza%20e%20hidratação%20de%20couro.",
                      "_blank",
                    )
                  }
                >
                  Saiba Mais
                </Button>
              </div>
            </div>

            <div className="bg-[#f8f7f4] rounded-2xl p-8 shadow-lg overflow-hidden flex flex-col">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#5fb5a0]/10 flex items-center justify-center flex-shrink-0">
                  <HomeIcon className="h-8 w-8 text-[#5fb5a0]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-3">Serviço de Diaristas</h3>
                  <p className="text-[#4a4a4a] mb-4 min-h-[80px]">
                    Equipe altamente treinada para limpeza completa de residências e ambientes comerciais, com foco na
                    qualidade, segurança e atenção aos detalhes.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button
                  className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-10 px-6 w-full sm:w-1/2 md:w-auto mx-auto md:mx-0"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20diaristas.",
                      "_blank",
                    )
                  }
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-gradient-to-r from-white to-[#f8f7f4] relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#7ab8d6]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#7ab8d6]/15 to-transparent rounded-tr-full"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#5fb5a0]/10 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-[#5fb5a0]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2d2d2d] mb-4">
              Por Que Escolher a Transforma Clean?
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-3xl">
              Não oferecemos apenas um serviço de limpeza, mas uma transformação completa que impacta diretamente na
              saúde e bem-estar da sua família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center p-3 bg-[#5fb5a0]/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#5fb5a0]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-3">Saúde em Primeiro Lugar</h3>
              <p className="text-[#4a4a4a]">
                Eliminamos ácaros, bactérias e alérgenos que causam problemas respiratórios e alergias, protegendo a
                saúde da sua família.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center p-3 bg-[#5fb5a0]/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-[#5fb5a0]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-3">Excelência Garantida</h3>
              <p className="text-[#4a4a4a]">
                Se você não ficar 100% satisfeito com o resultado, devolvemos seu dinheiro. Nosso compromisso é com a
                sua satisfação total.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center p-3 bg-[#5fb5a0]/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-[#5fb5a0]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-3">Cuidado Personalizado</h3>
              <p className="text-[#4a4a4a]">
                Cada ambiente e móvel recebe um tratamento específico, com técnicas e produtos selecionados para as
                necessidades únicas do seu lar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section className="py-20 bg-gradient-to-b from-[#f8f7f4] to-white relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#7ab8d6]/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#7ab8d6]/15 to-transparent"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#5fb5a0]/10 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-[#5fb5a0]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2d2d2d] mb-4">Transformações Reais</h2>
            <p className="text-lg text-[#4a4a4a] max-w-3xl">
              Veja o poder da nossa limpeza profissional e como podemos transformar completamente seus estofados e
              colchões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative h-[250px]">
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                      Antes
                    </div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes.jpg-GdH7xkO7i1Bc5y3DQkFqtuD8wdt4rX.jpeg"
                      alt="Colchão antes da limpeza"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[250px]">
                    <div className="absolute top-4 left-4 bg-[#5fb5a0] text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                      Depois
                    </div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois.jpg-dF01UOUpLyQdqsYikjG7spoAsAEFNk.jpeg"
                      alt="Colchão depois da limpeza"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">Higienização de Colchão</h3>
                  <p className="text-[#4a4a4a]">
                    Remoção de manchas, eliminação de ácaros e purificação completa para noites de sono mais saudáveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#2d2d2d]">O Poder da Transformação 💪</h3>
              <p className="text-[#4a4a4a] text-lg">
                Quando fundamos a Transforma Clean, não imaginávamos que estaríamos criando algo muito maior do que uma
                simples empresa de higienização. Nossa missão é devolver o conforto, a saúde e o orgulho do seu lar.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#5fb5a0]/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-[#5fb5a0]" />
                  </div>
                  <p className="text-[#4a4a4a]">
                    <span className="font-semibold">Tecnologia avançada</span> que remove até as manchas mais difíceis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#5fb5a0]/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-[#5fb5a0]" />
                  </div>
                  <p className="text-[#4a4a4a]">
                    <span className="font-semibold">Produtos especializados</span> que não agridem os tecidos ou o meio
                    ambiente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#5fb5a0]/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-[#5fb5a0]" />
                  </div>
                  <p className="text-[#4a4a4a]">
                    <span className="font-semibold">Profissionais treinados</span> para oferecer o melhor serviço do
                    mercado
                  </p>
                </div>
              </div>

              <Button
                className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-12 px-8 mt-4"
                onClick={() =>
                  window.open(
                    "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20ver%20mais%20transformações%20da%20Transforma%20Clean.",
                    "_blank",
                  )
                }
              >
                Ver Mais Transformações
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 bg-[#2d2d2d] text-white relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7ab8d6]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#7ab8d6]/20 to-transparent rounded-tr-full"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full">
                <Sparkles className="h-6 w-6 text-[#5fb5a0]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Manifesto Ideológico <span className="text-[#5fb5a0]">Transforma Clean</span>
              </h2>
              <p className="text-lg text-white/80">
                Acreditamos que a limpeza vai muito além da estética. Cada sofá, cada colchão e cada ambiente são
                símbolos de saúde, conforto e bem-estar.
              </p>

              <div className="space-y-6 mt-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="inline-flex items-center justify-center p-1 bg-[#5fb5a0] rounded-full mr-2">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    Combate às Mentiras do Mercado
                  </h3>
                  <p className="text-white/80">
                    Vivemos em um mercado saturado de promessas vazias. Não fazemos promessas vazias, fazemos mudanças
                    reais com resultados visíveis.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="inline-flex items-center justify-center p-1 bg-[#5fb5a0] rounded-full mr-2">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    Para Quem Lutamos
                  </h3>
                  <p className="text-white/80">
                    Para você que tem um lar com alto valor emocional e entende que o cuidado com a casa é um reflexo da
                    dedicação à sua família.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#3a3a3a] rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#5fb5a0]">Nosso Código de Guerra ⚔️</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#5fb5a0]/20 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#5fb5a0]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">A Saúde é a Prioridade</h4>
                    <p className="text-white/70 text-sm">
                      Cada ação de limpeza tem um objetivo claro: proporcionar um ambiente livre de germes, ácaros e
                      impurezas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#5fb5a0]/20 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-[#5fb5a0]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">A Transparência é o Pilar</h4>
                    <p className="text-white/70 text-sm">
                      Desde o primeiro orçamento até a execução do serviço, cada processo é claro e sem surpresas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#5fb5a0]/20 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-[#5fb5a0]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">O Conforto é Inegociável</h4>
                    <p className="text-white/70 text-sm">
                      Cada serviço é uma oportunidade de proporcionar conforto e qualidade incomparáveis aos nossos
                      clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full h-12 w-full"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a missão%20da%20Transforma%20Clean.",
                      "_blank",
                    )
                  }
                >
                  Conheça Nossa Missão
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#7ab8d6]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-gradient-to-tl from-[#7ab8d6]/15 to-transparent"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#5fb5a0]/10 rounded-full mb-4">
              <Star className="h-6 w-6 text-[#5fb5a0]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2d2d2d] mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-3xl">
              Veja o que nossos clientes têm a dizer sobre a experiência Transforma Clean
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f7f4] rounded-2xl p-8 shadow-lg">
              <div className="flex space-x-1 mb-4">
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
              </div>
              <p className="text-[#4a4a4a] italic mb-6">
                "Nunca mais olhei para meu sofá da mesma forma depois da limpeza feita por eles. Uma verdadeira
                transformação na qualidade de vida do meu lar!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5fb5a0]/20 flex items-center justify-center">
                  <span className="text-[#5fb5a0] font-bold">AC</span>
                </div>
                <div>
                  <p className="font-medium text-[#2d2d2d]">Ana Claudia</p>
                  <p className="text-sm text-[#4a4a4a]">São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f7f4] rounded-2xl p-8 shadow-lg">
              <div className="flex space-x-1 mb-4">
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
              </div>
              <p className="text-[#4a4a4a] italic mb-6">
                "O serviço foi além das minhas expectativas! Eu sabia que precisava de um ambiente mais saudável para
                minha família, mas nunca imaginei que o resultado fosse tão perfeito."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5fb5a0]/20 flex items-center justify-center">
                  <span className="text-[#5fb5a0] font-bold">MR</span>
                </div>
                <div>
                  <p className="font-medium text-[#2d2d2d]">Mariana Ribeiro</p>
                  <p className="text-sm text-[#4a4a4a]">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f7f4] rounded-2xl p-8 shadow-lg">
              <div className="flex space-x-1 mb-4">
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
                <Star className="h-5 w-5 fill-[#5fb5a0] text-[#5fb5a0]" />
              </div>
              <p className="text-[#4a4a4a] italic mb-6">
                "Meu colchão tinha manchas que eu achava impossíveis de remover. A equipe da Transforma Clean não só
                removeu as manchas como deixou o colchão como novo. Incrível!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5fb5a0]/20 flex items-center justify-center">
                  <span className="text-[#5fb5a0] font-bold">PL</span>
                </div>
                <div>
                  <p className="font-medium text-[#2d2d2d]">Pedro Lima</p>
                  <p className="text-sm text-[#4a4a4a]">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#5fb5a0] to-[#4a9a87] text-white relative overflow-hidden">
        {/* Blue accent effect */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#7ab8d6]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#7ab8d6]/30 to-transparent"></div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Transforme Seu Lar Hoje Mesmo</h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa promessa é simples, mas poderosa: se você não gostar do resultado, devolvemos seu dinheiro. Não
              aceitamos menos do que a excelência, porque sabemos que você merece o melhor.
            </p>

            <div className="space-y-4 mb-8 text-left w-full max-w-xl">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-1 rounded-full">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-white/90">Orçamento gratuito e sem compromisso</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-1 rounded-full">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-white/90">Atendimento em até 48 horas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-1 rounded-full">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-white/90">Garantia de satisfação ou seu dinheiro de volta</p>
              </div>
            </div>

            <Button
              className="bg-white text-[#5fb5a0] hover:bg-white/90 rounded-full h-14 px-10 text-lg font-medium"
              onClick={() =>
                window.open(
                  "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20serviços%20da%20Transforma%20Clean.",
                  "_blank",
                )
              }
            >
              Fale Conosco no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#2d2d2d] text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Transforma Clean. Todos os direitos reservados.</p>
            <p className="mt-2">#TransformeSeuLar – A revolução começa com a sua escolha.</p>
            <p className="mt-4">
              Desenvolvido por{" "}
              <a
                href="https://www.devpro.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5fb5a0] font-bold hover:underline transition-all"
              >
                DevPro
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg"
          onClick={() =>
            window.open(
              "https://wa.me/5548991501393?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Transforma%20Clean.",
              "_blank",
            )
          }
          aria-label="Contato via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
