"use client"
import { useState, useEffect } from "react";
import { getColorBySecond } from "../utils/colorSelection";
import { useLocalStorage } from '../hooks/useLocalStorage'

import Button from "../components/Button";
import Counter from "../components/Counter";
import Notification from "../components/Notification";

const HomePage = () => {
  const [assignedColor, setAssignedColor] = useLocalStorage('assigned-color', '');
  const [delayedTime, setDelayedTime] = useLocalStorage('delayed-time', '');
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Si ya tiene un color asignado, corta la ejecucion
    if (!!delayedTime && !!assignedColor) {
      setTimeLeft(parseInt(delayedTime));
      return
    }

    // Temporizador
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime === 0 ? 60 : prevTime - 1);
    }, 1000);




    setLoading(false);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, assignedColor, delayedTime]);

  const handleClick = () => {
    if (!assignedColor) {
      const colorSelected = getColorBySecond(timeLeft);
      setAssignedColor(colorSelected);
      setDelayedTime(`${timeLeft}`)
    }
  };

  return (
    <section className="flex flex-col gap-y-10 items-center">
      {loading ? (
        <div className="text-5xl font-bold">Loading...</div>
      ) : (
        <div className="flex flex-col gap-y-10 items-center">
          <Counter timeLeft={timeLeft} />
          <Button onClick={handleClick} disabled={!!assignedColor}>
            <span className="absolute">
              {!!assignedColor ? "Pressed" : "Press"}
            </span>
          </Button>
          <Notification text={'Fernando clickeo el boton!'}></Notification>
          {!!assignedColor && (
            <article
              className="text-5xl font-bold flex items-center justify-center"
              style={{ color: assignedColor, height: "100px" }}
            >Este es tu nuevo color de usuario</article>
            )}
        </div>
      )}
    </section>
  );
};

export default HomePage;
