console.log('@@@ Conectado...')

document.addEventListener('DOMContentLoaded', () => {
  loadData(city = null)
})

const loadData = async (city) => {
	if(!city) {
		city = 'new york'
	}

	const url = `https://realty-in-us.p.rapidapi.com/locations/auto-complete?input=${city}&limit=5`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'bf8d17ce4amsh8fc500f384c7217p1c265cjsn2646ea4303ca',
			'x-rapidapi-host': 'realty-in-us.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log('@@@ result =>', result);
	} catch (error) {
		console.error(error);
	}
}