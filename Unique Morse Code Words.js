/**
  * @param {string[]} words
  * @return {number}
  */
  var morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  var uniqueMorseRepresentations = function(words) {
    var result=[];
    for(var j in words){
      var ary=words[j].toString().split('');
      var temp='';
      for(var i in ary){
        var num=ary[i].charCodeAt()-97 //轉為0~26
        temp+=morseCode[num];
      }
      result.push(temp)
    }
     
    if(result.length==1){
      return 1;
    }
     
    var isExist=true,haveSame=false;
    var same=[];
     
    for(var i in result){
      for(var j in result){
        if(i!=j && result[i]==result[j]){
          haveSame=true;
          if(same.length>0){          
            for(var k in same){
              if(same[k]==result[i]) isExist=false;
            }
            if(isExist){
              same.push(result[i]);
            }
          }else{
            same.push(result[i]);
          }
          isExist=true
        }
      }
      if(!haveSame) same.push(result[i]);;
      haveSame=false
    }
    return same.length;
  };