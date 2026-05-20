'use client';

import { getIcon } from './Icons';

export default function ChatbotSection({ data }) {
    if (!data) return null;

    return (
        <section className='py-10 px-4'>
            <h2 className="font-bold text-3xl mb-2 text-center">{data.title}</h2>
            <p className="text-sm text-slate-400 text-center mb-2">{data.subtitle}</p>
            <div className="w-16 h-1 bg-cyan-400 rounded mx-auto mb-12"></div>

            <div className="max-w-4xl mx-auto w-full">
                {/* Descripción */}
                <p className="text-slate-300 leading-relaxed mb-10 text-center">
                    {data.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {data.features && data.features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                        >
                            <div className="text-cyan-400 mb-3 w-10 h-10">
                                {getIcon(feature.icon)}
                            </div>
                            <h3 className="font-bold text-cyan-400 mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                {data.techStack && (
                    <div className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-8">
                        <h3 className="font-bold text-xl text-cyan-400 mb-8 text-center">
                            {data.techStack.title}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {data.techStack.components && data.techStack.components.map((component, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/30 transition-colors duration-200"
                                >
                                    <h4 className="font-bold text-cyan-300 mb-3 text-sm">
                                        {component.layer}
                                    </h4>
                                    <div className="space-y-2">
                                        {component.tech.map((tech, j) => (
                                            <div
                                                key={j}
                                                className="flex items-center gap-2 text-xs text-slate-400"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-6 border-t border-slate-700/50">
                            <p className="text-sm text-slate-300 text-center italic">
                                {data.cta}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
