  /**
    * @param {number[]} height
    * @return {number}
    */
   var maxArea = function(height) {
    var result = 0;
    for(let i =0;i<height.length;i++){
      for(let j = i+1;j<height.length;j++){
        var area = 0;
        var w = (j-i)
        if(height[i] >= height[j]){
            area = height[j] * w;
        }else {
            area = height[i] * w;
        }
        if(result < area) result = area;
      }
    }  
    return result;
  };