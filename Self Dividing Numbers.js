/**
  * @param {number} left
  * @param {number} right
  * @return {number[]}
  */
  var selfDividingNumbers = function(left, right) {
    let i=left,
        e=right,
        result=[];
    for(i ; i <= e ; i++){
      let self_nums=(i+'').split('');
      let len=self_nums.length;
      let check=true;
      for(let j=0;j<len;j++){
        if(i % self_nums[j] !=0){
          check=false
        }
      }
      if(check){
        result.push(i);
      }
    }
    return result;
  };