const student = {
    name: 'Motaleb',
    age: 15 ,
    class: 9 ,
    isSingle: false
} 

const subject = {
    name:'Biolgy',
    teacher:'Rasheda',
    examDate:'30 dec' ,
        chapters:['first' , 'Secend' , 'third'],
        nextExam: {
            name: 'Final Exam',
            marks: 100 ,
        }
    }
     
    const sub = {
        name: 'Bayezid',
        examDate:['First' , 'Secend' , 'Third'],
        nextExam:{
            name: 'Final Exam' ,
            marks: 100 ,
        }
    }

    // 126 Page Practice
    const teacher = {
        name:'Bayezid Hossain',
        teach:'Programming',
        bookName:'মারহাবা জাভাস্ক্রিভ মারো থাবা',
        age: 18,
        address:'Raipur , Lakshmipur' ,
    }

    const tree = {
        type:'Fruits',
        name: 'Mango' ,
        height: '30 Fit',
        age: '25 Years',
    }

    const man = {
        name:'Bayezid Hossain',
        teach:'Programming',
        bookName:'মারহাবা জাভাস্ক্রিভ মারো থাবা',
        age: 18,
        address:'Lakshmipur',
    }

    const father = {
        name:'Abdul Motin ',
        profession: 'Driver' ,
        age: 50 ,
        nextG: 2,
    }

    const bike = {
        name: 'Electrick Bike', 
        band:'Made in China',
        tayer: 2,
        color: 4,
        spreed:120,
        price:170000,
    }

    const laptop ={
        band: 'ASUS',
        prosasor:'intel (CELERON)',
        price:40000,
        displaySize:15,
    }

    // গার্ডওয়ালা property-এর key
    const person= {
        name:'Bayezid Hossain',
        age:25,
        profession:'Developer',
        salary:25000,
        married:true
    };console.log(person.name);

    const cricketer = {
    position:4,
    specialty:'Batter',
    age:24 ,
    runs:8000 ,
};
console.log(cricketer.position);
console.log(cricketer['specialty']);
const cricket = 'age';
console.log(cricketer[cricket]);

cricketer.position = 1 ;
console.log(cricketer.position);

cricketer['specialty'] = 'Very Good';
console.log(cricketer['specialty']);

// ঘরের ভিতর ঘর , মশা আমার পর

const college = {
    name:'vnc',
    class:['11' , '12'],
    events:['science fair' , 'bijoy dibos', '21 feb'],
    unique:{
        color:'blue',
        result: {
            gpa:5 ,
            merit:'top'
        }
    }
}; 
console.log(college.unique.color);
console.log(college.unique.result.gpa);
console.log(college.events[2]);

// Practice 131 Page

const player = {
    name:'Bayezid Hossain',
    age:18 ,
    sprts:'Programming',
    team:'Programming Acados',
};console.log(player.team);

const pc = {
    band:'ASUS',
    price:38000,
    hardDisc:'8 GB',
    ram:'4 GB',
    screenSize:15 ,
};console.log(pc.screenSize);

const favPlace = {
    name:"Cox's Bazar",
    distance:"400im",
    popularity:'high' ,
};console.log(favPlace['popularity']);

const phone = {
    brand:'Samgsung',
    color:'Black',
    price: 30000,
}; console.log(phone['price']);

const library = {
    name:'Public Libary',
    location:'Dhaka',
    books:5000,
};console.log(library.location);

const movie = {
    title:'Inception',
    director:'Nolan',
    rating:9,
};console.log(movie.rating);

const clg = {
    established:1949,
    groups:['Science', 'Arts' , 'Commerce']
}; console.log(clg.groups[1]);

const family =  {
    father: {
        name:'Motin',
        age:50,
        profession:'Driver',
    } ,
   mother: {
        name:'sumi',
        age:40,
        profession:'House Wife',
    }

};

const fathe = (family.father.age);
const mother = (family.mother.age);
console.log( 'Father & Mother Sum Age' , fathe + mother) ;

// অবজেক্টের তালা-চাবি

const pcb = {
    band:'ASUS',
    price:38000,
    hardDisc:'8 GB',
    ram:'4 GB',
    screenSize:15 ,
};
console.log(Object.keys(pcb));
console.log(Object.values(pcb));

const profile ={
    name:'Rahim',
    age: 18,
    city:'Dhaka',
};
const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes('name');
console.log(hasName);


if( 'name' in profile) {
    console.log(true);
}else{
    console.log(false);
}

if(profile.hasOwnProperty("name")) {
    console.log(true);
}else{
    console.log(false);
}

if(profile.city === "Dhaka") {
    console.log(true);
}else{
    console.log(false);
}

// জোড়ায় জোড়ায় entries কর

const person1 = {
    name:"Alice",
    age:25,
    country:"Bangladesh",
 };

const entries =Object.entries(person1);
console.log(entries);

const person3 = {
    name:"Alice",
    age:25,
    country:"Bangladesh",
 };

 for( const key in person3){
    const value = person3[key];
    console.log(key , value);
 }

const person2 = {
    name:"Alice",
    age:25,
    country:"Bangladesh",
 };
 const keys = Object.keys(person2);
 for(const key of keys) {
    console.log(key , person2[key]);
 }

// Practice 137 page

const javaScript = {
   name:'মারহাবা জাভাস্ক্রিভ মারো থাবা',
   auther:"Jhankar Mahbub",
   price:500,
};
console.log(Object.keys(javaScript));
console.log(Object.values(javaScript));

const article = {
   title:'Learning JS',
   category:'Programming',
};
if( "auther" in article){
   console.log(true);
}else{
   console.log(false);
}

const laptop1 = {
   band:"ASUS",
   model:"VivoBook_ASUSLapotp X515KA",
   price:38000,
}
for( const key in laptop1){
   const value = laptop1[key];
   console.log(key , value);
}

const phone1 = {
   brand:"Samgsung",
   model:"Samgsung A54" ,
   price:30000,
}
const keys1 = Object.keys(phone1);
for( const key of keys1){
   console.log(key , phone1[key]);
}

const bike1 = {
   brand:"Hero",
   price:120000,
   model:"Splendor",
}
console.log(Object.values(bike1));

const books = {
    book1: "Hary Potter" ,
    book2: 'The Hobit',
    book3:"Game of Thrones"
};
console.log(Object.keys(books));
const numbers = {
   a:10 , b:20 , c: 30 , d:40,
}

let sum = 0 ;
 const values = Object.values(numbers);
 for( const value of values){
  sum = sum + value;
 }
 console.log(sum);


const player1 = {
    name:'Messi',
    team:'Argentina',
    goals:91,
}
console.log(Object.values(player1));

const building = {
    follrs:10,
    address:"Street Main Road, city Dhaka",
    type:'Commercial',
}
for( const key in building){
    const value =building[key];
    console.log(value);
}

// Freeze-এ seal মারা অবজেক্ট

const person4 = { 
   name:"Alice",
    age:25,
     country:"Bangladesh"
   };
   delete person4.age;
   console.log(person4);
   
   const adminUser = {
   username:"admin",
   email:"admin@example.com",
   role:"superdmin",
};
Object.freeze(adminUser);
adminUser.role="user";
adminUser.password="12345";
delete adminUser.email;
console.log(adminUser);

   const adminUser1 = {
   username:"admin",
   email:"admin@example.com",
   role:"superdmin",
};
Object.seal(adminUser1);
adminUser1.email="Baye";
adminUser1.wife="Nothing";
console.log(adminUser1);

// Practice 139 Page

const headphone = {
    brand:"Gitibyte",
    priceL:3000,
    color:"red",
}
Object.freeze(headphone);
headphone.name="Gamming Headphone";
console.log(headphone);

const player2 = {
   name:"Messi",
   goals:800,
   club:"Inter Miami",
};
Object.freeze(player2);
player2.success="1000";
console.log(player2);

const book = { 
   title: 'Harry Potter',
   author:'Harry Potter',
   pages:500,
}
Object.seal (book);
book.author='Jk';
console.log(book);

const gadget = {
   name:'Iphone',
   price:1000,
   color:'black',
}
delete gadget.price;
console.log(gadget);

const animal = {
   name:'Tiger',
   lacation:'Sundarban'
}
Object.freeze(animal);
animal.lacation=('Dhaka');
console.log(animal);

const food ={
   name:'Pizza',
   price:444,
   size:'Large'
}
Object.seal(food);
food.price= '100';
console.log(food);















