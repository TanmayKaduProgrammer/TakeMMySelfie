SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function record()
{
    document.getElementById("text_speech").innerHTML="";
    recognition.start();
}

recognition.onresult = function run(event) 
{
    text = event.results[0][0].transcript;
    document.getElementById("text_speech").innerHTML=text;
    
    speak();
}

function speak(){
    synth = window.speechSynthesis;
    speech_text = document.getElementById("text_speech").value;
    needed = "take my selfie";
    if(speech_text.includes(needed)){
        speech_text = "Taking your selfie in 5 seconds. Give a nice pose.";
        speakthis = new SpeechSynthesisUtterance(speech_text);
        synth.speak(speakthis);
        setTimeout(function (){
            capture();
        },5000);
    }
}

Webcam.set({
    width: 450,
    height: 450,
    image_format: 'png',
    png_quality:100
});

camera = document.getElementById('camera');
Webcam.attach(camera);

function capture() {
    Webcam.snap(function (data_uri){
        document.getElementById('result').innerHTML = '<img width="450" height="350" id="selfie" src="'+data_uri+'">';
    })
}

function download(){
    link = document.getElementById('download_trigger');
    image = document.getElementById('selfie').src;
    link.href = image;
    link.click();
}