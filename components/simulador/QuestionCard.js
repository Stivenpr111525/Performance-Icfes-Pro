"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import clsx from "clsx";

export default function QuestionCard({ question, selectedAnswer, onSelect }) {
  if (!question) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 md:p-10"
      >
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            {question.subject}
          </span>
          {question.context && (
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 italic border-l-4 border-blue-500 pl-4 py-1">
              {question.context}
            </p>
          )}
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50 leading-relaxed">
            {question.question}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={clsx(
                  "flex items-center gap-4 w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                  isSelected 
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100" 
                    : "border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                )}
              >
                <div className="flex-shrink-0">
                  {isSelected ? (
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-zinc-400" />
                  )}
                </div>
                <div className="flex-1 text-base md:text-lg">
                  <span className="font-semibold mr-2">{option.id}.</span>
                  {option.text}
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
