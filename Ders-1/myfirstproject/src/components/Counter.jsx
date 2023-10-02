import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    setCount(count - 1);
  };
  return (
    <div className="text-center">
      <p>{count}</p>
      <br />
      {/* <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button> */}
      <button onClick={arttir}>Arttır</button>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Counter;
