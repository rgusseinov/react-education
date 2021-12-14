import { getCommentsByIds, getNewsItem } from './utils/comments';

const newsId = 29529205;

async function getCommentTree(){

  const singleNews = await getNewsItem(newsId); 
  const allComments = await getCommentsByIds(singleNews.kids);

  console.log(allComments);  
  
}


function App() {

  getCommentTree();


/*   const commentsData = [
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
  ];
 */


  return (
    <div className="App">
      <h4>Comments Here</h4>
      {/* <Comments 
        comments={commentsData}
      /> */}
    </div>
  );
}


export default App;
