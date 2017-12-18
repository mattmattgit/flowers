const axios = require('axios');

const url = 'https://www.floristone.com/api/rest/flowershop/getproducts?' + 'category=sy' + '&count=15';
const auth = { auth: {
	username: '201613',
	password: 'DaMEzA'
}}

// API Key:        201613
// Password:       DaMEzA

// Your Florist One® Affiliate ID is: 2017121791
// Your Florist One® affiliate password is: rebpfyi3

let find = (flowerType) => {

	return axios.get(url, auth).then((res) => {

		let output = res.data
		// return JSON.stringify(output, null, 2)
		return output

	}).catch( (e) => {
		return e
	});
};

module.exports = {
	find
}


