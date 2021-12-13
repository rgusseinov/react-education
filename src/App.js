import { useState } from "react";
import MoreFive from "./components/MoreFive";
import Result from "./components/Result";

function App() {

  const [count, setCounter] = useState(0);

  return (
    <div className="App">

        <h3> Counter </h3>
        <button onClick={() => { setCounter(() => count + 1) }}> Increment </button>
      
        <Result count={count} />
        <hr />
        <MoreFive count={count} />
    </div>
  );
}

export default App;
