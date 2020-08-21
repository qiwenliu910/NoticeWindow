# js-library-liuqiwen

## Link to the landing page
There are four sections in the landing page. 

| Section  | Details                                                                     |
|----------|-----------------------------------------------------------------------------|
| Home     | brief description of the library                                            |
| Example  | demo of the examples of the library                                         |
| API      | details instructions on how to use the library and all functions / methods  |
| Download | link to the git repo                                                        |

Landing Page Site: https://quiet-harbor-11984.herokuapp.com

## Getting started
This section explains how to use the library

### files to include
To use this libary, include notify.css, notify.js, and JQuery. The picture below shows what you need to include in your index.html, and the examples.js should be where you call the window generate functions.

``` html
  <link href="notify.css" type="text/css" rel="stylesheet">
  <script src="notify.js" type="text/javascript"></script>
  <script defer src="examples.js" type="text/javascript"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

```
    
### Div to put in html
Next, follow the examples below to insert the corresponding div element of the window in its display location in the index.html

``` html
  <div id = "NoticeWindowLocation"></div>
  <div id = "InputWindowLocation"></div>
  <div id = "ImageWindowLocation"></div>
  <div id = "RotateImageWindowLocation"></div>
  <div id = "CAPTCHAlocation"></div>
  <div id = "AgreeWindowLocation"></div>
  <div id = "PreviewWindowLocation"></div>

```

### Obejcts and functions to create windows
Finally, follow the examples below to call the corresponding window generated function in the js file to create the window

``` js
const noticeWindow = {
    open: false,
    imgSrc:null,
    time:5000,
    header: "CSC309",
    content:"An introduction to software development on the web. Concepts underlying the development of programs that operate on the web; survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites."
}
const newNoticeWindow = new WindowGenerator()
newNoticeWindow.makeNoticeWindow(noticeWindow)

const agreeWindow = {
    open: false,
    url: "https://fas.calendar.utoronto.ca/section/Computer-Science",
    header: "CSC373 Term Test 2",
    content:'In submitting this exam, I confirm that my conduct during this exam adheres to the Code of Behaviour on Academic Matters. I confirm that I did NOT act in such a way that would constitute cheating, misrepresentation, or unfairness, including but not limited to, using unauthorized aids and assistance, personating another person, and committing plagiarism.'
}
const newAgreeWindow = new WindowGenerator()
newAgreeWindow.makeAgreeWindow(agreeWindow)

const inputWindow = {
    time:null,
    header: "Please enter the information below",
    content: ""
}
const newInputWindow = new WindowGenerator()
newInputWindow.makeInputWindow(inputWindow)

const imageWindow = {
    time:4000,
    header: "congrats, click the image to proceed",
    url: "https://fas.calendar.utoronto.ca/section/Computer-Science",
    imgSrc: 'image/tenor.gif'}
const newImageWindow = new WindowGenerator()
newImageWindow.makeImageWindow(imageWindow)

const rotateImageWindow = {
    url: "https://fas.calendar.utoronto.ca/section/Computer-Science",
    imgSrc: "image/download.jpeg"
}
const newRotateImageWindow = new WindowGenerator()
newRotateImageWindow.makeRotateImageWindow(rotateImageWindow)

const captchaWindow = {
    url: "https://fas.calendar.utoronto.ca/section/Computer-Science",
    length: 8
}
const newCAPTCHA = new WindowGenerator()
newCAPTCHA.makeCAPTCHAwindow(captchaWindow)

const newPreview = new WindowGenerator()
newPreview.makePreviewWindow("https://fas.calendar.utoronto.ca/section/Computer-Science")

// newNoticeWindow.setNoticeWindowHeader("nihaoma")
// newNoticeWindow.setNoticeWindowContent("wozuijizhi")
// newNoticeWindow.changeNoticeWindowHeaderColor('red')
// newNoticeWindow.changeNoticeWindowContentColor('purple')


// newInputWindow.setInputWindowHeader("changedHeader")
// newInputWindow.setInputWindowContent("changedContent")
// newInputWindow.changeInputWindowContentColor("blue")
// newInputWindow.changeInputWindowHeaderColor("green")


// newAgreeWindow.setAgreeWindowHeader("changedHeader")
// newAgreeWindow.setAgreeWindowContent("changedContent")
// newAgreeWindow.changeAgreeWindowHeaderColor('red')
// newAgreeWindow.changeAgreeWindowContentColor('purple')
```

### Direct Link to the Documentation

Landing Page Documentation: https://quiet-harbor-11984.herokuapp.com/api.html
