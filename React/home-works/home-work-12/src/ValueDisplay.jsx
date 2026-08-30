import { useRef, useEffect, useState } from "react";

function ValueDisplay({ value }) {
  const previousValueRef = useRef("");
  const [previousValue, setPreviousValue] = useState("");

  useEffect(() => {
    setPreviousValue(previousValueRef.current);
    previousValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Текущее значение: {value}</p>

      <p>Предыдущее значение: {previousValue}</p>
    </div>
  );
}

export default ValueDisplay;
