function WindowGenerator() {
  this.defaultNoticeWindow = {
    time: null,
    header: "this is the notice header",
    content: "this is the notice content"
  } 
  this.defaultInputWindow = {
    time:null,
    header: "this is the input header",
    content: "this is the input content"
  }
  this.defaultImageWindow = {
    time:null,
    header: "this is the image header"
  }
  this.defaultRotateImageWindow = {
    time:null,
    header: "Please rotate the image to the correct position and click sumbit to proceed",
  }
}

WindowGenerator.prototype = {

	makeNoticeWindow: function(inputObject) {
   
  const noticeWindow = Object.assign(this.defaultNoticeWindow, inputObject)
    let window = '<button id = "openNoticeButton" onclick="handleClick()" class="open">Open Notice Window</button><div class="notice-popup-overlay"><div class="notice-popup-content"><h2>'.concat('<div class="noticeWindowHeader">',noticeWindow.header,'</div></h2><p><div class="noticeWindowContent">',noticeWindow.content,'.</div></p><button id = "closeNoticeButton" onclick="handleClick()" class="close">Close</button> </div></div>')
    $('#NoticeWindowLocation').html(window);
    const openButton = document.querySelector('#openNoticeButton');
    openButton.onclick = function(event) {  
        $(".notice-popup-overlay, .notice-popup-content").addClass("active"); 
        if (noticeWindow.time !== null) {
          setTimeout(function(){
            $(".notice-popup-overlay, .notice-popup-content").removeClass("active");
           }, noticeWindow.time);   
        }
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
   
    let window = '<button id = "openInputButton" onclick="handleClick()" class="open">Open Input Window</button><div class="input-popup-overlay"><div class="input-popup-content"><h2>'.concat('<div class="inputWindowHeader">',inputWindow.header,'</div></h2><p><div class="inputWindowContent">',inputWindow.content,'.</div></p><form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value=""><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value=""><br><br><input type="submit" value="Submit"></form><br><button id = "closeInputButton" onclick="handleClick()" class="close">Close</button> </div></div>')
    $('#InputWindowLocation').html(window);
    const openButton = document.querySelector('#openInputButton');
    openButton.onclick = function(event) {  
        $(".input-popup-overlay, .input-popup-content").addClass("active"); 
        if (inputWindow.time !== null) {
          setTimeout(function(){
            $(".input-popup-overlay, .input-popup-content").removeClass("active");
           }, inputWindow.time);   
        }    
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
  makeImageWindow: function (inputObject) {
    const ImageWindow = Object.assign(this.defaultImageWindow, inputObject)
    const window = '<button id = "openImageButton" onclick="handleClick()" class="open">Open Image Window</button><div class="image-popup-overlay"><div class="image-popup-content"><h2>'.concat('<div class="ImageWindowHeader">',ImageWindow.header,'</div></h2><a href =" ',ImageWindow.url,'" target = "_blank"><img src = "',ImageWindow.imgSrc,'"/></a><br><button id = "closeImageButton" onclick="handleClick()" class="close">Close</button> </div></div>')
    $('#ImageWindowLocation').html(window);
    const openButton = document.querySelector('#openImageButton');
    openButton.onclick = function(event) {  
        $(".image-popup-overlay, .image-popup-content").addClass("active");  
        if (ImageWindow.time !== null) {
          setTimeout(function(){
            $(".image-popup-overlay, .image-popup-content").removeClass("active");
           }, ImageWindow.time);   
        }    
    }
    const closeButton = document.querySelector('#closeImageButton');
    closeButton.onclick = function(event) {
      $(".image-popup-overlay, .image-popup-content").removeClass("active");
    }

  },
  makeRotateImageWindow: function (url, imgSrc) {
    const imageWindow = '<button id = "openRotateImageButton" onclick="handleClick()" class="open">Open Rotate Image Window</button><div class="rotate-image-popup-overlay"><div class="rotate-image-popup-content"><h2>'.concat('<div class="RotateImageWindowHeader">',this.defaultRotateImageWindow.header,'</div></h2><p><div class=" RotateImageWindowContent"></div></p><br><br><div class = "imagePosition"><img id="rotater" src = "',imgSrc,'"/></div><br><br><button id = "leftImageButton" onclick="handleClick()" class="left">left</button><button id = "submitImageButton" onclick="handleClick()" class="submit">submit</button><button id = "rightImageButton" onclick="handleClick()" class="right">right</button> <br> <button id = "closeRotateImageButton" onclick="handleClick()" class="close">Close</button></div></div>')
    $('#RotateImageWindowLocation').html(imageWindow);
    const openButton = document.querySelector('#openRotateImageButton');
    openButton.onclick = function(event) {  
        $(".rotate-image-popup-overlay, .rotate-image-popup-content").addClass("active");     
    }
    const submitButton = document.querySelector("#submitImageButton")
    submitButton.onclick = function() {
      if (currentAngle === 0) {
       console.log("true")
        window.location=url;
      }
      else {
       
      }
    }
    const closeButton = document.querySelector('#closeRotateImageButton');
    closeButton.onclick = function(event) {
      $(".rotate-image-popup-overlay, .rotate-image-popup-content").removeClass("active");
    }
    const min = Math.ceil(1);
    const max = Math.floor(9);
    let currentAngle = (Math.floor(Math.random() * (max - min + 1)) + min) * 10;
    img = document.getElementById('rotater')
    img.setAttribute("style", "transform: rotate(" + currentAngle + "deg)")

    const leftButton = document.querySelector('#leftImageButton');
    leftButton.onclick = function(event) {
      let leftRotateAngle = currentAngle - 10;
      // $('.imagePosition img').css('transform', "rotate(90deg)")
      img = document.getElementById('rotater')
      img.setAttribute("style", "transform: rotate(" + leftRotateAngle + "deg)")
      leftRotateAngle = leftRotateAngle - 10
      currentAngle = currentAngle - 10

    }
    const rightButton = document.querySelector('#rightImageButton');
    rightButton.onclick = function(event) {
      // $('.imagePosition img').css('transform', "rotate(-90deg)")
      let rightRotateAngle = currentAngle + 10;
      img = document.getElementById('rotater')
      img.setAttribute("style", "transform: rotate(" + rightRotateAngle + "deg)")
      rightRotateAngle = rightRotateAngle + 10
      currentAngle = currentAngle + 10

    }

  },
	changeWindowsColor: function() {
		for (let i = 0; i < this.windows.length; i++) {
			this.windows[i].style.backgroundColor = 'darkmagenta'
		}
	}

}
