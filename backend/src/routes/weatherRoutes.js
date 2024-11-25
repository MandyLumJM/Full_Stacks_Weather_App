const express = require('express');
const { getWeather, getHistoryHandler, deleteHistoryHandler } = require('../controllers/weatherController');

const router = express.Router();

// Routes
router.get('/', getWeather);
router.get('/history', getHistoryHandler);
router.delete('/history/:id', deleteHistoryHandler);

module.exports = router;
