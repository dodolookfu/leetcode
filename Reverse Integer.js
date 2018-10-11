/**
  * @param {number} x
  * @return {number}
  */
  var number=[0,1,2,3,4,5,6,7,8,9]
  var reverse = function(x) {
    var ary=x.toString().split('');
    if(check(ary[0])){
      var result = ary.reverse().join('');
    }else{    
      var result = ary[0]+ary.reverse().join('');
      result=result.substring(0,result.length-1);
    }
    if(result> (Math.pow(2,31)-1) || result<Math.pow(-2,31)) result=0;
    return parseInt(result);      
  };
  var check = function(num) {
    for(var i in number){
      if(num==number[i]) return true; 
    }
    return false;
  };