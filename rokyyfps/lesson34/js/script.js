function for10(){
    n = prompt('введите число')
    for(let i = 1;i <= n; i++){
        res = 1/i
        console.log(res);
    }
}



// дз
function boolean27(){
    x = prompt('Задайте x')
    y = prompt('Задайте y')
    if(x < 0) {
        alert('Правда')
    } else {
        alert('Ложь')
    }
}

function boolean33(){
    a = prompt('Задай сторону A треугольника')
    b = prompt('Задай сторону B треугольника')
    c = prompt('Задай сторону C треугольника')
    if(a + b <= c){
        alert('Ложь')
    } else if(a + c <= b){
        alert('Ложь')
    } else if(c + b <= a){
        alert('Ложь')
    } else {
        alert('Правда')
    }
}

function boolean34(){
    let x = prompt('Задай x') 
    let y = prompt('Задай y')
    let x1 = x%2
    let y1 = y%2
    if(x1 = 0 & y1 != 0){
        alert('Это белая клетка')
    } else{
        alert('Это чёрная клетка')
    }
}

function if29(){
    let a = prompt('Введи число')
    let massive = []
    let res = ''
    if(!isNaN(a)){
        if(a > 0){
            massive.push('Положительное')
        } else if(a < 0){
            massive.push('Отрицательное')
        }
        if(a%2 == 0){
            massive.push('чётное')
        } else if(a%2 != 0){
            massive.push('не чётное')
        }
        if(a == 0){
            massive.push('это ноль')
        } 
    }
    if(isNaN(a)){
        massive.push('это не число')
    }
    for(let i = 0; i < massive.length; i++){
        res = res + ' ' + massive[i] 
    }
    console.log(res + ' число');
}

let if30 = () => {
    let a = prompt('Введи число')
    let massive = []
    let res = ''
    if(a % 2 == 0){
        massive.push('чётное')
    } else if(a % 2 != 0){
        massive.push('не чётное')
    }
    if(a / 100 >= 1){
        massive.push('трёхзначное')
    } else if(a / 10 >= 1){
        massive.push('двухзначное')
    } else{
        massive.push('это цифра')
    }
    for(let i = 0; i < massive.length; i++){
        res = res + ' ' + massive[i] 
    }
    console.log(res + ' число');
}


let for3 = () => {
    let a = 0
    let b = 0
    massive = []
    while(a >= b || a == '' || b == ''){
        a = prompt('Задай а')
        b = prompt('Задай b, которое больше a')
    }
    for(let i = 0; a < b; i++){
        massive.push(a++)
    }
    massive.push(b)
    massive.unshift()
    console.log(massive);
}










