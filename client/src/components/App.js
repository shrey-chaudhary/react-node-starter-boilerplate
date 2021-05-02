import React from 'react';
import './App.scss';
import darthmaul from '../../assests/images/darth-maul-1.png';

export default (props) => {
	return (
		<>
			<h3 className='heading-style'>Hello There!</h3>
			<img className='image-style' src={darthmaul} alt="image of evil"/>
		</>
	);
};
