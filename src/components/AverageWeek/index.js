import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import avg_week_data from './average_week_dataset';
const AverageWeek = () => {
	return(
		<div style={{width:'330px', height:'330px'}}>
			<Doughnut data={avg_week_data} width='400px' height='400px'/>
		</div>
	)
};

export default AverageWeek;