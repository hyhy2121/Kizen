import s from "./TimerControls.module.css";

interface TimerControlsProps {
  onClick: () => void;
  buttonText: string;
}

export const TimerControls = ({ onClick, buttonText }: TimerControlsProps) => {
  return (
    <div>
      <button className={s.button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
