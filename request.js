const key ='a34bfb9bfb0da9f88f6e9f04a53dc222';

//const baseURL ='api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=a34bfb9bfb0da9f88f6e9f04a53dc222';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}