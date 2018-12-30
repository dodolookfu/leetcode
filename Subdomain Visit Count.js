  /**
    * @param {string[]} cpdomains
    * @return {string[]}
    */
   var subdomainVisits = function(cpdomains) {    
    let len = cpdomains.length;
    let temp_result = [];
    let result = [];
    for(let i=0;i<len;i++){
      let ary =  cpdomains[i].split(' ');
      parseUrl(ary,temp_result);
    }      
    for(let key in temp_result){
      result.push(temp_result[key]+" "+key);
    }
    //console.log(result);
    return result;       
  };

  function parseUrl(ary,result){
    if(!result[ary[1]]){
      result[ary[1]] = parseInt(ary[0]);
    } else {
      result[ary[1]] += parseInt(ary[0]);
    }
    aryStr = ary[1].split('.');
    aryName = '';      
    for(let i=aryStr.length-1;0<i;i--){
      aryName = '.'+aryStr[i]+ aryName;        
      let name = aryName.substr(1,aryName.length);
      //console.log(name)
      if(!result[name]){
        result[name] = parseInt(ary[0]);
      } else {
        result[name] += parseInt(ary[0]);
      }
    }
  }