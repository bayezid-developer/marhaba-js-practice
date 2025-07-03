//আসছে তেড়ে অ্যারে
const number = [12, 14 , 53 , 5 , 334, 4444];
console.log(number.length);
// Practice 93 Page
const numbers = [71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79]

const fruits = [ 'apple' , 'banana' , 'komla' , 'Mango' , 'payara'];

const vagetables = ['alo ' , 'payaz' ,'bagun' , 'mula' , 'gazar' , 'tomatoa' , 'darc' , 'law' , 'sosa', 'potal'];
console.log(vagetables.length);

const movie = ['first movie' , 'secend movie' , '3rd movie' , '4th movie' , '5th movie'];

const bizor = [ 11, 13 , 15 , 17 , 19 , 23 ,  29];

const color = [ 'green' , 'red' , 'white' , 'blue' , 'pink' , ' black'];
console.log(color.length);

const capital = ['Dhaka' , 'koraci' , 'kadmondu'];
console.log(capital.length);

// কার ইনডেক্স কত ছোট

const pNumbers = [10 , 25 , 26 , 31 , 42 , 84 , 38 , 12 ,];
console.log(pNumbers[0]);
console.log(pNumbers[3]);
const fourth = pNumbers[4];
console.log(fourth);
console.log(pNumbers[15]);
pNumbers[4] = 100 ;
console.log(pNumbers[4]);
console.log(pNumbers);

// Practice 96 page
const friend = ['Bayezid' , 'Hossain' , 'Mridul' , 'Bayezid Hossain' , ' Mridul Hossain'];
console.log(friend[3]);

const favouriteBook = [ 'মারহাবা জাভাস্ক্রিভ মারো থাবা' , 'English Therepy' , 'Spoking English' , 'English Voca' ,'English Therepy', 'মারহাবা জাভাস্ক্রিভ মারো থাবা'];
console.log(favouriteBook[5]);

const praNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,];
praNum[7] = 30 ; 
console.log(praNum[7]);

const game = ['Free Fair' , 'Candy Crash' , 'Temple Ran'];
game[2] = 'Subaway Safar';
console.log(game[2]);

const family = ['Father' , ' Mother' , ' Brother' , 'Bayezid'];
console.log(family[3]);

const visitCountry = ['Bangladesh' , 'Pakistan' , 'Afganistan' , 'Qater' , 'Suida Arabia' , 'Tarky'];
console.log(visitCountry[4]);

const myStudyTable = ['Pen' , 'bag' , 'Paper' , 'Calculater'];
myStudyTable[7] = 'Laptop' ;
console.log(myStudyTable[7]);

// Push pop- এর পুষ্পা
const pnumbers = [12 , 87 , 94 , 45];
pnumbers.push(3, 34 , 343, 56, 75, 65);
console.log(pnumbers);

const pfriend = ['Bayezid' , 'Hossain', 'Bayezid Hossain'];
pfriend.pop();
console.log(pfriend);

const pofriend = ['Bayezid' , 'Hossain', 'Bayezid Hossain'];
const pop1 = pofriend.pop();
console.log(pop1);


const shfriend = ['Bayezid' , 'Hossain', 'Bayezid Hossain'];
shfriend.shift();
console.log(shfriend);


const unfriend = ['Bayezid' , 'Hossain', 'Bayezid Hossain'];
unfriend.unshift('Head sir');
console.log(unfriend);

// Practice 99 Page

const number1 = ['10' , '20', '30' , '40' , '50'];
number1.push(60);
console.log(number1);

const myFriend = ['Shogib' , 'Sagar' , 'Shakib' , 'Shoel'];
myFriend.push('Sumon');
console.log(myFriend);

const myPCApp = ['Google Chrome' , 'Vs Code' ,'Snipping Too' , 'Camera' , 'Calculator'];
myPCApp.pop();
console.log(myPCApp);

const fNumber = [24 , 36 , 48, 60];
fNumber.unshift(12);
console.log(fNumber);

const Book = [ 'মারহাবা জাভাস্ক্রিভ মারো থাবা' , 'English Therepy' , 'Spoking English' , 'English Voca' ,'English Therepy', 'মারহাবা জাভাস্ক্রিভ মারো থাবা'];
Book.shift();
console.log(Book);  

// কে include আছে , কে নাই
const mFriend = ['Shogib' , 'Sagar' , 'Shakib' , 'Shoel'];
const exist = mFriend.includes('Sagar'); 
console.log(exist);
const exi =mFriend.includes('Mridul');
console.log(exi);
if(mFriend.includes("Mridul")){
    console.log("Party");
}else{
    console.log("No food. We are fasting.");
}
const index = mFriend.indexOf('Shakib');
console.log(index);

// Practice 

const mfruits = ['Apple' , 'Banana' , 'Mango' , 'Lichi'];
if(mfruits.includes('Mango')){
    console.log('Have Mango');
}else{
    console.log("Not Mango , Tree উঠ");
}

const iFriend = ['Babul' , 'Alip' , 'Shoton'];
console.log(iFriend.indexOf('Babul'));

const inFriend = ['Rimon' , 'Ripat' , 'Ragib'];
console.log(inFriend.indexOf('Ripat'));

const district = ['Dhaka' , 'chittagong' , 'Sylhet' , 'rajshahi'];
console.log(district.includes('RajShahi'));

const weather = ['Degi' , 'Mag' , 'Rain' , 'Rainy Season'];
if(weather.includes('Rain')){
    console.log("I need umberalla");
}else{
    console.log("NO rain no pain");
}


const gamei = ['Football', 'Cricket', 'Boliball'];
console.log(gamei.includes('Badminton'));
