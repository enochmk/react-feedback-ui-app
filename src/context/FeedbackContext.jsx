import { nanoid } from 'nanoid';
import { createContext, useState } from 'react';
import feedbackItems from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(feedbackItems);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	// Add Feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = nanoid();
		setFeedback([newFeedback, ...feedback]);
	};

	// Delete Feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// update feedback
	const updateFeedback = (id, updatedItem) => {
		setFeedbackEdit({
			item: {},
			edit: false,
		});

		setFeedback(
			feedback.map((item) => {
				return item.id === id ? { ...item, ...updatedItem } : item;
			})
		);
	};

	// set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	// Prodiver
	const provider = {
		feedback,
		feedbackEdit,
		addFeedback,
		deleteFeedback,
		editFeedback,
		updateFeedback,
	};

	return (
		<FeedbackContext.Provider value={provider}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
