
const Counter = ({handleCounter, count}) => {
  

  return (
    <div>
      <p>Display:</p>
      <ul>
        {count.map((item, idx) => (
          <li key={idx}>{`Count: ${item}`}</li>
        ))}
      </ul>
      <p>
        <button onClick={() => handleCounter("addition")}> [+] </button>
      </p>
      <p>
        <button onClick={() => handleCounter("subtraction")}> [-] </button>
      </p>
      <p>
        <button onClick={() => handleCounter("reset")}> Reset </button>
      </p>
    </div>
  );
};

export default Counter;
