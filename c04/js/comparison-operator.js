/**
 * Created by jkala on 14-May-16.
 */
var pass = 50;
var score = 90;

var hasPassed = score >= pass;

var el= document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;
