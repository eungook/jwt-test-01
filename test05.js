const { default: jwtVerify } = require('jose/jwt/verify');
const { default: parseJwk } = require('jose/jwk/parse');

// console.log('jwtVerify:', jwtVerify);
// console.log('parseJwk:', parseJwk);

(async () => {
  // const jwt = 'eyJhbGciOiJFUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjA0MzE1MDc0LCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.hx1nOfAT5LlXuzu8O-bhjXBGpklWDt2EsHw7-MDn49NrnwvVsstNhEnkW2ddauB7eSikFtUNeumLpFI9CWDBsg';
  // const publicKey = await parseJwk({
  //   alg: 'ES256',
  //   crv: 'P-256',
  //   kty: 'EC',
  //   x: 'ySK38C1jBdLwDsNWKzzBHqKYEE5Cgv-qjWvorUXk9fw',
  //   y: '_LeQBw07cf5t57Iavn4j-BqJsAD1dpoz8gokd3sBsOo'
  // });
  // const { payload, protectedHeader } = await jwtVerify(jwt, publicKey, {
  //   issuer: 'urn:example:issuer',
  //   audience: 'urn:example:audience'
  // });
  
  // const jwt = 'eyJraWQiOiJvMnJnS0Z0RVc5SGw4alU2OUNlRFRqNHR4c3prMHBWUHVSR3ViV0E4cVN3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ZmVkY2MzNi03N2NiLTRjNWQtYTkzZC0yOTRiMDBiNmRiZmMiLCJldmVudF9pZCI6IjFhZDg4OWU2LWQ4MTAtNGJjZS04ZmY3LTZhZjBmZjliNGViNiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTU3ODc4NjIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1ub3J0aGVhc3QtMl9BeGdVM00wdTkiLCJleHAiOjE2MTU3OTE0NjIsImlhdCI6MTYxNTc4Nzg2MiwianRpIjoiMWE3YjYxMWUtNWQzMS00ODQ4LWI2YTQtNDA0ZTFiYmY1NWU1IiwiY2xpZW50X2lkIjoiM2M1djlpdDR1OXRjM20zYzRycGthZW4zdXUiLCJ1c2VybmFtZSI6ImV1bmdvb2sifQ.tf6VUykbW6ReZ-dOOxRyJu1yhKFoU2HmMfHhHDPqBPfkjukpdaq08PefJo_yzR75sL5qRyrORGOIBDqo0GNVrVEu7qd4zcikB_ZP8I8ZbmpZxcnIbYzCPIDzIS2Vwew1zH3fU0kzraMqMaH0TtaNGAEqJJ9Disvn5YcJkSd7ZoHf2IX7RVZkbDWfk3Av4faLT44piZRBbfApKKhuZK1lFosUhp-8kHSXnNyLmdxdEY0usd46ZseNDbTqspzqk62MqC9yXAj1DuPhhL9_APkQqYDktXOyQ-zgoG6GATOlsRgVTn_mWaEtxRM0gNelVL5ez8lOoe9xqBEDGyWTOlGCcw';
  const jwt = 'eyJraWQiOiJvMnJnS0Z0RVc5SGw4alU2OUNlRFRqNHR4c3prMHBWUHVSR3ViV0E4cVN3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ZmVkY2MzNi03N2NiLTRjNWQtYTkzZC0yOTRiMDBiNmRiZmMiLCJldmVudF9pZCI6ImE3MjI2M2QyLWQyYjMtNGIwMC1iZDdiLTczNGQwNjQ4YWI5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTU5NzExMjcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1ub3J0aGVhc3QtMl9BeGdVM00wdTkiLCJleHAiOjE2MTU5NzQ3MjcsImlhdCI6MTYxNTk3MTEyNywianRpIjoiOTNkYWJiZjgtNmJkNS00NTEyLWE4NmQtMDMyZDYwMTM3NGJmIiwiY2xpZW50X2lkIjoiM2M1djlpdDR1OXRjM20zYzRycGthZW4zdXUiLCJ1c2VybmFtZSI6ImV1bmdvb2sifQ.d3f9zPfkh82sCSvwubXgi_l-GutMfsPb1XPwHtg9x4WrSnh-eR258gPAgETPha_zcRbSlkzFCbJHvtSi6HVsk5FlHQ9qUMA0z2L60VXEILpf880VUYnOtdJLHz9qcAAiiqLHxoI3MH0NUBK0uJYrnfE_f-MOy-7g22_4lECXFye2osGaUQMflFENHdIwZVCo4zlksOIL34-NoufxD7rt7FZ7Iu5D0ptZ690sKdOylHRHdEsu3sLw6WINsy4vIEyQ_s6JxbNUTdZ-YeVVb_96q4hRoaZ_Q5-PObS1NiAUWNPlzB-SZzrZ3NDJvNFlY3CmNM-mSyqSoQgY1TQeQIElHw';
  const jwk = JSON.parse(`{
    "alg": "RS256",
    "e": "AQAB",
    "kid": "o2rgKFtEW9Hl8jU69CeDTj4txszk0pVPuRGubWA8qSw=",
    "kty": "RSA",
    "n": "4F2qyMjcVpgHchIruSP0gcMt1Z8hoxUYbO1jKQiDDj0-rOcvtz1Zck-A4Nwjo1E9BaLRUUJdaERQlcKhnaeDLW9p23DuOWsrVCbup0n-gBc9OzAmlyxYF3WHkWHik_khyg4GM4RtSfkdCl_zIsLhSBhuOBLwLbHGbUGMuhQP25ODD80FKNMOAX37ke1Gw1udM2W35l0leiQtytebd9l3tfKhzXThYIZo6XvoslQzYJlKjASuZATQknE7mhx430u0nuOOhSEQfYF0noJAAko8Sc8j0pfW9c8h93KC0MMjGV6J24ryUzDaPElpjTAkUDuveS6vhV64g89MCK4OLxquYw",
    "use": "sig"
  }`);

  const rsaPublicKey = await parseJwk(jwk);
  const { payload, protectedHeader } = await jwtVerify(jwt, rsaPublicKey
    , {
      // issuer: 'urn:example:issuer',
      issuer: 'https://cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_AxgU3M0u9',
      // audience: 'urn:example:audience'
    }
  );

  console.log('protectedHeader:', protectedHeader);
  console.log('payload:', payload);
})();