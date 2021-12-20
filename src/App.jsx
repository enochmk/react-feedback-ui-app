import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import FeedbackData from './data/FeedbackData';

const App = () => {
	const [feedbackData, setFeedbackData] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbackData(feedbackData.filter((item) => item.id !== id));
		}
	};

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats data={feedbackData} />
				<FeedbackList data={feedbackData} handleDelete={deleteFeedback} />
			</div>
		</>
	);
};

export default App;
