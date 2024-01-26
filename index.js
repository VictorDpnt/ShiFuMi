let arrayBot = ["pierre", "papier", "ciseaux"];
let choixDefinitif = document.querySelector(".choixDefinitif");
const btnPierre = document.querySelector(".pierre");
const btnPapier = document.querySelector(".papier");
const btnCiseaux = document.querySelector(".ciseaux");
const pierre = "pierre";
const papier = "papier";
const ciseaux = "ciseaux";
const win = document.querySelector(".win");
const loose = document.querySelector(".loose");
const egality = document.querySelector(".egality");




    const playerChoice = () => {

        let bot = "";
        let player = "";

        btnPierre.addEventListener('click', () => {
            player = pierre ;
            btnPierre.classList.toggle("clicked")  
            bot = arrayBot[Math.floor(Math.random()*3)]
            choixDefinitif.innerHTML= bot 
            if (bot === player) {
                egality.style.display="flex";
                rejouer.style.display="block";
            }
            else if (
                (player === pierre && bot === ciseaux) ||
                (player === papier && bot === pierre) ||
                (player === ciseaux && bot === papier)
            ){
                win.style.display="flex";
                rejouer.style.display="block";
            } else {
                loose.style.display="flex";
                rejouer.style.display="block";
            } 
            console.log(player);
        });
        
        btnPapier.addEventListener('click', () => {
            player = papier;  
            btnPapier.classList.toggle("clicked") 
            bot = arrayBot[Math.floor(Math.random()*3)]
            choixDefinitif.innerHTML= bot   
            if (bot === player) {
                egality.style.display="flex";
                rejouer.style.display="block";
            }
            else if (
                (player === pierre && bot === ciseaux) ||
                (player === papier && bot === pierre) ||
                (player === ciseaux && bot === papier)
            ){
                win.style.display="flex";
                rejouer.style.display="block";
            } else {
                loose.style.display="flex";
                rejouer.style.display="block";
            }
            console.log(player);
        });
        
        btnCiseaux.addEventListener('click', () => {
            player = ciseaux ;  
            btnCiseaux.classList.toggle("clicked") 
            bot = arrayBot[Math.floor(Math.random()*3)]
            choixDefinitif.innerHTML= bot  
            if (bot === player) {
                egality.style.display="flex";
                rejouer.style.display="block";
            }
            else if (
                (player === pierre && bot === ciseaux) ||
                (player === papier && bot === pierre) ||
                (player === ciseaux && bot === papier)
            ){
                win.style.display="flex";
                rejouer.style.display="block";
            } else {
                loose.style.display="flex";
                rejouer.style.display="block";
            } 
            console.log(player);
        });

        

    }
    playerChoice();

   









 
