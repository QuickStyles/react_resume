export const nextPage = {
	type: 'NEXT_PAGE'
}

export const previousPage = {
	type: 'PREVIOUS_PAGE'
}

export const goToPage = (new_location) => {
	console.log(' new page')
	console.log(new_location)
	return {
		type: 'GO_TO_PAGE',
		payload: new_location
	}
}