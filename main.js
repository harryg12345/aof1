status = ""
obj = ""
function setup() {
    canvas = createCanvas(480, 430)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video, 0, 0, 480, 430)

}
function start(){
    objectdetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "status: started to detect object"
    obj = document.getElementById("input").value
}
function modelLoaded(){
    console.log("model loaded!")
    status = true
}