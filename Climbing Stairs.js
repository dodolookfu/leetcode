/**
  * @param {number} n
  * @return {number}
  */
  var climbStairs = function(n) {  
    let t1=1;
    let t2=2;  
    if(n==1) return t1;
    if(n==2) return t2;
    let tn=t1+t2;
    for(let i=3;i<=n;i++){
      tn=t1+t2;
      t1=t2;
      t2=tn;
    }      
    return tn;      
  };