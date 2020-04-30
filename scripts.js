// Third part:

// $('css selector').action()
$('h1').html('This is done by <em>JavaScripts</em>');
$('p').css('border', '1px solid red');
$('p').css('padding', '10px');
// ez bekapcsolja
$('h2').toggleClass('blue');
// ez kikapcsolja
$('h2').toggleClass('blue');


console.log('Script file is loaded');

// Single line comment

/*
1+1
2
12+5
17
4*3
12
4*5;
20
17*12;
204
let age;
undefined
age = 34
34
age+5
39
age=55
55
age/8
6.875
age = 48 / 5;
9.6
age
9.6
let number_Of_Legs = 4;
undefined
number_Of_Legs * 2
8
let number_Of_Legs = 4;
undefined
let number_Of_Legs = 2;
undefined
number_Of_Legs = 5;
5
let name= Johnny
VM1152:1 Uncaught ReferenceError: Johnny is not defined
    at <anonymous>:1:11
(anonymous) @ VM1152:1
age / 3
3.1999999999999997
anotheAge / 3
VM1207:1 Uncaught ReferenceError: anotheAge is not defined
    at <anonymous>:1:1
(anonymous) @ VM1207:1
let name= 'Johnny'
undefined
name
"Johnny"
let name= `johnny`
undefined
name
"johnny"
let sentence = "That person's cat"
undefined
sentence = 'He said: "OK."'
"He said: "OK.""
sentence
"He said: "OK.""
let backtick = `backtick`
undefined
backtick
"backtick"
let oldEnoughToDrive = true
undefined
34+5
39
'hello, ' + name
"hello, johnny"
'hello, ' + name
"hello, johnny"
'hello, ' + name + ' ' + 43 + ' anouther string'
"hello, johnny 43 anouther string"
'11' + '23'
"1123"
true && true
true
true && try
VM2081:1 Uncaught SyntaxError: Unexpected token 'try'
true && false
false
oldEnoughToDrive && oldEnoughToDrink
VM2151:1 Uncaught ReferenceError: oldEnoughToDrink is not defined
    at <anonymous>:1:21
(anonymous) @ VM2151:1
oldEnoughToDrive && oldEnoughToDrive
true
false && false
false
true || true
true
true || false
true
false || false
false
let post = "This is my first post"
undefined
let post2 = "This is my second post"
undefined
let color1 = 'orange'
undefined
let color2 = 'blue'
undefined
let colors = ["orange", "blue", "green"]
undefined
colors
(3) ["orange", "blue", "green"]
colors [0]
"orange"
colors [1]
"blue"
colors [2]
"green"
let pickedColor =2
undefined
colors [pickedColor]
"green"
colors [pickedColor]
"green"
colors [1] = "yellow"
"yellow"
colors
(3) ["orange", "yellow", "green"]
colors.length
3
name.length
6
colors [1] = "orange"
"orange"
colors
(3) ["orange", "orange", "green"]
colors [1] = "yellow"
"yellow"
colors[3] = 'lime'
"lime"
colors.push('purple')
5
colors
(5) ["orange", "yellow", "green", "lime", "purple"]
colors[colors.length] ='cyan'
"cyan"
colors.push(colors)
7
colors
(7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]
let notGoodExamle = ['text', 123, true]
undefined
let person = {
  name: 'Johnny',
  age: '46,
  favouriteColors: colors,
  oldEnoughToDrive: true
}
VM3476:3 Uncaught SyntaxError: Invalid or unexpected token
let person = {
  name: 'Johnny',
  age: '46',
  favouriteColors: colors,
  oldEnoughToDrive: true
}
undefined
person
{name: "Johnny", age: "46", favouriteColors: Array(7), oldEnoughToDrive: true}age: "46"favouriteColors: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]length: 7__proto__: Array(0)name: "Johnny"oldEnoughToDrive: true__proto__: Object
'Hello, dear ' + person.name
"Hello, dear Johnny"
person.name = 'Peti'
"Peti"
person
{name: "Peti", age: "46", favouriteColors: Array(7), oldEnoughToDrive: true}age: "46"favouriteColors: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]length: 7__proto__: Array(0)food: "pizza"name: "Peti"oldEnoughToDrive: true__proto__: Object
person.food = 'pizza'
"pizza"
person
{name: "Peti", age: "46", favouriteColors: Array(7), oldEnoughToDrive: true, food: "pizza"}

*/ 