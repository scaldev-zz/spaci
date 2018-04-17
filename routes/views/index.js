var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	//need to import this dynamically
	//ONLY THREE FEATURED AT ALL TIMES
	locals.latestNews = [
		{
		  author: "Author 1",
		  dateOf: "JAN 22",
		  title: "Test",
		  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
		  image: "/images/image1.jpg",
			link: "#",
			featured: false
		},
		{
		  author: "Author 2",
		  dateOf: "JAN 22",
		  title: "Lorem ipsum",
		  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
		  image: "/images/image1.jpg",
			link: "#",
			featured: true
		},
		{
		  author: "Author 3",
		  dateOf: "JAN 19",
		  title: "Lorem ipsum",
		  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
		  image: "/images/image2.jpg",
			link: "#",
			featured: true
		},
		{
			author: "Author 4",
			dateOf: "JAN 19",
			title: "Lorem ipsum",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			image: "/images/image3.jpg",
			link: "#",
			featured: true
		}
	];

	locals.featuredAnimals = [
	    {
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
	    },
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			},
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			},
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			},
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			},
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			},
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			},
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			},
			{
				"name": "Rover",
				"description": "Rover likes to travel and stuff. Click to see more.",
				"link": "#",
				"image": {
					"src":"https://placekitten.com/g/200/300",
					"alt":"rover"
				}
			}
	  ];

	// Render the view
	view.render('index');
};
