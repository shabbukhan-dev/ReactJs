import { useRef, useState } from "react";

const RefExample = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleState = () => {
    setCount(prev => prev + 1);
  };

  const handleRef = () => {
    countRef.current += 1;

    console.log("Ref:", countRef.current);
  };

  console.log("Component rendered");

  return (
    <div>
      <h2>State: {count}</h2>

      <button onClick={handleState}>
        Update State
      </button>

      <button onClick={handleRef}>
        Update Ref
      </button>
    </div>
  );
};

export default RefExample;