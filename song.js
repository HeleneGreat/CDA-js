let btn = document.getElementById('btn-song');

// When the button is clicked, the two line of the song are displayed
btn.addEventListener('click', function(){
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let nb = document.getElementById("quantity").value;

    // If the number entered is positif
    if(nb > 0){
        partOne.innerText = songPartOne(nb);
        partTwo.innerText = songPartTwo(nb - 1);
    // If the number if zero, the song is different
    }else if(nb == 0){
        partOne.innerText = "Plus de bolées de cidre sur le mur, plus de bolées sans alcool.";
        partTwo.innerText = "Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur.";
    // In case no number is entered
    }else{
        partOne.innerText = "Si tu ne renseigne pas de quantité, je ne peux pas chanter !"; 
        partTwo.innerText = "";
    }
  
});

// First line of the song
function songPartOne(nb){
    let accord = plural(nb);
    if(nb == 0){
        nb = "plus de";
    }
    return nb + " bolée" + accord + " de cidre sur le mur, " + nb + " bolée" + accord + " sans alcool.";
    
}

// Second line of the song
function songPartTwo(newNb){
    let accord = plural(newNb);
    if(newNb == 0){
        newNb = "Plus de";
    }
    return "Bois en un et au suivant ! " + newNb + " bolée" + accord + " de cidre sur le mur.";

}

// Decides whether the word "bolée" is plural or singular
function plural(number){
    let accord = "";
    if(number > 1 || number == 0){
        accord = "s";
    }
    return accord;
}
