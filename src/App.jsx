import { nanoid } from 'nanoid';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/About';
import PostPage from './pages/Post';
import AboutIconLink from './components/AboutIconLink';

const App = () => {
	const [feedbackData, setFeedbackData] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbackData(feedbackData.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = nanoid();
		setFeedbackData([newFeedback, ...feedbackData]);
	};

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats data={feedbackData} />
								<FeedbackList
									data={feedbackData}
									handleDelete={deleteFeedback}
								/>
							</>
						}
					></Route>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/post/*' element={<PostPage />} />
				</Routes>

				<AboutIconLink />
			</div>
		</Router>
	);
};

export default App;
