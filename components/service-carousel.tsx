"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const services = [
  {
    id: 1,
    title: "Higienização de sofá",
    description:
      "Remoção de manchas e sujeiras profundas, eliminando ácaros e bactérias para um ambiente mais saudável.",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes4.jpg-oBbMTH2qlgdAVwfujHbKxVhTrxjgmg.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois4.jpg-W4k0byNFzQDOEJu0Y223oxvTd2jLt3.jpeg",
  },
  {
    id: 2,
    title: "Limpeza de colchão",
    description: "Higienização que elimina ácaros, suor e manchas para noites de sono mais saudáveis.",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes.jpg-GdH7xkO7i1Bc5y3DQkFqtuD8wdt4rX.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois.jpg-dF01UOUpLyQdqsYikjG7spoAsAEFNk.jpeg",
  },
  {
    id: 3,
    title: "Limpeza de sofá retrátil",
    description:
      "Tratamento completo que remove manchas e odores de toda a estrutura do sofá, incluindo mecanismos retráteis.",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes3.jpg-kuO4KaWOax5C3F4Trcy8X5CzMveulq.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois3.jpg-wngpkcfPo53QvZ2fH5vuRGA6okDwEn.jpeg",
  },
  {
    id: 4,
    title: "Limpeza de cadeiras",
    description: "Restauração da aparência e higiene de cadeiras de escritório, jantar e outros ambientes.",
    beforeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antes5.jpg-OJAEU8JdeOMOgZmpUcSSai5jlDOYd1.jpeg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depois5.jpg-ba5vMsF3cYGbvpOm2hDvd3Mx46MrNy.jpeg",
  },
  {
    id: 5,
    title: "Limpeza de poltronas",
    description: "Tratamento especializado para poltronas, removendo manchas e restaurando o conforto.",
    beforeImage:
      "poltronaantes.jpg",
    afterImage:
      "poltronadepois.jpg",
  },
  {
    id: 6,
    title: "Limpeza de colchão",
    description: "Higienização que elimina ácaros, suor e manchas para noites de sono mais saudáveis.",
    beforeImage:
      "colchao2antes.jpg",
    afterImage:
      "colchao2depois.jpg",
  },
  {
    id: 7,
    title: "Limpeza de cadeiras",
    description: "Restauração da aparência e higiene de cadeiras de escritório, jantar e outros ambientes.",
    beforeImage:
      "cadeira2antes.jpg",
    afterImage:
      "cadeira2depois.jpg",
  },
]

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const totalServices = services.length
  const isMobile = useMobile()
  const visibleItems = isMobile ? 1 : 3

  // Função para criar um loop infinito
  const getVisibleServices = () => {
    // Duplicamos o array de serviços para criar um efeito de loop infinito
    const duplicatedServices = [...services, ...services, ...services]
    return duplicatedServices
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Quando chegar ao final, reinicia do início para criar um loop infinito
      const nextIndex = prevIndex + 1
      if (nextIndex >= totalServices) {
        return 0
      }
      return nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Quando chegar ao início, vai para o final para criar um loop infinito
      const nextIndex = prevIndex - 1
      if (nextIndex < 0) {
        return totalServices - 1
      }
      return nextIndex
    })
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const visibleServices = getVisibleServices()

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {visibleServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className={`px-3 ${isMobile ? "min-w-full" : "min-w-[calc(100%/3)]"}`}
              style={{ flex: `0 0 ${100 / visibleItems}%` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                <div className={`${isMobile ? "flex flex-col" : "grid grid-cols-2"}`}>
                  <div className="relative h-[180px]">
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                      Antes
                    </div>
                    <Image
                      src={service.beforeImage || "/placeholder.svg"}
                      alt={`${service.title} antes`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[180px]">
                    <div className="absolute top-2 left-2 bg-[#5fb5a0] text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                      Depois
                    </div>
                    <Image
                      src={service.afterImage || "/placeholder.svg"}
                      alt={`${service.title} depois`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">{service.title}</h3>
                  <p className="text-[#4a4a4a] text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-[#5fb5a0] hover:bg-[#5fb5a0] hover:text-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg z-10 sm:flex hidden"
        aria-label="Serviço anterior"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-[#5fb5a0] hover:bg-[#5fb5a0] hover:text-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg z-10 sm:flex hidden"
        aria-label="Próximo serviço"
      >
        <ArrowRight className="h-5 w-5" />
      </Button>

      <div className="flex justify-center mt-6 gap-1">
        {Array.from({ length: totalServices }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-6 bg-[#5fb5a0]" : "w-2 bg-[#5fb5a0]/30"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
