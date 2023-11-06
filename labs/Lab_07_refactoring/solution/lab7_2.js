var arrayFruits = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');

for(let i = 0; i < arrayFruits.length; i++) {
    console.log(arrayFruits[i]);

    if (arrayFruits[i] === 'apple') {
        console.log('apple green');
    }
    if (arrayFruits[i] === 'strawberry') {
        console.log('strawberry red');
    }
    if (arrayFruits[i] === 'blueberry') {
        console.log('blueberry blue');
    }
    if (arrayFruits[i] === 'raspberry') {
        console.log('raspberry light red');
    }
    if (arrayFruits[i] === 'lemon') {
        console.log('lemon yellow');
    }
}
