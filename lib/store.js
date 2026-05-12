import { create } from 'zustand'
import { mockQuestions } from './mock-data'
import { supabase } from './supabase'

const SUBJECTS_ORDER = ['Matemáticas', 'Lectura Crítica', 'Ciencias Naturales', 'Sociales y Ciudadanas', 'Inglés'];

const getNextDifficulty = (current, isCorrect) => {
  const isEasy = (d) => ['fácil', 'pre a1', 'a1'].includes(d?.toLowerCase());
  const isMedium = (d) => ['media', 'medio', 'a2'].includes(d?.toLowerCase());
  const isHard = (d) => ['difícil', 'b1'].includes(d?.toLowerCase());

  if (isCorrect) {
    if (isEasy(current)) return 'Media';
    if (isMedium(current)) return 'Difícil';
    return 'Difícil'; 
  } else {
    if (isHard(current)) return 'Media';
    if (isMedium(current)) return 'Fácil';
    return 'Fácil'; 
  }
};

const getAvailableQuestion = (subject, targetDifficulty, usedIds) => {
  const subjectQuestions = mockQuestions.filter(q => q.subject === subject && !usedIds.includes(q.id));
  
  const isEasy = (d) => ['fácil', 'pre a1', 'a1'].includes(d?.toLowerCase());
  const isMedium = (d) => ['media', 'medio', 'a2'].includes(d?.toLowerCase());
  const isHard = (d) => ['difícil', 'b1'].includes(d?.toLowerCase());

  let match = subjectQuestions.find(q => {
    if (targetDifficulty === 'Fácil') return isEasy(q.difficulty);
    if (targetDifficulty === 'Media') return isMedium(q.difficulty);
    if (targetDifficulty === 'Difícil') return isHard(q.difficulty);
    return false;
  });

  if (!match && subjectQuestions.length > 0) {
    match = subjectQuestions[0];
  }
  return match;
};

export const useSimuladorStore = create((set, get) => ({
  // Simulation State
  testMode: 'global', // 'global' | 'diagnostic'
  questionQueue: mockQuestions,
  currentQuestionIndex: 0,
  timeRemaining: 16200, // 4.5 hours in seconds for global
  answers: {}, 
  isFinished: false,
  
  diagnosticState: {
    currentSubjectIndex: 0,
    questionsAnsweredInSubject: 0,
    currentDifficulty: 'Media',
    usedIds: []
  },

  // Gamification State
  totalXP: 0,
  currentLevel: 1,
  streakDays: 0,
  testsCompleted: 0,
  lastScore: 0,
  lastSubjectScores: {},
  testHistory: [],
  username: "",

  fetchProfile: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;
      
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
        
      if (error) throw error;
        
      const { data: history, error: historyError } = await supabase
        .from('test_results')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: true });

      if (profile) {
        set({
          totalXP: profile.total_xp || 0,
          currentLevel: profile.current_level || 1,
          streakDays: profile.streak_days || 0,
          testsCompleted: profile.tests_completed || 0,
          lastScore: profile.last_score || 0,
          lastSubjectScores: profile.last_subject_scores || {},
          testHistory: history || [],
          username: profile.username || ""
        });
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  },

  startSimulador: (mode, options = {}) => set((state) => {
    if (mode === 'diagnostic') {
      const firstSubject = SUBJECTS_ORDER[0];
      const usedIds = [];
      const firstQ = getAvailableQuestion(firstSubject, 'Media', usedIds);
      if (firstQ) usedIds.push(firstQ.id);

      return {
        testMode: 'diagnostic',
        questionQueue: firstQ ? [firstQ] : [],
        currentQuestionIndex: 0,
        timeRemaining: 5400, // 1.5 hours
        answers: {},
        isFinished: false,
        diagnosticState: {
          currentSubjectIndex: 0,
          questionsAnsweredInSubject: 0, // Number of questions completely answered
          currentDifficulty: 'Media',
          usedIds: usedIds
        }
      };
    } else if (mode === 'quick') {
      const subjectQuestions = mockQuestions.filter(q => q.subject === options.subject);
      // Shuffle
      const shuffled = [...subjectQuestions].sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, options.count || 10);
      const totalTime = selectedQuestions.length * 120; // 2 mins per question

      return {
        testMode: 'quick',
        questionQueue: selectedQuestions,
        currentQuestionIndex: 0,
        timeRemaining: totalTime,
        answers: {},
        isFinished: false
      };
    } else {
      return {
        testMode: 'global',
        questionQueue: mockQuestions,
        currentQuestionIndex: 0,
        timeRemaining: 16200,
        answers: {},
        isFinished: false
      };
    }
  }),

  setAnswer: (questionId, answerId) => 
    set((state) => ({
      answers: { ...state.answers, [questionId]: answerId }
    })),

  nextQuestion: () => 
    set((state) => {
      if (state.testMode === 'global' || state.testMode === 'quick') {
        return { currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questionQueue.length - 1) };
      } else {
        // Diagnostic mode
        const currentQ = state.questionQueue[state.currentQuestionIndex];
        const isCorrect = state.answers[currentQ.id] === currentQ.correctAnswer;
        
        let { currentSubjectIndex, questionsAnsweredInSubject, currentDifficulty, usedIds } = state.diagnosticState;
        
        // Calculate new difficulty based on the answer
        const newDifficulty = getNextDifficulty(currentDifficulty, isCorrect);
        questionsAnsweredInSubject++;

        // Move to next subject if 6 questions reached
        if (questionsAnsweredInSubject >= 6) {
          currentSubjectIndex++;
          questionsAnsweredInSubject = 0;
          currentDifficulty = 'Media'; // reset for next subject
        } else {
          currentDifficulty = newDifficulty;
        }

        const nextSubject = SUBJECTS_ORDER[currentSubjectIndex];
        if (!nextSubject) return {}; // No more subjects

        const nextQ = getAvailableQuestion(nextSubject, currentDifficulty, usedIds);
        if (nextQ) {
          const newUsedIds = [...usedIds, nextQ.id];
          
          return {
            questionQueue: [...state.questionQueue, nextQ],
            currentQuestionIndex: state.currentQuestionIndex + 1,
            diagnosticState: {
              currentSubjectIndex,
              questionsAnsweredInSubject,
              currentDifficulty,
              usedIds: newUsedIds
            }
          };
        }
        return {};
      }
    }),

  prevQuestion: () => 
    set((state) => ({
      currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
    })),

  decrementTime: () => 
    set((state) => {
      if (state.timeRemaining <= 1) return { timeRemaining: 0, isFinished: true }
      return { timeRemaining: state.timeRemaining - 1 }
    }),

  finishSimulador: async (finalScore, earnedXP, subjectScores, correctAnswers, totalQuestions) => {
    const state = get();
    const newTotalXP = state.totalXP + earnedXP;
    const newTestsCompleted = state.testsCompleted + 1;
    
    // Calculate if they leveled up (e.g. currentLevel * 500)
    let newLevel = state.currentLevel;
    let nextLevelXP = newLevel * 500;
    let tempXP = newTotalXP;
    while(tempXP >= nextLevelXP && newLevel < 100) {
      newLevel++;
      nextLevelXP = newLevel * 500;
    }

    // Update local state first for fast UI
    set({ 
      isFinished: true,
      lastScore: finalScore,
      lastSubjectScores: subjectScores || {},
      totalXP: newTotalXP,
      currentLevel: newLevel,
      testsCompleted: newTestsCompleted
    });

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // 1. Update Profile in Supabase
        await supabase.from('profiles').update({
          total_xp: newTotalXP,
          current_level: newLevel,
          last_score: finalScore,
          last_subject_scores: subjectScores || {},
          tests_completed: newTestsCompleted
        }).eq('id', session.user.id);

        // 2. Insert Test Result
        if (correctAnswers !== undefined && totalQuestions !== undefined) {
          const newResult = {
            user_id: session.user.id,
            test_mode: state.testMode,
            score: finalScore,
            subject_scores: subjectScores || {},
            total_questions: totalQuestions,
            correct_answers: correctAnswers,
            created_at: new Date().toISOString()
          };

          await supabase.from('test_results').insert(newResult);
          
          set({ testHistory: [...state.testHistory, newResult] });
        }
      }
    } catch (err) {
      console.error("Error saving to Supabase:", err);
    }
  },

  resetSimulador: () => 
    set({ 
      currentQuestionIndex: 0, 
      timeRemaining: 16200,
      answers: {},
      isFinished: false,
      questionQueue: mockQuestions,
      testMode: 'global'
    }),
}))
