
// Create a function to fetch API 
function cityDetails () {
// Create variable to store GET, Key & Host
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1dffac3649mshfd7be08d1060e78p109a63jsne9af448ef23d',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
// Create a fetch method to fetch resource from the server 
fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q5465', options)
// Console log the data that has been retrieved, with information on what the data is representing
	.then(response => response.json())
	.then(response => console.log('Cape Town elevation is: ', response.data.elevationMeters, 'meters', 
								  ' \n The population in Cape Town is: ', response.data.population, 'people'
			))
	.catch(err => console.error(err));
}
// Call the cityDetails function 
cityDetails()

// Create a function to fetch API 
function fetchWeather() {
	// Create variable to store GET, Key & Host
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1dffac3649mshfd7be08d1060e78p109a63jsne9af448ef23d',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};
// Create a fetch method to fetch resource from the server 
fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=18.423888888&lat=-33.925277777', options)
	.then(response => response.json())
	//Console log the data that has been retrieved, with information on what the data is representing
	.then(response => console.log( 'The weather in Cape Town is: ', response.data[0].temp, 'degrees celcius'))
	.catch(err => console.error(err));
}
fetchWeather()
//Call the fetchWeather function 
   