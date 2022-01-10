const { default: parseJwk } = require('jose/jwk/parse');

// https://cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_AxgU3M0u9/.well-known/jwks.json
const jwk = JSON.parse(`{
  "alg": "RS256",
  "e": "AQAB",
  "kid": "o2rgKFtEW9Hl8jU69CeDTj4txszk0pVPuRGubWA8qSw=",
  "kty": "RSA",
  "n": "4F2qyMjcVpgHchIruSP0gcMt1Z8hoxUYbO1jKQiDDj0-rOcvtz1Zck-A4Nwjo1E9BaLRUUJdaERQlcKhnaeDLW9p23DuOWsrVCbup0n-gBc9OzAmlyxYF3WHkWHik_khyg4GM4RtSfkdCl_zIsLhSBhuOBLwLbHGbUGMuhQP25ODD80FKNMOAX37ke1Gw1udM2W35l0leiQtytebd9l3tfKhzXThYIZo6XvoslQzYJlKjASuZATQknE7mhx430u0nuOOhSEQfYF0noJAAko8Sc8j0pfW9c8h93KC0MMjGV6J24ryUzDaPElpjTAkUDuveS6vhV64g89MCK4OLxquYw",
  "use": "sig"
}`); // header 이야기 인가?

parseJwk(jwk, 'PS256').then(rsaPublicKey => {
  console.log('rsaPublicKey:', rsaPublicKey);
  console.log('typeof rsaPublicKey:', typeof rsaPublicKey);
  console.log('rsaPublicKey.type:', rsaPublicKey.type);
  const pem = rsaPublicKey.export({ format: 'pem', type: 'pkcs1', });
  console.log('pem:', pem);
});