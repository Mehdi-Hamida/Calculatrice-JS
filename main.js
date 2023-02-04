alert('La calculatrice essaye de communiquer avec vous... Ouvrez la console pour savoir ce qu\'elle vous dit');

// Variable pour stocker les résultats pour faire des calculs 'En chaîne'
let total = 0;

// Addition
function addition(x)
{
    total += x;
    return total;
}

// Soustraction
function soustraction(x)
{
    total -= x;
    return total;
}

// Division
function division(x)
{
    if (total === 0)
    {
        return (total = x);
    }
    else
    {
        total /= x;
        return total;
    }
}

// Multiplication
function multiplication(x)
{
    if (total === 0) /* Pour éviter de multiplier AUTOMATIQUEMENT par 0 vu que total = 0 de base */
    {
        return (total = x); /* total prend la valeur du paramètre passé */
    }
    else 
    {
        total *= x;
        return total;
    }
}

// Afficher le résultat
function resultat()
{
    console.log(total);
}

// Afficher le résultat
function reset()
{
    total = 0;
    console.log(total);
}