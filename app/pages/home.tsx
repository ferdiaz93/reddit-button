"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { getColorBySecond } from "../utils/colorSelection";
import { useLocalStorage } from '../hooks/useLocalStorage'

import Button from "../components/Button";
import Counter from "../components/Counter";
import UsersTable from "../components/UsersTable";
import Notification from "../components/Notification";

interface userClickingInterface {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const HomePage = () => {
  const [assignedColor, setAssignedColor] = useLocalStorage('assigned-color', '');
  const [delayedTime, setDelayedTime] = useLocalStorage('delayed-time', '');
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(true);
  const [userClicking, setUserClicking] = useState<userClickingInterface | null>(null);

  useEffect(() => {
    // Si ya tiene un color asignado, corta la ejecucion
    if (!!delayedTime && !!assignedColor) {
      setTimeLeft(parseInt(delayedTime));
      return
    }

    // Temporizador
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime === 0 ? 60 : prevTime - 1);
      getUserClicking();
    }, 1000);


    setLoading(false);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, assignedColor, delayedTime]);

  const getUserClicking = () => {
    // Probabilidad de 10% de que se ejecute
    const probabilidad = 0.1;
    const numeroAleatorio = Math.random();
    const userIdAleatorio = Math.floor(Math.random() * 10) + 1;
    if (numeroAleatorio < probabilidad) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${userIdAleatorio}`)
        .then((user) => {
          setTimeLeft(60);
          setUserClicking(user.data);
          setTimeout(() => {
            setUserClicking(null);
          }, 3000);
        })
    }
  };

  const handleClick = () => {
    if (!assignedColor) {
      const colorSelected = getColorBySecond(timeLeft);
      setAssignedColor(colorSelected);
      setDelayedTime(`${timeLeft}`)
    }
  };

  return (
    <section className="flex flex-col gap-y-10 items-center bg-zinc-700 rounded-sm border-2 border-gray-500 py-5" style={{width: "100%"}}>
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
          <article className={`h-24 ${!!delayedTime && !!assignedColor ? 'hidden' : ''}`}>
            {userClicking && <Notification
              text={`${userClicking?.username} clickeo el boton!`}
            />}
          </article>
          {!!assignedColor && (
            <article
              className="text-5xl font-bold flex items-center justify-center"
              style={{ color: assignedColor, height: "100px" }}
            >Este es tu nuevo color de usuario</article>
            )}
        </div>
      )}
      {(!!delayedTime && !!assignedColor) && <UsersTable />}
    </section>
  );
};

export default HomePage;
