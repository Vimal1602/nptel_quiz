import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary/30 dark:bg-background text-foreground dark:border-t dark:text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Nptel Swayam Quiz</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Practice NPTEL questions on Conservation Economics and Forest
              Management. Prepare for your exams with our comprehensive
              collection of questions. Connect with me if you have any queries.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="text-sm font-light mb-2">Built by</h3>
            <div className="flex flex-col space-y-2 md:items-end">
              <p className="font-semibold">Vimal M</p>
              <p className="text-sm text-muted-foreground">
                VIT, Chennai
              </p>
              <div className="flex space-x-4 mt-2 md:justify-end">
                <a
                  href="https://github.com/Vimal1602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vimalraj19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:your.vimal.m.raj23@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 pt-16 text-center text-sm text-muted-foreground">
        </div>
      </div>
    </footer>
  );
};

export default Footer;