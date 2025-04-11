import React, { useState, useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import { subjects } from "../data/quizData";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/contexts/ThemeContext";

const Quiz: React.FC = () => {
  const {
    selectedSubject,
    selectedWeek,
    currentQuestion,
    userProgress,
    nextQuestion,
    prevQuestion,
    selectWeek,
    answerQuestion,
    resetQuiz,
  } = useQuiz();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  useEffect(() => {
    setSelectedOption(null);
    setShowAnswer(false);
  }, [currentQuestion]);

  if (!selectedSubject || !selectedWeek) return null;

  const subject = subjects.find((s) => s.id === selectedSubject);
  if (!subject) return null;

  const week = subject.weeks.find((w) => w.id === selectedWeek);
  if (!week) return null;

  const question = week.questions[currentQuestion - 1];
  const isAnswered = userProgress[selectedSubject]?.[selectedWeek]?.answered.includes(question.id);
  const isCorrect = userProgress[selectedSubject]?.[selectedWeek]?.correct.includes(question.id);
  
  const correctAnswers = userProgress[selectedSubject]?.[selectedWeek]?.correct.length || 0;
  const totalAnswered = userProgress[selectedSubject]?.[selectedWeek]?.answered.length || 0;

  const handleOptionClick = (optionIndex: number) => {
    if (showAnswer) return;
    
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    
    const correct = optionIndex === question.correctOption;
    answerQuestion(selectedSubject, selectedWeek, question.id, correct);
    
    setTimeout(() => {
      if (currentQuestion < 10) {
        nextQuestion();
      } else {
        setShowCompletionDialog(true);
      }
    }, 1000);
  };

  const handleNextWeek = () => {
    setShowCompletionDialog(false);
    const nextWeekId = selectedWeek + 1;
    if (subject.weeks.find(w => w.id === nextWeekId)) {
      selectWeek(nextWeekId);
    } else {
      selectWeek(null);
    }
  };

  const handlePrev = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    prevQuestion();
  };

  const getOptionColor = (optionIndex: number) => {
    if (!showAnswer) return "";
    
    if (optionIndex === question.correctOption) {
      return "bg-primary/20 border-primary text-primary-foreground";
    }
    
    if (optionIndex === selectedOption && optionIndex !== question.correctOption) {
      return "bg-destructive/20 border-destructive text-destructive-foreground";
    }
    
    return "";
  };

  return (
    <div className="w-full py-6 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <Button
            variant="outline"
            className="flex items-center space-x-2 border-border text-foreground hover:bg-secondary"
            onClick={() => selectWeek(null)}
          >
            <ArrowLeft size={16} />
            <span className={isMobile ? "hidden" : "inline"}>Back to Weeks</span>
          </Button>
          
          <div className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
            {subject.name} - {week.title}
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
          <div className="h-1 bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(currentQuestion / 10) * 100}%` }}
            ></div>
          </div>
          
          <div className="p-4 lg:p-6">
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <h3 className="text-foreground font-medium">Question {currentQuestion} of 10</h3>
              {isAnswered && (
                <div className="flex items-center">
                  {isCorrect ? (
                    <span className="flex items-center text-primary text-sm">
                      <CheckCircle size={16} className="mr-1" /> Correct
                    </span>
                  ) : (
                    <span className="flex items-center text-destructive text-sm">
                      <XCircle size={16} className="mr-1" /> Incorrect
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <motion.div
              key={`${selectedWeek}-${currentQuestion}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 lg:mb-8"
            >
              <h2 className="text-lg lg:text-xl font-medium text-foreground mb-4 lg:mb-6">
                {question.text}
              </h2>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-3 lg:p-4 border rounded-lg transition-all ${
                      selectedOption === index
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    } ${getOptionColor(index)}`}
                    onClick={() => handleOptionClick(index)}
                    disabled={showAnswer}
                  >
                    <div className="flex items-start">
                      <span className="w-6 h-6 rounded-full border border-muted-foreground/50 flex items-center justify-center mr-3 flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
            
            <div className="flex justify-between pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentQuestion === 1}
                className="flex items-center border-border hover:bg-secondary"
              >
                <ArrowLeft size={16} className="mr-2" /> Previous
              </Button>
              
              {currentQuestion === 10 && totalAnswered === 10 && (
                <Button
                  onClick={() => setShowCompletionDialog(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center"
                >
                  Finish Quiz
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 lg:mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${
                  index + 1 === currentQuestion
                    ? "bg-primary"
                    : userProgress[selectedSubject]?.[selectedWeek]?.answered.includes(index + 1)
                    ? userProgress[selectedSubject]?.[selectedWeek]?.correct.includes(index + 1)
                      ? "bg-primary/70"
                      : "bg-destructive/70"
                    : "bg-muted"
                }`}
                whileHover={{ scale: 1.2 }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showCompletionDialog} onOpenChange={setShowCompletionDialog}>
        <DialogContent className="bg-card border-border text-foreground sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-xl">
              <Trophy className="mr-2 h-6 w-6 text-primary" />
              Quiz Completed!
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              You've completed {subject.name} - {week.title}
            </DialogDescription>
          </DialogHeader>
          
          <div className="text-center py-6">
            <div className="text-4xl font-bold mb-2 text-primary">
              {correctAnswers} / 10
            </div>
            <p className="text-muted-foreground">
              {correctAnswers === 10 ? "Perfect score! Amazing work!" : 
               correctAnswers >= 8 ? "Great job! Almost perfect!" :
               correctAnswers >= 6 ? "Good work! Keep practicing!" :
               "Keep studying! You'll do better next time!"}
            </p>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowCompletionDialog(false)}
              className="flex-1 border-border hover:bg-secondary"
            >
              Review Answers
            </Button>
            <Button 
              onClick={handleNextWeek}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Next Week
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Quiz;