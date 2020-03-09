module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for(let i = 0; i < str.length; i++){
  let elemConfig = bracketsConfig.find(elem => elem.includes(str[i]));
  
  if((elemConfig[0] === arr[arr.length - 1]) && elemConfig[1] === str[i]) arr.pop();
  else arr.push(str[i]);
  }
  return !arr.length;
  }

