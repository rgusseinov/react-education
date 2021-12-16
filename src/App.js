import { useEffect, useState } from 'react';
import { buildTree, getCommentsByIds, getNewsItem } from './utils/comments';
import Comments from './Comments';


function App() {
  const newsId = 29563781;

  const [commentsData, setCommentsData] = useState([]);
  const [commentsTitle, setCommentsTitle] = useState([]);

  useEffect(() => {
    const requestComments = async () => {
      const singleNews = await getNewsItem(newsId); 
      const flatComments = await getCommentsByIds(singleNews.kids);
      const tree = buildTree(flatComments, newsId);

      // console.log(`tree`, tree);
      setCommentsData(tree);
      setCommentsTitle(singleNews.title);
    }

    requestComments();
  }, []);
  

  return (
    <div className="App">
      <h3>{commentsTitle}</h3>
      <Comments
        comments={commentsData}
      />
    </div>
  );
}


export default App;
