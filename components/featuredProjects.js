'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FeaturedProjects({ items }) {
    const router = useRouter();
    return (
        <section id="proyectos" className='text-center py-10'>
            <h2 className="font-bold text-3xl mb-2 text-center">Proyectos Destacados</h2>
            <div className="w-16 h-1 bg-cyan-400 rounded mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items && items.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => router.push(project.url)}
                        className="group block cursor-pointer"
                    >
                        <div className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col">
                            {/* Imagen */}
                            <div className="relative overflow-hidden h-48 bg-slate-800/50">
                                <Image
                                    src={project.image.src}
                                    alt={project.image.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="font-bold text-lg text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-cyan-200/70 font-light">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* Results */}
                                {project.results && (
                                    <div className="mb-6 space-y-2">
                                        {Object.entries(project.results).map(([key, value]) => (
                                            <div key={key} className="text-xs text-slate-400">
                                                <span className="text-cyan-400 font-semibold capitalize">{key}:</span> {value}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Technologies */}
                                {project.technologies && (
                                    <div className="mb-6">
                                        <p className="text-xs text-slate-400 font-semibold mb-2">Stack: </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-slate-700/40 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600/50 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tags/Links */}
                                {project.tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <a
                                                key={i}
                                                href={tag.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 px-2 py-1 rounded hover:border-cyan-400 transition-all duration-200"
                                            >
                                                {tag.name}
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {/* CTA */}
                                <div className="mt-4 pt-4 border-t border-slate-700/30">
                                    <span className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                                        Ver detalles
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
