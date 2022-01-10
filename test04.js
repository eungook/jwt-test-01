const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: 'https://cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_AxgU3M0u9/.well-known/jwks.json',
  requestHeaders: {}, // Optional
  timeout: 30000, // Defaults to 30s
});

const kid = 'o2rgKFtEW9Hl8jU69CeDTj4txszk0pVPuRGubWA8qSw=';
client.getSigningKey(kid).then(key => {
  const signingKey = key.getPublicKey();
  console.log('signingKey:', signingKey);
})
