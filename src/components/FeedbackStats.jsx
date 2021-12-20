import PropTypes from 'prop-types';

const FeedbackStats = ({ data }) => {
	// calculate rating average
	let average =
		data.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / data.length;

	// format decimal place
	average = average.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{data.length} Review(s)</h4>
			<h4>Average Rating: {isNaN(average) ? '0' : average}</h4>
		</div>
	);
};

FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
