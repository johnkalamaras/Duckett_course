/**
 * Created by jkala on 21-May-16.
 */
var firstItem= document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

//Show the contents of these two properties at the end of the list
var msg = "<p>textContent: " + showTextContent + "</p>"; // For some reason if I use single quotes it doesn't work
    msg += "<p>innerText: " + showInnerText + "</p>";
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = "sourdough bread"
        