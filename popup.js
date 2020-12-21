var nameInput= document.getElementById('name');
var greet= document.getElementById('greet');

nameInput.addEventListener('keyup',displayName);

function displayName(){
    greet.textContent = 'Welcome '+ nameInput.value+' !';
}