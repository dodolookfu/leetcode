  /**
    * @param {string[]} emails
    * @return {number}
    */
    var numUniqueEmails = function(emails) {      
      let ary = [];
      let result = [];
      let temp = null;
      for(let i in emails){
        ary = emails[i].split('@');
        temp = ary[0].split('+')[0].replace(/\./g,'')
        if(result.length==0){
          result.push(temp+'@'+ary[1]);
        }else{
          let isExist = false
          for(let j in result){
            if(result[j] == (temp+'@'+ary[1])) {
              isExist = true;
              break;
            }
          }
          if(!isExist) result.push(temp+'@'+ary[1]);
        }
      }
      console.log(result);
      return result.length;
    };