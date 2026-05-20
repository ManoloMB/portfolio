'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const MetricsComparison = ({ data }) => {
  // Transformar datos para recharts
  const chartData = data.map(d => ({
    umbral: d['Umbral'].toFixed(2),
    precision: parseFloat((d['Precision'] * 100).toFixed(2)),
    recall: parseFloat((d['Recall'] * 100).toFixed(2)),
    f1: parseFloat((d['F1 Score'] * 100).toFixed(2)),
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 backdrop-blur-sm shadow-lg">
          <p className="text-cyan-400 font-bold text-sm mb-2">
            Umbral: {payload[0].payload.umbral}
          </p>
          {payload.map((entry, i) => (
            <p key={i} style={{ color: entry.color }} className="text-xs font-medium">
              {entry.name}: {entry.value.toFixed(2)}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-8">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">Comparativa: Precisión, Recall y F1-Score</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
          <XAxis
            dataKey="umbral"
            stroke="rgba(148, 163, 184, 0.6)"
            style={{ fontSize: '12px' }}
            label={{ value: 'Umbral', position: 'insideBottomRight', offset: -5 }}
          />
          <YAxis
            stroke="rgba(148, 163, 184, 0.6)"
            style={{ fontSize: '12px' }}
            domain={[0, 100]}
            label={{ value: 'Porcentaje (%)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="precision"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ fill: '#ef4444', r: 5 }}
            activeDot={{ r: 7 }}
            isAnimationActive={true}
            name="Precisión"
          />
          <Line
            type="monotone"
            dataKey="recall"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ fill: '#22c55e', r: 5 }}
            activeDot={{ r: 7 }}
            isAnimationActive={true}
            name="Recall"
          />
          <Line
            type="monotone"
            dataKey="f1"
            stroke="#06b6d4"
            strokeWidth={3}
            dot={{ fill: '#06b6d4', r: 5 }}
            activeDot={{ r: 7 }}
            isAnimationActive={true}
            name="F1-Score"
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-slate-500 mt-4 text-center">
        Pasa el cursor sobre la gráfica para ver los valores exactos de cada métrica
      </p>
    </div>
  );
};

export const ConfusionMatrixReal = ({ data }) => {
  const bestData = data.reduce((max, current) =>
    current['F1 Score'] > max['F1 Score'] ? current : max
  );

  return (
    <div className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-8">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">Matriz de Confusión (Umbral Óptimo)</h3>
      <p className="text-xs text-slate-400 mb-6">Umbral: {bestData['Umbral'].toFixed(2)}</p>
      <svg viewBox="0 0 400 400" className="w-full max-w-sm mx-auto mb-6">
        <rect x="80" y="80" width="120" height="120" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2"/>
        <rect x="200" y="80" width="120" height="120" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="2"/>
        <rect x="80" y="200" width="120" height="120" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="2"/>
        <rect x="200" y="200" width="120" height="120" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2"/>

        <text x="140" y="155" textAnchor="middle" className="text-xl font-bold fill-cyan-400">{bestData['True Negatives'].toLocaleString()}</text>
        <text x="260" y="155" textAnchor="middle" className="text-xl fill-red-400">{bestData['False Positives']}</text>
        <text x="140" y="275" textAnchor="middle" className="text-xl fill-red-400">{bestData['False Negatives']}</text>
        <text x="260" y="275" textAnchor="middle" className="text-xl font-bold fill-cyan-400">{bestData['True Positives']}</text>
      </svg>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-800/50 p-3 rounded">
          <p className="text-slate-400">Verdaderos Negativos</p>
          <p className="text-cyan-400 font-bold text-lg">{bestData['True Negatives'].toLocaleString()}</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded">
          <p className="text-slate-400">Verdaderos Positivos</p>
          <p className="text-cyan-400 font-bold text-lg">{bestData['True Positives'].toLocaleString()}</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded">
          <p className="text-slate-400">Falsos Negativos</p>
          <p className="text-red-400 font-bold text-lg">{bestData['False Negatives']}</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded">
          <p className="text-slate-400">Falsos Positivos</p>
          <p className="text-red-400 font-bold text-lg">{bestData['False Positives']}</p>
        </div>
      </div>
    </div>
  );
};

export const F1ScoreCurve = ({ data }) => {
  const maxF1 = Math.max(...data.map(d => d['F1 Score']));
  const points = data.map((d, i) => {
    const x = 50 + (i * 35);
    const y = 250 - (d['F1 Score'] / maxF1) * 200;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-slate-700/50 rounded-2xl p-8">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">F1-Score vs Umbral</h3>
      <svg viewBox="0 0 400 320" className="w-full max-w-sm mx-auto">
        <line x1="50" y1="250" x2="350" y2="250" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1"/>
        <line x1="50" y1="50" x2="50" y2="250" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1"/>

        <polyline points={points} stroke="rgba(34, 211, 238, 1)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

        {data.map((d, i) => (
          <circle key={i} cx={50 + (i * 35)} cy={250 - (d['F1 Score'] / maxF1) * 200} r="3" fill="rgba(34, 211, 238, 1)"/>
        ))}

        <text x="200" y="290" textAnchor="middle" className="text-sm fill-slate-400">Umbral</text>
        <text x="15" y="150" textAnchor="middle" className="text-sm fill-slate-400" transform="rotate(-90 15 150)">F1-Score</text>
      </svg>
      <p className="text-xs text-slate-500 mt-4 text-center">Máximo F1-Score: {maxF1.toFixed(3)}</p>
    </div>
  );
};
