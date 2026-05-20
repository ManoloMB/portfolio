import Image from 'next/image';
import Link from 'next/link';
import { Download, Mail, Code, Share2 } from 'lucide-react';

export default function About() {
    return (
        <div id="sobremi" className="flex flex-col items-center sm:py-32 py-10 mt-20">
            <section className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-20'>
                <article className='flex flex-col text-left justify-center'>
                    <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full mb-4 w-fit">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        Technical Consultant @ Airbus · ALTEN Spain
                    </div>
                    <h1 className="text-4xl font-bold">Hola,
                        <span className='text-cyan-400'> soy Manuel Martínez</span>
                    </h1>
                    <h5 className="text-shine text-transparent pt-2 text-xl font-bold">
                        AI Engineer · GenAI · RAG · Multi-Agent Systems
                    </h5>
                    <p className="text-lg pt-6 text-slate-300 leading-relaxed">
                        Ingeniero Informático especializado en IA Generativa, sistemas RAG y arquitecturas multi-agente para entornos corporativos reales. Actualmente Technical Consultant en Airbus a través de ALTEN Spain, donde lidero proyectos de innovación con GenAI y LLMs.
                    </p>
                    <p className="text-base pt-3 text-slate-400 leading-relaxed">
                        Cada sistema que construyo tiene que ser robusto, mantenible y realmente útil para quien lo usa.
                    </p>
                </article>
                <article className='flex flex-col items-center justify-center'>
                    <a href="https://www.linkedin.com/in/manuel-martinez-bernal/" target="_blank" rel="noopener noreferrer" className="rounded-full hover:scale-105 transition-transform duration-300 block">
                        <Image
                            src="/portfolio/imagen_perfil.jpg"
                            width={1000}
                            height={1000}
                            alt='Imagen de Perfil'
                            className='rounded-full custom-shadow max-h-52 max-w-52'
                            priority
                        />
                    </a>
                </article>
            </section>
            <section className='flex flex-wrap gap-4 sm:pt-16 pt-10 text-center items-center justify-center'>
                <a href="https://www.linkedin.com/in/manuel-martinez-bernal/" className="rounded-3xl border font-medium text-base flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300" target="_blank" rel="noopener noreferrer">
                    <Share2 size={18} />
                    LinkedIn
                </a>
                <a href="https://github.com/ManoloMB" className="rounded-3xl border font-medium text-base flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300" target="_blank" rel="noopener noreferrer">
                    <Code size={18} />
                    GitHub
                </a>
                <a href="/portfolio/cv.pdf" download="Manuel Martínez - CV.pdf" className="rounded-3xl border font-medium text-base flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300" target="_blank" rel="noopener noreferrer">
                    <Download size={18} />
                    Currículum
                </a>
                <a href="mailto:manolomartinezbernal@gmail.com" className="rounded-3xl border font-medium text-base flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300">
                    <Mail size={18} />
                    Contacto
                </a>
            </section>
        </div>
    );
}
