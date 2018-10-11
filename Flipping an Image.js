/**
  * @param {number[][]} A
  * @return {number[][]}
  */
  var flipAndInvertImage = function(A) {
    var result=[];
    for(var i=0; i<A.length; i++){
      result.push(getEachArry(A[i]));       
    }
    return result;
  };

  function getEachArry(ary){
    var result=[];
    for(var i=ary.length-1; i>=0 ;i--){
        result.push(ary[i]);
    }
    for(var i in result){
        result[i]= result[i]==0 ? 1:0;       
    }
    return result;
  }