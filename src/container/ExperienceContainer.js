import {connect} from 'react-redux';
import ExperienceList from '../components/ExperienceList';

const mapStateToProps = (state, ownProps) => {
	return {
		experience_list: [...state.experienceReducer.experiences, ...state.experienceReducer.projects]
	}
}

export default connect(mapStateToProps)(ExperienceList);