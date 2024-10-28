import Diagram from "../Diagrams/Diagram";

const CostsDiagram = (props) => {
  const diagramDataSets = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMont = cost.date.getMonth();
    diagramDataSets[costMont].value += cost.amount;
  }

  return <Diagram dataSets={diagramDataSets} />;
};

export default CostsDiagram;
