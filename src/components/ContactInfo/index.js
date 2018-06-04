import React from 'react';

import './contact-info.css';

function ContactInfo() {
	return(
		<div id='contact-info'>
			<div className='info'>
				<span className='content icon'><i className='fas fa-phone'/></span>
				<span className='content'>778-772-8001</span>
			</div>
			<div className='info'>
				<span className='content icon'><i className='fas fa-envelope-open'/></span>
				<span className='content'>brandonywlam@gmail.com</span>
			</div>
			<div className='info'>
				<span className='content icon'><i className='fab fa-linkedin'/></span>
				<span className='content'><a href='https://www.linkedin.com/in/brandonywlam'>in/brandonywlam</a></span>
			</div>
			<div className='info'>
				<span className='content icon'><i className='fab fa-github'/></span>
				<span className='content'><a href='https://github.com/QuickStyles'>github.com/QuickStyles</a></span>
			</div>
		</div>
	)
}

export default ContactInfo;