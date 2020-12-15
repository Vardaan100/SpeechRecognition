document.getElementById("btn-perma").addEventListener("click",runSpeechRecognition);

function runSpeechRecognition() {
    // console.log("Running Speech Recog");
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // start recognition
    recognition.start();
}