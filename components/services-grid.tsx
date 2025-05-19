"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"

const serviceCategories = [
  {
    id: "estofados",
    name: "Estofados",
    icon: "✨",
    color: "#5fb5a0",
  },
  {
    id: "colchoes",
    name: "Colchões",
    icon: "🛏️",
    color: "#7ab8d6",
  },
  {
    id: "veiculos",
    name: "Veículos",
    icon: "🚗",
    color: "#f59e0b",
  },
  {
    id: "especiais",
    name: "Especiais",
    icon: "🌟",
    color: "#8b5cf6",
  },
]

const services = [
  {
    id: 1,
    name: "Higienização de sofá",
    description: "Limpeza profunda que remove sujeira, manchas e alérgenos de todos os tipos de estofados.",
    category: "estofados",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes4.jpg-oBbMTH2qlgdAVwfujHbKxVhTrxjgmg.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois4.jpg-W4k0byNFzQDOEJu0Y223oxvTd2jLt3.jpeg",
    featured: true,
    hasVideo: true,
  },
  {
    id: 2,
    name: "Limpeza de poltronas",
    description: "Higienização completa que devolve beleza e conforto às suas poltronas.",
    category: "estofados",
    beforeImage:
      "/poltronaantes.jpg",
    afterImage:
      "/poltronadepois.jpg",
  },
  {
    id: 3,
    name: "Limpeza de pufs",
    description: "Tratamento especializado para pufs, removendo manchas e revitalizando o tecido.",
    category: "estofados",
    beforeImage:
      "/pufs.png",
    afterImage:
      "/pufs.png",
  },
  {
    id: 4,
    name: "Limpeza de cadeiras",
    description: "Remoção de sujeira e revitalização de cadeiras de jantar, escritório e outros ambientes.",
    category: "estofados",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes5.jpg-OJAEU8JdeOMOgZmpUcSSai5jlDOYd1.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois5.jpg-ba5vMsF3cYGbvpOm2hDvd3Mx46MrNy.jpeg",
  },
  {
    id: 5,
    name: "Limpeza de colchão",
    description: "Eliminação de ácaros, manchas e odores para um sono mais saudável e tranquilo.",
    category: "colchoes",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes.jpg-GdH7xkO7i1Bc5y3DQkFqtuD8wdt4rX.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois.jpg-dF01UOUpLyQdqsYikjG7spoAsAEFNk.jpeg",
    featured: true,
  },
  {
    id: 6,
    name: "Higienização de travesseiro",
    description: "Eliminação de ácaros e alérgenos de travesseiros para um sono mais saudável.",
    category: "colchoes",
    beforeImage:
      "travesseiro.png",
    afterImage:
      "travesseiro.png",
  },
  {
    id: 7,
    name: "Limpeza de cabeceiras",
    description: "Limpeza profunda de cabeceiras de cama, removendo poeira e ácaros acumulados.",
    category: "colchoes",
    beforeImage:
      "/cabeceira.png",
    afterImage:
      "/cabeceira.png",
  },
  {
    id: 8,
    name: "Higienização automotiva",
    description: "Limpeza especializada para bancos e estofados de veículos, eliminando odores e manchas.",
    category: "veiculos",
    beforeImage:
      "/automativa.jpg",
    afterImage:
      "/automativa2.jpg",
    featured: true,
  },
  {
    id: 9,
    name: "Higienização de embarcações",
    description: "Tratamento específico para estofados de barcos e embarcações, resistente à umidade.",
    category: "veiculos",
    beforeImage:
      "/embaracacoes.png",
    afterImage:
      "/embaracacoes.png",
  },
  {
    id: 10,
    name: "Higienização de aviação",
    description: "Limpeza especializada para interiores de aeronaves, seguindo padrões de segurança.",
    category: "veiculos",
    beforeImage:
      "/aviacoes.png",
    afterImage:
      "/aviacoes.png",
  },
  {
    id: 11,
    name: "Limpeza e hidratação de couro",
    description: "Tratamento especial para estofados de couro, limpando e hidratando para maior durabilidade.",
    category: "especiais",
    beforeImage:
      "/couroautomativo.png",
    afterImage:
      "/couroautomativo.png",
    featured: true,
  },
  {
    id: 12,
    name: "Limpeza de carrinhos de bebê",
    description: "Higienização segura e eficaz para carrinhos de bebê, eliminando germes e sujeira.",
    category: "especiais",
    beforeImage:
      "/bebes.png",
    afterImage:
      "/bebes.png",
  },
  {
    id: 13,
    name: "Serviço de diaristas",
    description: "Limpeza completa de ambientes residenciais e comerciais por profissionais treinados.",
    category: "especiais",
    beforeImage:
      "/diarista1.png",
    afterImage:
      "/diarista2.png",
  },
  {
    id: 14,
    name: "Impermeabilização de estofados",
    description: "Proteção avançada que previne manchas e prolonga a vida útil dos seus estofados e tecidos.",
    category: "especiais",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes2.jpg-2Wivg3f4qkVR3ahBeYBPUnzZlWgDK8.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois2.jpg-zilPxgMe6rM4iGflCfLc6Qm8g6N6D5.jpeg",
    featured: true,
  },
]

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("estofados")
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isComparing, setIsComparing] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Garantir que apenas os serviços da categoria selecionada sejam exibidos
  const filteredServices = services.filter((service) => service.category === activeCategory)

  // Serviços em destaque - apenas da categoria atual
  const featuredServices = services.filter((service) => service.featured && service.category === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setSelectedService(null)
    setIsComparing(false)
  }

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId)
    setIsComparing(false)
  }

  const handleCompareClick = () => {
    setIsComparing(true)
  }

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newPosition = (x / rect.width) * 100

    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  const handleMouseDown = () => {
    if (!sliderRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = sliderRef.current!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const newPosition = (x / rect.width) * 100

      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const selectedServiceData = selectedService ? services.find((service) => service.id === selectedService) : null

  return (
    <div className="space-y-8">
      {/* Categorias de serviços */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category.id
                ? `bg-[${category.color}] text-white shadow-md`
                : "bg-white text-[#4a4a4a] hover:bg-gray-100"
            }`}
            style={{ backgroundColor: activeCategory === category.id ? category.color : "" }}
          >
            <span>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Todos os serviços da categoria atual */}
{!selectedService && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
    {filteredServices.map((service) => (
      <div
        key={service.id}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
        onClick={() => handleServiceClick(service.id)}
      >
        <div className="relative h-40 md:h-48">
          <Image
            src={service.afterImage || "/placeholder.svg"}
            alt={service.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="font-bold text-base md:text-lg">{service.name}</h3>
              <p className="text-xs md:text-sm text-white/80 line-clamp-1">{service.description}</p>
            </div>
          </div>
          {service.hasVideo && (
            <div className="absolute top-2 right-2 bg-[#5fb5a0] text-white px-2 py-1 rounded-full text-xs">
              Vídeo
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
)}

      {/* Visualização detalhada do serviço */}
      {selectedService && selectedServiceData && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#2d2d2d]">{selectedServiceData.name}</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="rounded-full text-xs md:text-sm"
                  onClick={() => setSelectedService(null)}
                >
                  Voltar
                </Button>
                <Button
                  className={`rounded-full text-xs md:text-sm ${isComparing ? "bg-[#4a4a4a]" : "bg-[#5fb5a0]"}`}
                  onClick={handleCompareClick}
                >
                  {isComparing ? "Visualizando" : "Comparar"}
                </Button>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#4a4a4a] mb-6">{selectedServiceData.description}</p>

            {/* Vídeo de demonstração para o serviço de higienização de sofá */}
            {selectedServiceData.id === 1 && selectedServiceData.hasVideo && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Veja como funciona:</h4>
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois4.jpg-W4k0byNFzQDOEJu0Y223oxvTd2jLt3.jpeg"
                  >
                    <source src="/videos/higienizacao-sofa.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>
            )}

            {isComparing ? (
              <div
                className="relative h-[400px] w-full overflow-hidden rounded-xl cursor-ew-resize"
                ref={sliderRef}
                onMouseMove={handleSliderMove}
                onMouseDown={handleMouseDown}
              >
                {/* Imagem Depois (fundo) */}
                <div className="absolute inset-0">
                  <Image
                    src={selectedServiceData.afterImage || "/placeholder.svg"}
                    alt={`${selectedServiceData.name} depois`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#5fb5a0] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Depois
                  </div>
                </div>

                {/* Imagem Antes (sobreposta com clip-path) */}
                <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                  <Image
                    src={selectedServiceData.beforeImage || "/placeholder.svg"}
                    alt={`${selectedServiceData.name} antes`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Antes
                  </div>
                </div>

                {/* Slider */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#5fb5a0] flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Antes
                  </div>
                  <Image
                    src={selectedServiceData.beforeImage || "/placeholder.svg"}
                    alt={`${selectedServiceData.name} antes`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div className="absolute top-4 left-4 bg-[#5fb5a0] text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Depois
                  </div>
                  <Image
                    src={selectedServiceData.afterImage || "/placeholder.svg"}
                    alt={`${selectedServiceData.name} depois`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className="mt-6">
              <Button
                className="bg-[#5fb5a0] hover:bg-[#4a9a87] text-white rounded-full"
                onClick={() =>
                  window.open(
                    `https://wa.me/5548991501393?text=Olá!%20Vim%20do%20site,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20${encodeURIComponent(
                      selectedServiceData.name,
                    )}.`,
                    "_blank",
                  )
                }
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de serviços da categoria */}
      {!selectedService && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#5fb5a0]/10 p-1 rounded-full flex-shrink-0">
                  <Check className="h-3 w-3 md:h-4 md:w-4 text-[#5fb5a0]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm md:text-base text-[#2d2d2d] mb-1">{service.name}</h3>
                    {service.hasVideo && (
                      <span className="bg-[#5fb5a0]/20 text-[#5fb5a0] text-xs px-2 py-0.5 rounded-full">Vídeo</span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-[#4a4a4a] line-clamp-2">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
