const axios = require('axios');

const callApi = async (payload) => {

const { path, requestBody, headers } = payload;

try { //TODO Нужен ли тут try catch это же асинхронный метод
  const response = await axios({
    method: payload.method,
    //TODO Вынести в константу?
    url: 'http://localhost:8080' + path,
    data: JSON.stringify(requestBody),
    headers: headers
  });

  return response.data;
} catch (error) {
  console.error(error);
  return error;
}
}

export default callApi;