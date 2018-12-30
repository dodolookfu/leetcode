  /**
    * @param {number[]} nums
    * @param {number} target
    * @return {number}
    */
   var searchInsert = function(nums, target) {
    let result = nums.indexOf(target);
    if(result == -1){
      if(nums[0] >= target) return 0;
      if(nums[nums.length-1] < target) return nums.length;
      for(let i=0;i<nums.length-1;i++){      
        let num1 = (target - nums[i]);
        let num2 = (target - nums[i+1]);
        if(num1 > 0 && num2 < 0) return i + 1     
      }
    }
    return result;
  };