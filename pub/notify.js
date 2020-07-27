function WindowGenerator() {
  this.windows = []  
	// this..
	// this.. (any values you need for each 'instance' of this library)
}

WindowGenerator.prototype = {

	makeNoticeWindow: function(inputObject) {
    const defaultNoticeWindow = {
      header: "this is header",
      content: "this is content"
  }
  const noticeWindow = Object.assign(defaultNoticeWindow, inputObject)
    let window = '<div class="notice-popup-overlay"><div class="notice-popup-content"><h2>'.concat(noticeWindow.header,'</h2><p>',noticeWindow.content,'.</p><button id = "closeButton" onclick="handleClick()" class="close">Close</button> </div></div>')
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
    let window = '<div class="input-popup-overlay"><div class="input-popup-content"><h2>Pop-Up with Input</h2><p> This is an example pop-up with Input Window.</p><form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value=""><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value=""><br><br><input type="submit" value="Submit"></form><br><button id = "closeButton" onclick="handleClick()" class="close">Close</button> </div></div>'
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
