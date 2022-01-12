// let x = 10
// let y = 5
// console.log(x + y)



// let as = 'helo wrld'
// console.log(as)
// alert(as)

// let userAge = prompt('Сколько лет?')
// let userName = prompt('Как зовут?')
// let userCard = prompt('Номер карты?')
// const userData = (userAge + ' ' + userName + ' ' + userCard)

// console.log(userData)


// let x = prompt('Назови первое число ')
// let y = prompt('Назови второе число ')
// x = Number(x)
// y = Number(y)
// console.log(x + y)

// let req = prompt('Впиши 1 либо 2!')
// const answer1 = ('Ты выбрал 1, я угадал')
// const answer2 = ('Ты выбрал 2, я угадал')
// const error = ('1000-7?')

// if (req == (1)){
//     alert(answer1)
// }

// else if (req == (2)){
//     alert(answer2)
// }

// else{
//     alert(error)
// }



let num = prompt('Дай читабельный размер заголовку ')
num = Number(num)
console.log(num)

let header =  document.querySelector('.header')

if (num < 300 & num > 30){
    alert('чел харош, тыкай кнопку')
    function changeFontH1() {
        header.style.fontSize = num+'px'
        console.log(num)
    }
} else {
    alert('плохой выбор')
}












