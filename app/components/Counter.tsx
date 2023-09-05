import React from "react";

interface CounterProps {
  timeLeft: number;
}

const Counter: React.FC<CounterProps> = ({ timeLeft }) => {
  return (
    <div>
      <p>Time Left: {timeLeft} seconds</p>
    </div>
  );
};

export default Counter;
