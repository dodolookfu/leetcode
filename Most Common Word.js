  /**
    * @param {string} paragraph
    * @param {string[]} banned
    * @return {string}
    */
   var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[\.]/g,"").replace(/[\!|\?|\'|\,|\;|\.]/g," ");
    let str = paragraph.split(' ');   
    let len = str.length;  
    let result = [];
    let val = [];
    for(let i=0;i<len;i++){
      if(checkBan(str[i],banned) && str[i]!=''){
        val=check(result,str[i]);      
        if(val[0]){
          result.push({ str:str[i],appear:1 })
        }else if(!val[0]){
          result[val[1]].appear++;
        } 
      }
    }  
    result.sort(function(a,b){ return b.appear-a.appear })
    return result[0].str
  };

  function checkBan(str,ary){
    let isBan = true; 
    for(let i=0;i<ary.length;i++){      
      if(str == ary[i]){      
        isBan = false;      
        break;
      }
    }  
    return isBan;
  }

  function check(ary,str){
    let isRepeat = true;
    let nums=0
    if(ary.length==0) return [isRepeat,nums];
    for(let i=0;i<ary.length;i++){      
      if(str == ary[i].str){      
        isRepeat = false;
        nums = i;
        break;
      }
    }  
    return [isRepeat,nums];
  }