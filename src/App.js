import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "./Posts";
import { increment, decrement, addPost  } from './redux/actions'

function App() {
  const counter = useSelector(state => state.counter);
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch();
  const formRef = useRef();
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const title = formRef.current.value
    dispatch(addPost(title))
  }

  console.log(`posts`, posts);

  return (
    <div className="App">
      <h2> Counter {counter} </h2>
      <button onClick={() => dispatch(increment())}> Add count </button>
      <br />
      <button onClick={() => dispatch(decrement())}> Minus count </button>

      <br />
      <h3> new post </h3>
      <form onSubmit={handleFormSubmit}>
        Post Title <input type="text" ref={formRef}/>
      </form>
      
      <Posts />
    </div>
  );
}


export default App;
