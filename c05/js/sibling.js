/**
 * Created by jkala on 20-May-16.
 */
var startItem = document.getElementById("two");

var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

prevItem.className = "complete";
nextItem.className = "cool";