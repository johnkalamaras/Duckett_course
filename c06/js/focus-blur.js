/**
 * Created by jkala on 26-May-16.
 */
function checkUsername(){
    var username = el.value;
    if(username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    }else{
        elMsg.textContent = '';
    }
}
function tipUsername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

//When the username input gets focus/loses focus call functions above:

el.addEventListener('focus',tipUsername,false);
el.addEventListener('blur',checkUsername,false);