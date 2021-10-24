
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) => {
    const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='+query+'&units=metric&appid=50a7aa80fa492fa92e874d23ad061374'
  );
      const data = await response.json();

    return data;
}