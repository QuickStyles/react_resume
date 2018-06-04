import React from 'react';
import { connect } from 'react-redux';
import { nextPage, previousPage, goToPage } from './actions/location-actions';
import PageNavigation from './container/page-navigation';


const Root = ({location}) => {
	return(
		<div>
			<div>{`${location.page_number}`}</div>
			<PageNavigation/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {location: state.locationReducer.location}
}
export default connect(mapStateToProps)(Root)