import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, setCount, oddEven } = useCounter();

  return (
    <>
      <div>{oddEven}</div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default Counter;
