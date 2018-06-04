import React from 'react';

import './experience.css';

const Experience = ({title, position, date, context}) => {
	return(
		<div className='experience-container'>
			<div className='header'>
				<span className='heading-decoration'><i className='fas fa-circle-notch'/></span>
				<h4>{position}</h4>
				<h5>
					<span className='title'>{title}</span>
					<span className='date'>{date}</span>
				</h5>
			</div>
			<div className='body'>
				<p>{context}</p>
			</div>
		</div>
	)
}

export default Experience;