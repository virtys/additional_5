module.exports = function check(str, bracketsOpt) {
  
  let brackets = str.split('');
  let array = [];
   
  for (let j = 0; j < brackets.length; j++) {
  	
    for (let i = 0; i < bracketsOpt.length; i++) {
      if (brackets[j] === bracketsOpt[i][1]) { 

        if (array[array.length - 1] === i) {   
                                             
          array.pop(i);
          break;

        } else if (brackets[j] === bracketsOpt[i][0]) {
          
          array.push(i);
          break;

        } else {

          return false;

        }
      } else if (brackets[j] === bracketsOpt[i][0]) { 

        array.push(i);
        break;

      } 
    }
  }

  return array.length === 0 ? true : false;

}