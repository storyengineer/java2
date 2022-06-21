
function calculate() {
    var input1, input2, operation, answer;

    input1 = parseInt(prompt("Enter a number: "));
    if (isNaN(input1)) {
        alert('Enter a number Genius!')
    }
    input2 = parseInt(prompt("Enter a second number: "));
    if (isNaN(input2)) {
        alert('Enter a number Genius!')
    }
    operation = prompt(" + - / *\n Enter an operation: ");
    if (operation == "+") {
        answer = input1 + input2;
        alert(answer)
    }
        else if (operation == "-") {
        answer = input1 - input2;
        alert(answer)
    }
        else if (operation == "/") {
        answer = input1 / input2;
        alert(answer)
    }
        else if (operation == "*") {
        answer = input1 * input2;
        alert(answer)
    }
}

calculate()