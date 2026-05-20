import Link from 'next/link';
import { MetricsComparison, ConfusionMatrixReal } from '@/components/TFGCharts';
import dataGrafica from "@/components/dataGraficaRN.json";

export const metadata = {
  title: 'TFG - FallDetector | Manuel Martínez',
  description: 'Sistema wearable de detección de caídas con IA.',
};


export default function TFGPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-20">
      <section className="max-w-5xl mx-auto px-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-sm text-cyan-300 font-medium">Trabajo Final de Grado</span>
            </div>
            <h1 className="text-5xl font-bold">Fall<span className="text-cyan-400">Detector</span></h1>
            <p className="text-xl text-slate-400">Sistema inteligente de detección de caídas en tiempo real</p>
            <div className="flex gap-3 flex-wrap pt-4">
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">Matrícula de Honor</span>
              <span className="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium">2024</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-slate-900 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center space-y-4">
              <div className="text-6xl">⌚</div>
              <p className="text-slate-400">Dispositivo wearable</p>
              <p className="text-sm text-slate-500">Sensores IMU integrados</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">93.3%</div>
            <div className="text-xs text-slate-400 mt-2">F1-Score Máximo</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">4M+</div>
            <div className="text-xs text-slate-400 mt-2">Registros</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">92.3%</div>
            <div className="text-xs text-slate-400 mt-2">Precisión</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">94.3%</div>
            <div className="text-xs text-slate-400 mt-2">Recall</div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-10 mb-20">
        <h2 className="text-3xl font-bold mb-8">Sobre el Proyecto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">¿Qué es?</h3>
              <p className="text-slate-300 leading-relaxed">
                Sistema wearable de detección de caídas en tiempo real utilizando redes neuronales. Diseñado para asistir a personas mayores y aquellas con alto riesgo de caídas, alertando automáticamente a contactos de emergencia.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Metodología</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">1.</span>
                  <span><strong>Investigación:</strong> Selección de componentes y tecnologías</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">2.</span>
                  <span><strong>ML:</strong> Red neuronal entrenada con +4M de registros</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">3.</span>
                  <span><strong>Hardware:</strong> Programación del dispositivo wearable desde cero</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">4.</span>
                  <span><strong>Validación:</strong> Pruebas exhaustivas y ajuste del modelo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Objetivos Clave</h3>
              <div className="space-y-3">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                  <p className="text-cyan-300 font-bold text-sm mb-1">Detección Precisa</p>
                  <p className="text-xs text-slate-400">Detectar caídas con precisión en tiempo real</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                  <p className="text-cyan-300 font-bold text-sm mb-1">Escalabilidad</p>
                  <p className="text-xs text-slate-400">Solución fácil de integrar en la vida diaria</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                  <p className="text-cyan-300 font-bold text-sm mb-1">Machine Learning</p>
                  <p className="text-xs text-slate-400">Mejora continua mediante redes neuronales</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-slate-900/50 border border-cyan-500/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Logros</h3>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>✓ Alerta en menos de 10 segundos</li>
                <li>✓ Interfaz táctil integrada</li>
                <li>✓ API con servidor Flask</li>
                <li>✓ Calificación: Matrícula de Honor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 mb-20">
        <h2 className="text-3xl font-bold mb-12">Análisis de Resultados Reales</h2>
        <div className="grid grid-cols-1 gap-8">
          <MetricsComparison data={dataGrafica} />
          <ConfusionMatrixReal data={dataGrafica} />
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-500/10 to-slate-900/50 rounded-2xl border border-cyan-500/20 max-w-5xl mx-auto px-10 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Descarga la Memoria Completa</h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/portfolio/tfg.pdf" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg">
            Descargar PDF
          </a>
          <Link href="/#proyectos" className="border border-cyan-500 text-cyan-400 hover:text-cyan-300 font-bold py-3 px-8 rounded-lg">
            Volver
          </Link>
        </div>
      </section>
    </div>
  );
}
