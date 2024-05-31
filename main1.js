// console.log(222)


// Код з консультації по DOM:
// console.dir(document);
// console.dir(document.head);
// console.dir(document.head.children);
// console.dir(document.head.children[0]);
// console.dir(document.head.children[1]);
// console.dir(document.head.children[2]);
// console.dir(document.head.children[3]);
//
// let metas = document.head.getElementsByTagName('meta');
// console.log(metas);
// for (const meta of metas) {
//     console.dir(meta);
//     console.dir(meta.name);
//     console.dir(meta.getAttribute('content'));
//     console.dir('======');
// }
//
// console.dir(document.body);
//
//
// let lists = document.body.getElementsByClassName('menu');
// console.log(lists);
// let ul = lists[0];
// ul.getElementsByTagName('li');
// let liOfUl = ul.children;
// console.log(liOfUl);
//
// let ol = lists[1];
// console.log(ol.children);
//
// let allLiElementsOfDocument = document.getElementsByTagName('li');
// console.log(allLiElementsOfDocument);
//
//
// let list1 = document.getElementById('list-1');
// console.log(list1);
// let li1 = list1.children[0];
// console.log(li1);
// li1.innerHTML = '<h2>hello</h2>';
// li1.innerText = '<h2>hello</h2>';
// console.log(li1.classList);
// li1.classList.toggle('xxx');
// li1.classList.add('target');
// li1.classList.remove('one');
// console.log(li1.attributes);
//
// console.log(li1.classList);
// console.log(li1.clientHeight);
//
// let element = document.querySelector('.menu');
// console.log(element);
//
// let li = document.querySelectorAll('li')[0];
//
// setTimeout(() => {
//     li.innerText = 'okten';
// }, 2000);
//
// setTimeout(() => {
//     console.log(li);
// }, 3000);
//
//
// let fomrs = document.getElementsByTagName('form');
// console.log(fomrs);
//
// console.log(document.forms);
// console.log(document.forms.f1.userName);
// console.log(document.forms['f1'].userName.value);
//

//
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let htmlDivElement = document.createElement('div');
// htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про
// title та monthDuration
// Завдання робити через цикли.
//
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому
// буде <h1 class='heading'>  з title елементу, та <p class='description'> з monthDuration
// елементу.
//     Завдання робити через цикли.
//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він
// знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити
// його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його
// інформацією з цього об'єкту
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він
// знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть збері-
// гатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом


// 3. Третя домашня по циклам:
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let users = [
//      {name: 'vasya', age: 31, status: false},
//      {name: 'petya', age: 30, status: true},
//      {name: 'kolya', age: 29, status: true},
//      {name: 'olya', age: 28, status: false},
//      {name: 'max', age: 30, status: true},
//      {name: 'anya', age: 31, status: false},
//      {name: 'oleg', age: 28, status: false},
//      {name: 'andrey', age: 29, status: true},
//      {name: 'masha', age: 30, status: true},
//      {name: 'olya', age: 31, status: false},
//      {name: 'max', age: 31, status: true}
//  ];

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>дів з довільним текстом всередині</div>`);
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>дів з довільним текстом та ${i} всередині</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом
// і індексом всередині


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20)
// {i++;
// document.write(`<h1>дів з довільним текстом всередині</h1>`)}


// let i = 0;
// while ( i < 10)
// {i++;
// document.write(`<h1>дів з довільним текстом та ${i} всередині</h1>`)}
//

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// і індексом всередині.
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb',
//     'react', 'angular', 'node.js'];
// for (const listOfItem of listOfItems) {
//
//     document.write(`<ul>
//         <li>${listOfItem}</li>
// <!--        // &lt;!&ndash;-->
// <!--        //     і тд інші об'єкти масиву-->
// <!--        //      ...-->
// <!--        //      ...-->
// <!--        //      ...-->
// <!--        // &ndash;&gt;-->
//     </ul>`)
// }


// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб
// получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
for (const product of products) {
    // for (const productKey in product) {
    document.write(`<div class="product-card">
    <h3 class="product-title">${product.title} Price - ${product.price}</h3>
<img src="${product.image}" alt="product" class="product-image">
</div>`)
}
// }


//
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status) {
        document.write(`
        <div>
        <h3> ${user.name} - ${user.age} - ${user.status} </h3>
-----------
</div>

        `)
    }
}

for (const user of users) {
    if (user.status) {
    } else {
        document.write(`
        <div>
        <h3> ${user.name} - ${user.age} - ${user.status} </h3>
-----------    
</div>
        `)
    }
}

