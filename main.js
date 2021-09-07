Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function Takeshot(){
    Webcam.snap(function(data){
        document.getElementById("resultpic").innerHTML ="<img id='picture' src='"+data+"'>"; 
    });
}

console.log("ml5 version:", ml5.version);
machine=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BJyQhPMq4/.json", modelupload)

function modelupload(){
    console.log("model had been loaded");
}