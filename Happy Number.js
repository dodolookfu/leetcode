/**
  * @param {number} n
  * @return {boolean}
  */
  var isHappy = function(n) {
    var result = n;
    var result_ary =[];
    while(result != 1 && result != 0){
      result = computed(result,result_ary);
    }
    return result == 1 ? true :false;
  };

  function computed(n,result_ary){
    let num_ary = n.toString().split('');
    let result = 0;      
    for(let i in num_ary){
      result+=Math.pow(num_ary[i],2);
    }  
    for(let i in result_ary){
      if(result == result_ary[i]) return 0;
    }
    result_ary.push(result);
    return result;      
  }