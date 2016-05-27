/**
 * Created by jkala on 22-May-16.
 */

//Adding items to start and end of list

var list = document.getElementsByTagName('ul')[0];

//Add new item to end of the list

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

//Add new item to the start of the list

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst,list.firstChild);

//Get all 'li' items

var listItems = document.querySelectorAll('li');

//Add 'cool' as class the class attribute for all these items
var i;
for(i=0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}

//Add number of items in the list to the heading

//Remember querySelector returns the first element node that matches the CSS-style selector
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;

