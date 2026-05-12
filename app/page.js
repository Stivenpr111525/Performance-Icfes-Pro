"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Trophy, Clock, Zap, X } from "lucide-react";

import { useRouter } from "next/navigation";
import { useSimuladorStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import HistoryChart from "@/components/simulador/HistoryChart";

export default function Home() {
  const router = useRouter();
  const startSimulador = useSimuladorStore((state) => state.startSimulador);
  const fetchProfile = useSimuladorStore((state) => state.fetchProfile);
  const testHistory = useSimuladorStore((state) => state.testHistory);

  const [showQuickConfig, setShowQuickConfig] = useState(false);
  const [quickSubject, setQuickSubject] = useState('Matemáticas');
  const [quickCount, setQuickCount] = useState(10);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setIsLoggedIn(true);
          await fetchProfile();
        }
      } catch (err) {
        console.error("Error initializing auth:", err);
      }
    };
    initAuth();
  }, [fetchProfile]);

  const SUBJECTS = ['Matemáticas', 'Lectura Crítica', 'Ciencias Naturales', 'Sociales y Ciudadanas', 'Inglés'];

  const handleStart = async (mode, config = null) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
      return;
    }

    if (mode === 'quick' && config) {
      startSimulador(mode, config);
    } else {
      startSimulador(mode);
    }
    router.push('/simulador');
  };

  console.log("Rendering Home Page, isLoggedIn:", isLoggedIn);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full flex flex-col items-center text-center gap-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Simulador Beta v0.1
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
            Performance Icfes Pro
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            La experiencia definitiva para dominar el ICFES. Entrena, compite y alcanza el puntaje que mereces.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8"
        >
          <FeatureCard 
            icon={<Clock className="w-6 h-6 text-blue-500" />}
            title="Simulación Real"
            description="Entorno cronometrado idéntico a la prueba real para acostumbrar tu mente."
            onClick={() => setSelectedFeature('timer')}
          />
          <FeatureCard 
            icon={<Trophy className="w-6 h-6 text-yellow-500" />}
            title="Gamificación"
            description="Compite en los leaderboards y supera tus propios récords personales."
            onClick={() => setSelectedFeature('gamification')}
          />
          <FeatureCard 
            icon={<BookOpen className="w-6 h-6 text-green-500" />}
            title="Retroalimentación"
            description="Aprende de tus errores con explicaciones detalladas al instante."
            onClick={() => setSelectedFeature('feedback')}
          />
        </motion.div>

        {/* Modal Premium para el Botón de Tiempo */}
        <AnimatePresence>
          {selectedFeature === 'timer' && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 1, opacity: 1, y: 0 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-blue-900/20"
              >
                {/* Decoración Premium */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="w-20 h-20 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 flex items-center justify-center mb-8 shadow-inner relative">
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
                    <Clock className="w-10 h-10 text-blue-400" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Cronometraje Inteligente de Alta Precisión</h3>
                  
                  <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl font-light">
                    Con nuestro sistema de cronometraje inteligente de alta precisión, cada segundo se convierte en <strong className="text-white font-semibold">información estratégica</strong>. 
                    <br/><br/>
                    Analizamos tu tiempo real de respuesta para identificar patrones de duda, presión y toma de decisiones, ayudándote a desarrollar mayor <span className="text-blue-400 font-medium">agilidad mental, seguridad y control</span> bajo condiciones similares al ICFES real. 
                    <br/><br/>
                    Entrena tu mente para responder con rapidez, precisión y confianza incluso en los momentos de mayor presión.
                  </p>

                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="mt-10 px-8 py-3 bg-white text-zinc-950 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10"
                  >
                    Entendido
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {selectedFeature === 'gamification' && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 1, opacity: 1, y: 0 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-yellow-900/20"
              >
                {/* Decoración Premium */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="w-20 h-20 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 flex items-center justify-center mb-8 shadow-inner relative">
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.3)]"></div>
                    <Trophy className="w-10 h-10 text-yellow-400" />
                  </div>

                  <div className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">Próximamente</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Gamificación Competitiva</h3>
                  
                  <div className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl font-light space-y-4 text-left">
                    <p>Estamos desarrollando un sistema competitivo de alto nivel donde podrás enfrentarte a estudiantes de todo el país en <strong className="text-white font-semibold">desafíos cronometrados en tiempo real</strong>.</p>
                    <p>Compite en el modo VS contra usuarios que hayan seleccionado la misma temática y el mismo límite de tiempo, poniendo a prueba tu velocidad, precisión y capacidad de respuesta bajo presión.</p>
                    <p>Escala posiciones en el ranking nacional, supera récords, gana copas, aumenta tu experiencia y demuestra quién tiene el mejor <span className="text-yellow-400 font-medium">rendimiento estratégico</span> dentro de Performance Icfes Pro.</p>
                    <p>Cada enfrentamiento será una oportunidad para medir tu nivel frente a otros estudiantes y evolucionar en una experiencia diseñada para convertir la preparación académica en una competencia inteligente, dinámica y altamente adictiva.</p>
                  </div>

                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="mt-10 px-8 py-3 bg-white text-zinc-950 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10"
                  >
                    Me apunto
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {selectedFeature === 'feedback' && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 1, opacity: 1, y: 0 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-green-900/20"
              >
                {/* Decoración Premium */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="w-20 h-20 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 flex items-center justify-center mb-8 shadow-inner relative">
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>
                    <BookOpen className="w-10 h-10 text-green-400" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Retroalimentación Inteligente con IA</h3>
                  
                  <div className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl font-light space-y-4 text-left">
                    <p>Nuestro sistema de retroalimentación avanzada, impulsado por un agente de inteligencia artificial especializado en pruebas ICFES, ha sido diseñado para acompañarte estratégicamente durante todo tu proceso de preparación.</p>
                    <p>Más que mostrarte si acertaste o fallaste, <strong className="text-white font-semibold">analiza cada una de tus respuestas para detectar patrones de error</strong>, identificar debilidades y ayudarte a fortalecer tu razonamiento de forma progresiva.</p>
                    <p>Después de cada ejercicio, recibirás una explicación clara, precisa y fácil de comprender sobre por qué tu respuesta fue incorrecta, cuál era la opción correcta y qué lógica debías utilizar para resolverla correctamente.</p>
                    <p>El objetivo es entrenar tu mente para responder con mayor <span className="text-green-400 font-medium">seguridad, precisión y criterio</span> bajo presión, llevándote a un nivel cada vez más sólido y competitivo dentro del examen real.</p>
                  </div>

                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="mt-10 px-8 py-3 bg-white text-zinc-950 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10"
                  >
                    Descubrir más
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Buttons */}
        {!showQuickConfig ? (
          <motion.div 
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full justify-center"
          >
            <button
              onClick={() => handleStart('diagnostic')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              Prueba Diagnóstica Adaptativa
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setShowQuickConfig(true)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              Prueba Rápida por Materia
              <Zap className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleStart('global')}
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-white text-zinc-100 dark:text-zinc-900 px-6 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              Simulacro Global Completo
              <BookOpen className="w-5 h-5" />
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Configurar Prueba Rápida</h3>
              <button onClick={() => setShowQuickConfig(false)} className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-left mb-4">
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Selecciona la materia:</label>
              <select 
                value={quickSubject}
                onChange={(e) => setQuickSubject(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-shadow text-zinc-900 dark:text-zinc-100"
              >
                {SUBJECTS.map(subj => (
                  <option key={subj} value={subj}>{subj}</option>
                ))}
              </select>
            </div>

            <div className="text-left mb-8">
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Cantidad de preguntas:</label>
              <div className="flex gap-2">
                {[5, 10, 15, 20].map(num => (
                  <button
                    key={num}
                    onClick={() => setQuickCount(num)}
                    className={`flex-1 py-2 rounded-xl font-medium transition-colors ${
                      quickCount === num 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleStart('quick', { subject: quickSubject, count: quickCount })}
              className="w-full flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all active:scale-95"
            >
              Iniciar Práctica
              <Zap className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {isLoggedIn && testHistory && testHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full mt-4"
          >
            <HistoryChart testHistory={testHistory} />
          </motion.div>
        )}
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all ${onClick ? 'cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1' : 'hover:shadow-md'}`}
    >
      <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
