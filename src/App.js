import Comments from "./Comments";

function App() {

  const comments = [
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
    {id: 3, title: 'Amazing', kids: []},
  ];

  return (
    <div className="App">
      <h4>Comments Here</h4>
      <Comments 
        comments={comments}
      />
    </div>
  );
}

export default App;
