"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSimuladorStore } from "@/lib/store";
import { mockQuestions } from "@/lib/mock-data";
import QuestionCard from "@/components/simulador/QuestionCard";
import { Clock, ArrowRight, ArrowLeft, Flag } from "lucide-react";
import { motion } from "framer-motion";

export default function SimuladorPage() {
  const router = useRouter();
  const { 
    currentQuestionIndex, 
    timeRemaining, 
    answers, 
    setAnswer, 
    nextQuestion, 
    prevQuestion, 
    decrementTime,
    isFinished,
    finishSimulador,
    testMode,
    questionQueue
  } = useSimuladorStore();

  const totalQuestions = questionQueue.length;
  const currentQuestion = questionQueue[currentQuestionIndex];
  
  // Safety check if we somehow passed the end
  useEffect(() => {
    if (!currentQuestion && currentQuestionIndex >= totalQuestions) {
      handleFinish();
    }
  }, [currentQuestion, currentQuestionIndex, totalQuestions]);

  const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;

  // Format time (HH:MM:SS)
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleFinish = () => {
    // Calculate score based on actual questions taken
    let correctAnswers = 0;
    const subjectStats = {};

    questionQueue.forEach((q) => {
      if (!q) return;
      const subj = q.subject || 'General';
      if (!subjectStats[subj]) {
        subjectStats[subj] = { correct: 0, total: 0 };
      }
      subjectStats[subj].total++;

      if (answers[q.id] === q.correctAnswer) {
        correctAnswers++;
        subjectStats[subj].correct++;
      }
    });
    
    // Calculate per-subject scores (0-100)
    const subjectScores = {};
    for (const [subj, stats] of Object.entries(subjectStats)) {
      subjectScores[subj] = Math.round((stats.correct / stats.total) * 100);
    }

    // Scale to ICFES format (0-500) based on taken questions
    const finalScore = Math.round((correctAnswers / questionQueue.length) * 500);
    const earnedXP = correctAnswers * 50; 

    finishSimulador(finalScore, earnedXP, subjectScores, correctAnswers, questionQueue.length);
    router.push('/dashboard');
  };

  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(timer);
  }, [decrementTime, isFinished]);

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium">Calculando tus resultados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Top Navigation & Timer */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 hidden md:block">
          {testMode === 'diagnostic' ? 'Prueba Diagnóstica Adaptativa' : 
           testMode === 'quick' ? 'Prueba Rápida por Materia' : 'Simulacro Global Completo'}
        </div>
        
        <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full font-mono text-lg font-bold text-zinc-800 dark:text-zinc-200">
          <Clock className="w-5 h-5 text-blue-500" />
          {formatTime(timeRemaining)}
        </div>
        
        <button 
          onClick={handleFinish}
          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 px-4 py-2 rounded-full font-medium transition-colors text-sm"
        >
          Finalizar Prueba
        </button>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5">
        <motion.div 
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8 md:py-16 px-4">
        {testMode === 'diagnostic' && (
          <div className="w-full max-w-3xl mb-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-3 rounded-lg text-sm flex items-center gap-2">
            <Flag className="w-4 h-4" />
            <span><strong>Modo Adaptativo:</strong> Tus respuestas son definitivas. No podrás volver a la pregunta anterior.</span>
          </div>
        )}

        <div className="w-full max-w-3xl flex justify-between text-sm text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
          <span>Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
          <span>{progressPercentage.toFixed(0)}% Completado</span>
        </div>

        {currentQuestion && (
          <>
            <div className="w-full max-w-3xl flex gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                {currentQuestion.subject}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                currentQuestion.difficulty?.toLowerCase() === 'fácil' || currentQuestion.difficulty?.toLowerCase() === 'pre a1' || currentQuestion.difficulty?.toLowerCase() === 'a1' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                currentQuestion.difficulty?.toLowerCase() === 'media' || currentQuestion.difficulty?.toLowerCase() === 'medio' || currentQuestion.difficulty?.toLowerCase() === 'a2' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
              }`}>
                {currentQuestion.difficulty || 'Normal'}
              </span>
            </div>

            <QuestionCard 
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onSelect={(answerId) => setAnswer(currentQuestion.id, answerId)}
            />
          </>
        )}

        {/* Bottom Navigation */}
        <div className="w-full max-w-3xl mt-10 flex justify-between items-center">
          {testMode === 'global' ? (
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Anterior
            </button>
          ) : (
            <div></div> /* Spacer for flex-between */
          )}
          
          <button
            onClick={() => {
              if (currentQuestionIndex >= totalQuestions - 1) {
                handleFinish();
              } else {
                nextQuestion();
              }
            }}
            disabled={testMode === 'diagnostic' && (!currentQuestion || !answers[currentQuestion.id])}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestionIndex >= totalQuestions - 1 ? "Finalizar" : "Siguiente"}
            {currentQuestionIndex < totalQuestions - 1 && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </main>
    </div>
  );
}
