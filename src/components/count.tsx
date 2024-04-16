'use client'

import React, { useState, useEffect } from 'react'

const Count = () => {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date("1/1/2025 23:59:59");
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='countContainer'>
      {timeLeft.days !== undefined ? (
        <div className='count'>
          <p>{timeLeft.days}</p>

          <p>{timeLeft.hours}</p>

          <p>{timeLeft.minutes}</p>

          <p>{timeLeft.seconds}</p>
        </div>
      ) : (
        <p>Countdown has ended!</p>
      )}
    </div>
  )
}

export default Count