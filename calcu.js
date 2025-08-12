let display = document.getElementById('display');

function agregar(valor) {
    display.value += valor;
}

function calcular() {
    try {
        // Solo permitir números, punto decimal y operadores básicos
        let expresion = display.value;
        if (!/^[0-9+\-*/.÷×\s]+$/.test(expresion)) {
            display.value = 'Error: caracteres inválidos';
            return;
        }

        // Reemplazar símbolos visuales por operadores reales
        expresion = expresion.replace(/×/g, '*').replace(/÷/g, '/');

        // Evaluar la operación
        let resultado = Function('"use strict";return (' + expresion + ')')();
        
        // Mostrar resultado
        display.value = resultado;
    } catch (error) {
        display.value = 'Error en la operación';
    }
}


function borrar() {
    display.value = '';
}
document.addEventListener('keydown', function(event) {
    // Si la tecla es un número
    if (event.key >= '0' && event.key <= '9') {
        agregar(event.key);
    }
    // Si la tecla es '+'
    if (event.key === '+') {
        agregar('+');
    }
    // Si la tecla es 'Enter'
    if (event.key === 'Enter') {
        calcular();
    }
    // Si la tecla es 'Backspace'
    if (event.key === 'Backspace') {
        borrar();
    }
});