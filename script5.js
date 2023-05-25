const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps, perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  // Est-ce que tous les livres ont été au moins empruntés une fois ?
  let tousEmpruntes = books.every(function(book) {
    return book.rented > 0;
  });
  
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
  console.log(tousEmpruntes ? "Oui, tous les livres ont été empruntés au moins une fois." : "Non, tous les livres n'ont pas été empruntés au moins une fois.");
  
  // Livre le plus emprunté
  let livrePlusEmprunte = books.reduce(function(prev, current) {
    return (prev.rented > current.rented) ? prev : current;
  });
  
  console.log("Livre le plus emprunté :");
  console.log(livrePlusEmprunte);
  
  // Livre le moins emprunté
  let livreMoinsEmprunte = books.reduce(function(prev, current) {
    return (prev.rented < current.rented) ? prev : current;
  });
  
  console.log("Livre le moins emprunté :");
  console.log(livreMoinsEmprunte);
  
  // Trouver le livre avec l'ID: 873495
  let livreByID = books.find(function(book) {
    return book.id === 873495;
  });
  
  console.log("Livre avec l'ID 873495 :");
  console.log(livreByID);
  
  // Supprimer le livre avec l'ID: 133712
  let indexLivreASupprimer = books.findIndex(function(book) {
    return book.id === 133712;
  });
  
  if (indexLivreASupprimer !== -1) {
    books.splice(indexLivreASupprimer, 1);
    console.log("Le livre avec l'ID 133712 a été supprimé.");
  } else {
    console.log("Aucun livre trouvé avec l'ID 133712.");
  }
  
  // Trier les livres par ordre alphabétique
books.sort(function(a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  
  console.log("Livres triés par ordre alphabétique :");
  console.log(books);
  