/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	const fetchFeedback = async () => {
		const response = await fetch('/feedback?_sort=id&_order=desc');
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

	// Add Feedback
	const addFeedback = async (newFeedback) => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		});

		const data = await response.json();
		setFeedback([data, ...feedback]);
	};

	// Delete Feedback
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			const response = await fetch(`/feedback/${id}`, {
				method: 'DELETE',
			});

			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// update feedback
	const updateFeedback = async (id, updatedItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedItem),
		});

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
		isLoading,
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
