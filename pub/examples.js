const noticeWindow = {
    open: false,
    imgSrc:null,
    time:5000,
    footer: "UofT CS department Mark",
    header: "CSC309",
    content:"An introduction to software development on the web. Concepts underlying the development of programs that operate on the web; survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites."
}
const newNoticeWindow = new WindowGenerator()
newNoticeWindow.makeNoticeWindow(noticeWindow)

const agreeWindow = {
    open: false,
    url: "https://fas.calendar.utoronto.ca/section/Computer-Science",
    footer: "UofT CS department Pal",
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
    length: 5
}
const newCAPTCHA = new WindowGenerator()
newCAPTCHA.makeCAPTCHAwindow(captchaWindow)

const newPreview = new WindowGenerator()
newPreview.makePreviewWindow("https://fas.calendar.utoronto.ca/section/Computer-Science")

// const newInputWindow = new WindowGenerator()
// const newNoticeWindow = new WindowGenerator()
// const newImageWindow = new WindowGenerator()
// const newRotateImageWindow = new WindowGenerator()
// const newCAPTCHA = new WindowGenerator()
// const newAgreeWindow = new WindowGenerator()

// newInputWindow.makeInputWindow(inputWindow)
// newNoticeWindow.makeNoticeWindow(noticeWindow)
// newImageWindow.makeImageWindow(imageWindow)
// newRotateImageWindow.makeRotateImageWindow(imageWindow.url, "image/download.jpeg")
// newCAPTCHA.makeCAPTCHAwindow(8)
// newAgreeWindow.makeAgreeWindow(agreeWindow)

// newInputWindow.setInputWindowHeader("wohenhao")
// newInputWindow.setInputWindowContent("wozuikeai")

// newNoticeWindow.setNoticeWindowHeader("nihaoma")
// newNoticeWindow.setNoticeWindowContent("wozuijizhi")
// newNoticeWindow.changeNoticeWindowHeaderColor('red')
// newNoticeWindow.changeNoticeWindowContentColor('purple')


// newInputWindow.setInputWindowHeader("wohenhao")
// newInputWindow.setInputWindowContent("wozuikeai")
// newInputWindow.changeInputWindowContentColor("blue")
// newInputWindow.changeInputWindowHeaderColor("green")


// newAgreeWindow.setAgreeWindowHeader("wohenhao")
// newAgreeWindow.setAgreeWindowContent("wozuikeai")
// newAgreeWindow.changeAgreeWindowHeaderColor('red')
// newAgreeWindow.changeAgreeWindowContentColor('purple')
