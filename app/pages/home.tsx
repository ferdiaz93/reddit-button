"use client"
import { useState, useEffect } from "react";
import randomColor from "../utils/randomColor";
import Button from "../components/Button";
import Counter from "../components/Counter";

const HomePage = () => {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0 && !clicked) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, clicked]);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      const random = randomColor();
      setColor(random);
    }
  };

  return (
    <div>
      <h1>Reddit Button</h1>
      <Button onClick={handleClick} disabled={clicked || timeLeft === 0}>
        {clicked ? "Botón clickeado" : "Clickea el botón"}
      </Button>
      <Counter timeLeft={timeLeft} />
      {color && (
        <div
          style={{ backgroundColor: color, width: "100px", height: "100px" }}
        ></div>
      )}
    </div>
  );
};

export default HomePage;
