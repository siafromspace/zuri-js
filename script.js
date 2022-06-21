let name = prompt("Enter your first name:")
let height = prompt("How tall are you in cm?")
let country = prompt("Enter your country:")

const body = document.getElementById('body')

body.innerHTML = "<h2>My name is " + name + ". I am " + height + "cm tall, and I am from " + country + ". </h2>"