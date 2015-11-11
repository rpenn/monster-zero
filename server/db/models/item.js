'use strict';
var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	seller: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	bidder: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	name: {
		type: String,
		required: true
	},
	image: String,
	description: String,
	reservationPrice: Number,
	currentBid: {
		type: Number,
		default: 0,
		required: true
	},
	timeStart: {
		type: Date,
		default: Date.now,
		required: true
	},
	timeEnd: {
		type: Date
	}
});

mongoose.model('Item', itemSchema);