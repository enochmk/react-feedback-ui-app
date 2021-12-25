import { useParams } from 'react-router-dom';

const Post = () => {
	const params = useParams();

	return (
		<div>
			<h2>POST {params.id}</h2>
			<p>Name: {params.name}</p>
		</div>
	);
};

export default Post;
