'use client';

export default function Experience({ items }) {
    return (
        <div id="experiencia" className='items-center justify-center py-10'>
            <h2 className="font-bold text-3xl text-center mb-2">Experiencia</h2>
            <div className="w-16 h-1 bg-cyan-400 rounded mx-auto mb-12"></div>

            <div className="relative">
                {/* Timeline vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 to-slate-700 hidden sm:block"></div>

                <div className="space-y-8">
                    {items.map((item, index) => (
                        <div key={item.id} className="sm:pl-12 relative">
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full border-2 border-cyan-400 bg-slate-900 hidden sm:flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                            </div>

                            {/* Card principal */}
                            <div className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                                {/* Header */}
                                <div className="mb-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                        <h3 className="font-bold text-lg text-cyan-400">{item.title}</h3>
                                        <span className="text-xs text-cyan-200/50 font-light sm:ml-auto">
                                            {item.date}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                                            {item.company}
                                        </span>
                                        {item.client && (
                                            <span className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-600/50">
                                                Client: {item.client}
                                            </span>
                                        )}
                                        {item.role && (
                                            <span className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-600/50">
                                                {item.role}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                {/* Achievements */}
                                {item.achievements && item.achievements.length > 0 && (
                                    <div className="mb-4 space-y-3">
                                        {item.achievements.map((achievement, i) => (
                                            <div key={i} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-3">
                                                <h4 className="text-xs font-bold text-cyan-300 mb-1">
                                                    {achievement.title}
                                                </h4>
                                                <p className="text-xs text-slate-400 leading-relaxed">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Technologies */}
                                {item.technologies && item.technologies.length > 0 && (
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold mb-2">Stack: </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies.map((tech, j) => (
                                                <span
                                                    key={j}
                                                    className="bg-slate-700/40 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600/50 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
