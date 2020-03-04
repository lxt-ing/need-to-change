$(function(){
    // 点击按钮，显示或隐藏mask
  var interval;
  var turnon = true;
  var oIdx = 0;
  var x = 0;
  var step = 5;
  $('input[type=button]').click(function(){
     if(turnon == true){
        $('#mask').show();
        $(this).value = '变亮';
        turnon = false;
     }else{
        $('#mask').hide();
        $(this).value = '变暗';
        turnon = true;
     }
  })
    // 点击不同图片出现不同图片及介绍
      $('#imgList img').attr('index',function(oIdx){
          return oIdx++;
      });
      $('#imgList img').click(function(oIdx){
          $('#big>img').attr('src',$(this).attr('src'));
          $('.cont').removeClass('active');
          $('.cont:eq('+$(this).attr("index")+')').addClass('active');
      })
}) 
