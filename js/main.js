const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}).mount('#app')


function rovesciaParola(parola) {
    return parola.split('').reverse().join('');
}

var parola = "supercalifragilistichespiralidoso";
var parolaRovesciata = rovesciaParola(parola);
console.log(parolaRovesciata);