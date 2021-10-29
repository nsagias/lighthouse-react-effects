import axios from "axios";
import { useEffect, useState } from "react";

const Quote = function() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get("https://api.kanye.rest")
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      });
  }, [count]);

  return (
    <div>
      <div>
        <button onClick={() => setCount(!count)}>+</button>
      </div>
      {data.quote}
    </div>
  );
};

export default Quote;