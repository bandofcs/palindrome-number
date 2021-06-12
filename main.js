var isPalindrome = function(x) {
    var reverted=0;
    if (x>=0 && x<10){return true;}
    if (x<0||x%10==0){return false;}
    while(x>reverted){
        reverted=reverted*10+x%10;
        x=~~(x/10)
    }
    return x==reverted ||x==~~(reverted/10);

};
