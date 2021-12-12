import CommentList from './Comment-list';
import './style.css';

function Comments({ comments }) {

	return (
		<div>
			{
				<CommentList
					commentList={comments}
				/>
			}
		</div>
	)
}

export default Comments;
