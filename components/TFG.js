import Image from 'next/image';
import GraficaRedNeuronal from '@/components/graficaRN';

export default function TFG() {
    return (
        <div className="sm:pt-20 pt-10 mt-20">
            <header className="text-center py-10">
                <h1 className="text-4xl text-cyan-400 font-bold">Sistema Wearable de Detección de Caídas</h1>
                <p className="text-lg text-shine text-transparent font-bold mt-4">Trabajo de Fin de Grado - Universidad</p>
            </header>
            <section className="flex flex-col md:flex-row items-center py-10">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Introducción</h2>
                    <p className="text-base">
                        Mi Trabajo de Fin de Grado se centra en el desarrollo de un sistema wearable de detección de caídas utilizando redes neuronales. Este proyecto fue diseñado para asistir a personas mayores y aquellas con un alto riesgo de caídas, mejorando su seguridad y calidad de vida. El dispositivo detecta en tiempo real caídas, alertando automáticamente a los contactos de emergencia.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image src="/portfolio/imagen_reloj_wood2.png" width={500} height={500} alt="Prototipo Wearable Device" className="rounded-3xl  shadow-lg" />
                </div>
            </section>
            <section className="py-10">
                <h2 className="text-xl font-semibold mb-6">Objetivos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-950 p-6 rounded-lg shadow-md text-center">
                        <div className="flex justify-center items-center gap-4 text-cyan-400 mb-4">
                            <BullseyeIcon width={25} height={25} />
                            <h3 className="text-xl font-bold">Detección Precisa</h3>
                        </div>
                        <p className="text-base">Desarrollar un dispositivo que detecte caídas con precisión y en tiempo real</p>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-lg shadow-md text-center">
                        <div className="flex justify-center items-center gap-4 text-cyan-400 mb-4">
                            <LaptopIcon width={25} height={25} />
                            <h3 className="text-xl font-bold">Escalabilidad</h3>
                        </div>
                        <p className="text-base">Implementar una solución escalable y fácil de integrar en la vida diaria</p>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-lg shadow-md text-center">
                        <div className="flex justify-center items-center gap-4 text-cyan-400 mb-4">
                            <AiIcon width={25} height={25} />
                            <h3 className="text-xl font-bold">Machine Learning</h3>
                        </div>
                        <p className="text-base">Mejorar la precisión utilizando redes neuronales y procesamiento avanzado</p>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <h2 className="text-xl font-semibold mb-6">Metodología</h2>
                <div className="space-y-8">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="h-10 w-10 rounded-full border-2 border-cyan-400 flex items-center justify-center font-bold">1</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold mb-2">Investigación y Selección</h3>
                            <p className="text-base">
                                Comencé con una investigación exhaustiva sobre tecnologías de detección de caídas y seleccioné los componentes más adecuados.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="h-10 w-10 rounded-full border-2 border-cyan-400 flex items-center justify-center font-bold">2</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold mb-2">Desarrollo de la Red Neuronal</h3>
                            <p className="text-base">
                                Desarrollé y entrené un modelo de red neuronal con datos de movimientos y caídas de un dataset de +4M de filas. Posteriormente, cree un servidor Flask y la aloje allí.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="h-10 w-10 rounded-full border-2 border-cyan-400 flex items-center justify-center font-bold">3</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold mb-2">Desarrollo del Prototipo</h3>
                            <p className="text-base">
                                Programé el dispositivo desde cero. Consiguiendo leer los datos de los sensores, controlar la pantalla táctil, crear una interfaz gráfica y mandar los valores recopilados a un servidor.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="h-10 w-10 rounded-full border-2 border-cyan-400 flex items-center justify-center font-bold">4</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold mb-2">Pruebas y Validación</h3>
                            <p className="text-base">
                                Realicé pruebas exhaustivas para validar la precisión del dispositivo y ajusté el modelo según los resultados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-2">
                <h2 className="text-xl font-semibold mb-6">Resultados</h2>
                <p className="text-base mb-6">
                    El dispositivo desarrollado logró una tasa de precisión del 92% en la detección de caídas durante las pruebas. Además, el sistema fue capaz de alertar a los contactos de emergencia en menos de 10 segundos tras detectar una caída. Estos resultados superaron las expectativas iniciales y demostraron la viabilidad del uso de redes neuronales en dispositivos wearables para la detección de caídas.
                </p>
                <div className="pl-4">
                    <GraficaRedNeuronal />
                </div>
            </section>
            <section className='py-10'>
                <h2 className="text-xl font-semibold mb-6">Conclusiones</h2>
                <p className="text-base">
                    Este proyecto me permitió aplicar conocimientos avanzados en machine learning y desarrollo de hardware, demostrando que es posible crear soluciones tecnológicas que impacten positivamente en la vida de las personas. Aunque el sistema alcanzó altos niveles de precisión, futuras mejoras podrían centrarse en la optimización del consumo de energía y en la integración de otros sensores para mejorar la detección en diferentes escenarios. El éxito de este TFG abre la puerta a desarrollos futuros en el campo de la salud digital y la asistencia remota.
                </p>
            </section>
            <section className='flex justify-center pb-10'>
                <a href="/portfolio/tfg.pdf" download="Manuel Martínez - TFG - FallDetector.pdf" className="w-fit rounded-3xl border font-medium text-lg flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-105 hover:border-cyan-500 hover:text-cyan-500 custom-shadow-button transition-all duration-300" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>TFG - FallDetector</a>
            </section>
        </div>
    )
}

function BullseyeIcon(props) {
    return (
        <svg
            viewBox='0 0 512 512'
            fill="currentColor"
            {...props}
        >
            <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
    )
}

function LaptopIcon(props) {
    return (
        <svg viewBox="0 0 640 512" fill="currentColor" {...props}>
            <path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z" />
        </svg>
    )
}

function AiIcon(props) {
    return (
        <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
            <path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" />
        </svg>
    )
}