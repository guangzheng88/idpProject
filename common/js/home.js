$(function(){
    $('.list-group-item ').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    })
})