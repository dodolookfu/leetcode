/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
  var twoSum = function(nums, target) {
    for(var i in nums){
      for(var j in nums){
        if(i!=j && (nums[i]+nums[j]==target) ){            
            return [parseInt(i),parseInt(j)]
        }
      }
    }
  };