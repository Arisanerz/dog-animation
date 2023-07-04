const username = document.querySelector('.username')
const password = document.querySelector('.password')
const passwordBtn = document.querySelector('.password-button')
const face = document.querySelector('.face')
const hands = document.querySelectorAll('.hand')
const tongue = document.querySelector('.tongue')


// Username
username.addEventListener('focus', faceRotation)
username.addEventListener('input', faceRotation)
username.addEventListener('blur', () => face.style.transform = "rotate(0deg)")

function faceRotation () {
    const value = username.value.length
    if(value < 40) {

        face.style.transform =  `rotate(${20 - value}deg)`
    }
}

// Password

password.addEventListener('focus', () => {
    tongue.classList.remove('breath')
    hands.forEach(hand => hand.classList.add('hide'))
})

password.addEventListener('blur', () => {
    tongue.classList.add('breath')
    hands.forEach(hand => hand.classList.remove('hide'))
})

// Password Button
passwordBtn.addEventListener('mousedown', () => {
    tongue.classList.remove('breath')
    hands.forEach(hand => hand.classList.add('peek'))
    password.type = 'text'
})
passwordBtn.addEventListener('mouseup', () => {
    tongue.classList.add('breath')
    hands.forEach(hand => hand.classList.remove('peek'))
    password.type = 'password'
})