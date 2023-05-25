// Fonction pour vérifier si une phrase est une question
const estUneQuestion = (phrase) => {
    return phrase.endsWith("?");
  };
  
  // Fonction pour vérifier si une phrase est entièrement en majuscules
  const estEnMajuscules = (phrase) => {
    return phrase === phrase.toUpperCase();
  };
  
  // Fonction pour traiter la conversation avec le bot
  const traiterConversation = (phrase) => {
    if (phrase === "") {
      return "t'es en PLS ?";
    } else if (estEnMajuscules(phrase)) {
      return "Pwa, calme-toi...";
    } else if (phrase.toLowerCase().includes("fortnite")) {
      return "on s'fait une partie soum-soum ?";
    } else if (estUneQuestion(phrase)) {
      return "Ouais Ouais...";
    } else {
      return "balek.";
    }
  };
  
  // Demande à l'utilisateur de saisir une phrase
  let phrase = prompt("Parle au bot adolescent :");
  
  // Traite la conversation avec le bot
  let reponse = traiterConversation(phrase);
  
  // Affiche la réponse du bot dans la console
  console.log(reponse);
  