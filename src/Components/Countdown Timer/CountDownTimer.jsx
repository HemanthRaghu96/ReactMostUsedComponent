import React, { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (second === 0 && minute === 0 && hour === 0) {
      clearInterval(intervalId);
    }
  }, [second, minute, hour, intervalId]);

  const handleStartPause = () => {
    if (intervalId) {
      if (paused) {
        setPaused(false);
        const id = setInterval(timer, 1000);
        setIntervalId(id);
      } else {
        setPaused(true);
        clearInterval(intervalId);
        setIntervalId(null);
      }
    } else {
      const totalSeconds = hour * 3600 + minute * 60 + second;
      setSecond(totalSeconds);
      setPaused(false);
      const id = setInterval(timer, 1000);
      setIntervalId(id);
    }
  };

  const timer = () => {
    setSecond((prevSecond) => {
      if (prevSecond <= 0) {
        clearInterval(intervalId);
        return 0;
      } else {
        const totalSeconds = prevSecond - 1;
        setHour(Math.floor(totalSeconds / 3600));
        setMinute(Math.floor((totalSeconds % 3600) / 60));
        return totalSeconds;
      }
    });
  };
// console.log(paused)
  const handleReset = () => {
    clearInterval(intervalId);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setIntervalId(null);
    setPaused(false);
  };

  

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <h1 className="font-bold text-4xl">Countdown Timer</h1>
      </div>
      <div className="flex mt-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Hours</h1>
          <input
            type="number"
            value={hour}
            className="text-2xl text-center w-[100px]"
            onChange={(e) => setHour(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-col justify-center items-center mx-2">
          <h1 className="font-bold text-2xl">Minutes</h1>
          <input
            type="number"
            value={minute}
            className="text-2xl text-center w-[100px]"
            onChange={(e) => setMinute(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Seconds</h1>
          <input
            type="number"
            value={second % 60}
            className="text-2xl text-center w-[100px]"
            onChange={(e) => setSecond(hour * 3600 + minute * 60 + parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="flex mt-4">
        <button
          className={`bg-${paused ? 'blue' : 'green'}-700 p-2 rounded-md text-xl font-bold text-white mr-4`}
          onClick={handleStartPause}
        >
          {paused ? 'Resume' : intervalId ? 'Pause' : 'Start'}
        </button>
        <button
          className="bg-red-700 p-2 rounded-md text-xl font-bold text-white mr-4"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
