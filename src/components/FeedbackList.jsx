import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ data, handleDelete }) => {
	if (!data || !data.length) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{data.map((item) => {
					return (
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem
								key={item.id}
								data={item}
								handleDelete={handleDelete}
							/>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);

	// 	return (
	// 		<div className='feedback-list'>
	// 			{data.map((item) => {
	// 				return (
	// 					<FeedbackItem key={item.id} data={item} handleDelete={handleDelete} />
	// 				);
	// 			})}
	// 		</div>
	// 	);
};

FeedbackList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
};

export default FeedbackList;
