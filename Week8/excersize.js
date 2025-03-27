console.log("Hello");

function showOutput(){
    let number = document.querySelector('#first-number').value;
    document.querySelector('#output').textContent = "The first number is " +name;

}

document.querySelector('#btn').addEventListener('click', showOutput);