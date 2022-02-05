let userArr = []

let addNumber = () => {    
    let number = prompt('ur number')
    if (isNaN(number)) return
    userArr.push(number)
}

let veiwNumber = () => {
    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ''
    console.log(userArr);
    let summ = ''
    let res = 0
    for(let i = 0; i < userArr.length; i++){
        summ += userArr[i]
        if(i != userArr.length - 1){
            summ += '+'
        } else {
            summ += '='
        }
        res += +userArr[i]
    }
    console.log(summ, res)
    wrapper.insertAdjacentHTML('afterbegin', res)
    wrapper.insertAdjacentHTML('afterbegin', summ)
}

let clear1 = () => {
    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ''
    userArr = 0
    summ = 0
    res = 0
}



