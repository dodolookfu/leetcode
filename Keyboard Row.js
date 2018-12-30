  /**
    * @param {string[]} words
    * @return {string[]}
    */
   const keyboard =  ['qwertyuiop','asdfghjkl','zxcvbnm'];
   var findWords = function(words) {
     let result = [];
     for(let i=0;i<words.length;i++){
       if(checkOnLine(words[i])){
         result.push(words[i]);
       }
     }
     console.log(result);
     return result;
   };

   function checkOnLine(word){
     let check = false;
     let count =0;
     for(let i=0;i<keyboard.length;i++){
       check = false;
       for(let j in word){
         for(let k in keyboard[i]){        
           if(word.charAt(j).toLowerCase() == keyboard[i].charAt(k)){
             check = true;
             count++;
             break;
           }
         }
         if(!check) break;
       }
       if (count == word.length){ 
         return true
       }else{
         count = 0;
       }
     }
     return false;
   }