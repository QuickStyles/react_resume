import React from 'react';
import Passion from '../Passion';

import './passion-list';

const passion_list = [
	{
		title: 'Programming',
		icon:'far fa-file-code',
		question: `Favorite Language?`,
		answer:'Javascript'
	},
	{
		title: 'Games',
		icon:'fas fa-gamepad',
		question:`Favorite Game?`,
		answer:'BioShock'
	},
	{
		title: 'Calisthenics',
		icon:'fas fa-dumbbell',
		question:'Favorite Exercise?',
		answer:'Pull Up'
	},
	{
		title: 'Entrepreneurship',
		icon:'far fa-star',
		question:'Favorite Company?',
		answer:'SpaceX'
	},
	{
		title: 'Food',
		icon:'fas fa-utensils',
		question:'Favorite Food?',
		answer:'Spicy Salmon Rolls'
	},
	{
		title: 'Film',
		icon:'fas fa-film',
		question:'Favorite Movie?',
		answer:'Superbad'
	},
]

const PassionList = () => {
	return(
		<div id='passion-list'>
			{
				passion_list.map((item, i) => {
					return <Passion
						key={i}
						title={item.title}
						icon={item.icon}
						question={item.question}
						answer={item.answer}
					/>
				})
			}
		</div>
	);
};

export default PassionList;