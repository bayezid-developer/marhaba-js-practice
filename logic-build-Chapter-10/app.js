// উচ্চতার উষ্নতা 
function inchToFeet(inch){
    const feet = inch / 12 ;
    return feet ;
}const shuveHeight = inchToFeet(75);
console.log(shuveHeight);

function inchToFeet2(inch){
const feetFraction = inch / 12 ;
   const feetNumber = parseInt(feetFraction);
   const inchRemaining = inch % 12 ;
   const result = feetNumber +' ft '+ inchRemaining +' inch ';

   return result ;
}const shuvoHeight = inchToFeet2(75);
console.log(shuvoHeight  
);

function mileToKilometer(mile){
    const kilo = mile * 1.60934 ;
    return kilo ;
}console.log(mileToKilometer(23));

// Practice 166 Page 
function goze (howGoze){
    const mile1 = 1760 ;
    const result = mile1 * howGoze ;
    return result ;
}console.log(goze(13));

function kiloKalori(kalo){
    const kilo1 = 860 ;
    const result = kilo1 * kalo ; 
    return result;
}console.log(kiloKalori(10));

function secend(hourSecend){
    const secend = hourSecend * 60 * 60;
    return secend ;
}console.log(secend(1));

function sent(sentime){
    const meter1 = 100 ;
    const result = sentime / meter1 ;
    return result ;
}console.log(sent(1000));

function inc (ins){
    const ins1 = 2.54 ;
    const senti = ins1 * ins ;
    return senti ;
}console.log(inc(12));

function poundK(kilo){
    const pound1 = 0.453 ;
    const result = pound1 * kilo ; 
    return result ;
}console.log(poundK(10));

function goze1 (miter){
    const gozeO = 0.91 ;
    const result = gozeO * miter ;
    return result ;
}console.log(goze1(5));


// লিপি আপার লিপ ইয়ার

function isLeapYea(year){
    if(year % 4 ===0){
        return true ;
    }else{
        return false ;
    }
}const isLipi1 = isLeapYea(2043);
const isLipi2 = isLeapYea(2052);
console.log(isLipi1 );
console.log( isLipi2);

function isLeap(year){
    if(year % 400 === 0){
        return true ;
    }else if(year % 100 ===0){
        return false ;
    }else if(year % 4 === 0){
        return true ;
    }else{
        return false ;
    }
}console.log(isLeap(2104));
console.log(isLeap(1900));

// Practice 169 Page

function incomeAmount ( taxBracket){
    if(taxBracket <= 50000){
        return taxBracket /100 * 10 ;
    }else if (taxBracket >= 50001 &&  taxBracket <= 100000){
         return taxBracket / 100 * 20 ;
    } else if (taxBracket >= 100001 && taxBracket <= 200000 ){
         return taxBracket / 100 * 30 ;
    } else if(taxBracket >= 200000){
          return taxBracket /100 * 40 ;
    }
}console.log(incomeAmount(350000));



function delebary (delebaryPrice){
    if(delebaryPrice <= 10){
    return 100 ;
    }else if (delebaryPrice <= 20)   {
        return 300 ;
    }else if( delebaryPrice <= 50){
        return 1000 ;
    }else {
        return delebaryPrice * 100 
    }
}console.log(delebary(51));

function academic (marks){
    if( marks >= 80){
        return 'A';
    }else if(marks >= 70 && marks <= 79){
        return 'B';
    }else if(marks >= 60 && marks <= 69){
        return 'C';
    }else if(marks >= 50 && marks <= 59){
        return 'D';
    } else if ( marks < 50) {
        return 'F';
    }
}console.log(academic(100));

// বিজোড় সংখ্যার আজিব গড়
// বিজোয় সংখ্যাগুলোর array দেখ
function oddNumber (numbers){
    const odds = [ ];
    for( const number of numbers){
        if ( number % 2 === 1){
            odds.push(number);
        }
    }
    console.log(odds);
}const num1 = oddNumber([12,34,54,77,54,11,54,54,54,54,66,76,87,87445]) ;

// বিজোয় সংখ্যা গুলোর যোগফল বের কর
function odAverage(numbers){
   const odds = [];
   for(const number of numbers){
    if(number % 2 === 0){
        odds.push(number);
    }
   }
   let sum = 0 ;
   for(const number of odds){
    sum = sum + number ;
   }
   console.log(sum);
}const num2 = odAverage([13,34,3,56,76,55,66,77,8,54,44,3,33,33]);

// গড় বের কারার জন্য বিজোড়সংখ্যাগুলো বের কর
function oddAverage (numbers){
    const odds = [] ;
    for(const number of numbers){
        if( number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0 ;
    for(const number of odds){
        sum += number ;
    }
    const count = odds.length ;
    const avg = sum / count ;
    return avg ; 
}
const num3 = [34,4,4,54,54,3,44,54,45,6,345,3];
const av = oddAverage(num3);
console.log( 'Average of the odd numbers is:' ,  av);

// NaN সমস্যা সামধান
function oddAverage (numbers){
    const odds = [] ;
    for(const number of numbers){
        if( number % 2 != 0){
            odds.push(number);
        }
    }
    if(odds.length === 0){
        return 0 ;
    }
    let sum = 0 ;
    for(const number of odds){
        sum += number ;
    }
    const count = odds.length ;
    const avg = sum / count ;
    return avg ; 
}
const num4 = [10];
const avg = oddAverage(num4);
console.log( 'Average of the odd numbers is:' ,  avg);

// Practice 175 Page

function unknownNu (numbers){
    const odds = [] ;
    for( const number of numbers){
        if(number % 2 === 0){
            odds.push(number);
        }
    }
    let sum = 0 ;
    for(const number of numbers){
        sum += number ;
    }
    const count = odds.length ;
    const avg = sum /count ;
    return avg ;
}console.log(unknownNu([323,43,76,3433,33,34,5,345,6,54,44,4,336,654,6,535,65]));

function num (numbers){
    const odds = [] ;
    for( const number of numbers){
        if(number % 2 === 1){
            odds.push(number * 2);
        }
    }
   return odds;
}console.log(num([323,43,76,3433,33,34,5,345,6,54,44,4,336,654,6,535,65]));

function iE (numbers){
    for(const number of numbers){
        if( number % 2 === 0){
            return 'Odd numbers found' ;
        }else{
            return 'No odd  numbers found' ;
        }
    }
}console.log(iE([22,66,44,55]));

function un (numbers){
    const odds = [] ;
    for( const number of numbers){
        if(number % 2 === 0){
            odds.push(number);
        }
    }
    let sum = 0 ;
    for(const number of numbers){
        sum += number ;
    }
    const count = odds.length ;
    const avg =( sum /count ).toFixed(2);
    return parseFloat (avg) ;
}console.log(un([323,43,76,3433,33,34,5,345,6,54,44,4,336,654,6,535,65]));

function nu1 (numbers){
    const odds = [] ;
    for( const number of numbers){
        if(number % 2 === 1){
            odds.push(number - 1);
        }
    }
   return odds;
}console.log(nu1([33, 55, 77]));

// যমজ বিরিয়ানি 

function noDuplicate(array){
    const unique = [] ;
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique ;
}console.log(noDuplicate([1,41,56,1,6,45,6]));

// Practice 177 Page
const numbers = [  1,5,61,5,87,7,5,87,7,5,81,61];
function noDuplicate(array){
    const unique = [];
    for( const item of array ){
        if( unique.includes(item) === false){
            unique.push(item);
    }
}
return unique ;
}const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);

// অদলবদল ভোম্বল 
let a = 5 ;
let b = 7 ;
console.log(a,b);
const temp = a  ;
a = b ;
b = temp;
console.log(a,b);