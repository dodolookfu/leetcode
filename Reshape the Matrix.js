  /**
    * @param {number[][]} nums
    * @param {number} r
    * @param {number} c
    * @return {number[][]}
    */
   var matrixReshape = function(nums, r, c) {
    let temp = []
    let result = []
    for(let i=0;i<nums.length;i++){
      for(let j=0;j<nums[i].length;j++){
        temp.push(nums[i][j]);
      }
    }
    if(temp.length < r * c) return nums  
    let ary = [];
    let index = 0;
    for(let i=0;i<r;i++){
      for(let j=0;j<c;j++){      
        ary.push(temp[index]);
        index++;
      }    
      result.push(ary)
      ary = [];
    }  
    return result;
  };