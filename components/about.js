import Image from 'next/image';
import Link from 'next/link';

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
                    <svg width="18" height="18" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor" /></svg>
                    LinkedIn
                </a>
                <a href="https://github.com/ManoloMB" className="rounded-3xl border font-medium text-base flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 256 250" width="18" height="18" fill="currentColor" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Z" fill="currentColor" /></svg>
                    GitHub
                </a>
                <a href="/portfolio/cv.pdf" download="Manuel Martínez - CV.pdf" className="rounded-3xl border font-medium text-base flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                    Currículum
                </a>
                <a href="mailto:manolomartinezbernal@gmail.com" className="rounded-3xl border font-medium text-base flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"></path><path d="M3 7l9 6l9 -6"></path><path d="M15 19l2 2l4 -4"></path></svg>
                    Contacto
                </a>
            </section>
        </div>
    );
}
