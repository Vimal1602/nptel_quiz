
import React, { createContext, useContext, useState, useEffect } from "react";
import { Subject, UserProgress, getInitialUserProgress } from "../data/quizData";

interface QuizContextType {
  selectedSubject: string | null;
  selectedWeek: number | null;
  currentQuestion: number;
  userProgress: UserProgress;
  selectSubject: (subjectId: string) => void;
  selectWeek: (weekId: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  setCurrentQuestion: (questionId: number) => void;
  answerQuestion: (subjectId: string, weekId: number, questionId: number, correct: boolean) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    return savedProgress ? JSON.parse(savedProgress) : getInitialUserProgress();
  });

  // useEffect(() => {
  //   localStorage.setItem("quizProgress", JSON.stringify(userProgress));
  // }, [userProgress]);

  const selectSubject = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setSelectedWeek(null);
    setCurrentQuestion(1);
  };

  const selectWeek = (weekId: number) => {
    setSelectedWeek(weekId);
    setCurrentQuestion(1);
  };

  const nextQuestion = () => {
    if (currentQuestion < 10) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const answerQuestion = (subjectId: string, weekId: number, questionId: number, correct: boolean) => {
    setUserProgress((prev) => {
      const newProgress = { ...prev };
      
      // Initialize if not exists
      if (!newProgress[subjectId]) {
        newProgress[subjectId] = {};
      }
      if (!newProgress[subjectId][weekId]) {
        newProgress[subjectId][weekId] = { answered: [], correct: [] };
      }
      
      // Add to answered if not already there
      if (!newProgress[subjectId][weekId].answered.includes(questionId)) {
        newProgress[subjectId][weekId].answered.push(questionId);
      }
      
      // Add to correct if correct and not already there
      if (correct && !newProgress[subjectId][weekId].correct.includes(questionId)) {
        newProgress[subjectId][weekId].correct.push(questionId);
      }
      
      return newProgress;
    });
  };

  const resetQuiz = () => {
    setSelectedSubject(null);
    setSelectedWeek(null);
    setCurrentQuestion(1);
  };

  return (
    <QuizContext.Provider
      value={{
        selectedSubject,
        selectedWeek,
        currentQuestion,
        userProgress,
        selectSubject,
        selectWeek,
        nextQuestion,
        prevQuestion,
        setCurrentQuestion,
        answerQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
