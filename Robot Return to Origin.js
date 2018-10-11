/**
  * @param {string} moves
  * @return {boolean}
  */
  var judgeCircle = function(moves) {
    var step=moves.toString().split('');
    var x=0;y=0;  
    for(var i in step){
      if(step[i]=='U'){
        y++;
      }else if(step[i]=='D'){
        y--;
      }else if(step[i]=='L'){
        x++;
      }else if(step[i]=='R'){
        x--;
      }
    }  
    return x == 0 && y == 0;
  };