  /**
    * @param {number[]} nums
    * @return {number[]}
    */
   var findDisappearedNumbers = function(nums) {
    let result =[]
    for(let i = 0;i<nums.length;i++){
      let num = Math.abs(nums[i])-1;
      if(nums[num]>0){ nums[num]=-nums[num] }     
    }
    for(let i=0;i<nums.length;i++){
      if(nums[i] > 0) result.push(i+1)
    }  
    return result;
  };