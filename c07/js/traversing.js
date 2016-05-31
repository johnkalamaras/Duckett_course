/**
 * Created by jkala on 31-May-16.
 */
$(function () {
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a class="show">show</a>');
    
    $h2.on('click',function () {
       $h2.next()
           .fadeIn(500)
           .children('.hot')
           .addClass('complete');
        $h2.find('a').fadeOut();
    });
});