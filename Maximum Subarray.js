  /**
    * @param {number[]} nums
    * @return {number}
    */
   var maxSubArray = function(nums) {
    let bigger = nums[0];
    let temp = 0;
    for(let i=0;i<nums.length;i++){
      bigger = nums[i] > bigger ? nums[i] : bigger;
      temp = nums[i];
      for(let j=i+1;j<nums.length;j++){      
        temp += nums[j];
        if(temp > bigger){
          bigger = temp;
        }
      }    
    }
    return bigger;
  };