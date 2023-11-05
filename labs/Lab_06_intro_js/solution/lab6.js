//Задание 1.
let apple = 10;
alert(apple);
console.log(apple);
let condition = 'The sims 4';
console.log('Good game is'+ condition);
//Вопрос 1. Через оператор let.
//Вопрос 2. Оператор let и var. Var-переменная, созданная в блоке if‑else или цикле, доступна за пределами своего блока, 
//это практически всегда приводит к труднораспознаваемым логическим ошибкам. Переменные var можно создавать повторно, и компилятор не будет ругаться.
//Ключевое слово let лишено недостатков своего предшественника. Переменные, объявленные с его помощью, нельзя объявить повторно — программа выдаст ошибку. 
//При попытке обратиться к ним до инициализации вы получите ошибку.
//Вопрос 3. Выводится на экран модальное окно с сообщением.
//Вопрос 4. Для отладки кода, незаметный для пользователя.

//Задание 2.
let peremennaya = 5;
let stroka = '100';
let bool_peremennaya = true;
console.log(peremennaya+stroka);
console.log(peremennaya+bool_peremennaya);
console.log(stroka+bool_peremennaya);
console.log(stroka+peremennaya);
console.log(bool_peremennaya+peremennaya);
console.log(bool_peremennaya+stroka);