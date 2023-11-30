const display = document.getElementById("display")
const conta = document.getElementById("conta")
const resultado = document.getElementById("resultado")

let btn1 = document.getElementById("number1").addEventListener("click", function() {
    conta.value = conta.value + "1";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "1") {
        conta.value = conta.value + "1";
    }
})

// document.querySelector(".button").addEventListener("keypress", (e) => {
//     conta.value = conta.value + 
// })