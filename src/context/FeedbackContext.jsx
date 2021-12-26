import { nanoid } from 'nanoid';
import { createContext, useState } from 'react';
import feedbackItems from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(feedbackItems);

	const addFeedback = (newFeedback) => {
		newFeedback.id = nanoid();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// Prodiver
	const provider = {
		feedback,
		addFeedback,
		deleteFeedback,
	};

	return (
		<FeedbackContext.Provider value={provider}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
