import React from "react";

interface CounterProps {
  timeLeft: number;
}

const Counter: React.FC<CounterProps> = ({ timeLeft }) => {
  return (
    <article className="text-center">
      <h3 className="md:text-2xl">Tiempo restante:</h3>
      <span className="md:text-5xl">{timeLeft} segundos</span>
    </article>
  );
};

export default Counter;
