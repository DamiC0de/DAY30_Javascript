// Demande le nombre d'étages à l'utilisateur
let nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertit la valeur en nombre entier
nombreEtages = parseInt(nombreEtages);

// Boucle pour construire la pyramide
for (let i = 1; i <= nombreEtages; i++) {
  let ligne = "";

  // Ajoute les espaces pour aligner la pyramide
  for (let j = 1; j <= nombreEtages - i; j++) {
    ligne += " ";
  }

  // Ajoute les caractères de la pyramide
  for (let k = 1; k <= i; k++) {
    ligne += "#";
  }

  // Affiche la ligne de la pyramide
  console.log(ligne);
}
