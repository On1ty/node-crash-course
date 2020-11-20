//Node Basic
const name = "NoobDev";

console.log(name);

const greet = (name) => {
    console.log(`hello, ${name}`)
}

greet('Noob');
greet('Dev');

//Global Object
console.log(global)

setTimeout(() => {
    console.log('NoobDev');
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log('NoobDev');
}, 1000);

console.log(__dirname);
console.log(__filename);