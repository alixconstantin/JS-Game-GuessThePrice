
let input      = document.querySelector('#prix'); // Selectionne l'input de l'utilisateur
let error      = document.querySelector('small'); // Selectionne le message d'erreur
let formulaire = document.querySelector('#formulaire'); // Selectionne le formulaire



error.style.display = 'none'; // Le message d'erreur est par défaut caché 


let nombreAleatoire = Math.floor(Math.random() * 1001); // Genere un nombre entier compris entre 0 a 1000
let coups = 0; // Initialise le nombre de coups a 0
let nombreChoisi; // Initialise l'input


// Sécurité pour que l'utilisateur rentre bien des chiffres avec une UX dynamique
input.addEventListener('keyup', () => { // Evenement pour chaques entrée ( dynamiquement ) de l'utilisateur dans l'input

    if (isNaN(input.value)){            // si la valeur n'est pas un nombre
        error.style.display = 'inline'; // affiche le message d'erreur dynamiquement
    }

    else {
        error.style.display = 'none'; // sinon le message est dynamiquement retiré 

    }

});


// Quand l'utilisateur envoie le formulaire
formulaire.addEventListener('submit', (e) => {

    // annule l'evènement par défaut ( qui est d'envoyer les données du formulaire sur une autre page)
    e.preventDefault(); 

    // si la valeur n'est pas un nombre OU vide
    if (isNaN(input.value) || input.value == ''){

        //Alors le cadre input est entourée en rouge 
        input.style.borderColor = "red";
    }
    else {
        coups++; // sinon coups + 1
        input.style.borderColor = 'silver'; // bordure grise pour dire que tout va bien
        nombreChoisi = input.value;     // la valeur de l'input est stocker dans une variable
        input.value = '';               // la valeur de l'input est toujours existante ( dans la variable ) mais effacer visiuellement
        verifier(nombreChoisi);         // fonction pour vérifier si la valeur de l'input est inférieur, supérieur ou égale au nombre générer Aléatoirement
                                        // en appliquant des styles et contenues correspondants aux résultats
       
    }

});

// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {

    let instruction = document.createElement('div'); // créer un élément Div pour chaques input


    // Pour chaques conditions :  message avec l'instruction correspondantes au resultat, avec le nombre de coups actuels
    // et la valeur de l'input, ainsi que les styles correspondants a chaques instructions ( >, < ou = )
    // avec ajout dans le DOM 
    if ( nombre < nombreAleatoire ){                

        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus ! "; 
        instruction.className ='instruction plus';



    }
    else if ( nombre > nombreAleatoire ){

        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins ! ";
        instruction.className ='instruction moins';

    }
    else {

        instruction.textContent = "#" + coups + " ( " + nombre + " ) Félicitation, vous avez trouvé le juste prix ! ";
        instruction.className ='instruction fini';
        input.disabled = true;


    }

    document.querySelector('#instructions').prepend(instruction);
}

