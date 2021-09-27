// This is a random message generator about greeting

/*  return values are:
Hey! My name is Ahmet. I like playing guitar. Do you want to try?
Hello! My name is Ahmet. I like running. Do you wanna come with me?
Hi! My name is Ahmet. I like singing. Do you like it?
*/

let first = ['Hey', 'Hello', 'Hi']
let second = ['playing guitar', 'running', 'singing']
let third = ['Do you want to try?', 'Do you wanna come with me?', 'Do you like it?']


let randFirst = Math.floor(Math.random() * 3) 
let randSecond = Math.floor(Math.random() * 3) 
let randThird = Math.floor(Math.random() * 3) 

console.log(first[randFirst] + '! My name is Ahmet. I like ' + second[randSecond] + '. ' + third[randThird])