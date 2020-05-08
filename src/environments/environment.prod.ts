const version = 'SOPHON_VERSION';
const gateway = 'SOPHON_GW_API';
const realm = 'SOPHON_IDP_REALM';
const instanceId = 'INSTANCE_ID';

export const environment = {
  production: true,
  version: version,
  gateway: gateway,
  debug: false,
  accessTokenKey: 'SOPHON-AccessToken',
  refreshTokenKey: 'SOPHON-RefreshToken',
  adminServiceUrl: `${gateway}/api`,
  idpService: `${gateway}/auth`,
  idpTokenService: `${gateway}/auth/realms/${realm}/protocol/openid-connect/token`,
  idpRealm: realm,
  clientId: 'SOPHON_IDP_CLIENT_ID',
  oauthEnabled: true,
  instanceId
};
