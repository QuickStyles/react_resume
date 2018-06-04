import { connect } from 'react-redux';
import SkillsList from '../components/SkillsList';
import { upVote, downVote, filterSkill} from '../actions/skill-actions';

const getFilteredSkills = (tree, selected_nodes) => {
	const arr = [];
	for (var i in tree) {
		if (tree[i].name == selected_nodes[selected_nodes.length -1]) {
			selected_nodes.pop()
			var children = getFilteredSkills(tree[i].items, selected_nodes) 
			if (children.length) {
				arr.push(tree[i])
			}
		} else {
			tree[i] = {...tree[i], items:null}
			arr.push(tree[i]);
		}
	}
	return arr;
}

const mapStateToProps = (state, ownProps) => {
	// need to deep copy state
	const state_copy = JSON.parse(JSON.stringify(state));
	return {
		skills: getFilteredSkills(state_copy.skillsReducer.skills, state_copy.skillsReducer.filter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		upVote: (selected_node) => dispatch(upVote(selected_node)),
		downVote: (selected_node) => dispatch(downVote(selected_node)),
		filterSkill: (skill_name, skill_items) => dispatch(filterSkill(skill_name, skill_items))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SkillsList);