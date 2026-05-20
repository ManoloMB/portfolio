import Link from 'next/link';

export const metadata = {
  title: 'TFM - Predicción de Accidentes | Manuel Martínez',
  description: 'Modelo predictivo de gravedad de accidentes de tráfico con XGBoost y análisis geoespacial.',
};

export default function TFMPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-20">
      <section className="max-w-5xl mx-auto px-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-sm text-cyan-300 font-medium">Trabajo Final de Máster</span>
            </div>
            <h1 className="text-5xl font-bold">Predicción de<br/><span className="text-cyan-400">Accidentes de Tráfico</span></h1>
            <p className="text-xl text-slate-400">Modelo predictivo de gravedad usando Machine Learning y análisis geoespacial</p>
            <div className="flex gap-3 flex-wrap pt-4">
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">Visual Analytics</span>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">Big Data</span>
              <span className="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium">2025</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-slate-900 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center space-y-4">
              <div className="text-6xl">🗺️</div>
              <p className="text-slate-400">Análisis Geoespacial</p>
              <p className="text-sm text-slate-500">ML en datos de tráfico real</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">XGBoost</div>
            <div className="text-xs text-slate-400 mt-2">Model Principal</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">SMOTE</div>
            <div className="text-xs text-slate-400 mt-2">Balance Clases</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">GIS</div>
            <div className="text-xs text-slate-400 mt-2">Análisis Espacial</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">Grid</div>
            <div className="text-xs text-slate-400 mt-2">Búsqueda Hipers</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">CV</div>
            <div className="text-xs text-slate-400 mt-2">Validación</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">100K+</div>
            <div className="text-xs text-slate-400 mt-2">Registros</div>
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
                Sistema de predicción de la gravedad de accidentes de tráfico mediante Machine Learning avanzado. Analiza datos reales con alta dimensionalidad y desbalanceo de clases para anticipar la severidad de los accidentes (leves, graves o mortales).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Metodología</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">1.</span>
                  <span><strong>Exploración:</strong> EDA y limpieza de datos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">2.</span>
                  <span><strong>Balanceo:</strong> SMOTE para clases minoritarias</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">3.</span>
                  <span><strong>Comparación:</strong> XGBoost, RandomForest, LightGBM</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">4.</span>
                  <span><strong>Optimización:</strong> GridSearchCV de hiperparámetros</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold min-w-fit">5.</span>
                  <span><strong>Análisis GIS:</strong> Visualización de hotspots</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Objetivos Clave</h3>
              <div className="space-y-3">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                  <p className="text-cyan-300 font-bold text-sm mb-1">Predicción Precisa</p>
                  <p className="text-xs text-slate-400">Anticipar gravedad de accidentes</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                  <p className="text-cyan-300 font-bold text-sm mb-1">Manejo del Desbalanceo</p>
                  <p className="text-xs text-slate-400">Clases altamente desbalanceadas</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                  <p className="text-cyan-300 font-bold text-sm mb-1">Optimización</p>
                  <p className="text-xs text-slate-400">Hiperparámetros exhaustivos</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-slate-900/50 border border-cyan-500/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Logros</h3>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>✓ XGBoost: 0.86 F1-Score</li>
                <li>✓ SMOTE: F1 mejorado a 0.81</li>
                <li>✓ 127K+ registros analizados</li>
                <li>✓ 840 puntos GIS mapeados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-10 py-20">
        <h2 className="text-3xl font-bold mb-12">Pipeline ML</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { num: "1", title: "Carga", desc: "100K+ registros" },
            { num: "2", title: "Limpieza", desc: "Valores nulos" },
            { num: "3", title: "Balance", desc: "SMOTE" },
            { num: "4", title: "Features", desc: "Engineering" }
          ].map((step) => (
            <div key={step.num} className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{step.num}</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-400">↓</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "5", title: "Entrenamiento", desc: "GridSearchCV XGBoost" },
            { num: "6", title: "Validación", desc: "Cross-Validation" },
            { num: "7", title: "Análisis Espacial", desc: "Hotspots GIS" }
          ].map((step) => (
            <div key={step.num} className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{step.num}</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-800/50 to-transparent py-20">
        <div className="max-w-5xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-12">Resultados Técnicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-bold text-cyan-400 mb-4">Modelos Evaluados</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Random Forest:</span>
                    <span className="text-cyan-400 font-bold">0.78</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gradient Boosting:</span>
                    <span className="text-cyan-400 font-bold">0.82</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">XGBoost (Óptimo):</span>
                    <span className="text-cyan-400 font-bold">0.86</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-bold text-cyan-400 mb-4">Técnicas de Balance</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="text-slate-400">Sin balanceo:</span> <span className="text-cyan-400">F1 = 0.61</span></div>
                  <div><span className="text-slate-400">Class Weights:</span> <span className="text-cyan-400">F1 = 0.72</span></div>
                  <div className="font-bold"><span className="text-slate-400">SMOTE:</span> <span className="text-cyan-400">F1 = 0.81</span></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-cyan-400">Datos Utilizados</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Dataset Total</p>
                  <p className="text-3xl font-bold text-cyan-400">127,445</p>
                  <p className="text-xs text-slate-500">registros de accidentes</p>
                </div>
                <div className="border-t border-cyan-500/20 pt-4">
                  <p className="text-sm text-slate-400 mb-2">Características</p>
                  <p className="text-2xl font-bold text-cyan-400">45</p>
                  <p className="text-xs text-slate-500">features después de engineering</p>
                </div>
                <div className="border-t border-cyan-500/20 pt-4">
                  <p className="text-sm text-slate-400 mb-2">Localidades Analizadas</p>
                  <p className="text-2xl font-bold text-cyan-400">840</p>
                  <p className="text-xs text-slate-500">puntos GIS únicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-10 py-20">
        <h2 className="text-3xl font-bold mb-12">Tecnologías</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["XGBoost", "Scikit-learn", "Python", "Pandas", "NumPy", "Matplotlib", "Folium", "GeoPy", "SQL"].map((tech) => (
            <div key={tech} className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-6 py-4 text-center hover:border-cyan-500/50">
              <p className="text-slate-300 font-medium">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-500/10 to-slate-900/50 rounded-2xl border border-cyan-500/20 max-w-5xl mx-auto px-10 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Documentación Completa</h2>
        <p className="text-slate-400 mb-8">Incluye análisis detallado, metodología, resultados y visualizaciones geoespaciales.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/portfolio/tfm.pdf" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg">
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
