/**
 * Created by jkala on 16-May-16.
 */

var i = 1;
var msg = '';

// Note the code inside the loop will be executed once even though 1<1 evaluates to FALSE.
do {
    msg += i + ' x 5 = ' + (i * 5) + '</br>';
    i++
} while (i < 1);


document.getElementById('answer').innerHTML = msg;
