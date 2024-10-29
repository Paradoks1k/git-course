import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const initial_costs = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999,
  },
  {
    id: "c11",
    date: new Date(2021, 11, 25),
    description: "Хлеб",
    amount: 12,
  },
  {
    id: "c111",
    date: new Date(2021, 4, 1),
    description: "Bobr2122",
    amount: 32,
  },
];

const App = () => {
  const [costs, setCosts] = useState(initial_costs);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

// Аналогично
// function App() {
//   const costs = [
//     { date: new Date(2021, 2, 12), description: "Холодильник", amount: 999 },
//     { date: new Date(2021, 11, 25), description: "Хcxzczx", amount: 12 },
//     { date: new Date(2021, 4, 1), description: "ccc", amount: 32 },
//   ];

//   return (
//     <div>
//       <h1> dasda</h1>
//       <Costs costs={costs} />
//     </div>
//   );
// }

export default App;
