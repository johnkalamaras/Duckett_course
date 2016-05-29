/**
 * Created by jkala on 29-May-16.
 */
$(function(){
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function(){
       return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
});

