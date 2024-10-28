import React, { useState } from "react";
import CostForm from "./CostForm";
import "./CostForm.css";

const NewCost = (props) => {
  const [isFormVisible, selIsFormVisible] = useState(false);

  const SaveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    selIsFormVisible(false);
  };

  const inputDataHandler = () => {
    selIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    selIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={SaveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
