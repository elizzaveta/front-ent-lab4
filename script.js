'use strict'

//------------------------------------------------------------------------
//---------------------------Робота з об'єктами---------------------------
//------------------------------------------------------------------------

console.log("-----------Objects");

let cat = {
    name: "Snow",
    fur: "black",
    age: 2,
    breed: "Abyssinian Cat",
    gender: "female",
    talk() { alert("meow");}
};

console.log("--Cat properties:");
//Доступ до елементів, for in
for(let key in cat){
    console.log(key + ": " + cat[key]);
}

cat.age = 3;
cat.name = "Eva";

console.log("--If cat is calm:");
let temper = "calm cat";
cat[temper]= true;
console.log("cat[temper] : " + cat[temper]);


//------------------------------------------------------------------------
//---------------------------Робота з масивами---------------------------
//------------------------------------------------------------------------

console.log("-----------Arrays");

let numb_array = [1,6,7,56,2,16,98];
let string_array = ["Alex","Helen","John","Peter","Julia"];

console.log("--Initial arrays:")
console.log(numb_array);
console.log(string_array);

//Методи для роботи з масивами
console.log("--Changed arrays:")
numb_array.push(101);
numb_array.shift();
numb_array[0] = 0;
console.log(numb_array);

string_array.pop();
string_array.unshift("Sam", "Max");
console.log(string_array);

//Доступ до елементів по індексам
let first_numb_elem = numb_array[0];
let last_string_elem = string_array[string_array.length - 1];

console.log("first numb array element: " + first_numb_elem);
console.log("last string array element: " + last_string_elem);

//------------------------------------------------------------------------
//---------------------------Робота з рядками---------------------------
//------------------------------------------------------------------------

console.log("-----------String");

let text = "Some text, test string";

console.log(text);

let middle_char_index = text.length/2;
console.log("middle char of text is: '"+ text[middle_char_index]+"'");

console.log(text.toLowerCase());
console.log(text.toUpperCase());

let substring = text.slice(0,9);
console.log(substring);
//------------------------------------------------------------------------
//---------------------------------Цикли---------------------------------
//------------------------------------------------------------------------

console.log("-----------Cycles");

let array = [1,2,3,5,4,6,7];
for(let i = 0; i<array.length-1;i++){
    if(array[i]>array[i+1]){
        console.log("Array " + array + " is not ordered.");
        break;
    }
}

let number = 5;
console.log("countdown:");
while(number > 0){
    console.log(number);
    number--;
}
console.log("go!");


let do_while = 5;
do {
    console.log(do_while);
    do_while--;
} while (do_while > 0);


console.log("-----------");


//------------------------------------------------------------------------
//------------------------alert, prompt, confirm--------------------------
//------------------------------------------------------------------------
function alert_prompt_confirm(){

    let name = prompt("What is your name?", "John");
    let correct_name = confirm("Is your name "+name+"?");
    if(correct_name) alert("Hello, " + name);
    else alert("Hello, you");

}


//------------------------------------------------------------------------
//-----------------оголошення функції function declaration-----------------
//--------------------------------параметри-------------------------------
//------------------------------------------------------------------------
//alert_func();
let test_x = 5;
function alert_func(){
    alert("inside the alert_func()");
    test_x += 6;
    console.log("test_x: " + test_x);
}

function param_name_func (name = "User"){
    alert("From now I will call you "+ name);
}

function new_shopping(cost, ...args){
    let shopping_bag = args;
    console.log("You've bought...")
    for(let i = 0; i< shopping_bag.length; i++){
        console.log(shopping_bag[i]);
    }
    console.log("...it's cost is " + cost);
}
//------------------------------------------------------------------------
//---------------------------function expression--------------------------
//----------------------------анонімні функції----------------------------
//-------------------передача анонімних функцій як параметрів-------------
//------------------------------------------------------------------------
//func_expression(2); 
//debugger;
let func_expression = function (param) {
    console.log("func_expression param is " + param);
}

let func_expression_2;

function f_expr_test(){
    let input = confirm("Random choice");
    if(input) func_expression_2 = function () {alert("You pressed ok in random choice"); }
    else func_expression_2 = function () { alert("Random choice wasn't ok"); }
}

//func_expression_2();

function anon_func_call(input, f){
    f(input);
}


//anon_func_call('input',function (value){alert("Your input is "+ value);})

//------------------------------------------------------------------------
//---------------присвоєння функцій та їх подальший виклик-----------------
//-------------------------стрілочні функції------------------------------
//------------------------------------------------------------------------
function increment(x){
    return ++x;
}

let plus_one = increment;
let plus_two = (x) => x+2;

//plus_one(4);
//plus_two(4);

let imitate_cat_talk = () => alert("meow");

//anon_func_call('input',(value) => alert("Your input is "+ value))


//------------------------------------------------------------------------
//-----------------------------Замикання-------------------------
//------------------------------------------------------------------------

let word = "word";
let word3 = "word3";
let word4 = "word4";

function closure_1(word){
    let word4 = "closure";
    return function (word2){
        return word +" "+word2+" "+word3+" "+word4;
    }

}

let cl1 = closure_1("cl1");

//
let w_number = 10;
function closure_2(param){
    let number = 0;

    if(param < 0) return ()=> "w_number "+--w_number + "; number " + --number;
    else return ()=> "w_number "+ ++w_number + "; number " + ++number;

}

let cl2 = closure_2(-2);
let cl3 = closure_2(1);


//module

let module = (function (){
    let names = [];
    let module_numb = 0;
    function addModuleName(new_name){
        names.push(new_name);
        return names;
    }
    function IncrementModuleNumb(){
        return ++module_numb;
    }
    return {
        addName: addModuleName,
        incrementNumb: IncrementModuleNumb
    }
})();

//замикання як обробник деякої події на html-сторінці
function create_onclick(id){
    let size = 20;
    let div = document.getElementById(id);
    div.style.background = "#0da5a8b3";
    div.addEventListener('click', function(){
        size+=10;
        div.style.height = size +"px";

    })

}


