/**
 * Created by jkala on 20-May-16.
 */
var startItem = document.getElementsByTagName('ul')[0];

var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

/* We could use these but we will use an alternative approach
firstItem.className = 'complete';
lastItem.className  = 'cool';
*/

firstItem.setAttribute('class','complete');
lastItem.setAttribute('class','cool');

