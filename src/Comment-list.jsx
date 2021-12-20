import CommentItem from "./Comment-item";

function CommentList({ commentList }) {

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
