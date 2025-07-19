// ফাংশন, নো টেনশন
function fanOffkor(){
    console.log('bosha theke uthe dara');
    console.log('walk toward the switch');
    console.log('click the switch to off of the fan');
}fanOffkor();
// Practice 143
function juice(){
    console.log('Take it Lemon Juice.')
} juice();

function myRoutine(){
    console.log('Weke up 5.00 Am');
    console.log("learn coding");
} myRoutine();

function family(){
    console.log('Mother');
    console.log('Father');
    console.log('I');
    console.log('Brother');
} family();

function taskDone (){
    console.log('Coding')
    console.log('Academic Study');
    console.log('College');
    console.log('Chicken');
    console.log('Relegin Study');
}taskDone();

function greetMe(){
    console.log('Good Morning! Have a great day!');
}greetMe();

function getFavFriends(){
    console.log('Bayezid');
    console.log('Hossain');
    console.log('Mridul');
}getFavFriends();

function introduceMyself(){
    console.log('Bayezid Hossain');
    console.log(18);
    console.log('Raipur , Lakshmipur');
    console.log(1804431752);
}introduceMyself();

// এক লিটার প্যারামিটার

function doubleIt(number){
    const doubled = number * 2;
    console.log(doubled);
}
doubleIt(15);
doubleIt(88);
doubleIt(873);

function square(number){
    const borgo = number * number ;
    console.log('square of', number,'is:', borgo);
}
square(4);

function add(num1 , num2){
    const sum = num1 + num2 ;
    console.log(sum);
}add(5 , 71);

function addAll(a , b, c, d,  e){
    const total = (a + b+ c+ d+ e);
    console.log(total);
}addAll(3 , 4, 6, 7,1);

function difference(num1,num2){
    const diff = num1 - num2 ;
    console.log(  num1 , num2 ," difference is ", diff);
}
const fatherAge = 40 ;
const myAge = 10 ;
difference(fatherAge , myAge);

// প্যারামিটার নিয়ে আর্গুমেন্ট

function addNumber( a , b){
    return a+ b;
}
const result = addNumber(5, 5, 9, 6);
console.log(result);


function addNum(a,b){
    console.log(arguments);
    return a + b;
}const resul = addNum(3,4, 4,5,5,5,4);
console.log( resul);


function addNumbers(a , b) {
    let sum = 0 ;
    for(const num of arguments) {
        sum = sum + num ;
    }
    console.log(sum);
}addNumbers(5, 8, 9,6);

// Practice 149 Page

function ageSum (father , son){
    const sum = father + son ;
    console.log('Father & Son Age' , sum);
}ageSum(50,18);
function agesum (fa ,so){
    return fa + so ;
}const sum = agesum (50 , 18);
console.log( 'Father & son Sum Age',  sum);

function guin (a , b){
    const gu = a * b ;
    console.log( a ,'&', b, 'Guin', gu);
}guin(20,15);

function sub (bangla , english , match){
    const result = bangla + english + match ;
    console.log( '3 Subject Mark Sum',   result);
}sub(80, 75, 95);

function age (PresentYear , BirthYear){
    const myAge = PresentYear - BirthYear ;
    console.log('My Age 2025', myAge);
}age(2025 ,2007);


function vegetable( inedd , price  ) {
    const iAm =inedd /  price  ;
    console.log(iAm);
}vegetable( 100  , 35);

function autosum ( a, b, c, d ){
    const sum = a + b + c + d ;
    const number =  4 ;
    console.log( '4 Number এর গড়' ,  sum / number);
}autosum( 1,2, 3, 4);

function sellingPrice ( firstPrice , interest){
    const price = firstPrice + interest ;
    console.log(price);
}sellingPrice(250  , 250);

function nextbirth100 (birthDate  , next){
    const nextBirth = (birthDate + next);
    console.log(nextBirth);
}nextbirth100(2007 , 100);

function useMobile (daily , month){
    const use = daily * month ;
    console.log(use);
}useMobile(3,30);

// return করো: ফাংশনের প্রেম
function tenTimes(number){
    const result = number * 10 ;
    return result ;
}const output = tenTimes(5);
console.log(output);

function add(price1, price2){
    const total = price1 + price2 ;
    return total;
}
const bill = add(5,80);
console.log(bill);

function ad(price1 , price2 ){
    return price1 + price2 ;
}const bil =ad(5,80);
console.log(bil);       

function doMatch(num1 , num2){
    const sum = num1 + num2;
    const diff = num1 - num2 ;
    const multiply = sum * diff ;
    const result = multiply / 2 ;
    return result ;
} const resu =doMatch(10,5);
console.log(resu); 

function isEven(num){
    if( num % 2 === 0){
        return true ;
    }else {
        return false ;
    }
}console.log(isEven(5));
console.log(isEven(10));


function isOdd(num) {
    if(num % 2 === 1){
        return true ;
    }else {
        return false ;
    }
}console.log(isOdd(10))
console.log(isOdd(7))

// Practice 153 Page 

function number1 (number){
    if( number > 10 ){
        return true ;
    }else {
        return false ;
    }
} console.log(number1(11));
console.log(number1(5));


function number2(number){
    if( number % 13 === 0){
        return true ;
    }else {
        return false ;
    }
}console.log(number2(10));
console.log(number2(26));

function food( rice , cruuy , drinks){
    const priceFood = rice + cruuy + drinks ;
    return priceFood ;
}const priceFood = (food (60 , 120 , 30));
console.log( 'All food sum' , priceFood);

function num (number){
    if( number > 18){
        return 'Eligible for Voting' ;
    }else{
        return 'Not Eligible';
    }
}console.log(num(20));

function st (write){
    const wr = write.length;
    return wr ;
}const op =st('Bayezid Hossain');
console.log(op);

function gor (a , b , c){
    const numbers = a + b + c ;
    const ng = numbers / 3 ;
    return ng ;
}const ouptnu = gor( 1, 2, 3);
console.log(ouptnu);

function negN (number){
    if( number < 0){
        return number * -1 ;
    }
}console.log(negN(-4));

// ফাংশনের দংশন

function evenSizedString (str){
    const size = str.length;
    console.log(str , size);
}evenSizedString('Dhaka');

 function evensizedString(str) {
    const size = str.length ;
    if(size % 2 === 0){
        console.log('Even Size');
    }else {
        console.log('Odd Size');
    }
 }evensizedString('Dhaka');

 function evensizedstring(str){
    const size = str.length ;
    if(size % 2 === 0){
        return true ;
    }else {
        return false ;
    }
 } const iseven = evensizedstring('Bayezid');
 console.log(iseven);

function doubbleOrTriple(num , doDouble){
    if( doDouble === true){
        const result = num * 2 ;
        return result ;
    }else {
        const result = num* 3 ;
        return result ;
    }
}console.log(doubbleOrTriple(6 , true));
console.log( doubbleOrTriple(6 ,false)) ;

function numberOfElement(nums){
    const len = nums.length ;
    return len ;
}const  len = numberOfElement([12, 23,4,3,43,22,2])
console.log(len);

// Practice 157 page 

function n1 (array){
    const size =array.length ;
    if( size % 2 === 0 ){
      return 'জোড়' ;
    }else{
     return  'বিজোয়' ;
    }
}const num1 = (n1([12,12,32,3,234,44]));
 console.log(num1);

 function firstLetter (myName){
    const name = myName[0] ;
    return name ;
}const ou1 = firstLetter('Raju');
console.log(ou1);

function num2 (number){
    if( number > 10 ){
        return 10 / number;
    }else {
        return 10 * number;
    }
}console.log(num2(5));

function arr (array){
    const arr = array[0] + array[1];
    return arr ;
}const ar =arr([12,23,344,4454,3]);
console.log(ar);

function nm (number){
    if( number < 0 ){
      return  number * 3 ;
    }else{
        return number * 2 ;
    }
} console.log(nm(12));

function num3 (first ,secend){

    if( first.length > secend.length){
        return true ;
    }else{
        return false ;
    }
}console.log(num3('Bayezid Hossain'  , 'Mridul'));

function num4 (num1 , num2){
  const guin = num1 * num2 ;

    if( guin > 100){
        return guin / 2;
    }
} console.log(num4( 52 , 57));

// ধাপে ধাপে ফাংশনের জংশন

function sumOfNumbers(numbers){
    let sum = 0 ;
    for( const number of numbers){
        sum = sum + number ;
        console.log(sum);
    }
    }
 const nums=[12,12,43,43,45];
const sm = sumOfNumbers(nums);

function sumOfNumber(numbers){
    let sum = 0 ;
    for(const number of numbers){
        sum = sum + number ;
    }return sum ;
}const num11 = [56,54,44,4,45,56]
const total = sumOfNumber(num11);
console.log( 'Sum of Numbers is' , total);

 function evenNumbersSum (numbers){
    let sum = 0 ;
    for( const number of numbers){
        if(number % 2 === 0){
        sum = sum + number ;
    }
    }
    return sum ;
 }const num6 = [54,13,1,6];
 const num7 = evenNumbersSum(num6);
 console.log(num7);

//  Practice 161 Page


function nu7 (numbers){
    let sum = 0 ;
    for( const number of numbers){
        if( number % 2 === 1){
            sum = sum + number ;
        }
    }return sum ;
}const num8 = [5,15,8,7] ;
const num9 = nu7(num8);
console.log(num9);


function num10 (numbers){
    if(numbers[0]   < numbers[1]){
         return numbers[0];
    }else {
         return numbers[1];
    }
}console.log(num10([20, 45,78]));

function num12 (numbers){
    if( numbers < 18  ){
        return 18 ;
    }else if(numbers > 45)  {
        return 45 ;
    }else{
        return numbers ;
    }
}console.log(num12(18));

function num13 (numbers){
    let sum = 0 ;
    for( const number of numbers){
    if( number % 4 === 0 ){
        sum = sum + number ;
    }
    }  return sum ;
}console.log(num13([2,4,5,7,8,32,45]));

function num14 (number){
    if( 20 > number){
        return number * 2 ;
    }else{
        return number / 20 ;
    }
}console.log(num14(12));
 
function num15 (numbers){
    let sum = 0 ;
    for( const number of numbers){
        if( number < 0){
            sum = sum + number ;
        }
    }
    return sum ;
}console.log(num15([13,33,-56,-76,10]));

function num16 (numbers){
    let sum = 1;
    for(const number of numbers){
        if( number % 3 == 0){
            sum = sum * number ;
        }
    }return sum ;
}console.log(num16([3,6,53,34,6]));

