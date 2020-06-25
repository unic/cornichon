import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  return (
    <>
      <h1>Title</h1>
      <span>{counter}</span>
    </>
  );
};

export default App;
