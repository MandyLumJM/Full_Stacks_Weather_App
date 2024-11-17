const axios = require('axios');
const { saveHistory, getHistory, deleteHistory } = require('../models/historyModel');

const getWeather = async (req, res) => {
  const { city, country } = req.query;
  if (!city || !country) {
    return res.status(400).json({ message: 'City and Country are required' });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
    const weatherData = response.data;

    res.json({
      city: weatherData.name,
      country: weatherData.sys.country,
      temperature: weatherData.main.temp,
      condition: weatherData.weather[0].description,
    });

    // Save search history
    await saveHistory(weatherData.name, weatherData.sys.country);
  } catch (error) {
    res.status(400).json({ message: 'Invalid City or Country' });
  }
};

const getHistoryHandler = async (req, res) => {
  const history = await getHistory();
  res.json(history);
};

const deleteHistoryHandler = async (req, res) => {
  const { id } = req.params;
  await deleteHistory(id);
  res.status(200).json({ message: 'Record deleted' });
};

module.exports = { getWeather, getHistoryHandler, deleteHistoryHandler };
