function isPalindrome(s) {
    return s == s.split("").reverse().join("");
}

alert(isPalindrome("malayalam")); 
alert(isPalindrome("english")); 