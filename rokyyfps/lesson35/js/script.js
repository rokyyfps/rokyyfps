let userArr = []

let addNumber = () => {    
    let number = prompt('ur number')
    userArr.push(number)

    if (number === null & number === NaN) return
}

let veiwNumber = () => {    
    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ''

    let li = ''
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
        // wrapper.append(userArr)
        // console.log(userArr[i])
    }
    console.log(summ, res)
    // wrapper.insertAdjacentHTML('afterbegin', i)
}
