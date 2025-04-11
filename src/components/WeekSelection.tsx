import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import { subjects } from "../data/quizData";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WeekSelection: React.FC = () => {
  const { selectedSubject, selectWeek, resetQuiz, userProgress } = useQuiz();

  if (!selectedSubject) {
    return null;
  }

  const subject = subjects.find((s) => s.id === selectedSubject);

  if (!subject) {
    return null;
  }

  const weekProgress = userProgress[selectedSubject] || {};

  return (
    <div className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button
            variant="outline"
            className="flex items-center space-x-2 border-border text-foreground hover:bg-secondary"
            onClick={resetQuiz}
          >
            <ArrowLeft size={16} />
            <span>Back to Subjects</span>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-primary-foreground mb-4">
            {subject.name}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a week to start practicing. Each week contains 10 questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subject.weeks.map((week) => {
            const answered = weekProgress[week.id]?.answered.length || 0;
            const correct = weekProgress[week.id]?.correct.length || 0;
            const progress = (answered / 10) * 100;
            
            return (
              <motion.div
                key={week.id}
                whileHover={{ scale: 1.03 }}
                className="p-4 bg-card rounded-lg shadow-sm border border-border cursor-pointer hover:shadow-md transition-all duration-300"
                onClick={() => selectWeek(week.id)}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-primary-foreground">{week.title}</h3>
                  {progress === 100 && (
                    <div className="bg-secondary w-6 h-6 rounded-full flex items-center justify-center text-primary">
                      <Check size={14} />
                    </div>
                  )}
                </div>
                
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                  <span>{answered}/10 answered</span>
                  <span>{correct}/{answered || 0} correct</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeekSelection;