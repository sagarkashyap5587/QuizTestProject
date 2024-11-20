import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Timer = ({ onTime }) => {
  const userData = useSelector((state) => state.incomes.data);
  const timeGiven = parseInt(userData[0].time);
  const [time, setTime] = useState(timeGiven*60);

  //   const [time, setTime] = useState(30);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTime();
    }
  }, [time, onTime]);

  return (
    <div style={{ marginTop: "20px", fontSize: "25px", fontWeight: 700 }}>
      Time Left: {time}s
    </div>
  );
};

export default Timer;
