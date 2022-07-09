const audio = new Audio(); // Crée la constante audio
audio.src = "./sound/Mechanical-Keyboard.mp3"; // Lui assigne le son

const buttons = document.querySelectorAll(".btn"); // Rassemble TOUS mes boutons dans une constante "buttons"
const result = document.getElementById("result"); // Récupère ma balise #result et lui assigne une constante

buttons.forEach((button) => {
    button.addEventListener("click", (e) => { // Si j'ai bien compris, "e" récupère le bouton sur lequel j'appuie et les infos qui lui sont liées
        result.textContent += e.target.id; /* Ecrit dans la balise résultat l'id de la touche appuyée et les concatène (+=) pour ne pas que la valeur suivant n'écrase la précédente */
        audio.play(); /* Joue le son des touches sur chaque bouton */
    });
});

equal.addEventListener('click', () => { // On écrit directement equal car en JS les checkbox et les buttons n'ont pas besoin d'être déclarés s'ils ont un id, donc on l'appelle direct par son id : "equal"
    result.textContent = eval(result.textContent); // La méthode éval permet de dire à JS de calculer ce qu'il y à dans la chaîne de caractères
    audio.play(); // Obligé de le rajouter ici car j'ai du enlever la classe du bouton égal sinon la fonction du haut récupérait son texte et l'affichait à l'écran
    if (result.textContent == 42)
    {
        document.getElementById("surprise").style.display = "flex";
        document.getElementById("surprise").style.zIndex = "9999";
        document.querySelector("body").style.background = '#000';
        document.getElementById("calculator-body").style.display = "none";
        document.getElementById("crayons").style.display = "none";
        document.getElementById("cafe").style.display = "none";
        document.documentElement.style.setProperty('--display', "none") // J'ai créé une variable --display qui contient "block" par défaut et quand on rentre le code, la valeur se change en "none"
    }
    else
    {
        console.log("Quel est le sens de la vie ?");
    }
});

reset_button.addEventListener ('click', () => {
    result.textContent = ""; // A l'appui sur reset, assigne une string vide
    audio.play(); // Obligé de le rajouter ici aussi
});

/* La raison pour laquelle addEventListener a été utilisé par rapport à onclick, c'est que on ne peut attribuer qu'une fonction onclick par élémént, alors qu'ici je peux mettre des addEventListener avec des comportements différents sur le même élément, et ils seront tous exécutés */