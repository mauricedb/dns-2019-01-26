import React, { Component, useState } from 'react';

const Counter = () => {
  const [count, setCounter] = useState(2);

  return (
    <div className="center">
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCounter(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

// const Counter = () => {
//     const [count, setCount] = useState(0);

//   return (
//     <div className="center">
//       <div>Count: {count}</div>
//       <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     </div>
//   );
// };

export default Counter;
