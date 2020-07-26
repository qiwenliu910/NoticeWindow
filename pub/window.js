function WindowGenerator() {
  this.windows = []  
	// this..
	// this.. (any values you need for each 'instance' of this library)
}

WindowGenerator.prototype = {

	makeNoticeWindow: function() {

    let window = '<div class="notice-popup-overlay"><div class="notice-popup-content"><h2>Pop-Up</h2><p> This is an example pop-up.</p><button id = "closeButton" onclick="handleClick()" class="close">Close</button> </div></div>'
    $('#NoticeWindowLocation').html(window);
    const openButton = document.querySelector('#openNoticeButton');
    openButton.onclick = function(event) {  
        $(".notice-popup-overlay, .notice-popup-content").addClass("active"); 
    }
    const closeButton = document.querySelector('#closeButton');
    closeButton.onclick = function(event) {
      $(".notice-popup-overlay, .notice-popup-content").removeClass("active");
    }
  },

  makeInputWindow: function () {
    let window = '<div class="input-popup-overlay"><div class="input-popup-content"><h2>Pop-Up with Input</h2><p> This is an example pop-up with Input Window.</p><input type="text" id="fname" name="fname"><input type="submit"><br><button id = "closeButton" onclick="handleClick()" class="close">Close</button> </div></div>'
    $('#InputWindowLocation').html(window);
    const openButton = document.querySelector('#openInputButton');
    openButton.onclick = function(event) {  
        $(".input-popup-overlay, .input-popup-content").addClass("active");     
    }
    const closeButton = document.querySelector('#closeButton');
    closeButton.onclick = function(event) {
      $(".input-popup-overlay, .input-popup-content").removeClass("active");
    }

  },
	changeWindowsColor: function() {
		for (let i = 0; i < this.windows.length; i++) {
			this.windows[i].style.backgroundColor = 'darkmagenta'
		}
	}

}
