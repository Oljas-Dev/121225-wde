import { useRef, useEffect, useState } from "react";
function App() {
  const [seconds, setSeconds] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
      <button onClick={() => stopTimer()}>stop timer</button>
    </div>
  );
}
export default App;

// import { useRef } from "react";
// function App() {
//   const boxRef = useRef(null);

//   const scrollToBottom = () => {
//     if (boxRef.current) {
//       boxRef.current.scrollTop = boxRef.current.scrollHeight;
//     }
//   };
//   return (
//     <div>
//       <div
//         ref={boxRef}
//         style={{
//           width: "300px",
//           height: "200px",
//           border: "2px solid black",
//           overflowY: "scroll",
//           padding: "10px",
//         }}
//       >
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem ipsum dolor sit.</p>
//       </div>
//       <button onClick={scrollToBottom} style={{ marginTop: "10px" }}>
//         Scroll to Bottom
//       </button>
//     </div>
//   );
// }
// export default App;

// import { useRef } from "react";
// import "./App.css";

// function App() {
//   const buttonRef = useRef(null);

//   const handleMouseMove = () => {
//     const button = buttonRef.current;

//     if (button) {
//       const newX = Math.random() * (window.innerWidth - button.offsetWidth);
//       const newY = Math.random() * (window.innerHeight - button.offsetHeight);

//       button.style.left = `${newX}px`;
//       button.style.top = `${newY}px`;
//     }
//   };

//   return (
//     <div>
//       <button
//         ref={buttonRef}
//         onMouseMove={handleMouseMove}
//         style={{
//           position: "absolute",
//           transition: "all",
//           transitionDuration: "2s",
//           transitionBehavior: "",
//         }}
//       >
//         click me
//       </button>
//     </div>
//   );
// }

// export default App;
