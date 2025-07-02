// Condition: নো কনফিউশন 
if (3 < 10 ){
    console.log("I am small . I do not bite.");
}
if(13 < 10){
    console.log("Smaller but stronger.");
}
const biriyaniPrice = 500 ;
if(biriyaniPrice < 300) {
    console.log("Mama , give me some biriyani");
}else { 
    console.log("This is not buy");
}
//  মানলে আছি, না মানলেও আছি
const rainingOutside = true ;
if(rainingOutside == true) {
    console.log("You and me-under the tree");
}else{
    console.log("No rain, no romance.");
}
// এভাবেও করা যায় একই কিন্তু এটা Pro const rainingOutside = true ;
// if(rainingOutside){
//     console.log("You and me-under the tree");
// }else {
//     console.log("No rain, no romance.");
// }


const weight = 40 ;
if (weight > 20){
    console.log("Rickshaw mama cholo jai.");
}else{
    console.log("Walking is Exercising.");
}
// practice 77 পৃষ্ঠা 
const momSaidHouse = 6 ;
const iBackHouse = 8 ;
if(momSaidHouse >= iBackHouse){
    console.log(" Eat Breakfast");
}else{
    console.log("will sweep.");
}

const sulogin = true ;
if(sulogin == true){
    console.log("Welcome");
}else{
    console.log("Get lost");
}

const shaking = 5 ;
if(shaking > 2){
    console.log("Eat Chocolate");
}else{
    console.log("will be fat");
}

const fatherNeed = 80 ;
const iGot = 85 ;
if(fatherNeed <= iGot){
    console.log(" I will get a new bike.");
}else{
    console.log("not buying a bike.");
}

const moveStart = 10 ;
const iWatch = 9 ;
if(moveStart <= iWatch){
    console.log("I will go to watch the movie.");
}else{
    console.log("I will go to sleep.");
}

const ac = 30 ;
if(ac < 33){
    console.log("I will turn on the AC.");
}else {
    console.log("I will turn off the AC,");
}

// ছাত্র যখন পাত্র 

const salary  = 75000 ;
if(salary > 50000){
    console.log("Sure Wedding")
}else{
    console.log("Single for Next Five years ")
}

const salary1 = 63000 ;
const isBCS = true ;
if(salary1 > 50000 && isBCS == true){
    console.log("Sure Wedding");
}else{
    console.log("Not Wedding");
}

const BCS = false ;
if(salary1 > 50000 && BCS == true){
    console.log("Sure Wedding");
}else{
    console.log("Dora giya moro");
}

const salary2 = 25000 ;
const height = 68 ;
if(salary > 25000 || height > 70){
    console.log("bolo baba kobul");
}else{
    console.log("vaag tui mokbul");
}

const salary3 = 25001 ;
if(salary3 >25000 || height >72){
    console.log("bola baba kobul");
}else{
    console.log("vaag tui mokbul");
}

// Practice 80
const ageMy = 18 ;
const heightMy = 66 ;
if(ageMy >= 19  && heightMy > 60){
    console.log("Pushing the car");
}else {
    console.log("Sit in the car");
}

const math = 90 ;
const english = 96 ;
if(math > 80 && english > 85){
    console.log("You are admitted");
}else{
    console.log("toka baya koriya divo");
}

const gpa = 5 ;
const familyIncome = 7000 ;
if(gpa >= 5 && familyIncome < 10000){
    console.log("You are eligible for scholarship");
}else {
    console.log("you are not eligible for scholarship");
}

const manAge = 27 ;
const experance = 1 ;
if(manAge < 30 && experance > 2){
    console.log("You are eligible for the job");
}else {
    console.log("You are not eligible for the job");
}

const egg = 20 ;
const chicken = false ;
if(egg > 12 || chicken){
    console.log(" I will make an omelet");
}else{
    console.log("I eat bread and banana");
}

const temperature = 103 ;
const cought = true ;
if(temperature > 100 || cought){
    console.log("I will go to the doctor");
}else{
    console.log("I will take rest at home");
}

const present =  90 ;
const homework = false ;
if(present > 80 && homework){
    console.log("You are eligible for the exam.");
}else{
    console.log("You are not eligible for the exam.");
}

const current = false ;
const mobileCharge = false ;
if(!current  && !mobileCharge ){
    console.log("I will read books");
}else{
    console.log("I will play video games");
}

const shirt = 2000 ;
const cupon = true ;
if(shirt > 1000 && cupon){
    console.log("You have 20% discount");
}else{
    console.log("You have no discount");
}

// ডিসকাউন্টখেকো else-if

const price4 = 6500 ;
if( price4 >= 5000){
    const discount = price4 / 100 * 10 ;
    const pay = price4 - discount ;
    console.log(pay);
}else{
    console.log(price4);
}

const price5 = 4000 ;
if(price5 >= 5000){
    const discout5 = price5 / 100 * 10 ;
    const pay5 = price5 - discount5 ;
    console.log(pay5);
}else if(price5 >= 2500){
    const discount5 = price5 / 100 * 5 ;
    const pay5 = price5 - discount5 ;
    console.log(pay5);
}else {
    console.log(price5);
}

// practice 83 page

const sell = 4500 ;
if( sell >= 3000){
    const discount = sell / 100 *5 ;
    const pay = sell - discount ;
    console.log(pay);
}else if(sell >= 6000){
    const discount = sell / 100 * 15 ;
    const pay = sell - discount ;
    console.log(pay);
}else {
    console.log(sell);
}

const age = 18 ;
const foodPrice = 300 ;
if( age <= 12){
    console.log("Free");
} else if(age >= 60){
    const discount = foodPrice / 100 * 50 ;
    const pay = foodPrice - discount ;
    console.log(pay);
}else {
    console.log(foodPrice);
}

const balance = 6000 ;
if(balance <= 1000){
    console.log("You deposit money");
}else if(balance <= 5000){
    console.log("Enjoy your life.");
}else {
    console.log("You marry me");
}

const  examNumber = 90 ;
if(examNumber <= 50){
    console.log("fail");
}else if(examNumber <= 80){
    console.log("Pass");
}else {
    console.log("A+");
}

const bookPage = 300 ;
if(bookPage <= 100){
    console.log("Samll Book");
}else if(bookPage <= 500){
    console.log("Mid-size book");
}else {
    console.log("heart-attack size book");
}

const temperature1 = 30 ;
if(temperature1 <= 0){
    console.log("Ice");
}else if(temperature1 <= 20){
    console.log("Cool Cool");
}else {
    console.log("Hot Hot");
}

const lable = 40 ;
if(lable <= 10){
    console.log("Novice");
}else if(lable <= 50){
    console.log("Expert");
}else {
    console.log("Pro Gamer");
}

// স্যারের বাঁশ বাসায় ঠাস ঠাস 

const money = 300 ;
const popcornPrice = 40 ;
if(money >= 300){
    console.log("Going to watch a movie"); 
   if(popcornPrice <= 50){
    console.log("Buying PopCorn");
   }else{
    console.log("PopCorn is Expensive");
   }               
   } else{
    console.log("Home Alone.");
   }

//    Practice 86 Page
 const invite = true ;
 const take = 1500 ;
 if(invite){
    console.log("I will go to the party");
  if(take >= 1000) {
    console.log("I will buy a gift");
  }else{
    console.log("I will not buy a gift");
  }
} else{
    console.log("Remove Friendlist");
  }


  const tea = true ;
 const biscuits = true ;
if(tea) {
 if( biscuits) {
    console.log("চা ও বিস্কুট রেডি কর।");
}  else {
   console.log("চা রেডি কর।");
}
}else {
    console.log("বসে বসে টিভি দেখ।")
}

const accountActive = true ;
const premiumUser = true ;
if(accountActive) {
 if(premiumUser) {
   console.log("প্রিমিয়াম পিকচার দেখাও")
 }
 else {
    console.log("ফ্রি ভার্সন দেখাও।");
}
} else {
     console.log("একাউন্ট অ্যাক্টিভ নয়। অনুগ্রহ করে লগইন করুন।");
}

const fridge = false ;
const foodApp = false ;
if(fridge){
    console.log("have fridge , food hot kor");
}else if (foodApp) {
    console.log("Starting Food Devebary App. Order");
}else{
    console.log("Today I am roja");
}

const gest = 200 ;
const gift = true ;
if(gest > 100){
    if (gift){
        console.log("Let party all night ");
    }else {
        console.log("I will party with myself");
    } 
} else{
    console.log("I will party with myself");
}


// লজিক্যাল রট(!) জিজিক্যালি হট
 let leader = !true ;
 if(leader){
    console.log("Government money is my money");
 }

  let isLeader = false ;
 if(!isLeader){
    console.log("Ajke Khawa dawa bondho.");
 }

 const ageV = 18 ;
 if(ageV >= 18){
    console.log("Vote for the hot.");
 }else {
    console.log("You are not eligible to vote");
 }

 const aget = 18 ;
 aget >= 18 ? console.log("Vote for the hot.") : console.log("You are not eligible to vote");

 let price = 500 ;
 let leaderIs = false ;
 if(leaderIs){
    price = 0 ;
 }else{
    price = price + 100 ;
 }
;
// Practice 90 page
 const productSell = 3000 ;
 productSell >= 3000 ? console.log(500) : console.log(0);

 const myAge = 15 ;
 myAge > 15 ? console.log("Teenager") : console.log("Child");

 const isLoggedIn = true ;
 isLoggedIn ? console.log("Welcome back") : console.log("Plese login");

const carFull = true;
carFull ? console.log("Ready for a long drive") : console.log("Fill the tank");

const pass = true ;
pass ? console.log("Pary time") : console.log("Next Somester e serious study korbo");

const sunny = false ;
!sunny ? console.log("Stay home") : null ;
if(!sunny){
    console.log("Stay home");
}

const Exoensive = false ;
!Exoensive ? console.log("I will buy this item.") : null ;
if(!Exoensive){
    console.log("I will buy this item.");
}
