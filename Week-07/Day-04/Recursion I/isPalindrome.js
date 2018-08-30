// Write a recursive function, isPalindrome, to check if a string is a palindrome or not
function isPalindrome(str,rev="",index=str.length-1){
    if(str.length === rev.length){
        return str.toLowerCase() === rev.toLowerCase();
    }else{
        rev += (str[index]);
        return isPalindrome(str,rev,index-1);
    }
}

console.log(isPalindrome('Kayak')); // => true
console.log(isPalindrome('NEVERODDOREVEN')); // => true
console.log(isPalindrome('Tacocat')); // => true
console.log(isPalindrome('SELFLESS')); // => false