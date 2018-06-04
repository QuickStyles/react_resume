import React from 'react';
import Experience from '../Experience';

import './experience-list.css';
const ExperienceList = ({experience_list}) => {
	return(
		<div id='experience-list'>
			{
				experience_list.map((item, i ) => {
					return <Experience
						key={i}
						title={item.title}
						position={item.position}
						date={item.date}
						context={item.context}
					/>
				})
			}
		</div>
	)
}

export default ExperienceList;