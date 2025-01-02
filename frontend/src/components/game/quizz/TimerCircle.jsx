/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TimerCircle = ({ timeLeft, maxTime }) => {
  return (
    <div className="w-20 h-20 relative">
      <CircularProgressbar
        value={timeLeft}
        maxValue={maxTime}
        text={`${timeLeft}s`}
        styles={buildStyles({
          pathColor: timeLeft > 10 ? "#3b82f6" : "#ef4444",
          textColor: "#000",
          trailColor: "#d1d5db",
        })}
      />
    </div>
  );
};

export default TimerCircle;
