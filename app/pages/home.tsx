"use client"
import { useState, useEffect } from "react";
import { getColorBySecond } from "../utils/colorSelection";
import Button from "../components/Button";
import Counter from "../components/Counter";

const HomePage = () => {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!clicked) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime === 0 ? 60 : prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, clicked]);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      const colorSelected = getColorBySecond(timeLeft);
      setColor(colorSelected);
    }
  };

  return (
    <section className="flex flex-col gap-y-10">
      <Counter timeLeft={timeLeft} />
      <Button onClick={handleClick} disabled={clicked || timeLeft === 0}>
        <span className="absolute">
          {clicked ? "Pressed" : "Press"}
        </span>
      </Button>
      {color && (
        <article
          style={{ backgroundColor: color, width: "100px", height: "100px" }}
        ></article>
      )}
    </section>
  );
};

export default HomePage;
