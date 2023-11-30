const display = document.getElementById("display")
const conta = document.getElementById("conta")
const resultado = document.getElementById("resultado")

let btn0 = document.getElementById("number0").addEventListener("click", function() {
    conta.value = conta.value + "0";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "0") {
        conta.value = conta.value + "0";
    }
})
let btn1 = document.getElementById("number1").addEventListener("click", function() {
    conta.value = conta.value + "1";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "1") {
        conta.value = conta.value + "1";
    }
})
let btn2 = document.getElementById("number2").addEventListener("click", function() {
    conta.value = conta.value + "2";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "2") {
        conta.value = conta.value + "2";
    }
})

let btn3 = document.getElementById("number3").addEventListener("click", function() {
    conta.value = conta.value + "3";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "3") {
        conta.value = conta.value + "3";
    }
})
let btn4 = document.getElementById("number4").addEventListener("click", function() {
    conta.value = conta.value + "4";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "4") {
        conta.value = conta.value + "4";
    }
})
let btn5 = document.getElementById("number5").addEventListener("click", function() {
    conta.value = conta.value + "5";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "5") {
        conta.value = conta.value + "5";
    }
})
let btn6 = document.getElementById("number6").addEventListener("click", function() {
    conta.value = conta.value + "6";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "6") {
        conta.value = conta.value + "6";
    }
})
let btn7 = document.getElementById("number7").addEventListener("click", function() {
    conta.value = conta.value + "7";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "7") {
        conta.value = conta.value + "7";
    }
})
let btn8 = document.getElementById("number8").addEventListener("click", function() {
    conta.value = conta.value + "8";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "8") {
        conta.value = conta.value + "8";
    }
})
let btn9 = document.getElementById("number9").addEventListener("click", function() {
    conta.value = conta.value + "9";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "9") {
        conta.value = conta.value + "9";
    }
})
let btnMais = document.getElementById("Adicao").addEventListener("click", function() {
    conta.value = conta.value + "+";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "+") {
        conta.value = conta.value + "+";
    }
})
let btnMenos = document.getElementById("subtrair").addEventListener("click", function() {
    conta.value = conta.value + "-";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "-") {
        conta.value = conta.value + "-";
    }
})
let btnMulti = document.getElementById("multiplicar").addEventListener("click", function() {
    conta.value = conta.value + "*";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "*") {
        conta.value = conta.value + "*";
    }
})
let btnDivi = document.getElementById("dividir").addEventListener("click", function() {
    conta.value = conta.value + "/";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "/") {
        conta.value = conta.value + "/"
    }
})
let btnponto = document.getElementById("ponto").addEventListener("click", function() {
    conta.value = conta.value + ".";
});

document.addEventListener("keypress", (e) => {
    if (e.key == ".") {
        conta.value = conta.value + "."
    }
});
let ac = document.getElementById("apagartudo").addEventListener("click", function() {
    conta.value ="";
});

document.addEventListener("keypress", (e) => {
    if (e.key == "Delete") {
        conta.value = "";
    }
});

