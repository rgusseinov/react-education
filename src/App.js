import FetchedPosts from "./components/FetchPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App({ posts }) {
  return (
    <div className="container pt-3">
      
      <div className="row">
        <div className="col col-right">
          <h4> Кол-во постов:  {posts} </h4>          
        </div>
      </div>

      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2> Синхронные посты </h2>
          <Posts />
        </div>

        <div className="col">
        <h2> Асинхронные посты </h2>
          <FetchedPosts />
        </div>

      </div>
    </div>
  );
}

export default App;
