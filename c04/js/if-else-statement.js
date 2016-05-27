/**
 * Created by jkala on 14-May-16.
 */
var pass = 50;
var score = 50;
var msg;

if(score>=pass){
    msg = 'Congratulations, you passed!';
}else{
    msg = 'Have another go!';
}

var el= document.getElementById('answer');
el.textContent = msg;
