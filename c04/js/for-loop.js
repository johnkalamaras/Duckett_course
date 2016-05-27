/**
 * Created by jkala on 16-May-16.
 */
var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for(i=0; i < arrayLength; i++){
    roundNumber = (i+1);
    msg += 'Round ' + roundNumber + ': ';
    msg += scores [i] + '<br/>';
}

/** If you want to use a while loop instead
i=0; 
while(i < arrayLength){
    roundNumber = (i+1);
    msg += 'Round ' + roundNumber + ': ';
    msg += scores [i] + '<br/>';
    i++;
}
 **/

document.getElementById('answer').innerHTML = msg;