import s from "./TimerDisplay.module.css";

interface TimerDisplayProps {
  timerLeft: number;
}

export const TimerDisplay = ({ timerLeft }: TimerDisplayProps) => {
  const minutes = Math.floor(timerLeft / 60);
  const seconds = timerLeft % 60;

  const displayMinutes = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");

  return (
    <div className={s.timer_display}>
      {displayMinutes}:{displaySeconds}
    </div>
  );
};
