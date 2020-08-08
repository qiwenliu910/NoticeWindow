const noticeWindow = {
    header: "this is notice header",
    content: "this is notice content"
}
const inputWindow = {
    header: "this is input header",
    content: "this is input content"
}
const imageWindow = {
    url: "https://fas.calendar.utoronto.ca/section/Computer-Science",
    imgSrc: 'tenor.gif'}
const newInputWindow = new WindowGenerator()
const newNoticeWindow = new WindowGenerator()
const newImageWindow = new WindowGenerator()

newInputWindow.makeInputWindow(inputWindow)
newNoticeWindow.makeNoticeWindow(noticeWindow)
newImageWindow.makeImageWindow(imageWindow.url, imageWindow.imgSrc)

newNoticeWindow.setNoticeWindowHeader("nihaoma")
newNoticeWindow.setNoticeWindowContent("wozuijizhi")

newInputWindow.setInputWindowHeader("wohenhao")
newInputWindow.setInputWindowContent("wozuikeai")

