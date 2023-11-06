
let studentClass = [{FIO: 'Петров А.А.', Grade: 5},
                    {FIO: 'Иванов Б.Б.', Grade: 3.4},
                    {FIO: 'Сидоров Г.Г.', Grade: 9},
                    {FIO: 'Немолодой Д.Д', Grade: 2},
                    {FIO: 'Молодой Е.Е', Grade: 3.4}];
let averageGrade = 0;
let quantity = 0;
let badStudent = [];

for (let numberStudent = 0; numberStudent < studentClass.length; numberStudent++) {
    
    if ((studentClass[numberStudent].Grade > 5) && (studentClass[numberStudent].Grade < 0)) {
        console.log('Это значение учитываться не будет оно не соответствует допустимым значениям');
    } 
    else if (!(studentClass[numberStudent].Grade <= 5) && (studentClass[numberStudent].Grade >= 0)) continue;
    else if (studentClass[numberStudent].Grade < 4) {
        badStudent.push(studentClass[numberStudent]);
    } 
    
    averageGade += studentClass[numberStudent].Grade;
    quantity += 1;
}

averageGrade /= quantity;
console.log('Средняя оценка: '+ averageGrade);
console.log('Плохие студенты:' + badStudent);

if (badStudent.length === 0) {
    console.log('Таких нет');
}

badStudent.forEach((info)=> {
    console.log('Фио: '+ info.FIO + '; Оценка: ' + info.Grade)
});
r