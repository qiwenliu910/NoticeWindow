function WindowGenerator() {
  this.defaultNoticeWindow = {
    header: "this is the notice header",
    content: "this is the notice content"
  } 
  this.defaultInputWindow = defaultInputWindow = {
    header: "this is the input header",
    content: "this is the input content"
  }
  this.defaultImageWindow = defaultInputWindow = {
    header: "Congrats, click the image to proceed"
  }
}

WindowGenerator.prototype = {

	makeNoticeWindow: function(inputObject) {
   
  const noticeWindow = Object.assign(this.defaultNoticeWindow, inputObject)
    let window = '<div class="notice-popup-overlay"><div class="notice-popup-content"><h2>'.concat('<div class="noticeWindowHeader">',noticeWindow.header,'</div></h2><p><div class="noticeWindowContent">',noticeWindow.content,'.</div></p><button id = "closeNoticeButton" onclick="handleClick()" class="close">Close</button> </div></div>')
    $('#NoticeWindowLocation').html(window);
    const openButton = document.querySelector('#openNoticeButton');
    openButton.onclick = function(event) {  
        $(".notice-popup-overlay, .notice-popup-content").addClass("active"); 
    }
    const closeButton = document.querySelector('#closeNoticeButton');
    closeButton.onclick = function(event) {
      $(".notice-popup-overlay, .notice-popup-content").removeClass("active");
    }
  },
  setNoticeWindowHeader: function (inputString) {
    $('.noticeWindowHeader').html(inputString);
  },
  setNoticeWindowContent: function (inputString) {
    $('.noticeWindowContent').html(inputString);
  },
  makeInputWindow: function (inputObject) {
   
  const inputWindow = Object.assign(this.defaultInputWindow, inputObject)
   
    let window = '<div class="input-popup-overlay"><div class="input-popup-content"><h2>'.concat('<div class="inputWindowHeader">',inputWindow.header,'</div></h2><p><div class="inputWindowContent">',inputWindow.content,'.</div></p><form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value=""><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value=""><br><br><input type="submit" value="Submit"></form><br><button id = "closeInputButton" onclick="handleClick()" class="close">Close</button> </div></div>')
    $('#InputWindowLocation').html(window);
    const openButton = document.querySelector('#openInputButton');
    openButton.onclick = function(event) {  
        $(".input-popup-overlay, .input-popup-content").addClass("active");     
    }
    const closeButton = document.querySelector('#closeInputButton');
    closeButton.onclick = function(event) {
      $(".input-popup-overlay, .input-popup-content").removeClass("active");
    }

  },
  setInputWindowHeader: function (inputString) {
    $('.inputWindowHeader').html(inputString);
  },
  setInputWindowContent: function (inputString) {
    $('.inputWindowContent').html(inputString);
  },
  makeImageWindow: function (url, imgSrc) {
    const imageWindow = '<div class="image-popup-overlay"><div class="image-popup-content"><h2>'.concat('<div class="ImageWindowHeader">',this.defaultImageWindow.header,'</div></h2><a href =" ',url,'" target = "_blank"><img src = "',imgSrc,'"/></a><br><button id = "closeImageButton" onclick="handleClick()" class="close">Close</button> </div></div>')
    $('#ImageWindowLocation').html(imageWindow);
    const openButton = document.querySelector('#openImageButton');
    openButton.onclick = function(event) {  
        $(".image-popup-overlay, .image-popup-content").addClass("active");     
    }
    const closeButton = document.querySelector('#closeImageButton');
    closeButton.onclick = function(event) {
      $(".image-popup-overlay, .image-popup-content").removeClass("active");
    }

  },
	changeWindowsColor: function() {
		for (let i = 0; i < this.windows.length; i++) {
			this.windows[i].style.backgroundColor = 'darkmagenta'
		}
	}

}
