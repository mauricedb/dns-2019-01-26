import React, { Component, useState, useEffect } from 'react';

class Clock extends Component {
  handle = 0;
  state = { now: new Date() };

  componentDidMount() {
    this.handle = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    if (this.handle) {
      clearInterval(this.handle);
    }
  }

  render() {
    const { now } = this.state;

    return (
      <div className="center">The time is: {now.toLocaleTimeString()}</div>
    );
  }
}

// const Clock = () => {
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {
//     const handle = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(handle);
//   }, []);
//   return <div className="center">The time is: {now.toLocaleTimeString()}</div>;
// };

// export default Clock;
