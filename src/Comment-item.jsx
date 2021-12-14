import { useState } from "react";
import CommentList from "./Comment-list";

function CommentItem({ comment }) {
	const [kidsShowed, setKidsShowed] = useState(false);

	if (!comment.kids) return null;
	const toggleComments = () => {
		setKidsShowed(!kidsShowed);
	}

	return <div className='comments'
		key={comment.id}>
		{comment.text}

		{
			comment.kids.length > 0 &&
			<div onClick={toggleComments}> <strong> {kidsShowed ? 'Hide comments' : 'Show comments'} </strong> </div>
		}

		{
			comment.kids && kidsShowed &&
			<CommentList
				commentList={comment.kids}
			/>
		}

	</div>;
}

export default CommentItem;
