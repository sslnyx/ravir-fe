import React, { useEffect, useState } from "react";

import { floorPlans } from "./floorplanData";
import FloorPlanCard from "./floorplanCard";

// console.log(floorPlans);

const FloorPlansContainer = ({
  selectedPlan,
  setSelectedPlan,
  setLevelAvailable,
  setLevel,
  handleOpen,
  plans,
  setPlans,
  setSelectedIdx,
}) => {
  
  useEffect(() => {
    setPlans([]);

    // Generalized filtering function
    const filterPlans = (includeLevel = true) => {
      return floorPlans.filter((plan) => {
        const matchesType =
          !selectedPlan.type ||
          plan.type.toLowerCase() === selectedPlan.type.toLowerCase();
          
        const matchesBed =
          !selectedPlan.bed ||
          plan.bedTypeId === selectedPlan.bed.toLowerCase();

        const matchesLevel = includeLevel
          ? !selectedPlan.level || plan.level.includes(selectedPlan.level)
          : true;

        return matchesType && matchesBed && matchesLevel;
      });
    };

    const filteredPlans = filterPlans(); // Includes all criteria (type, bed, level)
    const filteredBedType = filterPlans(false); // Excludes level condition

    // console.log(selectedPlan);

    if (selectedPlan.bed) {
      const levels = filteredBedType.reduce(
        (acc, { level }) => [...acc, ...level],
        []
      );

      const uniqueLevels = [...new Set(levels)];

      setLevelAvailable(uniqueLevels);
    }

    if (filteredPlans.length === 0) {
      return setLevel("");
    }

    const timeOut = setTimeout(() => {
      setPlans(filteredPlans);
    }, 0);

    return () => {
      clearTimeout(timeOut);
    };
  }, [selectedPlan]);

  return (
    <div className="flex flex-wrap -mx-3 -my-3 overflow-hidden">
      {plans?.map((plan, i) => (
        <div
          className="basis-full md:basis-1/3"
          data-aos="fade-up"
          data-aos-delay={i * 50}
          data-aos-offset={-500}
          key={plan.plan}
          onClick={() => setSelectedIdx({ key: i })}
        >
          <FloorPlanCard {...plan} handleOpen={handleOpen} />
        </div>
      ))}

      {/* {plans?.length === 0 && <>0 Plan found</>} */}
    </div>
  );
};

export default FloorPlansContainer;
