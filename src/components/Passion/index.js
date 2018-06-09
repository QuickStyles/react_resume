import React from 'react';

import './passion.css';

const Passion = ({title, icon, question, answer}) => {
	return (
		<div className='passion-container'>
			<div className='header'>
				<span className='title'>
					<h4>{title}</h4>
				</span>
				<span className='icon'>
					<i className={icon}/>
				</span>
			</div>
		</div>
	);
}

export default Passion;