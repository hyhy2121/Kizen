import React, { useEffect, useState } from "react";

type Mode = "Focus" | "S-Break" | "L-Break";

export const usePomodoro = () => {
  const [timeLeft, setTimeLeft] = useState<number>(1500);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>("Focus");
  const [cycles, setCycles] = useState<number>(0);

  let totalTime = 1500;

  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      setIsRunning(false);

      if (mode === "Focus") {
        const nextCycles = cycles + 1;

        if (nextCycles % 4 === 0) {
          setCycles(0);
          setMode("L-Break");
          setTimeLeft(900);
        } else {
          setCycles(nextCycles);
          setMode("S-Break");
          setTimeLeft(300);
        }
      } else {
        setMode("Focus");
        setTimeLeft(1500);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timeLeft, mode, cycles]);

  const handleButtonClick = () => setIsRunning(!isRunning);

  return { timeLeft, isRunning, mode, cycles, handleButtonClick, progress };
};
