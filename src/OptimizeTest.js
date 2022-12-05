import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  return <div>{count}</div>;
});

const CounterB = React.memo(({ obj }) => {
  return <div>{obj.count}</div>;
});

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true; //이전 프롭스와 현재 프롭스가 같다 => 리렌더링을 일으키지 않게 됩니다
  }
  return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);
// 컴포넌트를 반환하는 고차 컴포넌트

export default function OptimizeTest() {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });
  return (
    <div style={{ paddind: 20 }}>
      <div>
        <h2>counter A</h2>
        <CounterA count={count} />
        <button
          onClick={() => {
            setCount(count);
          }}
        >
          A button
        </button>
      </div>
      <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() => {
            setObj({ count: obj.count });
          }}
        >
          B button
        </button>
      </div>
    </div>
  );
}
