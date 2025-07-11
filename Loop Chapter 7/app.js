const number =[12, 14, 34, 54, 34 , 67 , 65 , 55];
console.log(number[3]) ;
for (const num of number) {
    console.log(num);
}

const fruits = ['orange' , 'banana', 'jackfruit' , 'watermelon'];
for (const item of fruits){
    console.log(item);
}
// Practice 105 page
const subject= ['Bangla' , 'English' , 'Match' , 'Accounting' , 'Programming Language'];
for(const fasub of subject){
    console.log(fasub);
}

const food = ['Biriyani' , 'Panta Bhat' , 'Hilsa Fish Curry' , 'Fuchka ' , 'Roshogolla '];
for(const fafood of food){
console.log(fafood);
}

const birth = [1971 , 1985 , 2007 , 2010];
for(const fabirth of birth){
    console.log(fabirth);
}

const sport = ['Mridul','Emma Johnson','Liam Chen','Sophia Martinez','Mridul','Ava Garcia','Mridul','Lucas Smith','Mridul','Isabella Patel'];
for(const fasp of sport){
    console.log(fasp);
}

const exam = [1992 , 2015 ,1983 ,1987 , 2020, 1992 ];
for(const afexam of exam){
    console.log(afexam);
}

// While এর পাতলা ডাইল


let num = 0 ;
while (num < 5){
    console.log(num);
    num = num + 1 ;
}

let nump = 0 ;
while (nump < 5 ){
console.log("Bangladesh Food");
nump = nump + 1 ;
}

// Practice 109 Page
let programming = 1 ;
while(programming < 11){
    console.log("I am coding 3 hour");
     programming++; // programming = programming + 1 ; একই  
}

let pnum = 1 ;
while(pnum <= 20){
    console.log(pnum);
    pnum++;
}

let panum = 50 ;
while(panum <= 100){
    console.log(panum);
    panum++;
}

let numbe = 1 ;
while (numbe < 10){
    console.log(numbe * 3);
    numbe++ ;
}

let priNumber = 111 ;
while(priNumber <= 210){
    console.log(priNumber / 2);
    priNumber++ ;
}

// লুপ দিয়ে যোগফল

let bay = 1 ;
let hos = 0 ;
while(bay <= 10){
    console.log(bay);
    hos  = hos + bay ;
    bay++ ;
}
console.log('Hos:', hos);

// Practice 111 Page

let pNumber = 50 ;
while(pNumber <= 100){
    console.log(pNumber);
    pNumber++;
}

let pNumbe = 5 ;
let plus = 0  ;
while(pNumbe <= 15){
    console.log(pNumbe);
    plus = plus + pNumbe ;
    pNumbe++ ;
}console.log('Plus:5-15', plus);

let pNumb = 1 ;
let pPlus = 0 ;
while(pNumb <= 50){
    console.log(pNumb);
    pPlus = pPlus + pNumb ;
    pNumb++ ;
}console.log('Plus:1-50', pPlus);

let pNum = 21 ;
let pPlu = 0 ;
while(pNum <= 50){
    console.log(pNum);
    pPlu = pPlu + pNum ;
    pNum++;  
    console.log('Plus:21-50' , pPlu);
}

let pNu = 20 ;
let pPl = 0 ;
while (pNu <= 40) {
    console.log(pNu);
    pPl = pPl + pNu ;
    pNu++ ;
}
console.log('Plus:20-40' ,pPl);

// For লুপের খিচুরি
for ( let num =0; num< 5; num++){
    console.log(num);
}

for(let num = 0 ; num<10; num++){
    console.log(num);
}
for(let num =50; num<=100; num++){
    console.log(num);
}

let sum = 0 ;
for(let i = 11 ; i <= 20; i++ ){
    sum = sum + i;
}
console.log('Sum of Number 11 to 20 is' , sum);

// Practice 114 Page

for(let number = 150 ; number <= 170 ; number++){
    console.log(number);
}

let toStudent = 0 ;
for(let school = 31 ; school <= 58; school++ ){
   toStudent = toStudent + school ;
}
console.log( 'Sum-31-58', toStudent);

let pT = 0;
for(let pN = 25 ; pN <= 75 ; pN++) {
    pT = pT + pN ;
}console.log( 'Sum:25-75' , pT);

// জোড়-বিজোড় লপে শর্ত 

for(let i = 0 ; i < 20 ; i++){
    if( i % 2  == 0) {
        console.log(i);
    }
}

for( let i = 0 ; i <= 20 ; i++ ){
    if( i % 2 != 0)    // == 1 $ != 0 একই
     {
        console.log(i);
    }
}

for( let i = 1 ; i <= 30 ; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}

for( let i = 1 ; i <= 30 ; i++){
    if( i % 5 == 0 || i % 3 == 0 ){
        console.log(i);
    }
}

for( let i = 1 ; i <= 30 ; i++){
    if( i % 5 == 0 && i % 3 == 0 ){
        console.log(i);
    }
}

// Practice 119 Page

for( let i = 20 ; i <= 50 ;  i++){
    if( i % 7 == 0 ){
        console.log(i);
    }
}

for( let i = 40 ; i <= 80 ; i++){
    if( i % 7 == 0 || i % 5 == 0 ){
        console.log(i);
    }
}

let baye = 0 ;
for (let i = 1 ; i <= 40 ; i++){
    if( i % 13 === 0){
        baye = baye + i ;
    }
}console.log( '1 থেকে 40 পর্যন্ত ১৩ দিয়ে বিভাজ্য সংখ্যাগুলোর যোগফল:' , baye);

for( let i = 1 ; i <= 50 ; i = i + 4){
    console.log(i);
}

for ( let i = 0 ; i <= 50 ; i++){
    if( i % 9 == 0 || i % 6 == 0 ){
        console.log(i);
    }
}

let hoss = 0 ;
for ( let i = 1 ; i <= 50 ; i++ ){
    if( i % 4 == 0 && i % 3 ==  0){
        hoss = hoss + i ;
    }
}console.log( '1 থেকে 50 পর্যন্ত 4 এবং 3 দিয়ে বিভাজ্য সংখ্যাগুলোর যোগফল:' , hoss);

// লুপের Break-আপ

for(let i = 0 ; i<= 15 ; i++){
    console.log(i);
    if( i > 7){
        break ;
    }
}

for ( let i = 0 ; i < 15 ; i++ ){
    console.log(i);
    if( i >= 7 ){
        break; 
    }
}

for ( let i = 0 ; i <= 10 ; i++){
    if( i == 6){
        continue ;
    }
    console.log(i);
}  

for ( let i = 1 ; i < 10 ; i++ ){
    if( i % 2 == 0){
        continue ;
    }
console.log (i);
} 

for( let i = 1 ; i <= 10 ; i++){
    if( i % 2 == 1 ){
        continue ;
    }
    console.log(i);
}


// Practice 

for ( let i = 1 ; i <= 30 ; i++){
    console.log(i);
    if( i >= 7){
        break;
    }
}

for ( let  i = 1 ; i <= 40 ; i++){
    if( i % 7 == 0){
        continue ;
    }
    console.log(i);
}

for( let i = 1 ; i <= 15 ; i++ ){
    if ( i == 9 ){
        continue ;
    }
    console.log(i);
}

for ( let i = 1 ; i <= 20 ; i++){
    if ( i == 12){
        continue ;
    }
    console.log(i);
}

for( let i = 1 ; i <= 25 ; i++){
    if( i % 3 == 0){
        continue ;
    }
        console.log(i);
}

for ( let i = 91 ; i <= 120 ; i++ ){
    if( i % 10 == 0 ){
        break;
    }
    console.log(i);
}