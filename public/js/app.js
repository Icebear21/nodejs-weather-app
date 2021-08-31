console.log('Client side javascript is loaded');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')     //use 'name' for elements, use # for id selector, ./className for class, 
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();                                     //stop for auto refresh in inspect

    const location = search.value

    messageOne.textContent = 'Loading'               //manipulate the textContent in messageOne

    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location,
                    messageTwo.textContent = data.forecast

            }
        })
    })
})

