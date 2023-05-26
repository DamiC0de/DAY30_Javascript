// Fonction pour vérifier si une phrase est une question
let estUneQuestion = (phrase) => {
    return phrase.endsWith("?");
  };
  
  // Fonction pour vérifier si une phrase est entièrement en majuscules
  let estEnMajuscules = (phrase) => {
    return phrase === phrase.toUpperCase();
  };
  
  // Fonction pour traiter la conversation avec le bot
  let traiterConversation = (phrase) => {
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

  
  let phrase = prompt("Parle au bot adolescent :");
  

  let reponse = traiterConversation(phrase);
  

  console.log(reponse);
  