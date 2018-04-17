(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';


const Home = {
	init: function() {
		console.log('hello from home');
	}

}

module.exports = Home;

},{}],2:[function(require,module,exports){
'use strict';
const Home = require('./home');


const App = {

	init() {
        this.navHandler();
				Home.init();
    },
    navHandler(){
        window.addEventListener("scroll", function() {
          var elementTarget = document.getElementsByClassName('header')[0];
          var height = elementTarget.offsetHeight;
          if (window.pageYOffset > (elementTarget.offsetHeight)) {
              elementTarget.classList.add('sticky');
          }else {
              elementTarget.classList.remove('sticky');
          }

        });
    }
};

(function () {
	App.init();
})();

},{"./home":1}]},{},[2]);
