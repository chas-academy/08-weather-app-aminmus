const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/weather/:latitude/:longitude/:units', async (req, res) => {
  try {
    const { latitude, longitude, units } = req.params;

    const weatherRequest = await fetch(`https://api.darksky.net/forecast/44ac77a2c728fd9b159d612f3f3b227f/${latitude},${longitude}?units=${units}`);

    const weather = await weatherRequest.json()

    return res.status(weatherRequest.status).send(weather);
  } catch (error) {
    return res.status(500).send({ error: { message: error.message } });
  }
});

module.exports = router;