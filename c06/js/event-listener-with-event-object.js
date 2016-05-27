/**
 * Created by jkala on 25-May-16.
 */
function checkLength(e, minLength){
    var el, elMsg;
    if(!e){
        e = window.event;
    }
    el = e.target || e.srcElement;
    elMsg = el.nextSibling; // To get the textbox right next to the element that I used

    if(el.value.length < minLength){
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    }else{
        elMsg.innerHTML = '';
    }
}

var elUsername = document.getElementById('username');
if (username.addEventListener){
    elUsername.addEventListener('blur', function(e) {checkLength(e,5);},false);
}else{
    elUsername.attachEvent('onblur',function(e){checkLength(e,5)});
}