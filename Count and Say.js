/**
  * @param {number} n
  * @return {string}
  */
  var countAndSay = function(n) {  
    var countSay='1';   
    for(var i=1;i<n;i++){
      countSay=getResult(countSay);    
    }
    return countSay;
  };
  var getResult = function(n) {
    var countSay='';   
    var ary=n.toString().split('');
    var count=0;  
    var j=0;  
    var temp=ary[j];  //先抓取第一個數
    for(var i=0;i<ary.length;i++){    
      if(temp==ary[i]){ //如果數連續相同就++
        count++;
      }else if(temp!=ary[i]){ //不相同表示結果
        countSay+=count+temp; //表示 '幾'個'幾'
        count=1; //接下來的數因為自己沒算到所以先+1
        j=i; //紀錄算到第幾個
        temp=ary[j]; //下個開始的數
      }
      if(i==ary.length-1){ //算到最後一個 但都相同 直接回傳值
        countSay+=count+temp;
      }
    }  
    return countSay;
  };