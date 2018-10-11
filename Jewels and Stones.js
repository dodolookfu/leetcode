/**
  * @param {string} J
  * @param {string} S
  * @return {number}
  */
  var numJewelsInStones = function(J, S) {
    j_ary=J.toString().split('');
    s_ary=S.toString().split('');
    result=0;
    for(var i in s_ary){
      for(var j in j_ary){
        if(s_ary[i]===j_ary[j]){ 
          result++; 
          //break;
        }
      }
    }
    return result;
  };