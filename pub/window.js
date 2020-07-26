function WindowGenerator() {
	this.windows = []
	// this..
	// this.. (any values you need for each 'instance' of this library)
}

WindowGenerator.prototype = {

	makewindow: function() {

    let window = '<div class="popup-overlay"><div class="popup-content"><h2>Pop-Up</h2><p> This is an example pop-up that you can make using jQuery.</p><button id = "closeButton" onclick="handleClick()" class="close">Close</button> </div></div>'
    const body = document.querySelector('body')
    body.innerHTML = body.innerHTML.concat(window)
    const openButton = document.querySelector('#openButton');
    openButton.onclick = function(event) {  
        $(".popup-overlay, .popup-content").addClass("active");     
    }
    const closeButton = document.querySelector('#closeButton');
    closeButton.onclick = function(event) {
      $(".popup-overlay, .popup-content").removeClass("active");
    }
	},

	changeWindowsColor: function() {
		for (let i = 0; i < this.windows.length; i++) {
			this.windows[i].style.backgroundColor = 'darkmagenta'
		}
	}

}

const cg = new WindowGenerator()
cg.makewindow()
