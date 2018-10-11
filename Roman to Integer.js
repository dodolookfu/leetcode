/**
  * @param {string} s
  * @return {number}
  */
  var roman ={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var romanToInt = function(s) {      
    var ary = s.toString().split('');
    var temp=[];
    for(var i=0; i<s.length; i++){    
      if(roman[s.charAt(i)] >= roman[s.charAt(i+1)]){
        temp.push(s.charAt(i));
      }else{
        temp.push(s.charAt(i)+s.charAt(i+1));
        i++;
      }
    }      
    var result=0
    for(var i in temp){
      result+=roman[temp[i]];
    }
    return result
  };