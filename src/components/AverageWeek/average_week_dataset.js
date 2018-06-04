const data = {
	labels: [
		'Eating',
		'Trying to social life',
		'Programming',
		'Sleeping',
		'Reading',
		'Pushups',
		'Gaming'
	],
	datasets:[
		{
			data: [16, 15, 65, 40, 12, 12, 8],
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#BC412B',
				'#DC602E',
				'#D7B49E',
				'#B8D5B8',
			],
			hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#DC602E',
				'#D7B49E',
				'#B8D5B8',
			]
		}
	]
};

// 168 hours/week

// const calculate_hours = (data) => {
// 	let hours_left = 168;
// 	for (var i = 0; i < data.length; i++) {
// 		hours_left = hours_left -= data[i].value;
// 	}
// 	console.log(hours_left);
// }
// calculate_hours(my_avg_week.datasets[0].data);

export default data;