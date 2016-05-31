/**
 * Created by jkala on 31-May-16.
 */
$(function () {
    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool');
});