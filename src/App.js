import { useState } from "react";
import { connect } from "react-redux";
import { addCount, minCount } from "./redux/actions";

function App({ counter }) {
  const [count, setCounter] = useState(0);

  const handleClick = (count) => {
    setCounter(count);
  }

  return (
    <div className="App">
      <h2> Counter </h2>
      Count = {counter} <br />
      <button onClick={() => handleClick(count + 1)}> Add count </button>
      <br />
      <button onClick={() => handleClick(count - 1)}> Minus count </button>
    </div>
  );
}


const mapDispatchToProps = {
  addCount, minCount
}

const mapStateToProps = state => ({
  counter: state.count
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
