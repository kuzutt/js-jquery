var max_size_width  = "960";
var max_size_height = "960";
var default_cells =  16;


/* float/clear inline-box
var dv = '<div class="ko"></div>'
var sep = '<div class="sep"></div>'
var sep2 = '<br />'
$(document).ready(function(){
  for ( var i = 0;i < 16  ;i++){
    for ( var j = 0 ; j < 16;j++){
        $('.container').append(dv);
    }
    // float/clear
    $('.container').append(sep)

    $('container').append(sep2);
  }
});
*/

function createDivs(loop) {
  for ( var i = 0;i < loop ;i++){
    var cl = []
    for ( var j = 0 ; j < loop ;j++){
        cl.push('<div class="grid-col"></div>');
    }
    var test = $(rw).append(cl.join(""));
    $('.container').append(test);
  }
};

function deleteDivs(){
    $('.container').empty();
};

var rw = '<div class="grid-row"></div>';
var sep = '<div class="sep"></div>';
$(document).ready(function(){
  createDivs(default_cells);
  hoverOn();

 $('#reset').click(function(){
     deleteDivs();
     var input  = prompt("input px you want");
     createDivs(input);
     changePxOnGrid(input)
     hoverOn();

     /* $('.grid-col').css('height', +'px')*/
 });
});

function changePxOnGrid(grid_num){
  var px_w = max_size_width / grid_num;
  var px_h = max_size_height / grid_num;
  $('.grid-col').css('width',px_w + 'px');
  $('.grid-row').css('height',px_h + 'px');
};
function hoverOn(){
  $(function(){
    //$(".ko").hover(
    $(".grid-col").hover(
      function(){
        $(this).css('background-color','#0000FF');
      },
      function(){
        $(this).css('background-color','#0000FF');
      }
    );
  });
;}
