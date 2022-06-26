const operationButtons = document.getElementsByClassName('operationButton');

function generalInputOne() {
    return input1 = document.getElementById('number1');
}

function generalInputTwo() {
    return input2 = document.getElementById('number2');
}

function getNumber1() {
    return Number(input1.value);
}

function getNumber2() {
    return Number(input2.value);
}

function makeOperation(operationCode) {

    if(operationCode === '+') {
        let result = getNumber1(generalInputOne()) + getNumber2(generalInputTwo());
        window.alert(result);
    } else if(operationCode === '-') {
        let result = getNumber1(generalInputOne()) - getNumber2(generalInputTwo());
        window.alert(result);
    } else if(operationCode === '*') {
        let result = getNumber1(generalInputOne()) * getNumber2(generalInputTwo());
        window.alert(result);
    } else if(operationCode === '/') {
        let result = getNumber1(generalInputOne()) / getNumber2(generalInputTwo());
        window.alert(result);
    } else {
        window.alert('operation is unknown');
    }
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for(let i = 0; i < operationButtons.length; i++) {
    let button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}