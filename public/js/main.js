
const App = {

	/**
	 * Initialization
	 */
	init() {
        this.isVisible();
    },
    isVisible(){
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
// TO-DO: don't have babel working yet
// export default App;

(function () {
	App.init();
})();
