/**
 * Created by jkala on 31-May-16.
 */
$(function () {
    $('li').on('click',function (e) {
        $('li span').remove();
        var date = new Date();
        date.setTime(e.timeStamp);
        var clicked = date.toDateString();
        $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
    })
});
