import React, { Component, useState } from 'react';

export class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="center">
        <div>Count: {count}</div>
        <div>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

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
