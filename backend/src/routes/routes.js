const router = require('express').Router();
const fetch = require('node-fetch');

// Darksky api request
router.get('/weather/:latitude/:longitude/:units', async (req, res) => {
  try {
    const { latitude, longitude, units } = req.params;

    const weatherRequest = await fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${latitude},${longitude}?units=${units}`);

    const weather = await weatherRequest.json();

    return res.status(weatherRequest.status).send(weather);
  } catch (error) {
    return res.status(500).send({ error: { message: error.message } });
  }
});

// Reverse geocoding request (Google)
router.get('/adress/:latitude/:longitude', async (req, res) => {
  try {
    const { latitude, longitude } = req.params;

    // Approximate adress
    const adressRequest = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_GEOCODING_KEY}&location_type=approximate`);

    const adress = await adressRequest.json();

    return res.status(adressRequest.status).send(adress);
  } catch (error) {
    return res.status(500).send({ error: { message: error.message } });
  }
});

module.exports = router;
