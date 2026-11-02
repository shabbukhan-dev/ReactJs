import { useState, useEffect } from "react";
import Counter from "./counter/Counter";
import CounterWithStep from "./counter/CounterWithStep";
import Todo from "./todoApp/Todo";
import ShoppingCart from "./shoppingCart/ShoppingCart";

function Parent() {
  let [count, setCount] = useState([0]);

  function handleCounter(action) {
    if (action === "addition") {
      if (count.length < 10) {
        setCount([...count, count.length]);
      }
    }

    if (action === "subtraction") {
      if (count.length > 0) {
        setCount(count.slice(0, -1));
      }
    }

    if (action === "reset") {
      setCount([]);
    }

    return false;
  }

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);



//   const STEP = 5;
//   let [stepCount, setStepCount] = useState(10);

//   function handleStepCounter(action) {
//     if (action === "addition") {
//       setStepCount(prev => Math.max(0, prev + STEP))
//     }

//     if (action === "subtraction") {
//       if (stepCount >= 5) {
//   setStepCount(prev => prev - 5);
// }
//     }

//     if (action === "reset") {
//       setStepCount(10); // Reset to initial value
//     }

//     return false;
//   }

const STEP = 5;
const [stepCount, setStepCount] = useState(10);

function handleStepCounter(action) {
  if (action === "addition") {
    setStepCount(prev => prev + STEP);
  }

  if (action === "subtraction") {
    setStepCount(prev => Math.max(0, prev - STEP));
  }

  if (action === "reset") {
    setStepCount(10);
  }
}

  return (
    <>
      {/* <Counter handleCounter={handleCounter} count={count} /> */}
      <CounterWithStep
        handleStepCounter={handleStepCounter}
        stepCount={stepCount}
      />
      {/* <Todo />
      <ShoppingCart /> */}
    </>
  );
}

export default Parent;
