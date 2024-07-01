import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 70);
  }, []);
  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center mt-5 font-bold">
        Progress Bar
      </h1>
      <div className="flex items-center justify-center">
        <Bar value={value} />
      </div>
    </div>
  );
};

export default ProgressBar;

const Bar = ({ value }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(Math.max(value, 0), 100));
  }, [value]);
  return (
    <div className="  mt-5 border-[1px] w-[400px] overflow-hidden  rounded-xl  relative">
      <div className={`  bg-green-500  `} style={{ width: `${percent}%` }}>
        <p className=" text-center z-20  ">{percent}% </p>
      </div>
    </div>
  );
};
