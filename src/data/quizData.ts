
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctOption: number;
}

export interface Week {
  id: number;
  title: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  image: string;
  weeks: Week[];
}

// Sample data structure
// export const subjects: Subject[] = [
//   {
//     id: "conservation-economics",
//     name: "Conservation Economics",
//     description: "Study the economic aspects of conservation and environmental protection",
//     image: "/placeholder.svg",
//     weeks: Array.from({ length: 12 }, (_, weekIndex) => ({
//       id: weekIndex + 1,
//       title: `Week ${weekIndex + 1}`,
//       questions: Array.from({ length: 10 }, (_, questionIndex) => ({
//         id: questionIndex + 1,
//         text: `Conservation Economics sample question ${questionIndex + 1} for Week ${weekIndex + 1}?`,
//         options: [
//           `Option A for question ${questionIndex + 1}`,
//           `Option B for question ${questionIndex + 1}`,
//           `Option C for question ${questionIndex + 1}`,
//           `Option D for question ${questionIndex + 1}`,
//         ],
//         correctOption: Math.floor(Math.random() * 4),
//       })),  
//     })),
//   },
//   {
//     id: "forest-management",
//     name: "Forest Management",
//     description: "Learn about sustainable forest management practices and techniques",
//     image: "/placeholder.svg",
//     weeks: Array.from({ length: 12 }, (_, weekIndex) => ({
//       id: weekIndex + 1,
//       title: `Week ${weekIndex + 1}`,
//       questions: Array.from({ length: 10 }, (_, questionIndex) => ({
//         id: questionIndex + 1,
//         text: `Forest Management sample question ${questionIndex + 1} for Week ${weekIndex + 1}?`,
//         options: [
//           `Option A for question ${questionIndex + 1}`,
//           `Option B for question ${questionIndex + 1}`,
//           `Option C for question ${questionIndex + 1}`,
//           `Option D for question ${questionIndex + 1}`,
//         ],
//         correctOption: Math.floor(Math.random() * 4),
//       })),
//     })),
//   },
// ];


export const subjects: Subject[] = [
  {
    id: "conservation-economics",
    name: "Conservation Economics",
    description: "Study the economic aspects of conservation and environmental protection",
    image: "/placeholder.svg",
    weeks: [
      {
        id: 1,
        title: "Week 1",
        questions: [
          {
            id: 1,
            text: "In the word root for conservation, con stands for",
            options: ["together", "to keep", "house", "manage"],
            correctOption: 0,
          },
          {
            id: 2,
            text: "the ability of a single economic actor (or small group of actors) to have a substantial influence on market prices is known as",
            options: ["price power", "market power", "externality", "economic power"],
            correctOption: 1,
          },
          {
            id: 3,
            text: "an economy that allocates resources through the decentralised decisions of many firms and households as they interact in markets for goods and services is a / an",
            options: ["urban economy", "rural economy", "planned economy", "market economy"],
            correctOption: 3,
          },
          {
            id: 4,
            text: "In the word root for conservation, servare stands for",
            options: ["together", "to keep", "house", "manage"],
            correctOption: 1,
          },
          {
            id: 5,
            text: "Which of these is true?",
            options: [
              "Wants are unlimited, resources are unlimited",
              "Wants are limited, resources are limited",
              "Wants are unlimited, resources are limited",
              "Wants are limited, resources are unlimited"
            ],
            correctOption: 2,
          },
          {
            id: 6,
            text: "an increase in the overall level of prices in the economy is",
            options: ["inflation", "deflation", "stagflation", "priceflation"],
            correctOption: 0,
          },
          {
            id: 7,
            text: "Phillips curve shows the relation between",
            options: ["profit and loss", "marked price and selling price", "inflation rate and unemployment rate", "electricity consumption and heat output"],
            correctOption: 2,
          },
          {
            id: 8,
            text: "In the word root for Economics, oikos stands for",
            options: ["together", "to keep", "house", "manage"],
            correctOption: 2,
          },
          {
            id: 9,
            text: "Most of rational thinking occurs",
            options: ["before the margin", "at the margin", "after the margin", "none of these"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "Input costs that do not require an outlay of money are",
            options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"],
            correctOption: 1,
          },
        ],
      },
      {
        id: 2,
        title: "Week 2",
        questions: [
          {
            id: 1,
            text: "Which of these is not a pillar of sustainability?",
            options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"],
            correctOption: 2,
          },
          {
            id: 2,
            text: "The Trinity explosion of 1945 is taken as the beginning of the",
            options: ["Holocene", "Cenocene", "Anthropocene", "Eocene"],
            correctOption: 2,
          },
          {
            id: 3,
            text: "According to Malthusian model,",
            options: [
              "Population grows in geometric progression, food supply increases in arithmetic progression",
              "Population grows in geometric progression, food supply increases in geometric progression",
              "Population grows in arithmetic progression, food supply increases in arithmetic progression",
              "Population grows in arithmetic progression, food supply increases in geometric progression"
            ],
            correctOption: 0,
          },
          {
            id: 4,
            text: "The demographic transition sees a society move from",
            options: [
              "high birth rate, low death rate to low birth rate, high death rate",
              "low birth rate, high death rate to low birth rate, low death rate",
              "high birth rate, high death rate to low birth rate, low death rate",
              "high birth rate, high death rate to low birth rate, high death rate"
            ],
            correctOption: 2,
          },
          {
            id: 5,
            text: "Which of these is a pillar of sustainability",
            options: ["social sustainability", "industrial sustainability", "agricultural sustainability", "trans-boundary sustainability"],
            correctOption: 0,
          },
          {
            id: 6,
            text: "Which of these is a preventive check according to Malthus?",
            options: ["foresight", "vice", "misery", "flood"],
            correctOption: 0,
          },
          {
            id: 7,
            text: "The quantum of human impacts can be written as",
            options: ["I = P + A + T", "I = P X A + T", "I = P X A X T", "I = P + A X T"],
            correctOption: 2,
          },
          {
            id: 8,
            text: "The book 'An Essay on the Principle of Population' was written by",
            options: ["Darwin", "Malthus", "Spencer", "Owens"],
            correctOption: 1,
          },
          {
            id: 9,
            text: "The logistic growth equation curve is",
            options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
            correctOption: 2,
          },
          {
            id: 10,
            text: "Which of these is a positive check according to Malthus?",
            options: ["late marriage", "war", "celibacy", "moral restraint"],
            correctOption: 1,
          },
        ],
      },
      // Week 3, 4, 5 will follow in similar format with real questions inserted...
      // Placeholder for Weeks 6 to 12...
      ...Array.from({ length: 7 }, (_, i) => ({
        id: i + 6,
        title: `Week ${i + 6}`,
        questions: Array.from({ length: 10 }, (_, j) => ({
          id: j + 1,
          text: `Conservation Economics sample question ${j + 1} for Week ${i + 6}?`,
          options: [
            `Option A for question ${j + 1}`,
            `Option B for question ${j + 1}`,
            `Option C for question ${j + 1}`,
            `Option D for question ${j + 1}`,
          ],
          correctOption: Math.floor(Math.random() * 4),
        })),
      })),
    ],
  },
  {
    id: "forest-management",
    name: "Forest Management",
    description: "Learn about sustainable forest management practices and techniques",
    image: "/placeholder.svg",
    weeks: Array.from({ length: 12 }, (_, weekIndex) => ({
      id: weekIndex + 1,
      title: `Week ${weekIndex + 1}`,
      questions: Array.from({ length: 10 }, (_, questionIndex) => ({
        id: questionIndex + 1,
        text: `Forest Management sample question ${questionIndex + 1} for Week ${weekIndex + 1}?`,
        options: [
          `Option A for question ${questionIndex + 1}`,
          `Option B for question ${questionIndex + 1}`,
          `Option C for question ${questionIndex + 1}`,
          `Option D for question ${questionIndex + 1}`,
        ],
        correctOption: Math.floor(Math.random() * 4),
      })),
    })),
  },
];


// Store for user progress
export interface UserProgress {
  [subjectId: string]: {
    [weekId: number]: {
      answered: number[];
      correct: number[];
    };
  };
}

export const getInitialUserProgress = (): UserProgress => {
  const progress: UserProgress = {};
  
  subjects.forEach((subject) => {
    progress[subject.id] = {};
    subject.weeks.forEach((week) => {
      progress[subject.id][week.id] = {
        answered: [],
        correct: [],
      };
    });
  });
  
  return progress;
};
