
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubjectSelection from "../components/SubjectSelection";
import WeekSelection from "../components/WeekSelection";
import Quiz from "../components/Quiz";
import { useQuiz } from "../contexts/QuizContext";
import { useTheme } from "../contexts/ThemeContext";

const Index = () => {
  const { selectedSubject, selectedWeek } = useQuiz();
  const { theme } = useTheme();

  const renderContent = () => {
    if (selectedSubject && selectedWeek) {
      return <Quiz />;
    } else if (selectedSubject) {
      return <WeekSelection />;
    } else {
      return <SubjectSelection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-F6F8D5 to-98D2C0 dark:from-[#0B2447] dark:bg-background :to-[#19376D] dark:text-[#A5D7E8]">
      <Header />
      <main className="flex-grow pt-16 w-full">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default Index;
