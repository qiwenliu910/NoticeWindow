const noticeWindow = {
    header: "this is notice header",
    content: "this is notice content"
}
const inputWindow = {
    header: "this is input header",
    content: "this is input content"
}
const cg = new WindowGenerator()
cg.makeInputWindow(inputWindow)
cg.makeNoticeWindow(noticeWindow)

