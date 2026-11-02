import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleClearFocus = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={handleFocus}>
        Focus Input
      </button>
      <button onClick={handleClearFocus}>
        Clear Focus Input
      </button>
    </div>
  );
};

export default FocusInput;