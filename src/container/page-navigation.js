import { connect } from 'react-redux';
import { nextPage, previousPage, goToPage } from '../actions/location-actions';
import ChangePage from '../ChangePage';

const mapStateToProps = (state) => {
	return {
		location: state.location
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		nextPage: () => dispatch(nextPage),
		previousPage: () => dispatch(previousPage),
		goToPage: (page_number) => dispatch(goToPage(page_number))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChangePage)