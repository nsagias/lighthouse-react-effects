import { useEffect, useState } from "react";

const Counter = function() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`setting title to ${count}`);
    document.title = ` Counter = ${count}`;
  }, [count]);

  
  useEffect(() => {
    // console.log(`creating setInterval for ${count}`);
    const interval = setInterval(() => {
      console.log(`counter = ${count}`);
    }, 1000);

    const cleanup = function() {
      // console.log(`clearing setInterval for ${count}`);
      clearInterval(interval);
    };
    return cleanup;
  }, [count]);


  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={event => setText(event.target.value)} />
      </div>
    </div>
  );
};

export default Counter;