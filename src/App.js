import { useEffect, useState } from "react";
import Item from "./components/item";

function App() {

  const [status, setStatus] = useState([])
  const [counter, setCounter] = useState(0)
  
  function onStatusChange(e){
    const checkStatus = e.target.checked
    const name = e.target.name

    setStatus({
      ...status,
      [name]: checkStatus,
    });

  }
  
  function onClickStatus(e){
    setCounter(counter + 1)
  }
  
  useEffect(() => {
    console.log(`Rerender`)
  }, [status])


  return (
    <div className="App">

      <h2> Working with checkbox </h2>

      <Item
        onStatusChange={onStatusChange}
        onClickStatus={onClickStatus}
      />
    </div>
  );
}

export default App;
