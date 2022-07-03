let btn = document.getElementById('btn-song');

// When the button is clicked, the two line of the song are displayed
btn.addEventListener('click', function(){
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let nb = document.getElementById("quantity").value;
    let quotes = document.querySelectorAll('.quote');

    // In case no number is entered
    if(nb === ""){
        partOne.innerText = "Si tu ne renseigne pas de quantité, je ne peux pas chanter !";
        partTwo.innerText = "";
        quotes.forEach(quote => {quote.classList.add('display-none')});
    // If the number entered is between 1 and 99 included
    }else if(nb > 0 && nb <= 99){
        partOne.innerText = songPartOne(nb);
        partTwo.innerText = songPartTwo(nb - 1);
        quotes.forEach(quote => {quote.classList.remove('display-none')});
        // If the number if zero, the song is different
    }else if(nb == 0){
        partOne.innerText = "Plus de bolées de cidre sur le mur, plus de bolées sans alcool.";
        partTwo.innerText = "Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur.";
        quotes.forEach(quote => {quote.classList.remove('display-none')});
        // If the number is not within 0 and 99
    }else if(nb < 0 || nb > 99){
        partOne.innerText = "La quantité doit être comprise entre 0 et 99.";
        partTwo.innerText = "";
        quotes.forEach(quote => {quote.classList.add('display-none')});
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
