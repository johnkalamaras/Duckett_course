/**
 * Created by turbox on 5/31/2016.
 */
$(function () {
    $('li').each(function () {
        var ids = this.id;
        $(this).append('<span class="order">' + " " + ids + " " + '</span>');
    })
})