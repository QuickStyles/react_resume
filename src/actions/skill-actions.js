export const upVote = (selected_node) => {
	return {
		type: 'UP_VOTE',
		payload: {
			selected_node
		}
	}
}

export const downVote = (selected_node) => {
	return {
		type: 'DOWN_VOTE',
		payload: {
			selected_node
		}
	}
}

export const filterSkill = (skill_name, skill_children) => {
	return {
		type: 'FILTER_SKILL',
		payload: {skill_name, skill_children}
	}
}