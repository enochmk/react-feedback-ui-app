// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
	const headerStyle = { backgroundColor: bgColor, color: textColor };

	return (
		<header style={headerStyle}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
	// return (
	// 	<Link to='/' >
	// 		<header style={headerStyle}>
	// 			<div className='container'>
	// 				<h2>{text}</h2>
	// 			</div>
	// 		</header>
	// 	</Link>
	// );
};

Header.defaultProps = {
	text: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
};

Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default Header;
