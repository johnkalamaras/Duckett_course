/**
 * Created by jkala on 16-May-16.
 */
var table = 8;
var operator = 'multiplication';
var i = 1;
var msg = '';

if(operator === 'addition'){
    while(i<11){
        msg += i + ' + ' + table + ' = ' + (i+table) + ' </br>';
        i++;
    }
}else if(operator === 'multiplication'){
    while(i<11){
        msg += i + ' x ' + table + ' = ' + (i*table) + ' </br>';
        i++;
    }
}else{
    msg += 'Sorry I don\'t know any such operation';
}

var el= document.getElementById('blackboard');
el.innerHTML = msg;