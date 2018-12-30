  /**
    * @param {string} s
    * @return {string}
    */
   var reverseWords = function(s) {
    let ary = s.split(' ');
    let len = ary.length;  
    let result = '';
    for(let i =0;i<len;i++){
      result += ary[i].split('').reverse().join('')+' ';
    }  
    return result.substr(0,result.length-1)
  };