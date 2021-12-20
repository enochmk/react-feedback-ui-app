import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ data, handleDelete }) => {
	return (
		<Card reverse={false}>
			<div className='num-display'>{data.rating}</div>
			<button onClick={() => handleDelete(data.id)} className='close'>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{data.text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	data: PropTypes.objectOf(
		PropTypes.shape({
			id: PropTypes.number,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
};

export default FeedbackItem;
