var operationButtons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operationCode === '+') {
        var summ = number1 + number2;
    } else if (operationCode === '-') {
        var summ = number1 - number2;
    } else if (operationCode === '*') {
        var summ = number1 * number2;
    } else if (operationCode === '/') {
        var summ = number1 / number2;
    }
    window.alert(summ);
}

function onButtonPlusClick() {
    makeOperation('+')
}
function onButtonMinusClick() {
    makeOperation('-')
}
function onButtonMultiplayClick() {
    makeOperation('*')
}
function onButtonDivideClick() {
    makeOperation('/')
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}
function addCommonEventListener(i) {

}

addCommonEventListener(0);
addCommonEventListener(1);
addCommonEventListener(2);
addCommonEventListener(3);

for (let i = 0; i < operationButtons.length; i++) {

    var button = operationButtons[i]
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}


