$(function(){

    draw_empty_board();
    fill_board();


});


function draw_empty_board(){
    var t='<table id="score4_table">';
    for(var i=6;i>0;i--){
        t+='<tr>';
        for(var j=1;j<8;j++){
         t += '<td class="score_square" id="square_'+j+'_'+i+'">' + j +','+i+'</td>';
               
        }
        t+='</tr>';
    }
    t+='</table>';
    $('#score4_board').html(t);
}

function fill_board(){
    $.ajax(
        {url: "score4.php/board/",
        success: fill_board_by_data
        }
        );
        
}


function fill_board_by_data(data) {
    for(var i=0;i<data.length;i++) {
    var o = data[i];
    var id = '#square_'+ o.x +'_' + o.y;
    var c = (o.piece!=null)?o.piece_color + o.piece:'';
    var im = (o.piece!=null)?'<img class="piece"src="images/'+c+'.png">':'';
    
                                                
    $(id).addClass(o.b_color+'_square').html(im);
    }
    }
    