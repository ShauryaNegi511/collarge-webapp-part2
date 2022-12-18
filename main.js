var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
function speak() {
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie is 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
setTimeout(function() {
    take_snapshot();
    save();
    },5000);
    } 
function take_snapshot () {
console.log(img_id);
Webcam.snap(function(data_url) {
if(img_id=="selfie1"){
document.getElementById("result1").innerHTML ='<img id="selfy1" src="'+data_url+'"/>';
}
if(img_id=="selfie2"){
    document.getElementById("result2").innerHTML ='<img id="selfy2" src="'+data_url+'"/>';
    }
if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML ='<img id="selfy3" src="'+data_url+'"/>';
        }

});

} 
