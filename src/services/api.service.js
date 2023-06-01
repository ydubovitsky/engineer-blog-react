import { BASE_URL } from '../constants/constants';

const axios = require('axios');

export const sendRequestToRemoteServer = async ({ url, body, headers, method }) => {

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

export const saveImageToRemoteServer = async (imageFile) => {
  var formData = new FormData();
  formData.append('file', imageFile)
  const payload = {
    url: `${BASE_URL}/api/v1/file`,
    method: 'POST',
    body: formData,
    headers: {
      "Content-type": "multipart/form-data"
    }
  };
  return await sendRequestToRemoteServer(payload);
}
