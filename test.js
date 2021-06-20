function add() {
    let num1 = Number(prompt('Enter a number'))
    let num2 = Number(prompt('Enter another number'))
    let total = num1 + num2;
    alert(total)
    document.getElementById('msg').innerHTML = '<b> The Sum of the numbers you entered is = '+total+'</b>'
}
add()