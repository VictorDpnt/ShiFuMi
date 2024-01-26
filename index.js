
let btnPierre = document.getElementById('pierre');
let btnCiseaux= document.getElementById('ciseaux');
let btnPapier = document.getElementById('papier');
console.log(btnPierre);



 const playerChoice = (choice) => {
     let result = document.querySelector(".result");
     let botChoice = document.querySelector(".botChoice");
    let arrayChoice = ["pierre", "papier", "ciseaux"];
    let computerChoice = arrayChoice[Math.floor(Math.random()*3)];
    

     result.classList.remove("egality", "win", "loose" );

    if (choice === computerChoice ) {
        result.textContent = "Égalité !";
        result.classList.add("egality");
        botChoice.textContent = computerChoice.toLocaleUpperCase();

    }
    else if (
        (choice === 'pierre' && computerChoice === 'ciseaux') ||
        (choice === 'papier' && computerChoice === 'pierre') ||
        (choice === 'ciseaux' && computerChoice === 'papier') ) {
            result.textContent = "Bravo tu as gagné !!";
            result.classList.add("win");
            botChoice.textContent = computerChoice.toLocaleUpperCase();

        }
    else{
        result.textContent = "Dommage tu as perdu !!";
        result.classList.add("loose");
        botChoice.textContent = computerChoice.toLocaleUpperCase();
    }

    
 };
