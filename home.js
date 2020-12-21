var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
document.getElementById("btn-speech").addEventListener("click", runSpeechRecognition);
document.getElementById("btn-perm").addEventListener("click",givePermissions);

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2bfeb143df050aba4c6ba8875384b967')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      var tempf = parseInt(tempValue) - 273.15
    
      main.innerHTML = nameValue;
      desc.innerHTML = "Desc : "+descValue;
      temp.innerHTML = "Temp : "+ tempf.toFixed(2);
      input.value ="";
    
    })
    
    .catch(err => alert("Wrong city name!"));
    })
    

function givePermissions() {
    chrome.tabs.create({url: "permissions.html"});
}

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
        chrome.tabs.create({url: "https://www.netflix.com/"});

    else if(transcript == "hotstar")
        chrome.tabs.create({url: "https://www.hotstar.com/in"});

    else if(transcript == "Prime video")
        chrome.tabs.create({url: "https://www.primevideo.com/"});

    else if(transcript == "Prime music")
        chrome.tabs.create({url: "https://music.amazon.in/"});

    else if(transcript == "Apple music")
        chrome.tabs.create({url: "https://www.apple.com/in/apple-music/"});

    else if(transcript == "spotify")
        chrome.tabs.create({url: "https://www.spotify.com/in/"});

    else if(transcript == "YouTube music")
    chrome.tabs.create({url: "https://music.youtube.com/"});

    else if(transcript == "Wikipedia")
        chrome.tabs.create({url: "https://www.wikipedia.org/"});

    else if(transcript == "GitHub")
    chrome.tabs.create({url: "https://github.com/"});

    else if(transcript == "stack overflow")
        chrome.tabs.create({url: "https://stackoverflow.com/"});

    else if(transcript == "zoom")
        chrome.tabs.create({url: "https://zoom.us/"});

    else if(transcript == "Google")
    chrome.tabs.create({url: "https://www.google.com/"});

    else
        chrome.tabs.create({url: "https://www.google.com/search?q="+ transcript});
}