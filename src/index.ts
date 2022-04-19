import { getHelloSnapParams } from './api_hello';
import { getByeSnapParams } from './api_bye';

declare const wallet;

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  let params;
  switch (requestObject.method) {
    case 'hello':
      params = getHelloSnapParams(originString);
      return wallet.request(params);

    case 'bye':
      params = getByeSnapParams(originString);
      return wallet.request(params);

    default:
      throw new Error('Method not found.');
  }
});
