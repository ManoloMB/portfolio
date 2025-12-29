import Image from "next/image";
import Link from "next/link";

export default function Projects({ items }) {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Proyectos <span className="text-cyan-400">Destacados</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Selección de desarrollos y experimentos técnicos. 
          Aunque algunos despliegues ya no están activos, aquí puedes ver la arquitectura y el código.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <article 
            key={index} 
            className="group relative flex flex-col bg-slate-900/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {item.text}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-mono px-2 py-1 rounded bg-cyan-950/30 text-cyan-300 border border-cyan-900/50"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-800">
                
                {item.repoUrl && (
                    <Link 
                    href={item.repoUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-sm py-2 rounded-lg transition-colors group/btn"
                    >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Código
                    </Link>
                )}

                {item.url ? (
                  <Link 
                    href={item.url}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-sm py-2 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live Demo
                  </Link>
                ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 bg-slate-800/50 text-slate-500 text-sm py-2 rounded-lg cursor-not-allowed border border-slate-800">
                        <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                        Offline
                    </div>
                )}
                
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}