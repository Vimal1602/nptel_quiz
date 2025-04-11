
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VisitorProvider } from "./contexts/VisitorContext";
import { QuizProvider } from "./contexts/QuizContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Router>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <VisitorProvider>
            <QuizProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </QuizProvider>
          </VisitorProvider>
        </TooltipProvider>
      </Router>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
