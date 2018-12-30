  /**
    * @param {number[][]} grid
    * @return {number}
    */
   var islandPerimeter = function(grid) {
    let len = grid.length;
    let len2 = grid[0].length;
    let result = 0;
    let count = 0;
    for(let i=0;i<len;i++){
      for(let j=0;j<len2;j++){      
        if(grid[i][j] !=0){
          count = 4;
          if(i-1>=0 && grid[i-1][j] !=0) count--;
          if(i+1<len && grid[i+1][j] !=0) count--;        
          if(j-1>=0 && grid[i][j-1] !=0) count--;
          if(j+1<len2 && grid[i][j+1] !=0) count--;
          result += count;
        }
      }
    } 
    return result;
  };