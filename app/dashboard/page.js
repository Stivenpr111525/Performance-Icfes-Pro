"use client";

import { useState, useEffect } from "react";
import { useSimuladorStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Flame, Target, BookOpen, ChevronRight, Play, Home, Sparkles, X, CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import HistoryChart from "@/components/simulador/HistoryChart";

export default function DashboardPage() {
  const router = useRouter();
  const { totalXP, currentLevel, streakDays, testsCompleted, lastScore, lastSubjectScores, resetSimulador, answers, questionQueue, fetchProfile, testHistory } = useSimuladorStore();
  const [isAIAssistantExpanded, setIsAIAssistantExpanded] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        await fetchProfile();
        setIsLoadingAuth(false);
      }
    };
    checkAuth();
  }, [router, fetchProfile]);

  // Simple logic to calculate next level XP requirement
  const xpForNextLevel = currentLevel * 500;
  const xpProgress = (totalXP / xpForNextLevel) * 100;

  const incorrectQuestions = (questionQueue || []).filter(q => q && answers[q.id] !== q.correctAnswer);

  const handleStartNewTest = () => {
    resetSimulador();
    router.push('/simulador');
  };

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tu Panel de Progreso</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Sigue así, estás cada vez más cerca de tu objetivo.</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-50 px-6 py-3 rounded-full font-semibold transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              Menú Principal
            </button>
            <button 
              onClick={handleStartNewTest}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-sm shadow-blue-500/20"
            >
              <Play className="w-4 h-4 fill-current" />
              Nuevo Simulacro
            </button>
          </div>
        </header>

        {/* Level & XP Card */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-32 h-32 rounded-full border-8 border-zinc-100 dark:border-zinc-800 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-inner relative">
            <span className="text-4xl font-bold text-white">{currentLevel}</span>
            <div className="absolute -bottom-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Nivel
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="flex justify-between items-end mb-3">
              <div>
                <h2 className="text-2xl font-bold">Estudiante Promesa</h2>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">Faltan {xpForNextLevel - totalXP} XP para el Nivel {currentLevel + 1}</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalXP}</span>
                <span className="text-zinc-500 dark:text-zinc-400 font-medium ml-1">/ {xpForNextLevel} XP</span>
              </div>
            </div>
            <div className="w-full h-4 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: `${Math.min(xpProgress, 100)}%` }}
                animate={{ width: `${Math.min(xpProgress, 100)}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Subject Breakdown */}
        {Object.keys(lastSubjectScores || {}).length > 0 && (
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            <h2 className="text-xl font-bold mb-6">Desempeño por Materia (Último Intento)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(lastSubjectScores).map(([subject, score]) => {
                const subjectQuestions = (questionQueue || []).filter(q => q && q.subject === subject);
                const totalInSubject = subjectQuestions.length;
                const correctInSubject = subjectQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
                const failedInSubject = totalInSubject - correctInSubject;

                return (
                  <div key={subject} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-zinc-700 dark:text-zinc-300">{subject}</span>
                      <div className={`flex items-baseline gap-1.5 ${score >= 70 ? "text-green-600 dark:text-green-400" : score >= 40 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400"}`}>
                        <span className="font-bold text-base">{score}%</span>
                        {totalInSubject > 0 && (
                          <span className="text-xs opacity-75 font-semibold">
                            ({correctInSubject}/{totalInSubject})
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: `${score}%` }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${
                          score >= 70 ? "bg-green-500" : score >= 40 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* AI Assistant Inline Section */}
        {incorrectQuestions.length > 0 && (
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-purple-200 dark:border-purple-900/50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Coach IA: Plan de Mejora</h2>
                  <p className="text-purple-100 font-medium">Encontramos {incorrectQuestions.length} oportunidades para subir tu puntaje.</p>
                </div>
              </div>
              <p className="text-purple-50 text-lg leading-relaxed max-w-3xl mb-6">
                Los errores son el mapa hacia tu éxito. No te desanimes por este resultado; hemos analizado detalladamente en qué fallaste. Lee la explicación paso a paso de cada error para asegurar que la próxima vez elijas la opción correcta.
              </p>
              
              <button 
                onClick={() => setIsAIAssistantExpanded(!isAIAssistantExpanded)}
                className="flex items-center gap-2 bg-white text-purple-700 hover:bg-zinc-100 px-6 py-3 rounded-full font-bold transition-all shadow-md active:scale-95"
              >
                {isAIAssistantExpanded ? "Ocultar Análisis" : "Ver Inspección Detallada"}
                {isAIAssistantExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {/* Errors List */}
            <AnimatePresence>
              {isAIAssistantExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="p-8 space-y-6 bg-zinc-50 dark:bg-zinc-950/30 overflow-hidden"
                >
                  {incorrectQuestions.map((q, idx) => {
                    const userAnswerId = answers[q.id];
                    const userAnswerObj = q.options.find(o => o.id === userAnswerId);
                    const correctAnswerObj = q.options.find(o => o.id === q.correctAnswer);

                    return (
                      <div key={idx} className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
                        <div className="p-5 border-b border-zinc-100 dark:border-zinc-800">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-bold uppercase tracking-wider">
                              {q.subject}
                            </span>
                          </div>
                          {q.context && <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 italic">"{q.context}"</p>}
                          <p className="font-medium text-zinc-900 dark:text-zinc-100 text-lg">{q.question}</p>
                        </div>

                        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-100 dark:border-zinc-800">
                          {/* User Answer */}
                          <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10">
                            <div className="flex items-center gap-2 mb-2 text-red-600 dark:text-red-400 font-bold text-sm">
                              <XCircle className="w-5 h-5" />
                              Lo que tú respondiste ({userAnswerId || 'Ninguna'})
                            </div>
                            <p className="text-sm text-zinc-800 dark:text-zinc-200">
                              {userAnswerObj ? userAnswerObj.text : "No respondiste esta pregunta."}
                            </p>
                          </div>

                          {/* Correct Answer */}
                          <div className="p-4 rounded-xl border border-green-200 dark:border-green-900/30 bg-green-50 dark:bg-green-900/10">
                            <div className="flex items-center gap-2 mb-2 text-green-600 dark:text-green-400 font-bold text-sm">
                              <CheckCircle2 className="w-5 h-5" />
                              La opción correcta era ({q.correctAnswer})
                            </div>
                            <p className="text-sm text-zinc-800 dark:text-zinc-200">
                              {correctAnswerObj?.text}
                            </p>
                          </div>
                        </div>

                        {/* AI Explanation */}
                        <div className="p-6 bg-purple-50 dark:bg-purple-900/20 border-t border-purple-100 dark:border-purple-900/30">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-purple-200 dark:bg-purple-800 rounded-xl shrink-0 mt-1 shadow-sm">
                              <Sparkles className="w-6 h-6 text-purple-700 dark:text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2 text-lg">Explicación Paso a Paso</h4>
                              <p className="text-base text-purple-900 dark:text-purple-100 leading-relaxed font-medium">
                                {q.explanation || "No hay explicación detallada para esta pregunta."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard 
            icon={<Flame className="w-6 h-6 text-orange-500" />}
            title="Racha Actual"
            value={`${streakDays} Días`}
            delay={0.1}
          />
          <StatCard 
            icon={<Target className="w-6 h-6 text-blue-500" />}
            title="Último Puntaje"
            value={lastScore > 0 ? lastScore : "N/A"}
            subtitle="Puntos ICFES"
            delay={0.2}
          />
          <StatCard 
            icon={<BookOpen className="w-6 h-6 text-green-500" />}
            title="Simulacros"
            value={testsCompleted}
            delay={0.3}
          />
          <StatCard 
            icon={<Award className="w-6 h-6 text-yellow-500" />}
            title="Medallas"
            value="4"
            delay={0.4}
          />
        </div>

        {/* Progress History Chart */}
        {testHistory && testHistory.length > 0 && (
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
          >
            <HistoryChart testHistory={testHistory} />
          </motion.div>
        )}

        {/* Medals/Achievements Section */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Medallas Recientes</h2>
            <button className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center hover:underline">
              Ver todas <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MedalCard active title="Primera Sangre" desc="Completaste tu primer simulacro." icon="🎯" />
            <MedalCard active title="En Llamas" desc="Racha de 3 días seguidos." icon="🔥" />
            <MedalCard active title="Velocista" desc="Terminaste antes del tiempo." icon="⚡" />
            <MedalCard locked title="Mente Maestra" desc="Puntaje superior a 400." icon="🧠" />
          </div>
        </motion.div>

        {/* Mobile CTA */}
        <div className="flex flex-col gap-3 md:hidden w-full">
          <button 
            onClick={handleStartNewTest}
            className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-semibold transition-colors shadow-lg"
          >
            <Play className="w-5 h-5 fill-current" />
            Comenzar Nuevo Simulacro
          </button>
          <button 
            onClick={() => router.push('/')}
            className="w-full flex justify-center items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-50 px-6 py-4 rounded-full font-semibold transition-colors shadow-lg"
          >
            <Home className="w-5 h-5" />
            Menú Principal
          </button>
        </div>

      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-start gap-4"
    >
      <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl">
        {icon}
      </div>
      <div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">{title}</p>
        <div className="flex items-baseline gap-1 mt-1">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{value}</h3>
          {subtitle && <span className="text-xs font-medium text-zinc-400">{subtitle}</span>}
        </div>
      </div>
    </motion.div>
  );
}

function MedalCard({ active, locked, title, desc, icon }) {
  return (
    <div className={`p-4 rounded-2xl border flex flex-col items-center text-center gap-2 transition-all ${
      locked 
        ? "bg-zinc-50 dark:bg-zinc-950 border-zinc-100 dark:border-zinc-900 opacity-60 grayscale" 
        : "bg-white dark:bg-zinc-900 border-yellow-200 dark:border-yellow-900/30 shadow-sm"
    }`}>
      <div className="text-4xl mb-1">{icon}</div>
      <h4 className="font-bold text-sm">{title}</h4>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{desc}</p>
    </div>
  );
}
