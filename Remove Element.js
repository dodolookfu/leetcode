/**
  * @param {number[]} nums
  * @param {number} val
  * @return {number}
  */
  var removeElement = function(nums, val) {
    let pos=0;
    let len = nums.length;
    for(let i=0;i<len;i++){    
      if(val!=nums[i]){
        nums[pos]=nums[i]
        pos++;
      }
    }  
    return pos;
  };