  /**
    * @param {number[]} nums
    * @return {number}
    */
   var removeDuplicates = function(nums) {
    let len = nums.length;  
    for(let i=0;i<nums.length;i++){
      if(i>0 && nums[i]==nums[i-1]){
        nums.splice(i,1);      
        i--;    
      }
    }   
    return nums.length
  };