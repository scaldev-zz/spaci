/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
//Latest News
exports.initLocals = function (req, res, next) {

	res.locals.navLinks = [
		{ label: 'Notre Mission', key: 'notre mission', href: '/' },
		{ label: 'Nouvelles', key: 'nouvelles', href: '/gallery' },
		{ label: 'Nos partenaires', key: 'nos pertenaires', href: '/gallery' },
		{ label: 'Contact', key: 'contact', href: '/contact' }
	];
	//need to import this dynamically
	//ONLY THREE FEATURED AT ALL TIMES
	res.locals.latestNews = [
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
	res.locals.user = req.user;
	next();
};

/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
