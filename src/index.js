// function check(str, bracketsConfig) {
module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsList = {};
  for (let bracketSet of bracketsConfig) {
    openBrackets.push(bracketSet[0]);
    bracketsList[bracketSet[1]] = bracketSet[0];
  }
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];

      if (bracketsList[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
