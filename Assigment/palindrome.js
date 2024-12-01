function isPalindrome(word) {
    let reversed = ''; 
    for (let value of word) {
        reversed = value + reversed; 
    }
    return word === reversed; 
}
console.log(isPalindrome("madam")); 