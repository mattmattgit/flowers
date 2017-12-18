const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');

const flowers = require('./flowerapi');

let app = express();
app.use(bodyParser.json());

// gcloud beta functions deploy flowersApp --stage-bucket staging.paying-919ec.appspot.com --trigger-http

// app.post('/index', (req,res) => {

exports.flowersApp = ((req,res) => {

	let psid = req.body.originalRequest.data.sender.id
	let flowerType = req.body.result.parameters['flowers'].toLowerCase();

	axios.get(`https://graph.facebook.com/v2.6/${psid}?fields=first_name,last_name,profile_pic&access_token=EAACEdEose0cBAPVcg52PSTknSpTQRrwEa6Ld2gTx9DGOrAgT4IPtsEoBfTCPd1IZAhqXv1losXLY8uBLc0dgOojxHbpEu8maYmk9KzCU9CWcVMZCZBZC9NeTdfm5BRB0RGhTSGU71FnnICghEdgKLWMSuLdRGpM0lIxHTEa5I5iEnQZBFvV1vcc9BP3v1oagGF21SYHTNvgZDZD`).then((response) => {
		
		let name = response.data.first_name 

		flowers.find(flowerType, name).then((output) => {
			res.send(output);
		});
	});

});

app.listen((3000), () => {
	console.log('App listening on 3000');
});


