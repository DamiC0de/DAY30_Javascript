// Fonction pour traduire un codon en acide aminé
function traduireCodon(codon) {
    switch (codon) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        return "Sérine";
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        return "Proline";
      case "UUA":
      case "UUG":
        return "Leucine";
      case "UUU":
      case "UUC":
        return "Phénylalanine";
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        return "Arginine";
      case "UAU":
      case "UAC":
        return "Tyrosine";
      default:
        return "Acide aminé inconnu";
    }
  }
  
  // Fonction pour traduire un ARN en une suite d'acides aminés
  function traduireARN(arn) {
    let acidesAmines = [];
  
    // Découper l'ARN en codons (groupes de 3 lettres)
    for (let i = 0; i < arn.length; i += 3) {
      let codon = arn.substr(i, 3);
      let acideAmine = traduireCodon(codon);
      acidesAmines.push(acideAmine);
    }
  
    return acidesAmines.join("-");
  }
  
  // ARN à traduire
  let arn1 = "UUACGCAGUAGA";
  let arn2 = "CCGUCGUUGCGCUACAGC";
  let arn3 = "CCUCGCCGGUACUUCUCG";
  
  // Traduire l'ARN en une suite d'acides aminés
  let proteine1 = traduireARN(arn1);
  let proteine2 = traduireARN(arn2);
  let proteine3 = traduireARN(arn3);
  
  // Afficher les résultats dans la console
  console.log("ARN 1 : " + proteine1);
  console.log("ARN 2 : " + proteine2);
  console.log("ARN 3 : " + proteine3);
  