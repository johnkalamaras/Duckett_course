/**
 * Created by jkala on 31-May-16.
 */
$(function () {
    var listItem, itemStatus, eventType;
    
    function writeClassName (className) {
        if (className == 'hot')return 'important'
    }

    $('ul').on('click mouseover',':not(#four)',{status: 'important'},function(e){
        listItem = "Item: " + e.target.textContent + '<br />';
        itemStatus = 'Status: ' + writeClassName(e.target.className) + '<br />';
        eventType = 'Event: ' + e.type;
        $('#notes').html(listItem + itemStatus + eventType);
    })
});