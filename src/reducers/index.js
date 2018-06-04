import { combineReducers } from 'redux';
import locationReducer from './location-reducer';
import skillsReducer from './skills-reducer';
import experienceReducer from './experience-reducer';

export default combineReducers({
	locationReducer,
	skillsReducer,
	experienceReducer
});