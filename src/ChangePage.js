import React from 'react';

export default ({location, nextPage, previousPage, goToPage}) => {
	return(
		<div>
			<ul>
				<li>
					<button onClick={ () => previousPage()}>
						Previous page
					</button>
				</li>
				<li>
					<button onClick={ () => nextPage()}>
						Next page
					</button>
				</li>
				<li>
					<button onClick={ () => goToPage(3)}>
						Go To Page 3
					</button>
				</li>
			</ul>
		</div>
	);
}