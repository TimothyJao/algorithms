function romanToInt (s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var number = 0;
    var index;
    if (s.indexOf('CM') != -1) number -= 200;
    if (s.indexOf('CD') != -1) number -= 200
    if (s.indexOf('XC') != -1) number -= 20;
    if (s.indexOf('XL') != -1) number -= 20;
    if (s.indexOf('IX') != -1) number -= 2;
    if (s.indexOf('IV') != -1) number -= 2;
    for (var i = 0; i < s.length; i++) {
        number += map[s[i]];
    }
    return number;
};