import React, { createContext, useContext, useState, useEffect } from "react";

interface VisitorContextType {
  visitorCount: number;
}

const VisitorContext = createContext<VisitorContextType>({ visitorCount: 0 });

export const useVisitorCount = () => useContext(VisitorContext);

export const VisitorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const baseVisitorCount = 1540; // Fake starting number

    const storedCount = localStorage.getItem("visitorCount");
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First-time visitor
      const currentCount = storedCount ? parseInt(storedCount, 10) : baseVisitorCount;

      // Simulate new visitors by adding random increment (1–5)
      const newCount = currentCount + Math.floor(Math.random() * 5) + 1;

      setVisitorCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString());
      localStorage.setItem("hasVisited", "true");
    } else {
      // Returning visitor — just show stored count
      const count = storedCount ? parseInt(storedCount, 10) : baseVisitorCount;
      setVisitorCount(count);
    }
  }, []);

  return (
    <VisitorContext.Provider value={{ visitorCount }}>
      {children}
    </VisitorContext.Provider>
  );
};
