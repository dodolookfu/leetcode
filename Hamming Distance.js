/**
  * @param {number} x
  * @param {number} y
  * @return {number}
  */
  var hammingDistance = function(x, y) {
    if (y>=Math.pow(2,31) || x<0) return 0;
    var num1,num2;
    if(x<=y){
      num1 = x.toString(2);
      num2 = y.toString(2);
    }else{
      num1 = y.toString(2);
      num2 = x.toString(2);
    }
    while(num1.length < num2.length){
      num1="0"+num1;  
    }      
    var ary1=num1.toString().split('');
    var ary2=num2.toString().split('');
    var count=0;
    for(var i in ary1){
      if(ary1[i] != ary2[i]){
        count++
      }
    }    
    return count
  };