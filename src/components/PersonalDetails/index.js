import React from 'react';
import ContactInfo from '../ContactInfo';
import Name from '../Name';
import Selfie from '../Selfie';

import './personal-details.css';
export function PersonalDetails() {
	return(
		<div id='personal-details'>
			<div className='section'><Name/></div>
			<div className='section'><Selfie/></div>
			<div className='section'><ContactInfo/></div>
		</div>
	);	
}

export default PersonalDetails;