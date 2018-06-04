import React from 'react';
import Header from '../Header';
import './content-container.css';

export default (WrappedComponent) => ({title, logo, grid_area}) => {
	return(
		<div className='container-component' style={{'grid-area': grid_area}}>
			<div className='title'><Header title={title}/></div>
			<div className='logo-container'><i className={logo}/></div>
			<div className='verticle-line'></div>
			<div className='content'>
				<WrappedComponent/>
			</div>
		</div>
	)
}