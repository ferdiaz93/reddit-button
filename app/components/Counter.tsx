import React from "react";

interface CounterProps {
  timeLeft: number;
}

const Counter: React.FC<CounterProps> = ({ timeLeft }) => {
  return (
    <article className="text-center">
      <h3 className="text-2xl">Time Left:</h3>
      <span className="text-5xl">{timeLeft} seconds</span>
    </article>
  );
};

export default Counter;
