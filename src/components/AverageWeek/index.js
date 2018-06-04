import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import avg_week_data from './average_week_dataset';
const AverageWeek = () => {
	return(
		<div style={{width:'inherit', height:'inherit'}}>
			<Doughnut data={avg_week_data} width='100%' height='100%'/>
		</div>
	)
};

export default AverageWeek;