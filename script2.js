
function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
      return 1;
    } else {
      return nombre * factorielle(nombre - 1);
    }
  }
  

  let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
  

  nombre = parseInt(nombre);

  let resultat = factorielle(nombre);

  console.log("Le résultat est : " + resultat);
  