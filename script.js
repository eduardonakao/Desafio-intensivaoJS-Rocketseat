const number1 = 5
const number2 = 10

// - 1

// alert('Hello World')

// - 2

const soma = number1 + number2

console.log(soma)

// - 3

const number = 1
function isNumber() {
    if(typeof number == 'number') {
        console.log('É um numero')
    } else {
        console.log('Não é um numero')
    }
}
isNumber()

// - 4

const string = 'a'
function isString() {
    if(typeof string == 'string') {
        console.log('É uma string')
    } else {
        console.log('Não é uma sting')
    }
}
isString()

// - 5

const boolean = true
function isBoolean() {
    if(typeof boolean == 'boolean') {
        console.log('É um booleano')
    } else {
        console.log('Não é um booleano')
    }
}
isBoolean()

// - 6

function subtraction() {
    return number1 - number2
}

console.log(subtraction())

// - 7

function multiplication(number1, number2) {
    return number1 * number2
}

console.log(multiplication(5,5))


// - 8

const division = () => {
    return number1 / number2
}

console.log(division())

// - 9
const number3 = 12
function isOdd() {
    if(number3 % 2 == 0) {
        console.log('É numero par')
    } else {
        console.log('Não é numero par')
    }
}
isOdd()

// - 10
const number4 = 19
const result = (number4 % 2 == 1) ? console.log('É numero impar') : console.log('Não é numero impar')