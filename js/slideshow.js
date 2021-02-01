/**
* slideShow.js
**/
$(function(){
    $('#controlButton1 img:eq(1)').on('click',function(){
        $('#controlButton1 img:eq(1)').attr('src','image/controlButton2.png');
        $('#controlButton1 img:eq(0)').attr('src','image/controlButton1.png');
        $('#MainImage').animate({'left':-1900},'fast');
    });

    $('#controlButton1 img:eq(0)').on('click',function(){
        $('#controlButton1 img:eq(0)').attr('src','image/controlButton2.png');
        $('#controlButton1 img:eq(1)').attr('src','image/controlButton1.png');
        $('#MainImage').animate({'left':0},'fast');
    });
});