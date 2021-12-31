import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spinner from 'react-bootstrap/Spinner';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
	const { feedback, isLoading } = useContext(FeedbackContext);
	if (!isLoading && (!feedback || !feedback.length)) {
		return <p>No Feedback Yet</p>;
	}

	if (isLoading) {
		return (
			<Spinner
				animation='border'
				role='status'
				style={{ display: 'block', margin: 'auto' }}
			>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		);
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => {
					return (
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem key={item.id} item={item} />
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
};

export default FeedbackList;
