
const CounterWithStep = ({handleStepCounter, stepCount}) => {
  

  return (
    <div>
      <p>{`Step = ${stepCount}`}</p>
      <p>
        <button onClick={() => handleStepCounter("addition")}> [+] </button>
      </p>
      <p>
        <button onClick={() => handleStepCounter("subtraction")}> [-] </button>
      </p>
      <p>
        <button onClick={() => handleStepCounter("reset")}> Reset </button>
      </p>
    </div>
  );
};

export default CounterWithStep;
