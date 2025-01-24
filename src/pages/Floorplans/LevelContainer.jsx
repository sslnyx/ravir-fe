import React from "react";

import Level2 from "./Levels/Level2";
import Level3 from "./Levels/Level3";
import Level4to5 from "./Levels/Level4to5";
import Level6 from "./Levels/Level6";

const levels = { 2: Level2, 3: Level3, "4-5": Level4to5, 6: Level6 };

const LevelContainer = (props) => {
  const { setLevel, level, levelAvailable } = props;

  const handleLevel = (key) => {
    // console.log(key);
    if (key === level) {
      setLevel("");
      return;
    }
    setLevel(key);
  };

  return (
    <div className="flex -mx-6 level-container">
      {Object.entries(levels)
        .sort()
        .map(([key, Component], i) => (
          <div className="basis-1/2 md:basis-1/4" key={key}>
            <div
              className={`px-6 transition-opacity duration-700 ${
                levelAvailable?.includes(key)
                  ? ""
                  : "pointer-events-none opacity-30"
              }`}
              onClick={() => handleLevel(key)}
            >
              <div className={`cursor-pointer w-full`}>
                <Component {...props} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LevelContainer;
