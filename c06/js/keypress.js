/**
 * Created by turbox on 5/27/2016.
 */



function charCount(e){
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180-(textEntered.length));
    charDisplay.textContent = counter;
    
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}
var el;
el = document.getElementById('message');
el.addEventListener('keypress',charCount,false);
