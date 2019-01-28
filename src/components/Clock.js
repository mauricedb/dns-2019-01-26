import React, { Component, useState, useEffect } from 'react';
import { clearInterval } from 'timers';

const useNow = (interval) => {
  let [now, setNow] = useState(new Date());

  useEffect(
    () => {
      const handle = setInterval(() => setNow(new Date()), interval);
      return () => clearInterval(handle);
    },
    [interval]
  );

  return now;
};



const Clock = () => {
  const now = useNow(1000);

  return <div className="center">The time is: {now.toLocaleTimeString()}</div>;
};

// const Clock = () => {
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {
//     const handle = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(handle);
//   }, []);
//   return <div className="center">The time is: {now.toLocaleTimeString()}</div>;
// };

export default Clock;
