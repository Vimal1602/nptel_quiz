import React from "react";
import { subjects } from "../data/quizData";
import { useQuiz } from "../contexts/QuizContext";
import { BookOpen, TreePine } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SubjectCard: React.FC<{
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}> = ({ id, name, description, icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex flex-col items-center p-8 rounded-xl shadow-md bg-card/80 border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary text-primary-foreground mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary-foreground">{name}</h3>
      <p className="text-sm text-center text-muted-foreground mb-4">{description}</p>
      <Button className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
        Start Learning
      </Button>
    </motion.div>
  );
};

const SubjectSelection: React.FC = () => {
  const { selectSubject } = useQuiz();

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-primary-foreground mb-4">
          Choose Your Subject
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select a subject to start practicing NPTEL questions. Each subject contains
          12 weeks of practice with 10 questions per week.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        <SubjectCard
          id={subjects[0].id}
          name={subjects[0].name}
          description={subjects[0].description}
          icon={<BookOpen size={32} />}
          onClick={() => selectSubject(subjects[0].id)}
        />
        <SubjectCard
          id={subjects[1].id}
          name={subjects[1].name}
          description={subjects[1].description}
          icon={<TreePine size={32} />}
          onClick={() => selectSubject(subjects[1].id)}
        />
      </div>
    </div>
  );
};

export default SubjectSelection;