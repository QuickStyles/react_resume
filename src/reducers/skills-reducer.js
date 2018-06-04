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

const updateSkillFilters = (current_filter_stack, selected_node, children) => {
	let new_filter_stack = [...current_filter_stack];
	if (!children) {
		return [selected_node];
	}
	for (var node in children) {
		if (current_filter_stack[current_filter_stack.length -1] == children[node].name) {
			new_filter_stack.push(selected_node);
			return new_filter_stack
		}
	}
	if (current_filter_stack[ current_filter_stack.length -1] == selected_node) {
		new_filter_stack.shift();
		return new_filter_stack
	}
	return new_filter_stack
}

const skillsReducer = (state=current_skills, action) => {
	const state_copy = JSON.parse(JSON.stringify(state));
	switch(action.type) {
		case 'DOWN_VOTE':
			return {...state, skills:updateSkillsExp(state_copy.skills, action.payload.selected_node, action.type)};
		case 'UP_VOTE':
			return {...state, skills:updateSkillsExp(state_copy.skills, action.payload.selected_node, action.type)};
		case 'FILTER_SKILL':
			return {...state, filter:updateSkillFilters(state_copy.filter, action.payload.skill_name, action.payload.skill_children)};
		default:
			return state;
	}
}

export default skillsReducer;