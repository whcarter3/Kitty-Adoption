angular
	.module('kittyApp')
	.controller('KittyController', KittyController);

function KittyController () {

	this.adoptTheseCats = adoptTheseCats;
	this.cantHaveTheseCats = cantHaveTheseCats;

	this.kittyPen =	[
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: false
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	]

	function adoptTheseCats () {
		return this.kittyPen.filter(function(x) {return x.adopted === false;})
	}

	function cantHaveTheseCats () {
		return this.kittyPen.filter(function(x) {return x.adopted === true;})
	}
};