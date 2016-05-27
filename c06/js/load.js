/**
 * Created by jkala on 26-May-16.
 */
function  setup() {
    var textInput;
    textInput = document.getElementById('username')
    textInput.focus();
}

window.addEventListener('load',setup,false); 
//So when the page loads it is going to be focused on this input field.
//i.e. you are going to be able to write your username directly without moving your mouse.

