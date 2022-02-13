import React, { useEffect, useState } from "react";

const targetTime = new Date("2022-04-01").getTime();

export const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="discountCountdown mt-5">
        <div className="countdownItem">
          <p>
            {days} <span>Day</span>
          </p>
        </div>
        <div className="countdownItem">
          <p>
            {hours} <span>Hour</span>
          </p>
        </div>
        <div className="countdownItem">
          <p>
            {minutes} <span>Min</span>
          </p>
        </div>
        <div className="countdownItem">
          <p>
            {seconds} <span>Sec</span>
          </p>
        </div>
      </div>
    </>
  );
};
