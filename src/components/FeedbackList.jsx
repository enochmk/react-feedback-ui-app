import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ data, handleDelete }) => {
	if (!data || !data.length) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className='feedback-list'>
			{data.map((item) => {
				return (
					<FeedbackItem key={item.id} data={item} handleDelete={handleDelete} />
				);
			})}
		</div>
	);
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
