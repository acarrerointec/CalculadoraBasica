function calculate(operation) {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    let result;

    if (isNaN(operand1) || isNaN(operand2)) {
        result = 'Por favor ingrese números válidos';
    } else {
        switch (operation) {
            case 'sum':
                result = operand1 + operand2;
                break;
            case 'subtract':
                result = operand1 - operand2;
                break;
            case 'multiply':
                result = operand1 * operand2;
                break;
            case 'divide':
                result = operand2 !== 0 ? operand1 / operand2 : 'No se puede dividir por 0';
                break;
            default:
                result = 'Operación no válida';
        }
    }

    document.getElementById('result').textContent = result;
}

function clearResult() {
    document.getElementById('operand1').value = '';
    document.getElementById('operand2').value = '';
    document.getElementById('result').textContent = '0';
}
