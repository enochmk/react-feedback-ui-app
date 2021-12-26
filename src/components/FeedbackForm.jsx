import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [rating, setRating] = useState(10);
	const [message, setMessage] = useState('');

	const { addFeedback, feedbackEdit, editFeedback, updateFeedback } =
		useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit) {
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
			setBtnDisabled(false);
		}
	}, [feedbackEdit]);

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters');
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}

		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};

			feedbackEdit.edit
				? updateFeedback(feedbackEdit.item.id, newFeedback)
				: addFeedback(newFeedback);

			setText('');
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>

				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a Review'
						value={text}
						onChange={handleTextChange}
					/>
					<Button type='submit' version='primary' isDisabled={btnDisabled}>
						{feedbackEdit.edit ? 'Update' : 'Send'}
					</Button>
				</div>

				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
