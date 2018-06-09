import React from 'react';

import './list-item.css';

const computeItems = (items, downVote, upVote, filterSkill) => {
	if(items) {
		return(
			<ul className='nested-list-item'>
				{
					items.map((item, i) => {
						return(
							<ListItem 
								key={i} 
								name={item.name} 
								items={ (item.items) ? item.items : null} 
								exp={item.exp} 
								downVote={downVote} 
								upVote={upVote} 
								filterSkill={filterSkill}
								icon={item.icon}
							/>
						)
					})
				}
			</ul>
		)
	}
}

const handleVote = (selected_node, dispatch) => {
	dispatch(selected_node);
}

const handleClick = (name, items, filterSkill) => {
	filterSkill(name, items);
}

const ListItem = ({name, items, exp, downVote, upVote, filterSkill, icon}) => {

	return(
		<li className='list-item'>
			<span className={icon ? 'icon-wrapper': ''}>
				<i className={`${icon} icon`}></i>
			</span>
			<p onClick={ () => {handleClick(name, items, filterSkill)}} className='item-name'>
				{name}
			</p>
			{ (exp != null) ? 
				<span className='exp-container'>
					<span className='exp-button'>
						<button onClick={() => {handleVote(name, upVote)}}>
							<i className='fas fa-arrow-circle-up'/>
						</button>
					</span>
					<span className='exp-number'>
						<p>{exp}</p>	
					</span>
					<span className='exp-button'>
						<button onClick={() => {handleVote(name, downVote)}}>
							<i className='fas fa-arrow-circle-down'/>
						</button>
					</span>
				</span> : ''
			}
			{computeItems(items, downVote, upVote, filterSkill)}
		</li>
	)
}

export default ListItem;