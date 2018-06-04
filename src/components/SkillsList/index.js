import React from 'react';
// import Category from './Category';
import ListItem from './ListItem';

import './skillslist.css';

const SkillsList = ({skills, props, upVote, downVote, filterSkill}) => {
	return(
		<ul id='skillslist-component'>
			{
				skills.map((item, i) => {
					return <ListItem 
						key={i} 
						name={item.name} 
						exp={item.exp} 
						items={(item.items) ? item.items : null} 
						upVote={upVote} 
						downVote={downVote} 
						filterSkill={filterSkill}
						icon={item.icon}
					/>
				})
			}
		</ul>
	)
}

export default SkillsList;