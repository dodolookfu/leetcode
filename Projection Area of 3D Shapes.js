/**
  * @param {number[][]} grid
  * @return {number}
  */
  var projectionArea = function(grid) {
    var grid_length=grid[0].length;
    var top=0;
    var front=0;
    var side=0;
    var temp=[];
    for(var i in grid){
      var result=gridProcessing(grid[i]);
      top+=result[0];
      front+=result[1];
      var x =grid[i];
      for(var j in x){
        if(temp[j]==null){
          temp[j]=x[j];
        }else if(x[j]>temp[j]){
          temp[j]=x[j];
        }
      }    
    }
    for(var i in temp){
      side+=temp[i];
    }
    return front+side+top;
  };
  function gridProcessing(ary){
    var top=0;
    var front=Math.max.apply(null, ary);
    for(var i=0;i<ary.length;i++){
      if(ary[i]!=0){
        top++;
      }    
    } 
    return [top,front]
  }