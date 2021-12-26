import { createContext, useState } from 'react';

const FeedbackContext = createContext();
const items = [
	{
		id: 1,
		text: 'This item is from the context',
		rating: 10,
	},
];

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(items);
	const provider = {
		feedback,
	};

	return (
		<FeedbackContext.Provider value={provider}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
