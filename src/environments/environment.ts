const gateway = 'http://localhost:8080';
const idpHost = 'http://localhost:9099';
const idpRealm = 'sophon-test';
const clientId = 'sophon-admin';
const instanceId = 'sophon';

export const environment = {
  production: false,
  version: '0.1.18',
  debug: true,
  gateway,
  accessTokenKey: 'mplAccessToken',
  refreshTokenKey: 'mplRefreshToken',
  adminServiceUrl: `${gateway}`,
  idpTokenService: `${idpHost}/auth/realms/${idpRealm}/protocol/openid-connect/token`,
  idpRealm,
  clientId,
  oauthEnabled: true,
  instanceId
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
