//Задание 1.
let apple = 10;
console.log(apple);
alert(apple);
let condition = ' The sims 4';
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

//Задание 3.
let arr = [];
function getRandom(){
    //Генерация положительных и отрицательных чисел
    return Math.ceil(Math.random() * 11) * (Math.round(Math.random()) ? 1 : -1)
}
for(i=0;i<10;i++){
    //заполнение массива
    arr[i] = getRandom();
}
//убрать из массива числа меньше 0
let c = arr.filter(function(currentValue){
    return currentValue>=0;
})
//обычный массив
console.log(arr);
//отфильтрованный
console.log(c);

//Задание 4.
//Функция возвращает случайное число
function getRandomNumb(){
    return Math.round(Math.random()*101);
}
let random_number = getRandomNumb();
console.log(random_number);

//Функция выводит массив, полученный в результате умножения второго параметра на каждый элемент массива, полученного в качестве первого параметра
function multiplyNumbArray(mass, num){
    let new_mass = [];
    for(let i=0;i<mass.length;i++){
        new_mass.push(mass[i] * num);
    }
    return new_mass;
}
let massiv = [10,34,54,-12,3,8,5,8,12,-1,0];
let number = 5;
console.log("Результат:");
let new_massiv = multiplyNumbArray(massiv,number);
console.log(new_massiv)
//анонимная функция, которая будет генерировать случайное слово, вывести в консоль сгенерированное слово
let random_word = function (){
    let result = '';
    let length = 5;
    const symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const lenght_symbol = symbol.length;
    let count = 0;
    while (count < length) {
      result += symbol.charAt(Math.floor(Math.random()*lenght_symbol));
      count += 1;
    }
    console.log(result)
};
random_word();

//Задание 5.
const human = {};
human.firstName = 'Miron';
human.surname = 'Pumpkin';
human.patronymic = 'Akakievich';
human.birthday = '6-06-1996';
human.hobby = 'drink beer';
human.group = 'rabotiaga';
human.getInfo = function(){
    const currentDate = new Date();
    const birthDate = new Date(this.birthday);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return `FiO: ${this.surname} ${this.firstName} ${this.patronymic}\nBirthday Year: ${birthDate.getFullYear()}\nHobby: ${this.hobby}\nAge: ${age}`;
}
alert(person.getInfo());
const salary = {Vasiliy: 50000, Arnold: 98000, Tolyan: 15000, Angela: 150000, Iisus: 100000000, Valera: 9000, Maria: 30000, Pavel: 10000, Konstantin: 45000, Igor: 75000 };
let sum_salary = 0;
for (let key in salary) {
    sum_salary += salary[key];
}
console.log("Sum salary: ", sum_salary);
