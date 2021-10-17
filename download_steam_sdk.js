const fs = require('fs-extra');
const fetch = require('node-fetch').default;
const decompress = require('decompress');
const prompt = require('prompt-sync')();
const bignumber = require('node-bignumber');

const downloadSteamworksSdk = async () => {
  const steamLoginUrls = {
    baseUrl   : 'https://partner.steamgames.com/',
    sdkUrl    : 'https://partner.steamgames.com/downloads/steamworks_sdk.zip',
    loginUrl  : 'https://partner.steamgames.com/login/',
    rsaKeyUrl : 'https://partner.steamgames.com/login/getrsakey/',
    doLoginUrl: 'https://partner.steamgames.com/login/dologin/',
  };

  const getParams = (data) => {
    if (!data || typeof data !== 'object') {
      throw new Error('Data provided to params is not an object!');
    }
    const params = new URLSearchParams();
    for (const key in data) {
      params.append(key, data[key].toString());
    }
    return params;
  };

  console.log('steamworks-node:\nThe Steamworks SDK will be downloaded, your Steam credentials are required for this.');
  const proceed = prompt('Continue? [Y/n]: ', 'Y').toLowerCase() === 'y';
  if (!proceed) {
    throw new Error('Steamworks SDK download was cancelled!');
  }

  const loginResponse = await fetch(steamLoginUrls.loginUrl, { method: 'get' });
  if (loginResponse.status !== 200) {
    throw new Error(`Failed to get Steam SDK: [${loginResponse.status}]: ${loginResponse.statusText}`);
  }

  const username = prompt('Steam Username: ') ?? '';
  const password = prompt('Steam Password: ', { echo: '*' }) ?? '';
  const hasSteamGuard = prompt('Do you use Steam Guard (2FA)? [y/N]: ', 'N').toLowerCase() === 'y';
  const twofactorcode = hasSteamGuard ? prompt('Steam Guard Code: ') : '';
  if (!username?.length || !password?.length) {
    throw new Error('Username or password was empty!');
  }

  if (hasSteamGuard && !twofactorcode?.length) {
    throw new Error('Steam Guard code was empty!');
  }

  const sessionid = loginResponse.headers.raw()['set-cookie'].find(cookie => cookie.includes('sessionid')).split(';')[0].split('=')[1];
  const sessionCookie = loginResponse.headers.raw()['set-cookie'].map(cookie => cookie.split(';')[0]).join(';');
  const rsaKeyResponse = await fetch(steamLoginUrls.rsaKeyUrl, {
    method : 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      cookie        : sessionCookie,
      Referer       : steamLoginUrls.baseUrl,
    },
    body: getParams({ username, sessionid }),
  });

  const rsaKeyResponseData = await rsaKeyResponse.json().catch(() => ({}));
  if (rsaKeyResponse.status !== 200 || !rsaKeyResponseData.success || !rsaKeyResponseData.publickey_mod || !rsaKeyResponseData.publickey_exp || !rsaKeyResponseData.timestamp) {
    throw new Error('An error occured while trying to communicate with the Steam servers!');
  }

  const rsaKey = new bignumber.Key();
  rsaKey.setPublic(rsaKeyResponseData.publickey_mod, rsaKeyResponseData.publickey_exp);
  const doLoginResponse = await fetch(steamLoginUrls.doLoginUrl, {
    method : 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      cookie        : sessionCookie,
      Referer       : steamLoginUrls.baseUrl,
    },
    body: getParams({
      donotcache       : Date.now(),
      sessionid        : sessionid,
      password         : bignumber.hex2b64(rsaKey.encrypt(password)),
      username         : username,
      twofactorcode    : twofactorcode,
      emailauth        : '',
      loginfriendlyname: '',
      captchagid       : -1,
      captcha_text     : '',
      emailsteamid     : '',
      rsatimestamp     : rsaKeyResponseData.timestamp,
      remember_login   : false,
    }),
  });

  const doLoginResponseData = await doLoginResponse.json().catch(() => ({}));
  if (doLoginResponse.status !== 200 || !doLoginResponseData.success || !doLoginResponseData.login_complete) {
    throw new Error('An error occured while authenticating with Steam!');
  }

  const loginCookie = `${sessionCookie};${doLoginResponse.headers.raw()['set-cookie'].map(cookie => cookie.split(';')[0]).join(';')}`;
  const sdkResponse = await fetch(steamLoginUrls.sdkUrl, {
    method : 'get',
    headers: {
      cookie : loginCookie,
      Referer: steamLoginUrls.baseUrl,
    }
  });

  if (loginResponse.status !== 200) {
    throw new Error(`Failed to download Steam SDK: [${loginResponse.status}]: ${loginResponse.statusText}`);
  }
  if (!sdkResponse.headers.raw()['content-type']?.includes('application/zip')) {
    throw new Error('An unknown error occured while attempting to download the Steam SDK!');
  }
  if (fs.existsSync('./sdk')) {
    fs.rmSync('./sdk', { recursive: true, force: true });
  }
  await decompress(await sdkResponse.buffer(), './');
};

module.exports = { downloadSteamworksSdk };