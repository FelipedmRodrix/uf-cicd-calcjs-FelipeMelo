function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

// Função de divisão
function divide(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }
  return a / b;
}

module.exports = { add, subtract, divide };
