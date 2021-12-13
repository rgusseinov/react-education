import { useEffect, useState } from "react";
import Comments from "./Comments";
import { buildTree, getCommentsByIds } from "./utils/comments";

function App() {
  const [commentsData, setCommentsData] = useState([]);
  const kids = [29538858, 29538122, 29538598, 29537999, 29538702, 29538270];
  const newsId = 29537660;


  useEffect(() => {
    const requestComments = async () => {
      try {
        const comments = await getCommentsByIds(kids);
        const bTree = buildTree(comments, newsId);

        console.log(`bTree`, bTree);

        setCommentsData(bTree);
      } catch {

      }
    }
    requestComments();

  }, []);


  /* const commentsData = [
    {id: 1, title: 'This is good news', kids: []},
    {id: 2, title: 'Best news ever', kids: [
      {id: 4, title: 'Sub Comments 1', kids: []},
      {id: 5, title: 'Sub Comments 2', kids: []},
      {id: 6, title: 'Sub Comments 3', kids: [
        {id: 7, title: 'Level 1', kids: []},
        {id: 8, title: 'Level 2', kids: []},
        {id: 9, title: 'Level 3', kids: []},
        
      ]},
      {id: 7, title: 'Sub Comments 4', kids: []}
    ]},
    {id: 3, title: 'Amazing', kids: [
      {id: 3, title: 'Amazing 2', kids: []},
      {id: 3, title: 'Amazing 3', kids: []},
      {id: 3, title: 'Amazing 4', kids: []},
    ]},
  ]; */



  return (
    <div className="App">
      <h4>Comments Here</h4>
      <Comments 
        comments={commentsData}
      />
    </div>
  );
}


export default App;
