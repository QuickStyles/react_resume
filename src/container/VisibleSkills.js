import { connect } from 'react-redux';
import SkillsList from '../components/SkillsList';
import { upVote, downVote, filterSkill} from '../actions/skill-actions';

// will find path to leaf
// returns an array with nested arrays equal to depth of selected_node;
const findPathToLeafNode = (tree, selected_node) => {
	const arr = [];
	for(var i in tree) {
		if(tree[i].name === selected_node) {
			arr.push(tree[i].name)
			return arr;
		} else {
			if (tree[i].items) {
				const children = findPathToLeafNode(tree[i].items, selected_node);
				if (children) {
					arr.push(tree[i].name);
					arr.push(children);
					return arr;
				} 
			}
		}
	}
}

// removes all nodes from tree which are not in the path
const getFilteredSkills = (tree, node_path) => {
	const arr = [];
	for (var i in tree) {
		if (tree[i].name == node_path[0]) {
			node_path.shift();
			var children = getFilteredSkills(tree[i].items, node_path) 
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

function flattenDeep(arr1) {
	return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

const mapStateToProps = (state, ownProps) => {
	// need to deep copy state
	const state_copy = JSON.parse(JSON.stringify(state));
	return {
		skills: getFilteredSkills(state_copy.skillsReducer.skills,flattenDeep(findPathToLeafNode(state_copy.skillsReducer.skills, state_copy.skillsReducer.filter)))
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