/**
  * @param {number[]} nums
  * @return {number}
  */
  var pivotIndex = function(nums) {
    let sum=0;
    let len=nums.length;
    for(let i=0;i<len;i++){
      let temp=0;    
      if(i+1<len){          
        for(let j=i+1;j<len;j++){
          temp+=nums[j];
        }
      }
      if(temp==sum){      
        return i;
      }
      sum+=nums[i];      
    }
    return -1;
  };