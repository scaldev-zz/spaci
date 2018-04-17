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
