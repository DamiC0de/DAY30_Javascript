// Définition de la fonction factorielle
function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
      return 1;
    } else {
      return nombre * factorielle(nombre - 1);
    }
  }
  
  // Demande le nombre à l'utilisateur
  let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
  
  // Convertit la valeur en nombre entier
  nombre = parseInt(nombre);
  
  // Calcule la factorielle du nombre
  let resultat = factorielle(nombre);
  
  // Affiche le résultat dans la console
  console.log("Le résultat est : " + resultat);
  