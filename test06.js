const axios = require('axios');

const jwt = 'eyJraWQiOiJvMnJnS0Z0RVc5SGw4alU2OUNlRFRqNHR4c3prMHBWUHVSR3ViV0E4cVN3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ZmVkY2MzNi03N2NiLTRjNWQtYTkzZC0yOTRiMDBiNmRiZmMiLCJldmVudF9pZCI6ImE3MjI2M2QyLWQyYjMtNGIwMC1iZDdiLTczNGQwNjQ4YWI5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTU5NzExMjcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1ub3J0aGVhc3QtMl9BeGdVM00wdTkiLCJleHAiOjE2MTU5NzQ3MjcsImlhdCI6MTYxNTk3MTEyNywianRpIjoiOTNkYWJiZjgtNmJkNS00NTEyLWE4NmQtMDMyZDYwMTM3NGJmIiwiY2xpZW50X2lkIjoiM2M1djlpdDR1OXRjM20zYzRycGthZW4zdXUiLCJ1c2VybmFtZSI6ImV1bmdvb2sifQ.d3f9zPfkh82sCSvwubXgi_l-GutMfsPb1XPwHtg9x4WrSnh-eR258gPAgETPha_zcRbSlkzFCbJHvtSi6HVsk5FlHQ9qUMA0z2L60VXEILpf880VUYnOtdJLHz9qcAAiiqLHxoI3MH0NUBK0uJYrnfE_f-MOy-7g22_4lECXFye2osGaUQMflFENHdIwZVCo4zlksOIL34-NoufxD7rt7FZ7Iu5D0ptZ690sKdOylHRHdEsu3sLw6WINsy4vIEyQ_s6JxbNUTdZ-YeVVb_96q4hRoaZ_Q5-PObS1NiAUWNPlzB-SZzrZ3NDJvNFlY3CmNM-mSyqSoQgY1TQeQIElHw';
const token = jwt.split('.');
const header = myParseJwt(token[0]);
const payload = myParseJwt(token[1]);
// const signature = token[2]; // signature: cannot parse
console.log({ header, payload });
const { kid } = header;
const { iss } = payload;
console.log({ kid, iss });

const url = iss + '/.well-known/jwks.json';
axios.get(url)
	.then(result => {
		// console.log({
		// 	'result.data.keys[0]': result.data.keys[0],
		// 	'result.data.keys[1]': result.data.keys[1],
		// });
		const key = result.data.keys.find(key => key.kid == kid);
		return key;
	})
	.then(key => {
		console.log({ key });
		
	});


// via https://stackoverflow.com/a/38552302
function myParseJwt(jwt) {
	var base64 = jwt.replace(/-/g, '+').replace(/_/g, '/');
	// var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
	// 	return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	// }).join(''));
	// console.log({ jsonPayload });
	const buffer1 = atob(base64);
	const buffer2 = buffer1.split('');
	const buffer3 = decodeURIComponent(buffer2.map(c => '%' + ('00' + c.charCodeAt(0).toString(16).slice(-2))));
	console.log({ base64, buffer1, buffer2, buffer3 });
	// const jsonPayload = buffer3;
	const jsonPayload = buffer1;

	return JSON.parse(jsonPayload);
}

function atob(a) {
	return Buffer.from(a, 'base64').toString('binary');
}

function btoa(b) {
	return Buffer.from(b).toString('base64');
}