document.getElementById("btn-log").addEventListener("click", HelloWorld);
document.getElementById("btn-speech").addEventListener("click", runSpeechRecognition);

function HelloWorld(){
    chrome.tabs.create({url: "permissions.html"});
    console.log("Created New Page");
}

function runSpeechRecognition() {
    console.log("Running Speech Recog");
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
        console.log("Onstart");
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
        console.log("Onspeed");
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        output.innerHTML = "<b>Text:</b> " + transcript;
        openTabs(transcript);
        output.classList.remove("hide");
    };
  
     // start recognition
    recognition.start();
}

function openTabs(transcript){

    if(transcript == "YouTube")
        chrome.tabs.create({url: "https://www.youtube.com/"});

    else if(transcript == "Netflix")
        chrome.tabs.create({url: "https://www.netflix.com/browse"});

    else if(transcript == "Hotstar")
        chrome.tabs.create({url: "https://www.hotstar.com/in"});

    else if(transcript == "Prime Video")
        chrome.tabs.create({url: "https://www.primevideo.com/"});

    else if(transcript == "Prime Music")
        chrome.tabs.create({url: "https://music.amazon.in/"});

    else if(transcript == "Apple Music")
        chrome.tabs.create({url: "https://www.apple.com/in/apple-music/"});

    else if(transcript == "spotify")
        chrome.tabs.create({url: "https://www.spotify.com/in/"});

    else if(transcript == "YouTube music")
    chrome.tabs.create({url: "https://music.youtube.com/"});

    else if(transcript == "Wikipedia")
        chrome.tabs.create({url: "https://www.wikipedia.org/"});

    else if(transcript == "GitHub")
    chrome.tabs.create({url: "https://github.com/"});

    else if(transcript == "Stackoverflow")
        chrome.tabs.create({url: "https://stackoverflow.com/"});

    else if(transcript == "Zoom")
        chrome.tabs.create({url: "https://zoom.us/"});

    else if(transcript == "Google")
    chrome.tabs.create({url: "https://www.google.com/"});

    else if(transcript == "")
        chrome.tabs.create({url: "https://www.wikipedia.org/"});
}