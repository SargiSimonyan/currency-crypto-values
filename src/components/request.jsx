
async function request(url, method = 'GET', body) {
  let config = {
      method: method,
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'jhJ9IDDpHbxG7UMByUEvhgoyT9wpANIfUJACRuI+D7k='
      }
  }
  if (body) {
      config.body = JSON.stringify(body);
  }
  try {
      const response = await fetch(url, config);
      const result_1 = await response.json();
      if (result_1.error) {
          throw result_1.error;
      }
      return result_1;
  } catch (err) {
      console.log('error', err);
  }
}

export default request;