/**
 * Created by jkala on 31-May-16.
 */
$(function () {
    var $listItems = $('li');
    
    $listItems.on('mouseover click',function () {
        var ids = this.id;
        $listItems.children('span').remove();
        $(this).append('<span class="priority"> ' + ids + ' </span>');
    });
    
    $listItems.on('mouseout',function () {
        $(this).children('span').remove();
    });
});