/**
  * @param {number[]} nums
  * @return {number}
  */
  var findLengthOfLCIS = function(nums) {  
  if (nums.length == 0) return 0;
    let count = 1;
    let result = 0;
    for(let i = 1 ; i < nums.length ; i++){        
      if(nums[i] > nums[i-1]){ 
        count++;
      } else {
        result = (result > count) ? result : count;        
        count = 1;            
      }
    }
    result = (result > count) ? result : count;      
    return result;
};