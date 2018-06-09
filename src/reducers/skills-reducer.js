import current_skills from './skills-defaults';

const updateSkillsExp = (tree, selected_node, action_type) => {
	for (var i in tree) {
		if(tree[i].name == selected_node) {
			if (action_type == 'DOWN_VOTE') {
				tree[i].exp = tree[i].exp -= 1;
			} else {
				tree[i].exp = tree[i].exp += 1;
			}
			return tree;
		} else {
			var children = updateSkillsExp(tree[i].items, selected_node, action_type);
			if (children) {
				tree[i].items = children;
			}
		}
	}
	return tree
};

const skillsReducer = (state=current_skills, action) => {
	const state_copy = JSON.parse(JSON.stringify(state));
	switch(action.type) {
		case 'DOWN_VOTE':
			return {...state, skills:updateSkillsExp(state_copy.skills, action.payload.selected_node, action.type)};
		case 'UP_VOTE':
			return {...state, skills:updateSkillsExp(state_copy.skills, action.payload.selected_node, action.type)};
		case 'FILTER_SKILL':
			return {...state, filter:action.payload.skill_name};
		default:
			return state;
	}
}

export default skillsReducer;