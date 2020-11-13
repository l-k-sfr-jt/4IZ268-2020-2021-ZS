// tyhle prikazy pisou zpravu do konzole
console.log('Ahoj svete');
/*
1
2
3
*/
console.error('Chyba');
console.warn('Upozorneni');

// var, let , const

let age = 42;
console.log(age);

const height = 170;
console.log(height);

age = 12;
console.log(age);

// height = 100;
// console.log(height);

// String, Number, Boolean, null, undefined

const pi = 3.14; // number - integer, double, float
const message = 'Ahoj, jmenuji se Pavel a chci se naucit JavaScript';
                //"Ahoj, jmenuji se Pavel a chci se naucit JavaScript";
                //`Ahoj, jmenuji se Pavel a chci se naucit JavaScript`;

console.log(message);

const isLive = true;
const isMarried = false;

console.log(isLive, isMarried);

const something = null;
const somethingElse = undefined;

console.log(something, somethingElse);

console.log(typeof isLive);
console.log(typeof message);
console.log(typeof pi);

// Strings

const string1 = 'Ahoj';
const string2 = 'svete';

const string = string1 + ' ' + string2;
console.log(string);

console.log('Hodnota PI = ' + pi)

const myAge = 25;
const name = 'Pavel';
const str = `Ahoj, jmenuji se ${name}, a je mi ${myAge} let`;
console.log(str);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.slice(0, 2));
console.log(name.slice(1, 3));
console.log(name.split(''));
console.log(name.split('v'));

// pole
const fruits = ['ananas','banana','melon', 'strawberry', null, undefined, false];
console.log('We have ' + fruits.length + ' fruits.');

const numbers = [0, 1, 2, 3, 4];
console.log(numbers);
/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
*/
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log('-------------------');
let i = 0;
while (i < fruits.length) {
    console.log(i, fruits[i]);
    i++;
}

fruits.push('orange');
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('apple');
console.log(fruits);


// objects
const person = {
    age: 42,
    nationality: 'Czech Republic',
    name: 'Pepa',
    surname: 'Mach',
};

console.log(person.name + ' ' + person.surname);

const people = [
    {
        age: 12,
        name: 'David'
    },
    {
        age: 22,
        name: 'Jane'
    },
    {
        age: 16,
        name: 'Carl'
    },
    {
        age: 72,
        name: 'George'
    },
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name + ' ' + people[i].age);
}

people.forEach((person) => {
    console.log(person);
});

// condition

if (isLive) {
    console.log(123);
} else {
    console.log(456);
}

const add = (a, b) => {
    return a + b;
};

console.log(add(2,3));