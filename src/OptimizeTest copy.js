import React, { useState, useEffect } from "react";

export default function OptimizeTest() {
  const TextView = React.memo(({ text }) => {
    return <div>{text}</div>;
  });

  const CountView = React.memo(({ count }) => {
    return <div>{count}</div>;
  });

  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  return (
    <div style={{ paddind: 20 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
