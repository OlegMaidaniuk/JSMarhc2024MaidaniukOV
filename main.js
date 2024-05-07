// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
let owu='owu';
let com='com';
let ua='ua';
let a=1;
let b=10;
let c=-999;
let e=123;
let h=3.14;
let f=2.7;
let g=true;
let i=false;

console.log(hello, owu, com, ua, a, b, c, e, h, f, g, i);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Мирослав';
let middleName = 'Олегович';
let lastName = 'Майданюк';
let person = firstName + ' '+middleName +' '+lastName;
let personInterpol = `${lastName} ${firstName} ${middleName} `
console.log(person , personInterpol);

// - За допомогою оператора typeof визначити типи наступних змінних
// та вивести їх в консоль.

     let a1 = 100;
     let b1 = '100';
     let c1 = true;
console.log(typeof a1, typeof b1, typeof c1);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються
// вашими Імям, По-Батькові та роками. та вивести в консоль
let namePrompt = prompt('im`ya?');
let midlePrompt = prompt('po batkovi?');
let lastPrompt = prompt('prizvyshche?');
let age = +prompt('vash vik?')
const FIO = namePrompt + ' ' + midlePrompt +' '+ lastPrompt+' '+age;
console.log(FIO);