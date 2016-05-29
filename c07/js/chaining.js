/**
 * Created by jkala on 29-May-16.
 */

//Better to place each new method on a new line to make code easier to read
$('li[id!="one"]')
    .hide()
    .delay(500)
    .fadeIn(1400);

//Same as before but all in one line
// $(li[id!='one']).hide().delay(500).fadeIn(1400);