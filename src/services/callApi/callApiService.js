const axios = require('axios');

const callApiService = async ({url, body, headers, method}) => {

  //TODO Нужен ли тут try catch это же асинхронный метод
  try {
    const response = await axios({
      method: method,
      url: url,
      data: body,
      headers: headers
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default callApiService;
