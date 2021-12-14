
export const getCommentsByIds = async (kids) => {
  const arrayOfKids = kids.map((kid) => getNewsItem(kid));

  const comments = await Promise.all(arrayOfKids);
  let allKidsIds = [];
  
  comments.forEach((comment) => {
    allKidsIds = allKidsIds.concat(comment?.kids || []);
  });

  if (!allKidsIds.length) return comments;

  const childrenComments = await getCommentsByIds(allKidsIds);
  return childrenComments.concat(comments);

};





export const buildTree = (comments, postId) => {
  const commentsById = {};
  comments.forEach((comment) => {
    commentsById[comment.id] = comment;
  });

  const rootComments = comments.filter((comment) => {
    return comment?.parent?.toString() === postId;
  });


  return rootComments.map((item) => buildCommentTree(item, commentsById));
};

export const buildCommentTree = (comment, commentsById) => {
  const result = {
    id: comment.id.toString(),
    text: comment.text,
    by: comment.by,
    children: comment.kids?.map((kidId) =>
      buildCommentTree(commentsById[kidId], commentsById)
    )
  };
  return result;
};


export const getNewsItem = async (newsId) => {
	const baseURL = 'https://hacker-news.firebaseio.com/v0';
  const response = await fetch(`${baseURL}/item/${newsId}.json`);
  const data = await response.json();
	return data;
};
