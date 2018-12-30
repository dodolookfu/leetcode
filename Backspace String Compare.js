  /**
    * @param {string} S
    * @param {string} T
    * @return {boolean}
    */
   var backspaceCompare = function(S, T) {
    let S_filter = filterString(S);
    let T_filter = filterString(T);
    
    return (S_filter === T_filter) ? true : false;
  };

  function filterString(ary){  
    while(ary.indexOf('#') != -1){
      let index = ary.indexOf('#');
      if(ary.charAt(index-1) != null && index>0){      
        ary = ary.substr(0,index-1) + ary.substr(index+1,ary.length);
        console.log(ary)
      }else{
        ary=ary.replace(ary.charAt(index),'');
      }
    } 
    return ary;
  }