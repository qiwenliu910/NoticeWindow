function WindowGenerator() {
  this.defaultNoticeWindow = {
    imgSrc:null,
    time: null,
    header: "this is the notice header",
    content: "this is the notice content"
  } 
  this.defaultAgreeWindow = {
    header: "this is the notice header",
    content: "this is the notice content",
    url: null
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

  makeAgreeWindow: function(inputObject) {
   
    const agreeWindow = Object.assign(this.defaultAgreeWindow, inputObject)
      let window = '<button id = "openAgreeButton" onclick="handleClick()" class="open">Open Agree Window</button><div class="agree-popup-overlay"><div class="agree-popup-content"><article><h2>'.concat('<div class="agreeWindowHeader">',agreeWindow.header,'</div></h2><p><div class="agreeWindowContent">',agreeWindow.content,'.</div></p></article><button id = "AgreeButton" onclick="handleClick()" class="close">I Agree</button> <button id = "DisagreeButton" onclick="handleClick()" class="close">I Disagree</button><footer><p>Author: UofT CS department</p></footer></div></div>')
      $('#AgreeWindowLocation').html(window);
      const openButton = document.querySelector('#openAgreeButton');
      openButton.onclick = function(event) {  
          $(".agree-popup-overlay, .agree-popup-content").addClass("active"); 
      }
      const agreeButton = document.querySelector('#AgreeButton');
      agreeButton.onclick = function(event) {
        if (agreeWindow.url !== null) {
          location.href = agreeWindow.url;
        }
        $(".agree-popup-overlay, .agree-popup-content").removeClass("active");
      }
      const disagreeButton = document.querySelector('#DisagreeButton');
      disagreeButton.onclick = function(event) {
        $(".agree-popup-overlay, .agree-popup-content").removeClass("active");
      }
    },
    setAgreeWindowHeader: function (inputString) {
      $('.agreeWindowHeader').html(inputString);
    },
    changeAgreeWindowHeaderColor: function (inputColor) {
      $(".agreeWindowHeader").css('color', inputColor);;
    },
    changeAgreeWindowContentColor: function (inputColor) {
      $(".agreeWindowContent").css('color', inputColor);;
    },
    setAgreeWindowContent: function (inputString) {
      $('.agreeWindowContent').html(inputString);
    },
	makeNoticeWindow: function(inputObject) {
   
  const noticeWindow = Object.assign(this.defaultNoticeWindow, inputObject)
  let window;
  if(noticeWindow.imgSrc !== null) {
    window = '<button id = "openNoticeButton" onclick="handleClick()" class="open">Open Notice Window</button><div class="notice-popup-overlay"><div class="notice-popup-content"><article><h2>'.concat('<div class="noticeWindowHeader">',noticeWindow.header,'</div></h2><p><div class="noticeWindowContent">',noticeWindow.content,'.</div></p></article><img src = "',noticeWindow.imgSrc,'"/><br><button id = "closeNoticeButton" onclick="handleClick()" class="close">Close</button> <footer><p>Author: UofT CS department</p></footer></div></div>')
  }
  else {
    window = '<button id = "openNoticeButton" onclick="handleClick()" class="open">Open Notice Window</button><div class="notice-popup-overlay"><div class="notice-popup-content"><article><h2>'.concat('<div class="noticeWindowHeader">',noticeWindow.header,'</div></h2><p><div class="noticeWindowContent">',noticeWindow.content,'.</div></p></article><button id = "closeNoticeButton" onclick="handleClick()" class="close">Close</button> <footer><p>Author: UofT CS department</p></footer></div></div>')  
  }
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
  changeNoticeWindowHeaderColor: function (inputColor) {
    $(".noticeWindowHeader").css('color', inputColor);;
  },
  changeNoticeWindowContentColor: function (inputColor) {
    $(".noticeWindowContent").css('color', inputColor);;
  },
  setNoticeWindowContent: function (inputString) {
    $('.noticeWindowContent').html(inputString);
  },
  makeInputWindow: function (inputObject) {
   
  const inputWindow = Object.assign(this.defaultInputWindow, inputObject)
   
    let window = '<button id = "openInputButton" onclick="handleClick()" class="open">Open Input Window</button><div class="input-popup-overlay"><div class="input-popup-content"><h2>'.concat('<div class="inputWindowHeader">',inputWindow.header,'</div></h2><p><div class="inputWindowContent">',inputWindow.content,'</div></p><form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value=""><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value=""><br><br><input type="submit" value="Submit"></form><br><button id = "closeInputButton" onclick="handleClick()" class="close">Close</button> </div></div>')
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
  changeInputWindowHeaderColor: function (inputColor) {
    $(".inputWindowHeader").css('color', inputColor);;
  },
  changeInputWindowContentColor: function (inputColor) {
    $(".inputWindowContent").css('color', inputColor);;
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
    let currentAngle;
    const imageWindow = '<button id = "openRotateImageButton" onclick="handleClick()" class="open">Open Rotate Image Window</button><div class="rotate-image-popup-overlay"><div class="rotate-image-popup-content"><h2>'.concat('<div class="RotateImageWindowHeader">',this.defaultRotateImageWindow.header,'</div></h2><p><div class=" RotateImageWindowContent"></div></p><br><br><div class = "imagePosition"><img id="rotater" src = "',imgSrc,'"/></div><br><br><button id = "leftImageButton" onclick="handleClick()" class="left">left</button><button id = "submitImageButton" onclick="handleClick()" class="submit">submit</button><button id = "rightImageButton" onclick="handleClick()" class="right">right</button><br><button id = "closeRotateImageButton" onclick="handleClick()" class="close">Close </button></div></div>')
    $('#RotateImageWindowLocation').html(imageWindow);
    const openButton = document.querySelector('#openRotateImageButton');
    openButton.onclick = function(event) {  
      const min = Math.ceil(1);
      const max = Math.floor(9);
      currentAngle = (Math.floor(Math.random() * (max - min + 1)) + min) * 10;
      img = document.getElementById('rotater')
      img.setAttribute("style", "transform: rotate(" + currentAngle + "deg)")
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
  makeCAPTCHAwindow: function (inputLength) {
    let data;
    const CAPCHA = '<button id = "openCaptchaButton" onclick="handleClick()" class="open">Open Captcha Window</button><div  class="captcha-popup-overlay"><table id = "CAPCHAtable"><tr><td><h3>Please Click Refresh</h3></td><td><h3>Captcha Window</h3></td><td><button id = "closeCaptchaButton" onclick="handleClick()" class="close">Close</button></td></tr><tr><td>Captcha</td><td><canvas id = "captchaCanvas"></canvas></td><td><button id="getCaptchaButton" type = "button" onclick = "handleClick()">Refresh</button></td></tr><tr><td>Enter Captcha</td><td><input type = "text" size= "30" id = "inputText"></td><td><button id = "checkButton" onclick="handleClick()">Check</button></td></tr></table></div>'
    $('#CAPTCHAlocation').html(CAPCHA);
    const openButton = document.querySelector('#openCaptchaButton');
    openButton.onclick = function(event) {  
        $(".captcha-popup-overlay").addClass("active");     
    }
    const closeButton = document.querySelector('#closeCaptchaButton');
    closeButton.onclick = function(event) {
      $(".captcha-popup-overlay").removeClass("active");
    }
    const getCaptchaButton = document.querySelector('#getCaptchaButton');
    getCaptchaButton.onclick = function(event) {  
      const pen = document.getElementById('captchaCanvas').getContext('2d')
      
      pen.font = "35px Georgia"
      pen.fillStyle = "grey"
      pen.fillRect(40, 40, 230, 80)
      pen.fillStyle = "orange"
      
      let result
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < inputLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      data = result.slice(9, 9+inputLength)
      pen.fillText(result.slice(9, 9+inputLength), 90, 90)
    }
    const checkButton = document.querySelector('#checkButton')
    checkButton.onclick = function () {
      const inputText = document.getElementById('inputText').value
      if(inputText === data) {
        alert("Correct!")
      }
      else {
        alert("Incorrect")
      }
    }
  },
}
