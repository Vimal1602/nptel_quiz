
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
      {
        id: 3,
        title: "Week 3",
        questions: [
          {
            id: 1,
            text: "___ is used to identify which potential impacts are relevant to assess.",
            options: ["screening", "scoping", "reporting", "review"],
            correctOption: 1,
          },
          {
            id: 2,
            text: "“The potential or capacity of a material to have adverse effects on living organisms” is",
            options: ["vulnerability", "susceptibility", "sustainability", "toxicity"],
            correctOption: 3,
          },
          {
            id: 3,
            text: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
            options: ["recovery", "restoration", "enhancement", "replacement"],
            correctOption: 1,
          },
          {
            id: 4,
            text: "Hydrocarbons derived from incomplete burning of mineral oils are",
            options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
            correctOption: 1,
          },
          {
            id: 5,
            text: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
            options: ["recovery", "restoration", "enhancement", "replacement"],
            correctOption: 3,
          },
          {
            id: 6,
            text: "“The relative effect of exposure” is",
            options: ["vulnerability", "sensitivity", "sustainability", "toxicity"],
            correctOption: 1,
          },
          {
            id: 7,
            text: "___ determines which projects or developments require a full or partial impact assessment study.",
            options: ["screening", "scoping", "reporting", "review"],
            correctOption: 0,
          },
          {
            id: 8,
            text: "“The extent to which a chemical is available for uptake into an organism” is",
            options: ["bioavailability", "bioaccumulation", "biomagnification", "bioresponse"],
            correctOption: 0,
          },
          {
            id: 9,
            text: "Hydrocarbons derived from biological processes acting on mineral oils are",
            options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
            correctOption: 2,
          },
          {
            id: 10,
            text: "“Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead” is a definition for",
            options: ["adaptation", "mitigation", "maladaptation", "malmitigation"],
            correctOption: 2,
          },
        ],
      },
      {
        id: 4,
        title: "Week 4",
        questions: [
          {
            id: 1,
            text: "Which of these is a deterministic factor?",
            options: ["environmental variation", "forest fire", "death rate", "diseases"],
            correctOption: 2,
          },
          {
            id: 2,
            text: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
            options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
            correctOption: 3,
          },
          {
            id: 3,
            text: "The movement of lions across the Gir landscape is an example of",
            options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
            correctOption: 0,
          },
          {
            id: 4,
            text: "The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance. This is the statement for",
            options: ["Liebig’s law of the minimum", "Liebig’s law of the maximum", "Shelford’s law of tolerance", "Shelford’s law of intolerance"],
            correctOption: 2,
          },
          {
            id: 5,
            text: "The regular, seasonal movement of animals, often along fixed routes is called",
            options: ["translocation", "migration", "dispersal", "drifting"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "Which of these is a stochastic factor?",
            options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
            correctOption: 3,
          },
          {
            id: 7,
            text: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
            options: ["translocation", "migration", "dispersal", "drifting"],
            correctOption: 2,
          },
          {
            id: 8,
            text: "Scarcity of food is a",
            options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
            correctOption: 2,
          },
          {
            id: 9,
            text: "Which of these correctly represents the process of habitat fragmentation and loss?",
            options: [
              "Original forest → Dissection → Perforation → Fragmentation → Attrition",
              "Original forest → Dissection → Attrition → Fragmentation → Perforation",
              "Original forest → Dissection → Perforation → Attrition → Fragmentation",
              "Original forest → Dissection → Fragmentation → Perforation → Attrition"
            ],
            correctOption: 0,
          },
          {
            id: 10,
            text: "A root zone treatment plant is an example of",
            options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"],
            correctOption: 0,
          },
        ],
      },
      {
        id: 5,
        title: "Week 5",
        questions: [
          {
            id: 1,
            text: "A measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants is",
            options: ["elasticity", "responsivity", "demand-supply equilibrium", "pricing"],
            correctOption: 0,
          },
          {
            id: 2,
            text: "The ability to produce a good using fewer inputs than another producer is",
            options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
            correctOption: 1,
          },
          {
            id: 3,
            text: "Common resource goods are",
            options: [
              "excludable, rival in consumption",
              "non-excludable, rival in consumption",
              "excludable, non-rival in consumption",
              "non-excludable, non-rival in consumption"
            ],
            correctOption: 1,
          },
          {
            id: 4,
            text: "If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own. This is a statement for",
            options: ["Allocation theorem", "Phillips theorem", "Coase theorem", "Nash theorem"],
            correctOption: 2,
          },
          {
            id: 5,
            text: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is known as",
            options: ["Good development", "Sustainable development", "Futuristic development", "Gandhian development"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "Club goods are",
            options: [
              "excludable, rival in consumption",
              "non-excludable, rival in consumption",
              "excludable, non-rival in consumption",
              "non-excludable, non-rival in consumption"
            ],
            correctOption: 2,
          },
          {
            id: 7,
            text: "Which of these is not a method of internalisation of externalities?",
            options: [
              "tradable pollution permits",
              "charities to social causes",
              "command-and-control policies",
              "free market"
            ],
            correctOption: 3,
          },
          {
            id: 8,
            text: "Private goods are",
            options: [
              "excludable, rival in consumption",
              "non-excludable, rival in consumption",
              "excludable, non-rival in consumption",
              "non-excludable, non-rival in consumption"
            ],
            correctOption: 0,
          },
          {
            id: 9,
            text: "A simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions is the definition of a / an",
            options: ["equation", "model", "philosophy", "process dynamics"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "The impact of one person’s actions on the well-being of a bystander is",
            options: ["actor-observer effect", "externality", "internality", "benefits principle"],
            correctOption: 1,
          },
        ],
      },
      {
        id: 6,
        title: "Week 6",
        questions: [
          {
            id: 1,
            text: "The claim that, other things being equal, the quantity demanded of a good falls when the price of the good rises is a statement of",
            options: ["law of demand", "law of supply", "law of quantity demanded", "law of quantity supplied"],
            correctOption: 0,
          },
          {
            id: 2,
            text: "A legal maximum on the price at which a good can be sold is",
            options: ["price ceiling", "price floor", "selling ceiling", "selling floor"],
            correctOption: 0,
          },
          {
            id: 3,
            text: "A good for which, other things being equal, an increase in income leads to a decrease in demand is",
            options: ["normal good", "inferior good", "Giffen good", "common good"],
            correctOption: 1,
          },
          {
            id: 4,
            text: "A table that shows the relationship between the price of a good and the quantity supplied is",
            options: ["demand table", "demand schedule", "supply table", "supply schedule"],
            correctOption: 3,
          },
          {
            id: 5,
            text: "A graph of the relationship between the price of a good and the quantity demanded is",
            options: ["demand curve", "supply curve", "Laffer's curve", "Phillips curve"],
            correctOption: 0,
          },
          {
            id: 6,
            text: "A table that shows the relationship between the price of a good and the quantity demanded is",
            options: ["demand table", "demand schedule", "supply table", "supply schedule"],
            correctOption: 1,
          },
          {
            id: 7,
            text: "A measure of how much the quantity demanded of one good responds to a change in the price of another good is",
            options: [
              "price elasticity of demand",
              "income elasticity of demand",
              "cross-price elasticity of demand",
              "price elasticity of supply"
            ],
            correctOption: 2,
          },
          {
            id: 8,
            text: "Rice and wheat are",
            options: ["substitutes", "complements", "club goods", "public goods"],
            correctOption: 0,
          },
          {
            id: 9,
            text: "A good for which, other things being equal, an increase in income leads to an increase in demand is",
            options: ["normal good", "inferior good", "Giffen good", "common good"],
            correctOption: 0,
          },
          {
            id: 10,
            text: "A measure of how much the quantity demanded of a good responds to a change in the price of that good is",
            options: [
              "price elasticity of demand",
              "income elasticity of demand",
              "cross-price elasticity of demand",
              "price elasticity of supply"
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: 7,
        title: "Week 7",
        questions: [
          {
            id: 1,
            text: "The price of a good that prevails in the world market for that good is called",
            options: ["export price", "import price", "world price", "domestic price"],
            correctOption: 2,
          },
          {
            id: 2,
            text: "The area between the demand curve and the price is an indicator of",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctOption: 0,
          },
          {
            id: 3,
            text: "The amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctOption: 0,
          },
          {
            id: 4,
            text: "The amount a seller is paid for a good minus the seller’s cost of providing it is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctOption: 1,
          },
          {
            id: 5,
            text: "Value to buyers minus cost to sellers is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctOption: 2,
          },
          {
            id: 6,
            text: "The fall in total surplus that results from a market distortion, such as a tax is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctOption: 3,
          },
          {
            id: 7,
            text: "Laffer's curve shows the relationship between",
            options: [
              "inflation and unemployment",
              "tax size and tax revenue",
              "producer surplus and consumer surplus",
              "tax size and deadweight loss"
            ],
            correctOption: 1,
          },
          {
            id: 8,
            text: "Imposition of a tariff",
            options: [
              "increases producer surplus and government revenue",
              "increases consumer surplus and government revenue",
              "increases producer surplus, consumer surplus and government revenue",
              "increases total surplus"
            ],
            correctOption: 0,
          },
          {
            id: 9,
            text: "The maximum amount that a buyer will pay for a good is known as",
            options: ["willingness to pay", "market demand", "demand curve", "buyer’s surplus"],
            correctOption: 0,
          },
          {
            id: 10,
            text: "The area between the supply curve and the price is an indicator of",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctOption: 1,
          },
        ],
      },
      {
        id: 8,
        title: "Week 8",
        questions: [
          {
            id: 1,
            text: "For a positive consumption externality,",
            options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
            correctOption: 2,
          },
          {
            id: 2,
            text: "For a positive production externality,",
            options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
            correctOption: 0,
          },
          {
            id: 3,
            text: "The direct cost to producers of producing an additional unit of a good is called",
            options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
            correctOption: 0,
          },
          {
            id: 4,
            text: "For a negative production externality,",
            options: ["SMC = PMC + MD", "SMC = PMC - MD", "SMC = PMC", "SMC = PMC - MB"],
            correctOption: 0,
          },
          {
            id: 5,
            text: "The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others is",
            options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "Partying with loud noise is an example of",
            options: [
              "negative production externality",
              "positive production externality",
              "negative consumption externality",
              "positive consumption externality"
            ],
            correctOption: 2,
          },
          {
            id: 7,
            text: "When an individual’s consumption increases the well-being of others, but the individual is not compensated by those others, we have a",
            options: [
              "negative production externality",
              "positive production externality",
              "negative consumption externality",
              "positive consumption externality"
            ],
            correctOption: 3,
          },
          {
            id: 8,
            text: "When a firm’s production increases the well-being of others but the firm is not compensated by those others, we have a",
            options: [
              "negative production externality",
              "positive production externality",
              "negative consumption externality",
              "positive consumption externality"
            ],
            correctOption: 1,
          },
          {
            id: 9,
            text: "When an individual’s consumption reduces the well-being of others who are not compensated by the individual, we have a",
            options: [
              "negative production externality",
              "positive production externality",
              "negative consumption externality",
              "positive consumption externality"
            ],
            correctOption: 2,
          },
          {
            id: 10,
            text: "For a negative consumption externality,",
            options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
            correctOption: 1,
          },
        ],
      },
      {
        id: 9,
        title: "Week 9",
        questions: [
          {
            id: 1,
            text: "Costs that have already been committed and cannot be recovered are",
            options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
            correctOption: 3,
          },
          {
            id: 2,
            text: "Total revenue minus total cost, including both explicit and implicit costs, is a definition of",
            options: ["economic profit", "accounting profit", "profit", "loss"],
            correctOption: 0,
          },
          {
            id: 3,
            text: "The increase in total cost that arises from an extra unit of production is",
            options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
            correctOption: 2,
          },
          {
            id: 4,
            text: "A monopolist firm’s profit is given by",
            options: [
              "(Price - ATC) × Q",
              "(Price - Q) × ATC",
              "(ATC - Q) × Price",
              "Price × Q - ATC"
            ],
            correctOption: 0,
          },
          {
            id: 5,
            text: "Which of the following is true for a competitive firm?",
            options: ["P > MR", "P > MC", "MR > MC", "MR = MC"],
            correctOption: 3,
          },
          {
            id: 6,
            text: "The amount a firm receives for the sale of its output is called",
            options: ["total revenue", "total cost", "profit", "loss"],
            correctOption: 0,
          },
          {
            id: 7,
            text: "When the cost of production for a single firm is much lesser than the cost of production for competitive firms, we have a/an",
            options: ["natural monopoly", "artificial monopoly", "oligopoly", "duopoly"],
            correctOption: 0,
          },
          {
            id: 8,
            text: "Costs that do not vary with the quantity of output produced are",
            options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
            correctOption: 0,
          },
          {
            id: 9,
            text: "Costs that vary with the quantity of output produced are",
            options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "The increase in output that arises from an additional unit of input is",
            options: ["marginal product", "marginal profit", "marginal loss", "marginal cost"],
            correctOption: 0,
          },
        ],
      },
      {
        id: 10,
        title: "Week 10",
        questions: [
          {
            id: 1,
            text: "An absolute level of income set by the government for each family size below which a family is deemed to be in poverty is known as",
            options: ["deprivation line", "poverty line", "deprivation index", "poverty index"],
            correctOption: 1,
          },
          {
            id: 2,
            text: "Absolute poverty depends",
            options: [
              "on income but not on access to social services",
              "not on income but on access to social services",
              "on income and on access to social services",
              "neither on income nor on access to social services"
            ],
            correctOption: 2,
          },
          {
            id: 3,
            text: "The equipment and structures used to produce goods and services is the definition of",
            options: ["tools", "machinery", "capital", "factors of production"],
            correctOption: 2,
          },
          {
            id: 4,
            text: "Above-equilibrium wages paid by firms to increase worker productivity are known as",
            options: ["compensating wage", "efficiency wage", "productivity wage", "retention wage"],
            correctOption: 1,
          },
          {
            id: 5,
            text: "Government policy aimed at protecting people against the risk of adverse events is",
            options: ["Social protection", "Social insurance", "Social security", "Socialism"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "A difference in wages that arises to offset the non-monetary characteristics of different jobs is known as",
            options: [
              "differentiating differential",
              "compensating differential",
              "differentiating integral",
              "compensating integral"
            ],
            correctOption: 1,
          },
          {
            id: 7,
            text: "For a competitive and profit-maximising firm,",
            options: [
              "each factor’s rental price < the value of the marginal product for that factor",
              "each factor’s rental price = the value of the marginal product for that factor",
              "each factor’s rental price > the value of the marginal product for that factor",
              "each factor’s rental price = the value of the average product for that factor"
            ],
            correctOption: 1,
          },
          {
            id: 8,
            text: "A condition characterised by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education and information is known as",
            options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
            correctOption: 0,
          },
          {
            id: 9,
            text: "A condition where a household’s income is lower than the median income in the particular country is known as",
            options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "The increase in the amount of output from an additional unit of labor is",
            options: [
              "marginal product of labour",
              "marginal product of input",
              "average product of labour",
              "average product of input"
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: 11,
        title: "Week 11",
        questions: [
          {
            id: 1,
            text: "An action taken by an uninformed party to induce an informed party to reveal information is known as",
            options: ["signalling", "screening", "informing", "heuristics"],
            correctOption: 1,
          },
          {
            id: 2,
            text: "The part of actual resources that can be developed profitably in the future are",
            options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
            correctOption: 2,
          },
          {
            id: 3,
            text: "The limit on the consumption bundles that a consumer can afford is known as",
            options: ["consumption constraint", "budget constraint", "bundle constraint", "affordability constraint"],
            correctOption: 1,
          },
          {
            id: 4,
            text: "Mental short cut using emotion (gut feeling) to influence the decision is",
            options: ["affect heuristic", "availability heuristic", "effort heuristic", "familiarity heuristic"],
            correctOption: 0,
          },
          {
            id: 5,
            text: "Those resources that are currently being used after surveying, quantification and qualification are",
            options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "The change in consumption that results when a price change moves the consumer along a given indifference curve to a point with a new marginal rate of substitution is known as",
            options: ["income effect", "substitution effect", "indifference effect", "budget effect"],
            correctOption: 1,
          },
          {
            id: 7,
            text: "An inferior good whose demand increases with price is called as",
            options: ["Normal good", "Veblen good", "Giffen good", "Demand good"],
            correctOption: 2,
          },
          {
            id: 8,
            text: "Which of these is not a property of indifference curves?",
            options: [
              "Higher indifference curves are preferred to lower ones",
              "Indifference curves are downward-sloping",
              "Indifference curves cross at right angles",
              "Indifference curves are bowed inwards"
            ],
            correctOption: 2,
          },
          {
            id: 9,
            text: "An action taken by an informed party to reveal private information to an uninformed party is known as",
            options: ["signalling", "screening", "informing", "heuristics"],
            correctOption: 0,
          },
          {
            id: 10,
            text: "Simple strategies or mental processes used to quickly form judgments, make decisions, and find solutions to complex problems is known as",
            options: ["signalling", "screening", "informing", "heuristics"],
            correctOption: 3,
          },
        ],
      },
      {
        id: 12,
        title: "Week 12",
        questions: [
          {
            id: 1,
            text: "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____ .",
            options: ["ecosystem", "state", "country", "habitat"],
            correctOption: 3, // habitat
          },
          {
            id: 2,
            text: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
            options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
            correctOption: 3, // all of the above
          },
          {
            id: 3,
            text: "Soil formation is an example of",
            options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
            correctOption: 2, // supporting service
          },
          {
            id: 4,
            text: "Zoo is an example of",
            options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
            correctOption: 1, // ex-situ conservation
          },
          {
            id: 5,
            text: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
            options: ["least concern species", "keystone species", "flagship species", "extinct species"],
            correctOption: 1, // keystone species
          },
          {
            id: 6,
            text: "Nutrient cycling is an example of",
            options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
            correctOption: 2, // supporting service
          },
          {
            id: 7,
            text: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
            options: ["umbrella species", "keystone species", "flagship species", "extinct species"],
            correctOption: 2, // flagship species
          },
          {
            id: 8,
            text: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
            options: ["very high", "medium", "very low", "non-existent"],
            correctOption: 2, // very low
          },
          {
            id: 9,
            text: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
            options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
            correctOption: 3, // all of the above
          },
          {
            id: 10,
            text: "Biological control of pest populations is an example of",
            options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
            correctOption: 1, // regulating service
          },
        ],
      },

      
    ],
  },
  {
    id: "forest-management",
    name: "Forest Management",
    description: "Learn about sustainable forest management practices and techniques",
    image: "/placeholder.svg",
    weeks: [
      {
        id: 1,
        title: "Week 1",
        questions: [
          {
            id: 1,
            text: "tropical moist forests do not include",
            options: ["broadleaved forests", "wet evergreen forests", "semi-evergreen forests", "moist deciduous forests"],
            correctOption: 0,
          },
          {
            id: 2,
            text: "which of these is not a use value?",
            options: ["direct value", "indirect value", "option value", "existence value"],
            correctOption: 3,
          },
          {
            id: 3,
            text: "the value derived from the knowledge of use of resources by others in the current generation is called",
            options: ["altruistic value", "bequest value", "existence value", "option value"],
            correctOption: 0,
          },
          {
            id: 4,
            text: "montane sub-tropical forests do not involve",
            options: ["broadleaved forests", "pine forests", "semi-evergreen forests", "dry evergreen forests"],
            correctOption: 2,
          },
          {
            id: 5,
            text: "pant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy is",
            options: ["silviculture definition of forests", "FAO definition of forests", "legal definition of forests", "ecological definition of forests"],
            correctOption: 3,
          },
          {
            id: 6,
            text: "which of these is not a consumptive value?",
            options: ["timber", "firewood", "non-timber forest products", "education"],
            correctOption: 3,
          },
          {
            id: 7,
            text: "the term 'forest' originates from",
            options: ["latin foris meaning outside", "greek foris meaning outside", "latin foris meaning trees", "greek foris meaning trees"],
            correctOption: 0,
          },
          {
            id: 8,
            text: "the value of leaving use and non-use values for offspring's or future generation is called",
            options: ["altruistic value", "bequest value", "existence value", "option value"],
            correctOption: 1,
          },
          {
            id: 9,
            text: "which of these is not a forest type found in India?",
            options: ["mediterranean dry", "tropical dry", "montane temperate", "alpine"],
            correctOption: 0,
          },
          {
            id: 10,
            text: "according to the supreme court, the term forest land includes",
            options: [
              "some area recorded as forest in the government record according to ownership",
              "any area recorded as forest in the government record according to ownership",
              "some area recorded as forest in the government record irrespective of ownership",
              "any area recorded as forest in the government record irrespective of ownership"
            ],
            correctOption: 3,
          }
        ]
      },
      {
        id: 2,
        title: "Week 2",
        questions: [
          {
            id: 1,
            text: "in the context of plant nutrition, boron is",
            options: ["macronutrient", "micronutrient", "primary nutrient", "secondary nutrient"],
            correctOption: 1,
          },
          {
            id: 2,
            text: "the art and science of cultivating forest crops is called",
            options: ["foresti-culture", "monoculture", "silviculture", "silvics"],
            correctOption: 2,
          },
          {
            id: 3,
            text: "the climax near Tindi village is being controlled by disturbance by cattle. this is an example of",
            options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
            correctOption: 2,
          },
          {
            id: 4,
            text: "which of these is not a characteristic of pioneer species",
            options: ["ability to grow on bare rocks", "ability to tolerate extreme temperatures", "large size", "short life span"],
            correctOption: 2,
          },
          {
            id: 5,
            text: "which of these depicts correctly the lithosere primary succession?",
            options: [
              "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
              "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
              "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
              "rock --> moss --> crustose lichen --> shrub --> climax"
            ],
            correctOption: 0,
          },
          {
            id: 6,
            text: "the study of life history/ general features of forest crops with respect to environmental factors is called",
            options: ["foresti-culture", "monoculture", "silviculture", "silvics"],
            correctOption: 3,
          },
          {
            id: 7,
            text: "net primary productivity is given by",
            options: ["APAR + LUE", "APAR X LUE", "APAR - LUE", "APAR / LUE"],
            correctOption: 1,
          },
          {
            id: 8,
            text: "a climax caused by wildfires is an example of",
            options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
            correctOption: 3,
          },
          {
            id: 9,
            text: "practical application of scientific, technical and economic principles of forestry comes under which branch of forestry?",
            options: ["forest management", "forest economics", "forest mensuration", "forest protection"],
            correctOption: 0,
          },
          {
            id: 10,
            text: "which of these is abiotic factor",
            options: ["vines", "trees", "reptiles", "water"],
            correctOption: 3,
          }
        ]
      },
      {
        id: 3,
        title: "Week 3",
        questions: [
          {
            id: 1,
            text: "regur is a term for",
            options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
            correctOption: 0,
          },
          {
            id: 2,
            text: "carbonation is an example of",
            options: ["chemical weathering", "physical weathering", "biological weathering", "none of these"],
            correctOption: 0,
          },
          {
            id: 3,
            text: "banger is a type of",
            options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
            correctOption: 1,
          },
          {
            id: 4,
            text: "cryofacturing is an example of",
            options: ["chemical weathering", "physical weathering", "biological weathering", "none of these"],
            correctOption: 1,
          },
          {
            id: 5,
            text: "in soil profile, C refers to",
            options: ["organic surface layer", "topsoil layer", "subsoil layer", "substratum layer"],
            correctOption: 3,
          },
          {
            id: 6,
            text: "vertical arrangement of soil horizon is called",
            options: ["soil texture", "soil structure", "soil profile", "soil science"],
            correctOption: 2,
          },
          {
            id: 7,
            text: "thermal stresses lead to",
            options: ["chemical weathering", "physical weathering", "biological weathering", "none of these"],
            correctOption: 1,
          },
          {
            id: 8,
            text: "khadar is a type of",
            options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
            correctOption: 1,
          },
          {
            id: 9,
            text: "hydrolysis is an example of",
            options: ["chemical weathering", "physical weathering", "biological weathering", "none of these"],
            correctOption: 0,
          },
          {
            id: 10,
            text: "which of these has the highest organic matter content",
            options: ["peaty soil", "alluvial soil", "saline soil", "red and yellow soil"],
            correctOption: 0,
          }
        ]
      },
      {
        id: 4,
        title: "Week 4",
        questions: [
          {
            id: 1,
            text: "Measurement of height based on similar triangles comes under",
            options: ["similar measurement", "dissimilar measurement", "direct measurement", "indirect measurement"],
            correctOption: 3, // indirect measurement
          },
          {
            id: 2,
            text: "For normal form factor, the reference of the base of the cylinder is",
            options: ["base of the tree", "breast height", "10% of tree height", "20% of tree height"],
            correctOption: 2, // 10% of tree height
          },
          {
            id: 3,
            text: "In a triangle, the angle between base and hypotenuse, theta = 60 degrees and the hypotenuse c = 2cm. Find the length of the base b.",
            options: ["0.33", "0.5", "0.75", "1"],
            correctOption: 3, // 1
          },
          {
            id: 4,
            text: "3 trees are located in a sample plot of 15m X 15m. Their DBH are as under: dbh = 25cm, 30cm, 35cm. Find the stand basal area in sq m per Ha.",
            options: ["9.6", "14.6", "21.6", "27.6"],
            correctOption: 0, // 9.6
          },
          {
            id: 5,
            text: "Consider a stand of eucalyptus, trees that are on average 30cm in diameter and spaced on a regular 3m grid. Find the spacing factor.",
            options: ["5", "10", "15", "data insufficient"],
            correctOption: 1, // 10
          },
          {
            id: 6,
            text: "For a tree with DBH = 45.6cm, height = 27m and total stem volume of 1.78 cum, the artificial form factor of the tree is:",
            options: ["0.1", "0.2", "0.3", "0.4"],
            correctOption: 3, // 0.4
          },
          {
            id: 7,
            text: "For the absolute form factor, the reference for the base of the cylinder is",
            options: ["base of the tree", "breast height", "10% of the height", "20% of the height"],
            correctOption: 0, // base of the tree
          },
          {
            id: 8,
            text: "Diameter over bark (DOB), diameter under bark (DUB) and the bark thickness (TB) are related as",
            options: ["dob = dub + tb", "dob = dub - tb", "dob = dub + 2 X tb", "dob = dub -2 X tb"],
            correctOption: 2, // dob = dub + 2 X tb
          },
          {
            id: 9,
            text: "Choose the correct statement",
            options: [
              "for a non-circular section, girth tape over- estimates the sectional area",
              "for a non-circular section, girth tape under- estimates the sectional area",
              "for a non-circular section, girth tape correctly- estimates the sectional area",
              "none of these is a correct statement"
            ],
            correctOption: 0, // over-estimates
          },
          {
            id: 10,
            text: "A tree has DBH of 25cm. Find the basal area in sq m.",
            options: [".049", ".096", ".149", ".195"],
            correctOption: 0, // .049
          },
        ],
      },
      {
        id: 5,
        title: "Week 5",
        questions: [
          {
            id: 1,
            text: "The frequency of flyovers is an indicator of",
            options: ["spatial resolution", "temporal resolution", "spectral resolution", "radiometric resolution"],
            correctOption: 1, // temporal resolution
          },
          {
            id: 2,
            text: "____ is how close the measured values are to correct value",
            options: ["accuracy", "precision", "bias", "variance"],
            correctOption: 0, // accuracy
          },
          {
            id: 3,
            text: "\"This sampling employs a simple rule of selecting every k unit starting with a number chosen at random from 1 to k as the random start.\" We are talking about",
            options: ["simple random sampling", "systemic sampling", "stratified sampling", "multistage sampling"],
            correctOption: 1, // systemic sampling
          },
          {
            id: 4,
            text: "A list of sampling units is called a",
            options: ["frame", "window", "sample", "population"],
            correctOption: 0, // frame
          },
          {
            id: 5,
            text: "Which of these is correct?",
            options: [
              "plane surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)",
              "plane surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)",
              "geodetic surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)",
              "geodetic surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)"
            ],
            correctOption: 3, // geodetic surveying for larger areas
          },
          {
            id: 6,
            text: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
            options: ["simple random sampling", "systematic sampling", "stratified sampling", "multistage sampling"],
            correctOption: 0, // simple random sampling
          },
          {
            id: 7,
            text: "Bathymetric LiDAR uses",
            options: ["far infrared light", "near infrared light", "orange light", "green light"],
            correctOption: 3, // green light
          },
          {
            id: 8,
            text: "IMU stands for",
            options: ["imperial metering unit", "inertial metering unit", "imperial measurement unit", "inertial measurement unit"],
            correctOption: 3, // inertial measurement unit
          },
          {
            id: 9,
            text: "____ is how close the measured values are to each other",
            options: ["accuracy", "precision", "bias", "variance"],
            correctOption: 1, // precision
          },
          {
            id: 10,
            text: "The time of flight of LiDAR is 0.00001 sec. Find the distance of the object from the instrument.",
            options: ["500m", "1000m", "1500m", "2000m"],
            correctOption: 2, // 1500m
          },
        ],
      },
      {
        id: 6,
        title: "Week 6",
        questions: [
          {
            id: 1,
            text: "A scientist uses a trap to capture a monkey. In the context of Wildlife Protection Act 1972,",
            options: [
              "the trap is weapon and capturing is hunting",
              "the trap is not a weapon and capturing is hunting",
              "the trap is weapon and capturing is not hunting",
              "the trap is not a weapon and capturing is not hunting"
            ],
            correctOption: 0,
          },
          {
            id: 2,
            text: "In the formula I = P × A × T, P refers to",
            options: ["professional pressure", "pollution pressure", "population pressure", "none of the above"],
            correctOption: 2,
          },
          {
            id: 3,
            text: "Which of these is a deterministic factor?",
            options: ["environmental variation", "forest fire", "death rate", "diseases"],
            correctOption: 2,
          },
          {
            id: 4,
            text: "Which of these is a stochastic factor?",
            options: ["birth rate", "death rate", "population structure", "forest fire"],
            correctOption: 3,
          },
          {
            id: 5,
            text: "In the formula I = P × A × T, T refers to",
            options: ["transference", "time", "technology", "none of the above"],
            correctOption: 2,
          },
          {
            id: 6,
            text: "Which of these form fire triangle?",
            options: ["fire, air, heat", "fire, oxygen, wood", "fuel, air, wood", "fuel, oxygen, heat"],
            correctOption: 3,
          },
          {
            id: 7,
            text: "A veterinarian uses an immobilising gun to capture a deer. In the context of Wildlife Protection Act 1972,",
            options: [
              "the immobilising gun is a weapon and capturing is hunting",
              "the immobilising gun is not a weapon and capturing is hunting",
              "the immobilising gun is a weapon and capturing is not hunting",
              "the immobilising gun is not a weapon and capturing is not hunting"
            ],
            correctOption: 0,
          },
          {
            id: 8,
            text: "Invasive climbers increase the probability of which of these fire types?",
            options: ["ground fire", "surface fire", "ladder fire", "firestorm"],
            correctOption: 2,
          },
          {
            id: 9,
            text: "The acronym HIPPO does not include",
            options: ["habitat loss", "habitat enhancement", "over-harvesting", "human over-population"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "The acronym HIPPO does not include",
            options: ["habitat loss", "invasive species", "pollination", "pollution"],
            correctOption: 2,
          }
        ],
      },
      {
        id: 7,
        title: "Week 7",
        questions: [
          {
            id: 1,
            text: "A site was clear-cut. Which of these methods of regeneration cannot be used in a short time-frame?",
            options: [
              "natural regeneration",
              "artificial regeneration by direct sowing",
              "artificial regeneration by planting seedlings",
              "artificial regeneration by transplanting trees"
            ],
            correctOption: 0,
          },
          {
            id: 2,
            text: "Average age at which a tree is considered mature for felling is called as",
            options: ["crop age", "felling age", "rotation age", "maturity age"],
            correctOption: 2,
          },
          {
            id: 3,
            text: "Which of these is not a feature of natural regeneration?",
            options: [
              "low cost",
              "less requirement of heavy machinery and labour",
              "preservation of genetic variability",
              "good quality over genetic improvement"
            ],
            correctOption: 3,
          },
          {
            id: 4,
            text: "Ring weeding is primarily a feature of",
            options: [
              "natural regeneration",
              "assisted natural regeneration",
              "artificial regeneration by direct sowing",
              "artificial regeneration by planting seedlings"
            ],
            correctOption: 1,
          },
          {
            id: 5,
            text: "The movement of seeds away from their place of seed production into a new area is called",
            options: ["translocation", "migration", "dispersal", "drifting"],
            correctOption: 2,
          },
          {
            id: 6,
            text: "Which of these is not a feature of natural regeneration?",
            options: [
              "seed consumption by insects and seed feeders",
              "little control over spacing and stand density",
              "long time needed to regenerate forest",
              "high requirement of heavy machinery and labour"
            ],
            correctOption: 3,
          },
          {
            id: 7,
            text: "Which of these is the correct sequence of a silviculture system?",
            options: [
              "stand tending → regeneration → harvesting",
              "harvesting → stand tending → regeneration",
              "harvesting → regeneration → stand tending",
              "regeneration → harvesting → stand tending"
            ],
            correctOption: 2,
          },
          {
            id: 8,
            text: "Which of these is not an advantage of clear felling system?",
            options: [
              "simple system, easy and efficient",
              "allows for establishment of a more uniform crop",
              "increases soil erosion and landslides in hilly areas",
              "mimics natural processes of fire and large scale insect attacks"
            ],
            correctOption: 2,
          },
          {
            id: 9,
            text: "Tending is done during",
            options: [
              "early stage of life",
              "middle stage of life",
              "late stage of life",
              "any stage of life"
            ],
            correctOption: 3,
          },
          {
            id: 10,
            text: "Taungya regeneration is",
            options: [
              "natural regeneration",
              "artificial regeneration with villagers",
              "artificial regeneration with nomadic tribes",
              "artificial regeneration with hunters and gatherers"
            ],
            correctOption: 1,
          }
        ],
      },
      {
        id: 8,
        title: "Week 8",
        questions: [
          {
            id: 1,
            text: "Trees not putting increment are removed during",
            options: [
              "preparatory felling",
              "seeding felling",
              "secondary felling",
              "final felling"
            ],
            correctOption: 0,
          },
          {
            id: 2,
            text: "For a crop with rotation age 120 years. PB-III would have crop age",
            options: [
              "0-30 years",
              "30-60 years",
              "60-90 years",
              "90-120 years"
            ],
            correctOption: 1,
          },
          {
            id: 3,
            text: "Close to nature forestry is a feature of",
            options: [
              "clear felling system",
              "selection system",
              "uniform shelterwood system",
              "group shelterwood system"
            ],
            correctOption: 1,
          },
          {
            id: 4,
            text: "Shelterwood system results in",
            options: [
              "even aged stand with natural aesthetics",
              "even aged stand with artificial aesthetics",
              "uneven aged stand with natural aesthetics",
              "uneven aged stand with artificial aesthetics"
            ],
            correctOption: 0,
          },
          {
            id: 5,
            text: "Inverse - J number diameter curves are seen in",
            options: [
              "clear felling system",
              "selection system",
              "uniform shelterwood system",
              "group shelterwood system"
            ],
            correctOption: 1,
          },
          {
            id: 6,
            text: "Clear felling system is not used for",
            options: [
              "light demanding species",
              "shade bearer species",
              "plain areas",
              "plateau areas"
            ],
            correctOption: 1,
          },
          {
            id: 7,
            text: "Which of these is the correct sequence for shelterwood system",
            options: [
              "preparatory felling → secondary felling → seedling felling → final felling",
              "preparatory felling → seedling felling → secondary felling → final felling",
              "preparatory felling → secondary felling → seedling felling → final felling",
              "preparatory felling → seeding felling → secondary felling → final felling"
            ],
            correctOption: 3,
          },
          {
            id: 8,
            text: "Felling made with the object of opening the canopy to remove shelter and allow more light for the regenerated crop is",
            options: [
              "preparatory felling",
              "seedling felling",
              "secondary felling",
              "final felling"
            ],
            correctOption: 2,
          },
          {
            id: 9,
            text: "In group shelterwood system, the regeneration area is increased",
            options: [
              "centrifugally around gaps",
              "centripetally around gaps",
              "parallel to gaps",
              "perpendicular to gaps"
            ],
            correctOption: 0,
          },
          {
            id: 10,
            text: "Catchment areas are best suited for",
            options: [
              "clear felling system",
              "selection system",
              "uniform shelterwood system",
              "group shelterwood system"
            ],
            correctOption: 1,
          }
        ],
      },
      {
        id: 9,
        title: "Week 9",
        questions: [
          {
            id: 1,
            text: "Moving logs from forest to landing area is known as",
            options: ["marking", "bucking", "skidding", "delimbing"],
            correctOption: 2,
          },
          {
            id: 2,
            text: "Research plots are shown in _____ marking colour",
            options: ["yellow", "blue", "red", "white"],
            correctOption: 3,
          },
          {
            id: 3,
            text: "Which of these gives the greatest accuracy in constructing face cuts",
            options: ["conventional face", "humboldt face", "open face", "all of these"],
            correctOption: 0,
          },
          {
            id: 4,
            text: "Careful selection of trees for harvesting based on a forest management prescription is known as",
            options: ["surveying", "cruising", "marking", "logging"],
            correctOption: 2,
          },
          {
            id: 5,
            text: "Surveying timberlands to locate and estimate the volumes and grades of standing timber meeting requirements is known as",
            options: ["surveying", "cruising", "marking", "logging"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "Trees on boundary are shown in ____ marking colour",
            options: ["yellow", "blue", "red", "white"],
            correctOption: 2,
          },
          {
            id: 7,
            text: "Cutting of timber into logs is known as",
            options: ["marking", "bucking", "skidding", "delimbing"],
            correctOption: 1,
          },
          {
            id: 8,
            text: "Which of these gives the greatest saving of lumber",
            options: ["conventional face", "humboldt face", "open face", "all of these"],
            correctOption: 1,
          },
          {
            id: 9,
            text: "Trees to be retained are shown in ______ marking colour",
            options: ["yellow", "blue", "red", "white"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "Net growth in initial volume is given by",
            options: [
              "V2 - V1",
              "V2 - V1 + H + I",
              "V2 - V1 + H + 1 + M",
              "V2 - V1 + H - 1 - M"
            ],
            correctOption: 1,
          }
        ],
      },
      {
        id: 10,
        title: "Week 10",
        questions: [
          {
            id: 1,
            text: "Shell cracking of seeds is used for which species",
            options: ["amla", "mango", "ber", "teak"],
            correctOption: 2,
          },
          {
            id: 2,
            text: "Wet and dry treatment of seeds is used for which species",
            options: ["amla", "mango", "ber", "teak"],
            correctOption: 3,
          },
          {
            id: 3,
            text: "Agave is used for",
            options: ["barbed wire fencing", "live fencing", "chain link fencing", "stone wall fencing"],
            correctOption: 1,
          },
          {
            id: 4,
            text: "Which of these is not a laboratory method to determine best days for seed collection?",
            options: [
              "maximum dry weight",
              "colour of fruits",
              "moisture contents of fruits",
              "chemical analysis of fat and nitrogen content"
            ],
            correctOption: 1,
          },
          {
            id: 5,
            text: "Which of these characterises a refractory site",
            options: [
              "soil depth < 10cm",
              "soil depth 10-30cm",
              "soil depth > 30cm",
              "none of these"
            ],
            correctOption: 0,
          },
          {
            id: 6,
            text: "Which of these is a good storage condition",
            options: [
              "high moisture, high temperature",
              "high moisture, low temperature",
              "low moisture, high temperature",
              "low moisture, low temperature"
            ],
            correctOption: 3,
          },
          {
            id: 7,
            text: "Which of these prevent water logging",
            options: ["sunken bed", "raised bed", "flat bed", "all of these"],
            correctOption: 1,
          },
          {
            id: 8,
            text: "Choice of spacing is dependent upon",
            options: [
              "objective of plantation",
              "site- species matching",
              "growth rate",
              "all of these"
            ],
            correctOption: 3,
          },
          {
            id: 9,
            text: "Which of these conserves moisture",
            options: ["sunken bed", "raised bed", "flat bed", "all of these"],
            correctOption: 0,
          },
          {
            id: 10,
            text: "Number of seeds in sample that germinate upto the peak germination period expressed as % is a definition of",
            options: [
              "germination number",
              "germination percentage",
              "germination energy",
              "germination power"
            ],
            correctOption: 2,
          }
        ],
      },

      {
        id: 11,
        title: "Week 11",
        questions: [
          {
            id: 1,
            text: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
            options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
            correctOption: 3,
          },
          {
            id: 2,
            text: "Zoo is an example of",
            options: ["in- situ conservation", "ex- situ conservation", "in- situ preservation", "ex- situ preservation"],
            correctOption: 1,
          },
          {
            id: 3,
            text: "Sustainable harvest of resources falls under the category of",
            options: ["conservation", "preservation", "environmentalism", "none of the above"],
            correctOption: 0,
          },
          {
            id: 4,
            text: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
            options: ["very high", "medium", "very low", "non- existent"],
            correctOption: 1,
          },
          {
            id: 5,
            text: "Captive breeding is an example of",
            options: ["in- situ conservation", "ex- situ conservation", "in- situ preservation", "ex- situ preservation"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "Which of these is not a forest classification as per the 1894 forest policy?",
            options: ["protection forest", "production forest", "minor forest", "major forest"],
            correctOption: 3,
          },
          {
            id: 7,
            text: "In 1931, Van Panchayats were constituted in areas that are now in",
            options: ["Tamil Nadu", "Madhya Pradesh", "West Bengal", "Uttarakhand"],
            correctOption: 3,
          },
          {
            id: 8,
            text: "Planting along canal banks is a part of",
            options: ["farm forestry", "community forestry", "extension forestry", "agroforestry"],
            correctOption: 2,
          },
          {
            id: 9,
            text: "The fig tree bears fruits in time when animals do not have much access to food. In this context, it would be a good example of",
            options: ["least concern species", "keystone species", "flagship species", "extinct species"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destruction feeding and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
            options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
            correctOption: 3,
          },
        ],
      },
      {
        id: 12,
        title: "Week 12",
        questions: [
          {
            id: 1,
            text: "A tree has DBH of 35cm. Find the basal area in sq m",
            options: [".049", ".096", ".149", ".195"],
            correctOption: 1,
          },
          {
            id: 2,
            text: "In a triangle, the angle between base and hypotenuse θ = 60° and hypotenuse c = 4cm. Find the length of the base b",
            options: ["0.66", "1", "1.5", "2"],
            correctOption: 3,
          },
          {
            id: 3,
            text: "\"Allowing some places and some creatures to exist without significant human interference\" is a definition of",
            options: ["conservation", "preservation", "environmentalism", "all of these"],
            correctOption: 1,
          },
          {
            id: 4,
            text: "In India the breast height is considered to be",
            options: ["1.37m", "1.47m", "1.57m", "2.47m"],
            correctOption: 0,
          },
          {
            id: 5,
            text: "The term laterite soil is derived from Latin 'later' which means",
            options: ["red", "brick", "fertile", "infertile"],
            correctOption: 1,
          },
          {
            id: 6,
            text: "Which of these is not a non-use value?",
            options: ["direct value", "existence value", "altruistic value", "bequest value"],
            correctOption: 0,
          },
          {
            id: 7,
            text: "\"Science of a relationship between organisms and their environments\" is the definition of",
            options: ["conservation", "preservation", "environmentalism", "ecology"],
            correctOption: 3,
          },
          {
            id: 8,
            text: "Self-ploughing character is seen in",
            options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
            correctOption: 0,
          },
          {
            id: 9,
            text: "Mechanical action of ocean waves is an example of",
            options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
            correctOption: 1,
          },
          {
            id: 10,
            text: "Lithosere is an example of",
            options: ["hydrosere", "xerosere", "psammosere", "halosere"],
            correctOption: 1,
          },
        ],
      }
      
      

      
      
      
      
      
      
      
      // Weeks 4 and 5 will follow in next message due to space.
    ]
  }
  
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
