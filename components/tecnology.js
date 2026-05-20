'use client';

import { getIcon } from './Icons';

export default function Tecnology({ skillsCategories }) {
    return (
        <section id="tecnologia" className='text-center py-10'>
            <h2 className="font-bold text-3xl mb-2 text-center">Skills Técnicas</h2>
            <div className="w-16 h-1 bg-cyan-400 rounded mx-auto mb-12"></div>

            {/* Grid de categorías con emojis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {skillsCategories && skillsCategories.map((category, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-cyan-400">
                                {getIcon(category.icon)}
                            </div>
                            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                                {category.category}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill, j) => (
                                <span
                                    key={j}
                                    className="bg-cyan-500/10 text-cyan-200 text-xs font-medium px-3 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/20 hover:text-cyan-100 transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
