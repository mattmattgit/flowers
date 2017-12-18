const dataFunctions = require('./intents/dataFunctions');

let find = ((flowerType, name) => {

	return new Promise ((resolve, reject) => {

		let data = dataFunctions.fetchData();
		console.log(data)

		let output = `{ "speech": "", `

		output +=  `"messages": [`

		for (let i = 0; i < data.length; i ++) {
			let dataChecker = JSON.stringify(data[i])
			if (dataChecker.includes(flowerType)) {
						output += `{
								    "buttons": [
								      {
								        "postback": "",
								        "text": "Buy"
								      }
								    ],
								    "imageUrl": "${data[i].image}",
								    "platform": "facebook",
								    "subtitle": "£${data[i].price}",
								    "title": "${data[i].name}",
								    "type": 1
								  },`
			}
		}

		output +=	`
						{
							"platform": "facebook",
							"replies": [
								"I want something else",
								"Search by date"
								    ],
							"title": "Here you go ${name} here are some of our favourites ${flowerType}",
							"type": 2
						}
								]
								
					}`;

		resolve(output);

	});
});

module.exports = {find}