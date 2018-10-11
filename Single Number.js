/**
  * @param {number[]} nums
  * @return {number}
  */
  var singleNumber = function(nums) {
    let temp = nums.filter(function(element, index, arr){         
      return arr.indexOf(element) !== index;          
    });
    let check=true;
    for(let i=0;i<nums.length;i++){
      check=true;
      for(let j=0;j<temp.length;j++){
        if(nums[i]==temp[j]){
          check=false;
        }
      }
      if(check) return nums[i];
    }
  };