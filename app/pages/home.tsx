"use client"
import { useState, useEffect } from "react";
import { getColorBySecond } from "../utils/colorSelection";
import { useLocalStorage } from '../hooks/useLocalStorage'

import Button from "../components/Button";
import Counter from "../components/Counter";
import Notification from "../components/Notification";

const HomePage = () => {
  const [assignedColor, setAssignedColor] = useLocalStorage('assignedColor', '')
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!clicked && !assignedColor) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime === 0 ? 60 : prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, clicked, assignedColor]);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      const colorSelected = getColorBySecond(timeLeft);
      setColor(colorSelected);
      setAssignedColor(colorSelected)
    }
  };

  return (
    <section className="flex flex-col gap-y-10 items-center">
      <Counter timeLeft={timeLeft} />
      <Button onClick={handleClick} disabled={clicked || !!assignedColor}>
        <span className="absolute">
          {clicked || assignedColor ? "Pressed" : "Press"}
        </span>
      </Button>
      {color && (
        <article
          style={{ backgroundColor: color, width: "100px", height: "100px" }}
        ></article>
        )}
      <Notification text={'Fernando clickeo el boton!'}></Notification>
    </section>
  );
};

export default HomePage;
