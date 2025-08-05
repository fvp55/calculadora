let display = document.getElementById('display');

function agregar(valor) {
    display.value += valor;
}

function calcular() {
    let entrada = display.value.split('+');
    let suma = 0;
    let cantidad = 0;
    let errores = [];

    entrada.forEach((num, idx) => {
        num = num.trim();
        if (num === '') return;
        if (!/^\d+$/.test(num)) {
            errores.push(`Valor inválido en posición ${idx + 1}: "${num}"`);
            return;
        }
        let n = parseInt(num, 10);
        if (n < 0) {
            errores.push(`Número negativo en posición ${idx + 1}: "${num}"`);
            return;
        }
        suma += n;
        cantidad++;
    });

    let resultado = '';
    if (cantidad > 0) {
        let promedio = (suma / cantidad).toFixed(2);
        resultado += `Suma total: ${suma}\nPromedio: ${promedio}`;
    } else {
        resultado += 'No se ingresaron números válidos.';
    }

    if (errores.length > 0) {
        resultado += '\n\nErrores:\n' + errores.join('\n');
    }

    display.value = resultado;
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