const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];



console.log("Entrepreneurs nés dans les années 70 :");
let entrepreneursAnnees70 = entrepreneurs.filter(function(entrepreneur) {
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
});
console.log(entrepreneursAnnees70);



console.log("Noms complets des entrepreneurs :");
entrepreneurs.forEach(function(entrepreneur) {
  let fullName = entrepreneur.first + " " + entrepreneur.last;
  console.log(fullName);
});



let anneeActuelle = 2023;

// Calcul de l'âge de chaque inventeur
console.log("Âge actuel des inventeurs :");
entrepreneurs.forEach(function(entrepreneur) {
  let age = anneeActuelle - entrepreneur.year;
  console.log(entrepreneur.first + " " + entrepreneur.last + " : " + age + " ans");
});




console.log("Entrepreneurs triés par nom de famille :");
let entrepreneursTries = entrepreneurs.sort(function(a, b) {
  let lastNameA = a.last.toUpperCase();
  let lastNameB = b.last.toUpperCase();
  if (lastNameA < lastNameB) {
    return -1;
  }
  if (lastNameA > lastNameB) {
    return 1;
  }
  return 0;
});
console.log(entrepreneursTries);

