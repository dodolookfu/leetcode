/**
  * @param {number[]} candidates
  * @param {number} target
  * @return {number[][]}
  */
  var combinationSum = function(candidates, target) {
    if (candidates.length==0) return;  
    candidates.sort($sort);  
    let result=[];
    let temp=[];
    let sum=0;  
    computed(sum,temp,0,candidates,target,result);
    
    return result
  };

  function $sort(a,b) {return a-b;}

  function check(result,temp){
    let is=true;
    for(let i=0;i<result.length;i++){
      // console.log(result[i],temp)
      if(result[i].toString()==temp.sort($sort).toString()){
        is=false;
      }
    }
    return is;
  }

  function computed(sum,temp,index,candidates,target,result){
    if(sum==target){
      let isExist = check(result,temp);
      console.log(isExist);
      if (isExist) result.push(temp.slice());
      return;
    }else if(sum>target){
      return;
    }
    
    for(let i=0;i<candidates.length;i++){
      temp.push(candidates[i]);
      computed(sum+candidates[i],temp.slice(),i+1,candidates,target,result);
      temp.pop();
    }
    
  }