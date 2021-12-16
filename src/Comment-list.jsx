import CommentItem from "./Comment-item";

function CommentList({ commentList }) {
	console.log(`commentList`, commentList);
	return (
		<div>
			{
				commentList.map(comment => {
					return <CommentItem
						key={comment.id}
						comment={comment}
					/>
				})
			}
		</div>
	)
}

export default CommentList;
