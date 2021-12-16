import { useState } from "react";
import CommentList from "./Comment-list";

function CommentItem({ comment }) {
	const [kidsShowed, setKidsShowed] = useState(false);

	// if (!comment.children) return null;

	const toggleComments = () => {
		setKidsShowed(!kidsShowed);
	}
	
	return <div className='comments'		
		key={comment.id}>
		<p dangerouslySetInnerHTML={{ __html: comment.text }}>
			
		</p>
		{
			comment.children?.length > 0 &&
			<div onClick={toggleComments}> <strong> {kidsShowed ? 'Hide comments' : 'Show comments'} </strong> </div>
		}

		{
			comment.children && kidsShowed &&
			<CommentList
				commentList={comment.children}
			/>
		}

	</div>;
}

export default CommentItem;
