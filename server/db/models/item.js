'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

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
	description: String,
	reservationPrice: Number,
	currentBid: {
		type: Number,
		default: 0,
		required: true
	},
	timeStart: {
		type: Date
	},
	timeEnd: {
		type: Date
	}
});

