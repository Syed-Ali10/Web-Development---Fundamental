console.log("Hello");


function showGreetingsMessage(){
    let name = window.prompt("What is your name?");
    window.alert("Hello" +name);
}

showGreetingsMessage();

// Show gretting mesage();

document.querySelector("#btn").addEventListener("click",showGreetingsMessage)