import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  console.log("마운트");
  useEffect(() => {
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>보여랏!</div>;
};

const Lifecycle = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   useEffect(() => {
  //     console.log("Mount");
  //   }, []);

  //   useEffect(() => {
  //     console.log("업데이트");
  //   });

  //   useEffect(() => {
  //     console.log("수행");
  //   }, [count]);

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}></button>
      {isVisible && <UnmountTest />}
      {/* 단락회로평가 */}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div> */}
    </div>
  );
};

export default Lifecycle;
