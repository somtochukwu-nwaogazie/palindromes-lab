const checkPalindrome = (str) => {
  let wordSplit = str.split('');
  wordReverse = [];
  for (wordSplitIndex = wordSplit.length-1; wordSplitIndex >= 0; wordSplitIndex--){
    wordReverse.push(wordSplit[wordSplitIndex]);
  }
  
   palindromedString = wordReverse.join('');
  
  if (palindromedString === str){
    return true;
  }else{
    return palindromedString;
  }
 };

console.log(checkPalindrome('civic'));

