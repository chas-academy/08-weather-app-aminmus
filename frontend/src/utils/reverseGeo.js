
const reverseGeo = async (latitude, longitude) => {
  const adressRequest = await fetch(`/api/adress/${latitude}/${longitude}`);

  const adress = await adressRequest.json();

  return adress.results[0].formatted_address;
};

export default reverseGeo;
