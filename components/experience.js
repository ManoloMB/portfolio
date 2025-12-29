"use client"

import { useState, useEffect } from "react"

export default function Experience({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [visibleIndices, setVisibleIndices] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "-1")
            if (index >= 0) {
              setVisibleIndices((prev) => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll("[data-index]")
    elements.forEach((item) => observer.observe(item))

    return () => elements.forEach((item) => observer.unobserve(item))
  }, [items])

  return (
    <section className="flex items-center justify-center py-10">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Trayectoria en desarrollo de software, inteligencia artificial y soluciones escalables
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-cyan-500/0 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {items.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative transition-all duration-700 ${
                  visibleIndices.has(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute -left-14 top-6 md:top-8 w-8 h-8 md:w-10 md:h-10 hidden md:flex items-center justify-center">
                  <div
                    className={`absolute w-full h-full rounded-full border-2 border-cyan-500 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-150 bg-cyan-500/20"
                        : visibleIndices.has(index)
                          ? "bg-cyan-500/10"
                          : "bg-transparent"
                    }`}
                  />
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-500" />
                </div>

                <div className="group relative md:ml-12">
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      hoveredIndex === index
                        ? "bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent opacity-100 scale-105"
                        : "bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent opacity-50 scale-100"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500" />

                  <div className="relative p-8 md:p-10 rounded-2xl">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                    <div className="inline-flex mb-6">
                      <div
                        className={`px-4 py-2 rounded-full font-semibold text-sm border transition-all duration-300 ${
                          hoveredIndex === index
                            ? "bg-cyan-500/30 text-cyan-500 border-cyan-500/60 shadow-lg shadow-cyan-500/20"
                            : "bg-cyan-500/10 text-cyan-500 border-cyan-500/30"
                        }`}
                      >
                        {item.date}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3
                        className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
                          hoveredIndex === index ? "text-cyan-500" : "text-gray-100"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-lg text-cyan-400 font-semibold">{item.company}</p>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                      {item.description}
                    </p>

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                              hoveredIndex === index
                                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/60"
                                : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                            }`}
                            style={{
                              transitionDelay: hoveredIndex === index ? `${techIndex * 30}ms` : "0ms",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div
                      className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 text-6xl md:text-8xl font-bold text-cyan-500/5 group-hover:text-cyan-500/10 transition-all duration-500 pointer-events-none select-none"
                      style={{
                        transform: hoveredIndex === index ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
