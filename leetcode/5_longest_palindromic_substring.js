function longestPalindrome(s) {
    let head, tail, i, count, maxCount=0, offset, result=[-1,-1];

    for(i = 0; i < s.length; i++){
        head = i;
        while(i < len - 1 && s.charAt(i) === s.charAt(i+1)){
            i++;
        }
        tail = i;
        count = tail-head+1;

        for(offset = 1; offset <= Math.min(head, len-tail - 1); offset++){
            if(s.charAt(head-offset) === s.charAt(tail+offset)){
                count+=2;
            } else{
                break;
            }
        }
        if(count > maxCount){
            result[0] = head-offset+1;
            result[1] = tail+offset-1;
            maxCount = count;
        }
    }

    return s.substring(result[0], result[1] + 1);
}