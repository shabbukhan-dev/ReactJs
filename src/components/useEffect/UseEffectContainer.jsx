import { useState, useEffect } from "react";

const UseEffectContainer = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Effect A"); // RUNS ON EVERY RENDER (BECAUSE NO DEPENDENCY ARRAY)
  });

  useEffect(() => {
    console.log("Effect B");
  }, []); // EMPTY DEPENDENCY ARRAY [] MEANS THIS EFFECT RUNS ONCE WHEN THE COMPONENT FIRST MOUNTS

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Effect C - count changed");
  }, [count]); // RUNS ONCE WHEN THE COMPONENT FIRST MOUNTS + WHEN THE STATE CHANGED

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer executed");
    }, 2000); // TIMER KEEPS RUNNING EVEN IF COMPONENT UNMOUNTS

    // Cleanup function
    return () => {
      clearTimeout(timer); // SOLUTION TO STOP THAT, CLEANUP - CLEAR TIMER IF COMPONENT UNMOUNTS
      console.log("Timer cleared!");
    };
  }, []);

  // Timer

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 3000); // RUNS THIS CALLBACK EVERY 3 SECONDS

//     return () => {
//       clearInterval(intervalId); // RUNS WHEN THE COMPONENT UNMOUNTS, STOPS THE TIMER USING THE SAVED ID
//     };
//   }, []);
  // EMPTY DEPENDENCY ARRAY [] MEANS THIS EFFECT RUNS ONCE AFTER THE COMPONENT MOUNTS
  // DOES NOT RUN AGAIN ON RE-RENDERS

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <input value={name} onChange={(e) => setName(e.target.value)} />

      {/* <h2>{seconds}</h2> */}
    </div> 
  ); 
};

export default UseEffectContainer;
