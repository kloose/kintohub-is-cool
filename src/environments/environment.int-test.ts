const gateway = 'https://dev-api.sophonanalytics.io';
const idpHost = 'https://dev-key.sophonanalytics.io';
const idpRealm = 'sophon-test';
const clientId = 'sophon-admin';
const instanceId = 'sophon';

export const environment = {
  production: false,
  version: '0.1.18',
  gateway,
  debug: false,
  accessTokenKey: 'mplAccessToken',
  refreshTokenKey: 'mplRefreshToken',
  adminServiceUrl: `${gateway}`,
  idpTokenService: `${idpHost}/auth/realms/${idpRealm}/protocol/openid-connect/token`,
  idpRealm,
  clientId,
  oauthEnabled: true,
  instanceId
};
