import { getNewsItem } from '../../requests/item';

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

export const getCommentsByIds = async (kids) => {
  const arrayOfKids = kids.map((kid) => getNewsItem(kid));
  return Promise.all(arrayOfKids)
    .then((allResults) => {
      return Promise.all(allResults.map((result) => result));
    })
    .then((res) => {
      let allKidsIds = [];
      res.forEach((item) => {
        allKidsIds = allKidsIds.concat(item?.kids || []);
      });

      if (!allKidsIds.length) return res;

      return getCommentsByIds(allKidsIds).then((children) => {
        return children.concat(res);
      });
    })
    .catch((err) => {
      console.error(`Что-то пошло не так: `, err);
    });
};


const getNewsItem = async (newsId) => {
	const baseURL = 'https://hacker-news.firebaseio.com/v0';
  const response = await fetch(`${baseURL}/item/${newsId}.json`);
  const data = response.json();
	return data;
};
