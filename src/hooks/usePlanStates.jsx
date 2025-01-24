import React, { useCallback, useEffect, useState } from "react";
import { floorPlans } from "../pages/Floorplans/floorplanData";

const usePlanStates = () => {
  const [type, setType] = useState("condo");
  const [bed, setBed] = useState("");
  const [level, setLevel] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({ type });
  const [levelAvailable, setLevelAvailable] = useState(["2", "3", "4-5", "6"]);

  useEffect(() => {
    const plan = { type };
    setBed("");
    setLevel("");
    setLevelAvailable(["2", "3", "4-5", "6"]);
    setSelectedPlan(plan);
  }, [type]);

  useEffect(() => {
    const plan = { type, bed, level };
    setSelectedPlan(plan);
  }, [bed, level]);

  return {
    type,
    setType,
    bed,
    setBed,
    level,
    setLevel,
    selectedPlan,
    setSelectedPlan,
    levelAvailable,
    setLevelAvailable,
  };
};

export default usePlanStates;
