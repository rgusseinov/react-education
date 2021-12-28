import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const addTask = () => {
    dispatch(addTodo(text));
    setText('');
  }

  return (
    <div className="App">
      <InputField
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
      />
      <TodoList />
    </div>
  );
}

export default App;
