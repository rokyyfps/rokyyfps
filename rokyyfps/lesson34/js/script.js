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
    if(Math.sqrt(a**2) = a | a != 0){
        massive.push('Положительное')
    } else if(Math.sqrt(a**2) != a | a != 0){
        massive.push('Отрицательное')
    }
    if((a%2) = 0){
        massive.push('чёьное')
    } else if((a%2) != 0){
        massive.push('чётное')
    }
    if(a = 0){
        massive.push('это ноль')
    } else{
        massive.push('это не число')
    }
}















