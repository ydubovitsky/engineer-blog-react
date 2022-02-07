const axios = require('axios');

const callApi = async ({path, requestBody, headers, method}) => {

  //TODO Нужен ли тут try catch это же асинхронный метод
  try {
    const response = await axios({
      method: method,
      url: 'http://localhost:8080' + path,
      data: requestBody,
      headers: headers
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default callApi;