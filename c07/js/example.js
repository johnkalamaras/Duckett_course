/**
 * Created by jkala on 31-May-16.
 */
$(function () {
    //SETUP
    var $list,$newItemForm,$newItemButton;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');
    
    $('li').hide().each(function (index) {                           //Hide Items
       $(this).delay(450*index).fadeIn(1600);                       //Then fade them in
    });
    
    //ITEM COUNTER
    function updateCounter(){
        var items = $('li[class!=complete]').length;
        $('#counter').text(items);
    }
    updateCounter();                                                //Call the function to update counter for the first
                                                                    //time.
    
    //SETUP FORM FOR NEW ITEMS
    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click',function () {                         //What to do when clicking the "Show Form" button
        $newItemButton.hide();
        $newItemForm.show();
    });
    
    //ADDING A NEW LIST ITEM
    $newItemForm.on('submit',function (e) {
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
        updateCounter();
    });
    
    //CLICK HANDLING - USES DELEGATION ON  <ul> ELEMENT
    $list.on('click','li',function () {
        var $this = $(this);
        var complete = $this.hasClass('complete');
        
        if (complete === true){                                     //In case the element is completed, remove it
            $this.animate({                                         //using a custom animation.
                opacity: 0.0,
                paddingLeft: '+=180'
            },500,'swing',function () {
                $this.remove();
            });
        }else{                                                      //In case the element is not completed, remove it
            item = $this.text();                                    //then create an identical element at the bottom
            $this.remove();                                          //of the page marked as complete.
            $list
                .append('<li class="complete">' + item + '</li>')
                .hide()
                .fadeIn(300);
            updateCounter();
        }
    });
    
    
});