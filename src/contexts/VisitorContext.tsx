
import React, { createContext, useContext, useState, useEffect } from "react";

interface VisitorContextType {
  visitorCount: number;
}

const VisitorContext = createContext<VisitorContextType>({ visitorCount: 0 });

export const useVisitorCount = () => useContext(VisitorContext);

export const VisitorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visitorCount, setVisitorCount] = useState(0);
  
  useEffect(() => {
    // In a real app, this would be a call to an analytics API
    // For demo purposes, we're using localStorage and a random increment
    const storedCount = localStorage.getItem("visitorCount");
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Add a random number between 1-5 to simulate new visitors
    const newCount = count + Math.floor(Math.random() * 5) + 1;
    setVisitorCount(newCount);
    localStorage.setItem("visitorCount", newCount.toString());
  }, []);

  return (
    <VisitorContext.Provider value={{ visitorCount }}>
      {children}
    </VisitorContext.Provider>
  );
};
