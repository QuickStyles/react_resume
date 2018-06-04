import React from 'react';
import VisibleSkills from '../../container/VisibleSkills';
import PersonalDetails from '../PersonalDetails';
import ContentContainer from '../ContentContainer';
import Education from '../Education';
import ExperienceContainer from '../../container/ExperienceContainer';
import AverageWeek from '../AverageWeek';

import './portfolio.css';

const Portfolio = ({match}) => {
	return(
		<div id='portfolio'>
			<PersonalDetails/>
			{ContentContainer(VisibleSkills)({title:'Skills', logo:'fas fa-pencil-alt', grid_area:'left-side-row-1'})}
			{ContentContainer(Education)({title:'Education', logo:'fas fa-user-graduate', grid_area: 'left-side-row-2'})}
			{ContentContainer(ExperienceContainer)({title:'Experiences', logo: 'fas fa-burn', grid_area: 'right-side-row-1'})}
			{ContentContainer(AverageWeek)({title:'Average Day', logo:'far fa-clock', grid_area:'left-side-row-3'})}
		</div>
	)
}
export default Portfolio;