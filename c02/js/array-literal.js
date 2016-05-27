/**
 * Created by jkala on 22-Apr-16.
 */
var colors;
colors = ['white',
          'black',
          'custom'];

//Update the third item in the array
colors[2] = 'Beige';

//Get the element with the id of colors
var el = document.getElementById('colors');

//Replace with third item from the array, i.e. beige
el.textContent = colors[2];