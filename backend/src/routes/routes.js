const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/weather/:latitude/:longitude/:units', async (req, res) => {
  const { latitude, longitude, units } = req.params;

  const weather = await fetch(`https://api.darksky.net/forecast/44ac77a2c728fd9b159d612f3f3b227f/${latitude},${longitude}?units=${units}`);

  res.send(await weather.json());
});

module.exports = router;