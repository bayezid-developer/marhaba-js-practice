function add(num1 = 0 , num2 = 0){
    const result = num1 + num2 ;
    console.log(num1,num2,result);
    return result ;
}console.log(add());
console.log(add(17,19));

// Practice 186 Page
function number(num1 = 0, num2 = 0 , num3 = 0){
    const result = num1 + num2 + num3;
    return result;
}console.log(number(1,3,54));

function number(numbers = 50){
 const result = numbers ;
 return result;
}console.log(number());

function mix(name = 'anonymous', income = 0){
    const result = [name , income];
    return result;
}console.log(mix());

function vorgo(number = 1){
    const result = number * number ;
    return result;
}console.log(vorgo());

function product (name = 'Unknown Product' , product = 1){
    const result = [name , product];
    return result;
}console.log(product());

function book(books = ['JS book']){
   const result = books ;
    return result;
}console.log(book( ['মারহাবা জাভাস্ক্রিভ মারো থাবা']));

function food(foods ={ price: 10, quantity: 1}){
 const totalPrice = foods.price * foods.quantity;
 return totalPrice;
}console.log(food());

function guin1(number = [5, 10, 15]) {
    let resul = []; 
    for (let i = 0; i < number.length; i++) {
        resul.push(number[i] * 2);
    }
    return resul;
}
console.log(guin1());
console.log(guin1([1, 2, 3]));

function num1(number={principal: 1000, rate: 5}){
    const simpleInterest = (number.principal * number.rate /100 );
    return simpleInterest;
}console.log(num1(number={principal: 100, rate: 5}));

function num(number = {salary: 50000, tax:10}) {
    const netSalary = (number.salary * number.tax / 100);
    const result = number.salary - netSalary;
    return result;
}console.log(num());
console.log(num({salary: 60000, tax: 15}));

// Template String ডিষ্টি ডিষ্টিং

const first = 'jaan';
const last = 'pakhi';
const name1 = first + ' ' + last + ' ' + 'potash potash';
console.log(name1);

const a = 10 ;
const b = 20;
const result = 'The sum of' + ' ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

const name = "Rafiq";
const age = 30;
console.log(" Name: " + name + " ,Age: " + age );
console.log(`Name: ${name} ,Age: ${age}`);
// এক্সপ্রেশন যোগ করা
const a1 = 10 ;
const b1 = 20 ;
console.log(`The sum of ${a1} and ${b1} is ${a1 + b1}`);

// মাল্টিলাইন টেমপ্লেট স্ট্রিং
const email = `John Cena
cena naaki ochena
mair khaile bachena`;
console.log(email);

// ফাংশন কল যোগ করা
const getName = function() {
    return "Bayezid";
}
const message = `No Bolle Sadia, ases amar ${getName()}!`;
console.log(message);

// শর্ত যোগ করা
const age1 = 20 ;
const statu = `You are ${age1 >= 18 ? "Abult" : "Minor"}`;
console.log(statu);

//  ষ্টিংয়ে অবজেক্ট প্রোপার্টি যোগ করা
const user = {name: "Tariq" , age:25};
const info = `Name: ${user.name} , Age: ${user.age}`;
console.log(info);

// অ্যারের সাথে কাজ করা
const fruits = ["Apple","Banana","Mango"];
const secend = `My second favourite fruit is: ${fruits[1]}`;
const list = `My favourite fruits are: ${fruits.join(",")}`;
console.log(list);

// টেমপ্লেট স্ট্রিংয়ের মাধ্যমে HTML টেমপ্লেট তৈরি করা
const title = "Welcome";
const body = "This is a dynamic template";
const html = `<div>
<h1>${title}</h1>
<p>${body}</p>
</div>`;
console.log(html);

// স্ট্রিংয়ের মধ্যে হিসাবের জন্য ব্যবহার 
const radius = 5 ;
const area = `Circle area is ${(Math.PI * radius ** 2)}`
console.log(area);

// যেখানে-সেখানে মিক্সড  স্ট্রিং

const greet = function(name){
    return `Hello, ${name}`;
};
console.log(greet("Nadia"));

// Practice 191 Page
const first1 = 100 ;
const second = 20 ;
console.log(`The difference between ${first1} and ${second} is ${first1 - second}`);

const employee = {name: 'Bayezid' , age: 22 , salary: 15000};
console.log(`Employee Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`);

const fruit = ['Apple', 'Banana', 'Mango'];
console.log(`My favourite fruit is: ${fruit[1]}`);

const aa = 50 ;
const bb = 10 ;
console.log(`The division of a and b is ${aa / bb}`);

const person = {firstName: "Amit", lastName: "Sharma"};
console.log(`Full Name: ${person.firstName} ${person.lastName}`);

const animals = ["Cat", "Dog" , "Elephant"];
console.log(`My favourite animal is: ${animals.join(" , ")}`);


const student = { name: "Bayezid" , age: 18 , result: [59,45,90] };
const average = `Name: ${student.name} Average 3 subject  ${ ((student.result[0] + student.result[1]  + student.result[2]) / student.result.length).toFixed(2) }`;
console.log(average);

// তির-ধনুকের Arrow Function 
function add(a,b){
    const result = a + b;
    return result;
}
// Shorter version ^ উপরেরটা
const sum = add(5,90);
console.log(sum);

function addd(a,b){
    return a + b;
}console.log(addd(5,90));

const add3 = (a,b) => a + b;
const sum1 = add3(5,30);
console.log(sum1);

const add4 = (num1 , num2, num3, num4) => num1 + num2 + num3 + num4;
const sum2 = add4(5,45,3,5)
console.log(sum2);

const student1 = {
    name: `ananta`,
    age: 18
};
const getName1 = person => person.name;
const getAge = person => person.age;
const name2 = getName1(student1)
console.log(name2);
const age2 = getAge(student1);
console.log(age2);

const getThird = numbers => numbers[3];
const third = getThird([1,34,34,43,43,53]);
console.log(third);

const getPi = () =>Math.PI;
console.log(getPi());

const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
const resul = doMath(2, 5, 8);
console.log(resul);

//রেগুলার ফাংশন এবং আ্যারো ফাংশনের মূল পার্থক্য

const person1 = {
    name: "Anata",
    greetRegular: function () {
        console.log("Hello ," + this.name);
    },
    greetArrow: () => {
        console.log("Hello ," + this.name);
    }
};
person1.greetRegular();
person1.greetArrow();

// ডিফল্ট প্যারামিটারসহ অ্যারে ফাংশন

const greet1 = (name = "Guest") => `Hello, ${name}`;
console.log(greet1());
console.log(greet1("Anata"));

// অবজেক্ট রিটার্ন 
const getObject = () => ({key: "value"});
console.log(getObject());

// practice 195 Page

const first2 = firsts => firsts[0];
const firstResult = first2([2,34,454,33]);
console.log(firstResult);

const gui = (a, b, c) => {
    return a * b * c ;
};console.log(gui(2,3,4));

const getUnknown = () => "unknown";
console.log(getUnknown());

const getNumber = ( name , number) => {
    return number % 5;
};console.log(getNumber("Bayezid" , 11));

const sumFL = (num) => {
    const lastIndex = num.length - 1;
    const sum = num[0] + num[lastIndex];
    return sum; 
};
console.log(sumFL([5, 15, 25]));        

const addNumber = ( a = 10 , b= 5) => a + b;
console.log(addNumber(12,8));