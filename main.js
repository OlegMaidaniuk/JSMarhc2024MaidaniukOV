// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let a = 1;
let b = 10;
let c = -999;
let e = 123;
let h = 3.14;
let f = 2.7;
let g = true;
let i = false;

console.log(hello, owu, com, ua, a, b, c, e, h, f, g, i);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Мирослав';
let middleName = 'Олегович';
let lastName = 'Майданюк';
let person = firstName + ' ' + middleName + ' ' + lastName;
let personInterpol = `${lastName} ${firstName} ${middleName} `
console.log(person, personInterpol);

// - За допомогою оператора typeof визначити типи наступних змінних
// та вивести їх в консоль.

let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1, typeof b1, typeof c1);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються
// вашими Імям, По-Батькові та роками. та вивести в консоль
//
// let namePrompt = prompt('im`ya?');
// let midlePrompt = prompt('po batkovi?');
// let lastPrompt = prompt('prizvyshche?');
// let age = +prompt('vash vik?')
// const FIO = namePrompt + ' ' + midlePrompt + ' ' + lastPrompt + ' ' + age;
// console.log(FIO);

//
//Друга домашка (second homework)
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу,
// вивести кожен елемент в консоль
let users = [{}, {Vlad: 45, Mariyka: 17}, [], [11, true, 'Mykola'], undefined, null, NaN, '0', '', 'Lviv', 0, 489]
console.log(users.length);
console.log(users);
users[0] = 'joker';
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);
console.log(users[10]);
console.log(users[11]);

console.log(users);
console.log(users.length);

users[users.length]=777;
console.log(users);
console.log(users.length);

users[users.length]=888;
console.log(users);
console.log(users.length);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// - описати масив, в якому буде зберігатись інформація про температуру
// вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//      - Користувач вводить або має два числа.
//          Потрібно знайти та вивести максимальне число з тих двох .
//          Також потрібно врахувати коли введені рівні числа.
//      - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//          буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти
//          в неї falsy-значення(хибноподібні, тобто ті, які приводиться до false,
//          а це 0 null undefined і тд).
//      - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//      За допомоги іф перевірити кожен його елемент на тривалість навчання.
//      У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".