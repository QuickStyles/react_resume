const locationReducer = (state={
	location: {page_number: 0, page_name:''}
}, action) => {
	switch(action.type) {
		case 'NEXT_PAGE':
			if (state.location.page_number === 0) {
				return;
			}
			return {...state, location:{page_number: state.location.page_number + 1}}
		case 'PREVIOUS_PAGE':
		return {...state, location:{page_number: state.location.page_number - 1}}
		case 'GO_TO_PAGE':
			console.log(action)
			return {...state, location:{page_number: action.payload}}
		default:
			return state;
	}
}
export default locationReducer;