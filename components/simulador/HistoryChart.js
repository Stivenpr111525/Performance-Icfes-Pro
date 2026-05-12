"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function HistoryChart({ testHistory }) {
  if (!testHistory || testHistory.length === 0) return null;

  return (
    <div className="w-full bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm mt-8">
      <div className="mb-6 text-left">
        <h2 className="text-xl font-bold">Evolución de Puntaje</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Tu progreso histórico en todos los simulacros</p>
      </div>
      
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={testHistory.map((t, idx) => ({ 
              name: `Intento ${idx + 1}`, 
              Puntaje: t.score,
              Fecha: new Date(t.created_at).toLocaleDateString() 
            }))}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" vertical={false} opacity={0.2} />
            <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} domain={[0, 500]} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'var(--tw-colors-zinc-900)', color: 'white' }}
              labelStyle={{ fontWeight: 'bold', color: '#a1a1aa' }}
            />
            <Line 
              type="monotone" 
              dataKey="Puntaje" 
              stroke="#8b5cf6" 
              strokeWidth={4}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
