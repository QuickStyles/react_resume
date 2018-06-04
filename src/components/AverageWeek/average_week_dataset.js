const HOURS_IN_DAY = 0.0416667;
const HOURS_IN_WEEK = 168;
const data = {
	labels: [
		'Eating',
		'Social-Lifing',
		'Programming',
		'Sleeping',
		'Reading',
		'Gyming',
		'Gaming'
	],
	datasets:[
		{
			// data: [16, 15, 65, 40, 12, 12, 8], //hours/week
			data: [(16/HOURS_IN_WEEK/HOURS_IN_DAY), (15/HOURS_IN_WEEK/HOURS_IN_DAY), (65/HOURS_IN_WEEK/HOURS_IN_DAY), (40/HOURS_IN_WEEK/HOURS_IN_DAY), (12/HOURS_IN_WEEK/HOURS_IN_DAY), (12/HOURS_IN_WEEK/HOURS_IN_DAY),(8/HOURS_IN_WEEK/HOURS_IN_DAY)], //hours/day
			// backgroundColor: [
			// 	'#FF6384',
			// 	'#36A2EB',
			// 	'#FFCE56',
			// 	'#BC412B',
			// 	'#DC602E',
			// 	'#D7B49E',
			// 	'#B8D5B8',
			// ],
			backgroundColor: [
				'#3D3230',
				'#51423F',
				'#65534F',
				'#79635F',
				'#8D746F',
				'#A1847E',
				'#B5958E',
			],
			hoverBackgroundColor: [
				'#DDB5AD',
				'#DDB5AD',
				'#DDB5AD',
				'#DDB5AD',
				'#DDB5AD',
				'#DDB5AD',
				'#DDB5AD',
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