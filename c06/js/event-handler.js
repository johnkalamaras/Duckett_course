/**
 * Created by jkala on 25-May-16.
 */
function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if(this.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';
    } else{
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername; // When it loses focus call checkUsername();
