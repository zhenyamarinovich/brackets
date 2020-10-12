module.exports = function check(str, bracketsConfig) {

  let stack = [];
  
  let openBrackets = bracketsConfig.map(item => item[0]);
  let closeBrackets = bracketsConfig.map(item => item[1]);

  str.split('').forEach(item => {
    if (openBrackets.includes(item) && closeBrackets.includes(item)) {
      if (stack.length && stack[stack.length - 1] === item) {
        stack.pop();
      } else {
        stack.push(item);
      }      
    } else if (openBrackets.includes(item)) {
      stack.push(item);
    } else if (stack.length && openBrackets.indexOf(stack[stack.length - 1]) === closeBrackets.indexOf(item)) {
      stack.pop();
    } else {
      stack.push(item);
    }    
  }); 

  return stack.length === 0;
}
