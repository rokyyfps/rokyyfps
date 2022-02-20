// let arr = [1,2,3,4,5]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(element => {
//     console.log(element)
// })


//let btn = document.querySelector('.get_text')
let btn1 = document.querySelector('.write')
let btn2 = document.querySelector('.get')
let wrapper = document.querySelector('.wrapper')
let card = document.querySelector('.card')
let count = 1
let colorVal = document.querySelector('.color').value = '#ffffff'

//btn.addEventListener('click', ()=>createCard())
btn1.addEventListener('click', ()=>write())
btn2.addEventListener('click', ()=>get())
7
// let createCard = () =>{
//     let text = document.querySelector('.text').value
//     if(text == '') return

//     let card = document.createElement('li')
//     card.classList.add('card')
    
//     card.insertAdjacentHTML('afterbegin', `
//     <div class="number">${count}</div>
//     <div class="text">${text}</div>
//     `)
//     wrapper.insertAdjacentElement('beforeEnd', card)

//     let colorVal = document.querySelector('.color').value
//     card.style.backgroundColor = colorVal

//     count++
//     document.querySelector('.text').value = ''
// }

let arr = []

let write = () =>{
    if (arr.length < 1) {
        let text = document.querySelector('.text').value
        if(text == '') return
        arr.push(text)
        
    }
    
}   

let get = () =>{
    
    if (document.querySelector('.text').value != ''){
        arr.forEach(text => {
            let card = document.createElement('li')
            card.classList.add('card')
            card.setAttribute('draggable', 'true')

            card.insertAdjacentHTML('afterbegin', `
            <div class="number">${count}</div>
            <div class="text">${text}</div>
            `)
            let colorVal = document.querySelector('.color').value
            card.style.backgroundColor = colorVal
        wrapper.insertAdjacentElement('beforeend', card)

        wrapper.forEach((card) =>{
            card.addEventListener('dragover', dragOver)
        })
        let dragOver = function () {
            console.log('over');
        }
    })
    document.querySelector('.text').value = ''
    arr = []
    count++
    }
    // dragAndDrop()
}










// let dragAndDrop = () => {
//     if (document.querySelector('.text').value == ''){
//         let dragStart = function() {
//             console.log('dragStart');
//         }
//     } else return
    
// }