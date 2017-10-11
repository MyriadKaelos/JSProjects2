function firstLast6(param1) {
    //write eleventh method
    var last = param1.length - 1;
    var final = param1[last];
    return final == 6 || param1[0] == 6;

}
function has_23(param1) {
    //write twelfth method
    return param1[0] == 3 || param1[0] == 2 || param1[1] == 3 || param1[1] == 2;
}
function fix_23(param1) {
    //write thirteenth method
    if(param1[0] == 2) {
        if(param1[1] == 3) {
            //change param1[1] to 0
            param1[1] = 0;
        } else if(param1[1] == 2) {
            if(param1[2] == 3) {
                //change param1[2] to 0
                param1[2] = 0;
            }
        }
    } else if(param1[1] == 2) {
        if(param1[2] == 3) {
            param1[2] = 0;
        }
    }
    return param1;
}
function countYZ(param1) {
//write fourteenth method
    var count = param1.length;
    var sum = 0;
    for(var i = 0; i < count; i ++) {
        var str = param1[i];
        var len = str.length;
        var sub = str.substring(len-1,len);
        if(sub == "y" || sub == "z") {
            sum += 1;
        }
    }
    return sum;
}
function endOther(param1) {
//write fifteenth method
    var str1 = param1[0];
    var str2 = param1[1];
    var str3 = 0;
    var str4 = 0;
    var diffValue = Math.abs(str1.length - str2.length);
    if(str1.length > str2.length) {
        str3 = str1;
        str4 = str2;
    } else if (str1.length < str2.length) {
        str3 = str2;
        str4 = str1;
    } else if (str1.length == str2.length) {
        return str1 == str2;
    }
    var sub = str3.substring(diffValue);
    if(sub == str4) {
        return true;
    } else if (sub != str4) {
        return false;
    }
}
function starOut(param1) {
//write sixteenth method
    var str = param1;
    while(true) {
        var pos = str.indexOf("*");
        if(pos < 0) {
            break;
        }
        str = str.substring(0,pos-1) + str.substring(pos+2);
    }
    return str;
}
function getSandwich(param1) {
//write seventeenth method
    var pos = param1.indexOf("bread");
    var str = param1.substring(pos+5);
    pos = str.indexOf("bread");
    str = str.substring(0,pos);
    return str;
}
function canBalance(param1) {
//write eighteenth method
    var sum = 0;
    var sumOther = 0;
    for(var i = 0; i < param1.length; i++) {
        sum += param1[i];
    }
    for( i = 0; i < param1.length; i++) {
        if(sumOther < sum/2) {
            sumOther += param1[i]
        }
    }
    return sumOther == sum/2;
}
function countClumps(param1) {
//write nineteenth method
    var count = 0;
    var last = "nonInt";
    for(var i = 0; i < param1.length; i++ ) {
        if(param1[i] == last) {
            count += 1;
        }
        last = param1[i];
    }
    return count;
}
function evenlySpaced(param1) {
//write twentieth method
    var diff1 = param1[1] - param1[0];
    var diff2 = param1[2] - param1[1];
    return diff1 == diff2;
}

function tester11() {
    //output becomes the return of firstLast6
    //arrays can be written by calling a
    //var y = ["c","a","l","l","m","e"];
    //firstLast6 gets an array of integers
    //if the first or last is "6" return true
    document.getElementById("output10").innerHTML = firstLast6([4,5,2,3,7,6,7,6]);
}//firstLast6
function tester12() {
    //output becomes the return of has_23
    //given an array of two integers,
    //return true if either is a two or three
    document.getElementById("output11").innerHTML = has_23([2,1]);
}//has_23
function tester13() {
    //output becomes the return of fix_23
    //given an array of three integers,
    //if an integer 2 is followed by a three
    //return the array with the 3 turned into a zero
    //ie: 234 = 204
    document.getElementById("output12").innerHTML = fix_23([2,3,2]);
}//fix_23
function tester14() {
    //output becomes the return of countYZ
    //returns the amount of words ending in
    //y or z in a string of words
    //ie: fray fez = 2
    //ie: cold fez = 1
    document.getElementById("output13").innerHTML = countYZ(["fez","gourd","shaky","ally","matriarch"]);
}//countYZ
function tester15() {
    //output becomes the return of endOther
    //given two strings returns true if one
    //is at the end of another, (not case sensitive)
    //ie: "abVow" and "crabVow" would return true
    //str.toLowerCase() returns the lowercase version
    //of string str
    document.getElementById("output14").innerHTML = endOther(["got","forgot"]);
}//endOther
function tester16() {
    //output becomes the return of starOut
    //given a string, the return is the string, but
    //where there is a "*" character, the characters
    //to its right and left are gone
    //ie: "canni*bal" returns "cannal"
    document.getElementById("output15").innerHTML = starOut("r*e*member");
}//starOut
function tester17() {
    //output becomes the return of getSandwich
    //given a string, returns only the party of the
    //string between two slices of bread
    //ie: "plasticbreadhoneybread" returns "honey"
    document.getElementById("output16").innerHTML = getSandwich("boxbreadlettucehamcheesemayobreadbox");
}//getSandwich
function tester18() {
    //output becomes the return of canBalance
    //given an array of numbers, returns true
    //if the array can be split with equal
    //weight on either side
    //ie: ([5,2,1,8]) would return true
    document.getElementById("output17").innerHTML = canBalance([4,6,4,11,3,4,7,11]);
}//canBalance
function tester19() {
    //output becomes the return of countClumps
    //given an array, the return is the amount
    //of clumps in the array, clumps being
    //two adjacent same integers
    //ie: ([1,1,4,5,7,7,5]) returns 2
    document.getElementById("output18").innerHTML = countClumps([3,3,4,6,1,2,3,3,4,4,4,4,6,7]);
}//countClumps
function tester20() {
    //output becomes the return of evenlySpaced
    //given an array of three integers
    //returns true if a sequence of three integers
    //is evenly spaced
    //ie: ([6,5,4]) true
    //ie: ([1,3,4]) false
    document.getElementById("output19").innerHTML = evenlySpaced([9,2,-5]);
}//evenlySpaced