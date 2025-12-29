import Image from 'next/image';
import GraficaRedNeuronal from '@/components/graficaRN';

export default function TFG() {
    return (
        <article className="max-w-5xl mx-auto px-6 pt-32 pb-20 relative z-0">
            
            <header className="text-center py-10 relative mb-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-cyan-500/20 blur-[100px] -z-10 rounded-full"></div>
                
                <span className="inline-block py-1 px-3 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-xs font-mono mb-4">
                    TRABAJO DE FIN DE GRADO
                </span>
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-200 mb-6">
                    Sistema Wearable de<br />Detección de Caídas
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Un dispositivo IoT impulsado por redes neuronales capaz de salvar vidas mediante la detección temprana y alerta automática.
                </p>
            </header>

            <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                        {/* <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> */}
                        Introducción
                    </h2>
                    
                    <p className="text-slate-300 text-lg leading-relaxed text-pretty">
                        Mi Trabajo de Fin de Grado se centra en el desarrollo de un sistema wearable de detección de caídas utilizando <strong>redes neuronales</strong>.
                    </p>
                    
                    <p className="text-slate-400 leading-relaxed text-pretty">
                        Este proyecto fue diseñado para asistir a personas mayores y aquellas con un alto riesgo de caídas, mejorando su seguridad y calidad de vida. El dispositivo detecta en <strong>tiempo real</strong> las caídas, alertando automáticamente a los contactos de emergencia.
                    </p>
                    
                    {/* <div className="flex flex-wrap gap-2 pt-4">
                        {['Python', 'TensorFlow', 'IoT', 'Flask', 'C++', 'Hardware'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-sm text-cyan-200 font-mono border border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div> */}
                </div>
                
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                         <Image 
                            src="/portfolio/imagen_reloj_wood2.png" 
                            width={600} 
                            height={600} 
                            alt="Prototipo Wearable Device" 
                            className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105" 
                        />
                    </div>
                </div>
            </section>

            <section className="mb-24">
                <h2 className="text-3xl font-bold mb-10 text-center">Objetivos del Sistema</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ObjectiveCard 
                        icon={<BullseyeIcon className="w-8 h-8" />} 
                        title="Precisión Extrema"
                        desc="Minimizar los falsos positivos utilizando Deep Learning en lugar de algoritmos estáticos."
                    />
                    <ObjectiveCard 
                        icon={<LaptopIcon className="w-8 h-8" />} 
                        title="Escalabilidad"
                        desc="Arquitectura diseñada para ser replicada e integrada fácilmente en infraestructuras de teleasistencia."
                    />
                    <ObjectiveCard 
                        icon={<AiIcon className="w-8 h-8" />} 
                        title="Edge Computing"
                        desc="Procesamiento en tiempo real directamente en el dispositivo para reducir la latencia."
                    />
                </div>
            </section>

            <section className="mb-24">
                 <h2 className="text-3xl font-bold mb-10 text-center">Metodología de Desarrollo</h2>
                 <div className="relative border-l-2 border-cyan-900/50 ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-12">
                    <TimelineItem number="1" title="Investigación y Hardware">
                        Selección de acelerómetros de bajo consumo y microcontroladores capaces de ejecutar inferencia ligera.
                    </TimelineItem>
                    <TimelineItem number="2" title="Entrenamiento del Modelo">
                        Uso de un dataset con +4M de registros. Limpieza de datos, extracción de características y entrenamiento de la red neuronal con TensorFlow.
                    </TimelineItem>
                    <TimelineItem number="3" title="Desarrollo Firmware & Backend">
                        Programación en C++ para la lectura de sensores y creación de una API en Flask para la gestión de alertas en la nube.
                    </TimelineItem>
                     <TimelineItem number="4" title="Validación en Entorno Real">
                        Pruebas de estrés simulando caídas y actividades diarias para ajustar los pesos del modelo.
                    </TimelineItem>
                 </div>
            </section>

            <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 mb-20 relative">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>

                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12 border-b border-slate-800/50 pb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white">Resultados del Modelo</h2>
                        <p className="text-slate-300 text-lg leading-relaxed text-pretty">
                            Tras múltiples iteraciones, el dispositivo demostró una robustez excepcional, reduciendo drásticamente los falsos positivos y manteniendo una alta sensibilidad.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center shadow-lg">
                            <span className="block text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-500 mb-2">92%</span>
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Precisión Global</span>
                        </div>
                        <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center shadow-lg">
                            <span className="block text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-500 mb-2">&lt;10s</span>
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Latencia</span>
                        </div>
                    </div>
                </div>
                
                <div className="w-full">
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h4 className="text-sm font-mono text-cyan-400 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                            ENTRENAMIENTO (LOSS)
                        </h4>
                    </div>

                    <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-inner p-4 w-full relative">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                        
                        <div className="w-full h-full">
                             <GraficaRedNeuronal />
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center pb-10 gap-4'>
                <p className="text-slate-400 text-sm">¿Quieres ver la memoria técnica completa?</p>
                <a 
                    href="/portfolio/tfg.pdf" 
                    download="Manuel Martínez - TFG - FallDetector.pdf" 
                    className="group relative inline-flex items-center gap-3 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
                >
                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar Documentación PDF
                </a>
            </section>
        </article>
    )
}

function ObjectiveCard({ icon, title, desc }) {
    return (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors duration-300 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function TimelineItem({ number, title, children }) {
    return (
        <div className="relative pl-8 md:pl-0">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 md:left-auto md:right-auto md:ml-[-8px]"></div>
            
            <div className="md:flex items-start justify-between gap-6 group">
                <div className="mb-2 md:mb-0 md:w-full md:text-right md:pr-8">
                     <span className="text-5xl font-bold text-slate-800/50 absolute -top-4 -left-4 md:left-auto md:right-full md:mr-4 -z-10 group-hover:text-cyan-900/20 transition-colors">
                        0{number}
                    </span>
                    <h3 className="text-xl font-bold text-cyan-100">{title}</h3>
                </div>
                <div className="md:w-full md:pl-8 text-slate-400 text-pretty">
                    {children}
                </div>
            </div>
        </div>
    )
}

function BullseyeIcon(props) {
    return <svg viewBox='0 0 512 512' fill="currentColor" {...props}><path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
}
function LaptopIcon(props) {
    return <svg viewBox="0 0 640 512" fill="currentColor" {...props}><path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z" /></svg>
}
function AiIcon(props) {
    return <svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" /></svg>
}