const checkPalindrome = (str) => {
  let wordReverse = str.split('').reverse().join('');
  if (wordReverse === str){
    return str === str.split('').reverse().join('');
  }else{
    return wordReverse;
  }
};

console.log(checkPalindrome('civic'));