// const jwt = 'eyJraWQiOiJvMnJnS0Z0RVc5SGw4alU2OUNlRFRqNHR4c3prMHBWUHVSR3ViV0E4cVN3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ZmVkY2MzNi03N2NiLTRjNWQtYTkzZC0yOTRiMDBiNmRiZmMiLCJldmVudF9pZCI6IjFhZDg4OWU2LWQ4MTAtNGJjZS04ZmY3LTZhZjBmZjliNGViNiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTU3ODc4NjIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1ub3J0aGVhc3QtMl9BeGdVM00wdTkiLCJleHAiOjE2MTU3OTE0NjIsImlhdCI6MTYxNTc4Nzg2MiwianRpIjoiMWE3YjYxMWUtNWQzMS00ODQ4LWI2YTQtNDA0ZTFiYmY1NWU1IiwiY2xpZW50X2lkIjoiM2M1djlpdDR1OXRjM20zYzRycGthZW4zdXUiLCJ1c2VybmFtZSI6ImV1bmdvb2sifQ.tf6VUykbW6ReZ-dOOxRyJu1yhKFoU2HmMfHhHDPqBPfkjukpdaq08PefJo_yzR75sL5qRyrORGOIBDqo0GNVrVEu7qd4zcikB_ZP8I8ZbmpZxcnIbYzCPIDzIS2Vwew1zH3fU0kzraMqMaH0TtaNGAEqJJ9Disvn5YcJkSd7ZoHf2IX7RVZkbDWfk3Av4faLT44piZRBbfApKKhuZK1lFosUhp-8kHSXnNyLmdxdEY0usd46ZseNDbTqspzqk62MqC9yXAj1DuPhhL9_APkQqYDktXOyQ-zgoG6GATOlsRgVTn_mWaEtxRM0gNelVL5ez8lOoe9xqBEDGyWTOlGCcw';

// header: okay
const header = 'eyJraWQiOiJvMnJnS0Z0RVc5SGw4alU2OUNlRFRqNHR4c3prMHBWUHVSR3ViV0E4cVN3PSIsImFsZyI6IlJTMjU2In0'; // okay
let decoded = myParseJwt(header);
console.log('header:', decoded);

// payload: okay
const payload = 'eyJzdWIiOiI4ZmVkY2MzNi03N2NiLTRjNWQtYTkzZC0yOTRiMDBiNmRiZmMiLCJldmVudF9pZCI6IjFhZDg4OWU2LWQ4MTAtNGJjZS04ZmY3LTZhZjBmZjliNGViNiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTU3ODc4NjIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1ub3J0aGVhc3QtMl9BeGdVM00wdTkiLCJleHAiOjE2MTU3OTE0NjIsImlhdCI6MTYxNTc4Nzg2MiwianRpIjoiMWE3YjYxMWUtNWQzMS00ODQ4LWI2YTQtNDA0ZTFiYmY1NWU1IiwiY2xpZW50X2lkIjoiM2M1djlpdDR1OXRjM20zYzRycGthZW4zdXUiLCJ1c2VybmFtZSI6ImV1bmdvb2sifQ'; // okay
decoded = myParseJwt(payload);
console.log('payload:', decoded);

// signature: ERROR
// URIError: URI malformed
// signature니까 그런듯
const signature = 'tf6VUykbW6ReZ-dOOxRyJu1yhKFoU2HmMfHhHDPqBPfkjukpdaq08PefJo_yzR75sL5qRyrORGOIBDqo0GNVrVEu7qd4zcikB_ZP8I8ZbmpZxcnIbYzCPIDzIS2Vwew1zH3fU0kzraMqMaH0TtaNGAEqJJ9Disvn5YcJkSd7ZoHf2IX7RVZkbDWfk3Av4faLT44piZRBbfApKKhuZK1lFosUhp-8kHSXnNyLmdxdEY0usd46ZseNDbTqspzqk62MqC9yXAj1DuPhhL9_APkQqYDktXOyQ-zgoG6GATOlsRgVTn_mWaEtxRM0gNelVL5ez8lOoe9xqBEDGyWTOlGCcw'; // cannot
decoded = myParseJwt(signature);
console.log('signature:', decoded);

function myParseJwt(jwt) {
    var base64 = jwt.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function atob(a) {
  return Buffer.from(a, 'base64').toString('binary');
}

function btoa(b) {
  return Buffer.from(b).toString('base64');
}