"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Server, Wrench, Brain } from "lucide-react"
import skillsData from "@/components/skills.json"

const iconMap = {
  Palette,
  Server,
  Wrench,
  Brain,
}

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = skillsData.categories

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div ref={containerRef} className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground text-pretty">Tecnologías y herramientas que domino</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/50 to-cyan-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

              <div
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  hoveredIndex === index
                    ? "border-cyan-500 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 transform -translate-y-2"
                    : "border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-600"
                }`}
              >
                <div className="flex items-center gap-1 mb-6">
                  <div
                    className={`transition-all duration-300 ${
                      hoveredIndex === index ? "scale-110 rotate-12" : "scale-100 rotate-0"
                    }`}
                  >
                    {(() => {
                      const IconComponent = iconMap[category.icon]
                      return IconComponent ? <IconComponent size={32} className="text-cyan-500" /> : null
                    })()}
                  </div>
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      hoveredIndex === index ? "text-cyan-500" : "text-foreground"
                    }`}
                  >
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center gap-3 transition-all duration-300 ${
                        hoveredIndex === index ? "translate-x-1" : "translate-x-0"
                      }`}
                      style={{
                        transitionDelay: hoveredIndex === index ? `${skillIndex * 30}ms` : "0ms",
                      }}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          hoveredIndex === index
                            ? "bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50"
                            : "bg-cyan-500/50"
                        }`}
                      ></div>
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          hoveredIndex === index ? "text-cyan-300" : "text-slate-300"
                        }`}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full transition-all duration-300 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
