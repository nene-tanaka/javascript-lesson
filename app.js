let age = 28;
let nickname = 'ごっしー';
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let languagesText =  `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。 `;
console.log(languagesText);

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);
 
let num3 = 3;
console.log((playerList[0].age + playerList[1].age + playerList[2].age)/ num3);

function sayHello() {
console.log('Hello');
}
sayHello();

(function() {
  let sayWorld = 'World ';
 console.log(sayWorld);
  })();

user. birthday = '2000-09-27';
user. sayHello  = 'Hello！';
console.log(user);

let calc = {};
function add() {
let x = 3;
let y = 4;
console.log(x + y);
}
add();

function subtract() {
let x = 15;
let y = 5;
console.log(x - y);
}
subtract();

function multiply() {
let x = 7;
let y = 7;
console.log(x * y);
}
multiply();

function divide() {
let x = 10;
let y = 2;
console.log(x / y);
}
divide();
console.log();

function remainder() {
let x = 5;
let y = 3;
console.log(x + 'を' + y + 'で割った余りは' + (x % y) + 'です。');
}
remainder();

 // =>関数fooにおいてconsole.log(x);はスコープの範囲外になっており、定義した変数というのは、その関数の中からしか参照できないため。

 var random = Math.floor( Math.random() * 10 );
console.log( random );

// function setTimeout(callback) {
//   console.log('Hello World!');
//   callback();
// };

setTimeout(function() {
  console.log('Hello World!');
 }, 3000);

 let num = 5;
 if (num > 0) {
  console.log('num is greater than 0');
  } else if (num < 0) {
  console.log('num is less than 0');
  } else if (num == 0) {
  console.log('num is 0');
  }

  let numbers = [];
for (let i = 0; i < 100; i++) {
  // 値を追加するのをくりかえす
  numbers[i] = i;
}
  // numbersをコンソール
console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];
// var random = [Math.floor(Math.random()*mixed.length)]
// console.log(mixed[i] = i);

for (let i = 0; i < mixed.length; i++) {
  // 分岐をくりかえす
  // mixed[i]
  if (typeof 'mixed[i]' !== 'number') {
    console.log('not number');

  }else if (mixed[i] % 2 == 0) {
    console.log('even');

  } else if (mixed[i] % 2 == 1) {
    console.log('odd');
  }
}