import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

const Post = () => {
	const status = 200;
	const navigate = useNavigate();

	if (status === 404) {
		return <Navigate to='/' />;
	}

	const handleClick = () => {
		navigate('/about');
	};

	return (
		<div>
			<h2>POST</h2>
			<button className='btn btn-secondary' onClick={handleClick}>
				Click
			</button>
			<Routes>
				<Route path='/show' element={<h1>Hello World</h1>} />
			</Routes>
		</div>
	);
};

export default Post;
