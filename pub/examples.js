const noticeWindow = {
    time:5000,
    header: "this is notice header",
    content: "this is notice content"
}
const inputWindow = {
    time:null,
    header: "this is input header",
    content: "this is input content"
}
const imageWindow = {
    time:4000,
    header: "congrats, click the image to proceed",
    url: "https://fas.calendar.utoronto.ca/section/Computer-Science",
    imgSrc: 'image/tenor.gif'}
const newInputWindow = new WindowGenerator()
const newNoticeWindow = new WindowGenerator()
const newImageWindow = new WindowGenerator()
const newRotateImageWindow = new WindowGenerator()

newInputWindow.makeInputWindow(inputWindow)
newNoticeWindow.makeNoticeWindow(noticeWindow)
newImageWindow.makeImageWindow(imageWindow)
newRotateImageWindow.makeRotateImageWindow(imageWindow.url, "image/download.jpeg")

newNoticeWindow.setNoticeWindowHeader("nihaoma")
newNoticeWindow.setNoticeWindowContent("wozuijizhi")

newInputWindow.setInputWindowHeader("wohenhao")
newInputWindow.setInputWindowContent("wozuikeai")

