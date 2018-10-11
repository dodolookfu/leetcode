/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
  var combinationSum2 = function(candidates, target) {
    if(candidates.length===0) return;
    
    let result=[]; //結果陣列
    let temp=[]; //存放各個結果
    let sum=0; //暫存加總
    candidates.sort(function(a,b){
      return a-b;
    });
    computed(sum,target,candidates,0,temp,result);
    console.log(result);
    return result;
  }
  function computed(sum,target,ary,index,temp,result){

    //一開始進來就判斷是否要結束函式
    if(sum===target){
      result.push(temp.slice());
      return;
    }else if(sum>target){
      return;
    }

    //參數設定
    var len=ary.length,
        i;
    
    for(i=index;i<len;i++){
      //不會使用到自己
      if((i>index) && (ary[i]==ary[i-1])){ 
        continue;
      }
      temp.push(ary[i]); //進入到這表示不等於 放入暫存結果陣列
      //temp.concat() 把數值複製
      computed(sum+ary[i],target,ary,i+1,temp.concat(),result); //遞迴時加總數字
      temp.pop(); 
    }
  }