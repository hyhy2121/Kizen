import { TimerDisplay } from "./components/TimerDisplay/TimerDisplay";
import { TimerControls } from "./components/TimeControls/TimerControls";

import s from "./Pomodoro.module.css";
import { usePomodoro } from "./hooks/usePomodoro";
import React from "react";

export const Pomodoro = () => {
  const { timeLeft, isRunning, mode, cycles, handleButtonClick, progress } =
    usePomodoro();
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <span className={`${s.tab} ${mode === "Focus" ? s.active : ""}`}>
            Focus
          </span>
          <span className={`${s.tab} ${mode === "S-Break" ? s.active : ""}`}>
            S-Break
          </span>
          <span className={`${s.tab} ${mode === "L-Break" ? s.active : ""}`}>
            L-Break
          </span>
        </div>
        <div className={s.main_content}>
          <TimerDisplay timerLeft={timeLeft} />
          <div className={s.progress_bar}>
            <div className={s.grey}>
              <div className={s.white} style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className={s.cycles_container}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              if (i === 4) {
                return (
                  <React.Fragment key={i}>
                    <span>|</span>
                    <span
                      key={i}
                      className={`${s.dot} ${i < cycles ? s.dot_active : ""}`}
                    ></span>
                  </React.Fragment>
                );
              }
              return (
                <span
                  key={i}
                  className={`${s.dot} ${i < cycles ? s.dot_active : ""}`}
                ></span>
              );
            })}
          </div>
        </div>
        <div className={s.buttons}>
          <TimerControls
            buttonText={isRunning ? "Pause" : "Start"}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};
