 

# Bases de JavaScript

Cheat Sheet de JavaScript

## 1. Introduction

Après plus d'un mois à coder en Ruby, à penser en Ruby, voire pour les plus impliqués, à rêver en Ruby, on va vous donner un petit mal de crâne (un de plus !) en vous demandant de changer complètement vos habitudes. Il est l'heure de passer au JavaScript ! Et oui, c'est comme si, après avoir bouffé des cours d'allemand pendant 6 semaines, on repartait à zéro mais sur de l'espagnol cette fois-ci… dur dur.

Alors oui, ça va un peu piquer parce que c'est nouveau pour toi. Mais maîtriser un second langage en programmation, c'est un vrai plus. Pour deux raisons :

1.  Déjà parce que JavaScript (JS pour les intimes) est un langage indispensable sur le web. C'est lui qui permet de rendre interactives les pages web. C'est donc un incontournable du front.
2.  Mais de façon générale, il faut t'habituer non plus à "penser Ruby" mais à prendre un peu plus de hauteur et "penser programmation". La maîtrise de 2 langages va te permettre de comprendre la logique commune à tout bout de code.

Tu verras que si la forme est très différente entre Ruby et JS (et c'est probablement ce qui va te dérouter le plus aujourd'hui), le fond est similaire sur de nombreux points : on va déclarer des variables, écrire des fonctions, faire des boucles, mettre en place des if-else, etc. Les deux langages sont orientés objets en plus donc tu pourras continuer à pratiquer la POO !

Accroche ta ceinture, c'est parti.

## 2. Historique et contexte

JavaScript a été créé en mai 1995 par un certain Brendan Eich alors qu'il bossait pour le compte de Netscape Communications Corporation. Les plus vieux d'entre vous connaissent Netscape Navigator qui fut, au début d'Internet, l'un des navigateurs web les plus utilisés. Les bases de JS ont été posées en dix jours, mais il ne sera implémenté dans Navigator que deux ans plus tard.

Le grand public confond très souvent le Java et JavaScript qui sont pourtant des langages très très différents. Le nom de JavaScript a été choisi car la syntaxe était, à l'origine, assez proche du Java. Aujourd'hui les deux langages n'ont juste plus rien à voir, ce qui fait dire à de nombreux développeurs : "Java is to JavaScript what apple is to pineapple".

JavaScript est un des langages les plus utilisés au monde : sa communauté est gigantesque. Son omniprésence sur le web en fait aussi l'un des plus dynamiques. Et pour que toutes les entreprises du web parlent le même JavaScript, une entité est en charge de définir les standards en JS : l'ECMA International. Chaque nouvelle spécification des standards de JavaScript est publié par l'ECMA dans le document "Standard ECMA-262", plus connu sous le nom de "ECMAScript Edition X", souvent raccourci en "ESX". La première version à avoir été adoptée largement par les Yahoo/Google/Microsoft/etc est l'ES5 (livrée en 2009). A présent, c'est l'ES6 (parfois appelé ES2015, en raison de son année de sortie) qui s'impose sur l'ensemble des navigateurs.

À noter qu'à présent, l'ECMA publie de nouvelles versions chaque année afin d'apporter les modifications de façon plus progressive : la dernière porte le nom d'ES9 et date de juin 2018. Par contre ces versions ne sont pas forcément implémentées immédiatement par tous les navigateurs : l'ES6 reste pour le moment la référence.

## 3. La ressource

Tu connais déjà un peu le JS car tu as fait la semaine 0. Mais c'est loin… On va se remettre dans le bain en douceur !

Cette ressource va te rappeler les bases de l'écriture de code en JS. Ça va aussi être l'occasion pour toi de réaliser à quel point Ruby est un langage souple ! 😄

### 3.1. Bosser sur un fichier .js

Avant de revoir les principes de base en JS, revoyons comment exécuter un fichier `.js`. Comme nous travaillons dans le monde du web, on va passer par ton navigateur web pour exécuter le code en JavaScript. Ça nécessite de créer un fichier HTML qui fait appel au code JS. On a deux options pour ça :

1.  Rajouter au fichier HTML une section `<script> //ton code JavaScript </script>`. Le code contenu entre les deux balises `script` sera exécuté comme étant du JS. Cette solution n'est pas idéale car tu mélanges, dans un même ficher, JS et HTML.
2.  La solution la plus propre et la plus répandue est de faire appel à un fichier JS externe (tout comme on fait généralement appel à un fichier CSS externe plutôt que de mettre le CSS directement dans le fichier HTML). Pour faire ça, il suffit d'ajouter au fichier HTML la ligne `<script src="chemin_du_fichier/fichier.js"></script>`.

Voici un petit pas à pas pour mettre cela en place :

-   Crée un dossier `tests_JS`.
-   Crée dedans un fichier `test_js.html`. C'est ce fichier qui sera lu par ton navigateur et fera appel au JavaScript que tu vas coder. Du coup remplis-le avec la structure de base d'un fichier HTML. Par exemple : ```html <!doctype html>

Fichier de test JS  

On va tester notre JavaScript!  

````

- Crée un fichier Javascript `script.js` dans le même dossier : il contiendra le code que tu vas exécuter.
- Maintenant il faut que ton fichier JS soit appelé par le fichier HTML (c'est un fichier externe). Rajoute la ligne `<script src="script.js"></script>` en bas de ton fichier HTML, juste avant la balise de fin `</html>`.

### 3.2\. La console des navigateurs

Tous les navigateurs ont une console permettant d’interagir avec le contenu JS d'une page web. Pour y accéder, ouvre ton fichier `test_js.html` dans ton navigateur puis fais :

- Sous Linux : `F12` puis onglet "console"
- Sous Mac : `ALT` + `CMD` + `I`

Pour le moment, ton fichier JS est vide donc si tu ouvres `test_js.html`, la console sera vide. On va utiliser la fonction JavaScript `console.log()` qui permet d'afficher du contenu dans la console du navigateur : une sorte d'équivalent de notre `puts` qui imprimait le Ruby dans le terminal ! Du coup rajoute à `script.js` le contenu suivant :
```js
console.log("coucou depuis la console");
````

Maintenant, si tu rafraîchis la page `test_js.html`, tu vas voir un petit "coucou depuis la console" s'afficher... dans la console.

**Allez, c'est bon, on est prêts à bosser en JS : tu vas éditer le contenu de `script.js` avec les quelques exemples que je te donne ci-dessous puis rafraîchir ton navigateur (ce qui recharge le fichier HTML et donc relance ton fichier JS) pour voir le résultat en console.**

---

**🚀 ALERTE BONNE ASTUCE**

La principale utilité de la console (pour un développeur sachant utiliser JS) est le débug de son code. En effet, en cas d'erreur dans ton code, tu auras un gros message rouge avec une mention du genre "`script.js:3`". C'est court mais ultra puissant car tu sais alors que ton erreur a eu lieu dans le fichier `script.js` mais surtout **à la ligne numéro 3** ! Il ne te reste plus qu'à aller jeter un œil à cette ligne et comprendre ce qu'il se passe.

Par ailleurs, la console du navigateur marche un peu comme la console de Rails ou comme IRB : **tu peux cliquer dessus et saisir des lignes de code qui seront exécutées à la volée par le navigateur**. Ultra pratique pour connaître la valeur d'une variable de ton code (saisie son nom dans la console) ou tester une fonction (idem).

Les consoles de Firefox mais surtout Chrome sont indispensables pour tout développeur front qui se respecte.

---

### 3.3. Quelques infos de base sur JS

Voici, un peu pèle-mêle, des informations à savoir sur la syntaxe de JS (quand on connaît déjà Ruby) :

---

**🚀 ALERTE BONNE ASTUCE**

Cette ressource est une sorte de cheatsheet géante où je vais te rappeler les éléments de base de JS. **Je te conseille fortement de tester chaque point que je te présente ci-dessous !** Si tu te contentes de lire, tu imprimeras moins bien ces notions dans ton esprit. Du coup, à chaque point de la cheatsheet :

-   Ecris quelques lignes de code liées à la notion que je te présente dans ton fichier JS ;
-   Mets des `console.log(xxx)` pour afficher le contenu de la variable ou le résultat d'une fonction `xxx` et bien comprendre ce qu'on fait les lignes que tu as écrit.

Et du coup, rappelle-toi qu'en passant de Ruby à JS, on passe de "dans le doute, mets des `puts`" à "si t'as des bogues, mets des `console.log()`" 🤓

---

-   Chaque instruction en JS se termine par un point-virgule. Ce n'est pas toujours indispensable, notamment si tu sautes des lignes entre chaque instruction. Mais autant ne pas prendre de risque quand on débute : mets systématiquement des `;`.
-   JS n'est pas sensible aux espaces donc n'hésite pas à indenter ton code, comme tu l'as fait en Ruby.
-   Les commentaires s'écrivent avec `// sur une ligne` ou `/* sur plusieurs lignes */` ainsi :
    
    ```js
    //commentaire sur une ligne
    console.log("Ceci n'est pas un commentaire")
    /* commentaire écrit sur 
    plusieurs lignes*/
    ```
    
-   Les variables sont en général écrites en camelCase et en anglais : `myVariable`, `numberOfPeople` ou `player1Score`. La convention ici est moins forte qu'en Ruby : la seule règle stricte est qu'une variable ne doit pas commencer par un chiffre.
    
-   Tout comme en Ruby, les variables peuvent être de plusieurs types : `string`, `number`, `boolean`… Le type d'une variable `myVariable`peut être identifié avec `typeof myVariable;`
    
-   Les opérateurs arithmétiques sont les mêmes qu'en Ruby : `+`, `-`, `*`, `/` et le modulo `%`.
    

### 3.4. Les variables

En JS, une variable se déclare ainsi : `let myVariable;`. On peut en définir le contenu dans la foulée : `let myVariable = 5` ou `let myVariable = "pirate"`. Teste une déclaration de variable puis affiche `console.log(myVariable);` et `console.log(typeof myVariable);`

**Petite aparté sur la portée**. Depuis ES6, la norme en JS est de déclarer les variables en `let` et non plus en `var`. La différence est la **portée de la variable** (= son scope). Une variable en `let` n'existe qu'au sein de son **bloc de code** alors qu'une variable en `var` persiste au-delà. Un bloc de code, en JS, est défini par des accolades `{ xxx }` (par exemple, une fonction JS sera délimitée par des accolades). Pour comprendre, teste donc le code ci-dessous :

```js
let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal
```

En résumé, voici ce qu'il se passe dans ce code :

-   **la variable `data1` est en `let` et déclarée dans le bloc principal**. Elle est donc visible dans le bloc principal et tout sous-bloc. On peut aussi la modifier dans un sous-bloc.
-   **La variable `data2` est en `var` et déclarée dans le sous-bloc**. Elle persiste donc au-delà du sous-bloc : on peut l'appeler dans le bloc principal.
-   **La variable `data3` est en `let` et déclarée dans le sous-bloc**. Elle n'est pas visible en dehors du sous-bloc : on a donc une erreur en l'appelant dans le bloc principal.

---

**🤓 QUESTION RÉCURRENTE**

**C'est bien gentil tout ça, mais ça m'explique pas pourquoi je dois privilégier les variables en `let` plutôt qu'en `var`. Au moins avec `var`, j'aurais moins d'erreur car la variable ne disparaît pas !**

En effet, en débutant, on trouve plus facile de tout mettre en variable globale : une `var myVariable` en JS est comme une `$myVariable` en Ruby. Pourtant, si on fait ça à outrance, les variables pourraient entrer en conflit entre 2 fonctions (si elles portent le même nom). Et sur un code de plusieurs milliers de ligne, le risque d'avoir plusieurs variables `count` ou `user` est élevé ! Sans oublier qu'on fait stocker des variables inutiles à notre ordinateur alors qu'il pourrait les supprimer au fur et à mesure : ça va pas aider à accélérer l'exécution de notre code.

Donc la bonne pratique c'est, dans le doute, de préférer les `let`.

---

On peut aussi déclarer des variables en `const` qui sont, en résumé, des `var` dont on ne peut pas modifier la valeur (si on essaye, on obtient une erreur). Pratique quand on ne veut pas modifier, même par mégarde, une variable donnée.

Quelques manipulations de bases avec les variables :

-   Tout comme en Ruby, on peut incrémenter une variable `+=`, `++` est aussi valide en JS (à la difference de ruby) . Teste :
    
    ```js
    let a = 1;
    let b = 1;
    a++
    console.log(a);
    console.log(b += 2);
    ```
    
-   Les opérateurs suivants marchent également: `*=`, `/=`, `-=` et `%=`.
    
-   On peut concaténer deux strings avec `+`. Teste :
    
    ```js
    let a = "Bonjour", b = "Monde";
    console.log(a + " " + b);
    ```
    
-   On peut convertir un `string` en `number` avec la fonction `Number("5")`. L'inverse est possible avec `String(36)`. Teste-le.
    

### 3.5. Les arrays

Le fonctionnement des arrays en JS est très proche du Ruby. En résumé (teste les lignes de code présentées ci-dessous dans ton fichier `script.js` en rajoutant des `console.log()`) :

-   Créer un array se fait de la façon suivante : `let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];`. Bien évidemment, on peut mélanger différents types de variables dans un array : `number`, `string`, `booléen`, etc.
-   On accède à un élément de l'array comme en Ruby : la numérotation commence à zéro. Ainsi, `statusDeTHP[0]` retournera `"Moussaillon"`.
-   La taille d'un array s'obtient avec `statusDeTHP.length;`
-   On peut modifier la valeur d'une entrée avec `statusDeTHP[0] = "La moussaille"`
-   On peut rajouter des entrées avec `statusDeTHP.push("Flibustier")` qui rajoute une entrée à la fin du array ou `statusDeTHP.unshift("Pirate")` qui en rajoute une au début.
-   La fonction `statusDeTHP.pop()` supprime le dernier élément tandis que `statusDeTHP.shift()` supprimera le premier. Tu peux aussi enlever plusieurs éléments avec `statusDeTHP.splice(0,2)` qui enlèvera 2 éléments à partir de l'indice 0.
-   La fonction `statusDeTHP.slice(2,4)` te retourne un array issue du array initial (une sorte de sous-array). Ses valeurs seront celles comprises entre l'index 2 (inclus) et 4 (exclus).

### 3.6. Les chaînes de caractères (string)

En plus de la concaténation de base vue plus haut (`"Bonjour" + " " + "Monde"`), on peut faire les opérations suivantes sur un string :

-   On peut effectuer des conversions implicites, par exemple en faisant `number + string` on obtient un `string`. Exemple :
    
    ```js
    let a = 3;
    console.log("Bonjour à tous les "+ a);
    console.log(a + "3");
    ```
    
-   Par contre JS n'accepte pas la syntaxe suivante `let a = "coucou" * 2`.
    
-   On peut inclure la valeur d'une variable au sein d'un string en le déclarant ainsi : `ceci est la valeur de ma variable a : ${a}`. Notez l'usage des pour identifier le string et de `${xx}` pour identifier la variable à injecter dans le string. C'est l'équivalent du Ruby `"coucou #{variable}"`. Teste cela :
    
    ```js
    let numStudent = 4;
    let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
    console.log(statement);
    ```
    
-   Comme en Ruby, une chaîne de caractères peut être considérées comme un array contenant, dans chaque case, un caractère. Ainsi avec `.length` tu obtiens sa longueur, avec `"The Hacking Project"[0]` tu obtiens la lettre "T", etc.
    
-   Tu peux aller faire une recherche au sein du string avec `.indexOf`. Ainsi `"The Hacking Project".indexOf("Hack")` te retournera l'index `4` (le mot "Hack" commence à l'index 4 du string). Si tu obtiens `-1` c'est que ça n'a pas été trouvé.
    
-   Les fonctions suivantes permettent de passer en minuscule / majuscule un string : `toLowerCase()` et `toUpperCase()`.
    
-   La fonction `split(",")` permet de découper un string en fonction d'un séparateur (la virgule ici) pour retourner un array de strings. Teste cela :
    
    ```js
    const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
    const lesson = contentOfTHP.split("-");
    console.log(lesson[0]); // "Git"
    console.log(lesson[5]); // "JS"
    ```
    
-   La fonction `join(",")` fait l'exact inverse de `split(",")` : elle produit un string en concaténant tous les éléments d'un tableau et en rajoutant, entre chaque élément, un séparateur (une virgule ici).
    

### 3.7. Les objets littéraux

Comme tu le sais, JavaScript est un langage orienté objet : la notion d'objet est donc très couramment utilisée. Toutefois, ici, nous ne te présenterons pas le fonctionnement complet de la POO en JavaScript et allons nous contenter de parler des objets littéraux. Ils te donneront un micro aperçu de la POO en JS mais sans rentrer trop dans toute sa complexité.  
  
Les objets littéraux, en JS, sont à mi-chemin entre un hash Ruby (on les définit sans créer de classe) et un objet Ruby (on peut leur définir des attributs et des fonctions).

Ci-dessous tu trouveras les principales fonctionnalités d'un objet JS : **prends bien le temps de tester l'ensemble des fonctionnalités que je te présente ici dans ton `script.js` sinon tu n'apprendras rien !**

-   On définit un objet JS de la façon suivante (exemple d'un objet comportant des infos sur la session 2 de THP) :
    
    ```js
    let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
    };
    ```
    
-   Une fois définis, on peut accéder aux attributs d'un objet en faisant `myObject.attribut`. Exemple (à partir de l'objet ci-dessus) :
    
    ```js
    console.log(THPSessionNum2.numOfMouss);
    console.log(THPSessionNum2.sessionMoto);
    ```
    
-   On peut également modifier un attribut ou même en rajouter un avec `myObject.attribut = xxxx`. Exemple (à partir de l'objet ci-dessus):
    
    ```js
    THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
    console.log(THPSessionNum2.numOfMouss);
    THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
    console.log(THPSessionNum2); //j'imprime tout l'objet pour voir
    ```
    
-   Tu peux également accéder aux attributs en utilisant la syntaxe `myObject['attribut']`. C'est très utile quand le nom de l'attribut est contenu dans une autre variable. Exemple à partir de l'objet ci-dessus :
    
    ```js
    let attributName = "successRate";
    console.log(THPSessionNum2[attributName]);
    ```
    

### 3.8. Les conditions

Tout comme en Ruby, JavaScript gère les conditions à la sauce `if`, `else` et `else if`. Pour cela, il faut connaître les opérateurs de comparaison en JS : ils sont QUASIMENT identiques à ceux en Ruby… Voyons ça en détail:

-   `>=` signifie "supérieur ou égal à". `>` signifie strictement supérieur
-   `<=` signifie "inférieur ou égal à". `<` signifie strictement inférieur
-   `!==` signifie "contenu ou type différent de". Veuillez noter qu'il y a 2 signes "égal".
-   `===` signifie "contenu ET type égal à". Veuillez noter qu'il y a 3 signes "égal".

---

**⚠️ ALERTE ERREUR COMMUNE**

En JS, il existe un opérateur `==` (**deux** signes "égal") et un opérateur `===` (**trois** signes "égal"). Ils sont très différents : `==` va comparer uniquement le **contenu** des deux variables alors que `===` va comparer le **contenu et le type**. Ainsi :

```js
console.log("36" == 36); // va retourner TRUE car le contenu est identique
console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number
```

Aussi, quand on débute, il est **fortement conseillé de se contenter d'utiliser `===`** sinon tu risques d'avoir des surprises.

De même, on a un opérateur `!=` (compare le contenu) et un `!==` (compare le contenu et le type) : utilise `!==` au maximum quand tu commences en JS.

---

Une fois les comparateurs connus, voici comment mettre en place vos conditions en if/else sur JS :

-   Un bloc `if` de base se construit ainsi :
    
    ```js
    let number = 2; //fais ensuite le test avec d'autres valeurs
    if(number > 0) {
    console.log("number est positif");
    } 
    ```
    
-   On peut rajouter des résultats alternatifs avec `else if` et `else`. Exemple :
    
    ```js
    let number = 0; //fais ensuite le test avec d'autres valeurs (positives et négatives)
    if(number > 0) {
    console.log("number est positif");
    } else if(number === 0) {
    console.log("number est nul");
    } else {
    console.log("number est négatif");
    } 
    ```
    
-   Les opérateurs logiques en JS sont les mêmes qu'en Ruby : `&&` signifie ET, `||` signifie OU et `!` signifie NON. Exemples :
    
    ```js
    if (true && true) {
    console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
    }
    if (true || false) {
    console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
    } 
    if (!false) {
    console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
    }
    ```
    
-   Quand on a plusieurs scénarios possibles, on peut utiliser la condition `switch … case`. C'est l'équivalent JavaScript du `case … when` en Ruby. À noter que l'instruction `break` permet de sortir d'un `case` et que tous les cas non décrits dans les `case` finissent dans la partie `default`. Voici la syntaxe :
    
    ```js
    weekNum = 1; //teste avec plusieurs valeurs
    switch (weekNum) {
    case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
    case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
    case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
    case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
    case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
    case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
    case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
    case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;
    ```
    

default:  
console.log("Cette entrée n'est pas reconnue");  
break;  
}

````

- Dernier point important : comme en Ruby, certaines valeurs peuvent être évaluées à FALSE dans le code. Mais en Ruby, ça n'est valable que pour la valeur `nil` alors qu'en JS, c'est le cas de la valeur `undefined`, du nombre `0` et du string vide `""`. Illustration :
```js
let number = 0; //fais aussi le test avec un chiffre non nul
if (number) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariable // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}
````

### 3.9. Les boucles

Tout comme en Ruby, on peut faire des boucles en JS. Tu ne devrais pas être trop perdu : la logique est la même.

-   On peut faire des boucles `for` basées sur la valeur d'une variable (un compteur). La syntaxe est la suivante :  
      
    `for([initialisation]; [condition]; [incrémentation]) { };`. Par exemple :
    
    ```js
    for(let count = 0; count <=5; count++){
      console.log(`on va compter jusqu'à 5 : ${count}`);
    }
    
    console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
    //passe count en var pour tester ce que ça donne
    ```
    
-   On peut également faire des boucles `while` sous la forme `while([condition]) { };` qui tourne tant que la condition est vérifiée. Exemple en utilisant la commande `prompt()` qui ouvre une fenêtre d'input dans ton navigateur :
    
    ```js
    let answer = "";
    while(answer !== "oui") {
      console.log("alors ?")
      answer = prompt("Tu kiffes THP ?");
    } 
    
    console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D
    ```
    
-   Tu peux sortir d'une boucle `while` en utilisant un `break`. Exemple :
    
    ```js
    let word = "";
    let letter;
    
    while (true) {
        letter = prompt('Tape UNE lettre stp :');
    
        if (letter) {
            word += letter; //on rajoute la lettre saisie à la suite du mot
            console.log(word);
        } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
            break; // On quitte la boucle
        }
    }
    console.log(`voilà ce que tu as tapé : ${word}`);
    ```
    
-   On peut parcourir les array et les objets en JS grâce à l'instruction `for in`. Pour un array, elle permet d'obtenir un compteur qui va prendre toutes les valeurs entre zéro et le dernier index. Pour un objet, le compteur va prendre chaque valeur des attributs, une à une. Illustration :
    
    ```js
    //On déclare d'abord un array
      let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];
    
    //On déclare ensuite un objet
    let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};
    
    console.log("**********Parcourons le array :")
    for(let index in weeksOfTHPArray) {
      console.log(index); // index va aller de 0 à 3
      console.log(weeksOfTHPArray[index]);
    }
    
    console.log("**********Parcourons l'objet :")
    for(let weekAttribut in weeksOfTHPObject) {
      console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
      console.log(weeksOfTHPObject[weekAttribut]);
    }
    ```
    
-   JavaScript dispose même d'un `.forEach()` qui ne fonctionne que sur les array. Il permet d'obtenir directement la valeur stockée à chaque index du array. Illustration en reprenant le array `weeksOfTHPArray` ci-dessus :
    
    ```js
    console.log("**********Parcourons le array en forEach :")
    weeksOfTHPArray.forEach(weekContent => {
      console.log(weekContent)
    });
    ```
    

### 3.10. Les fonctions

Évidemment, comme tout langage qui se respecte, on peut définir des fonctions en JS (l'équivalent de nos méthodes en Ruby). La syntaxe est relativement différente par contre :

-   Une fonction se définit en faisant `function nomDeMaFonction(){ //le code };`. On l'appelle ensuite en faisant un `nomDeMaFonction()`. À noter qu'en JS, contrairement au Ruby, une fonction est toujours exécutée avec des parenthèses. Illustration d'une fonction de base :
    
    ```js
    function sayHello() {
      console.log("Bonjour toi !");
    }
    
    sayHello();
    ```
    
-   Comme en Ruby, on peut définir des données en entrée de la fonction et des données à retourner avec `return`. Exemple :
    
    ```js
    function multiply(inputNumber1, inputNumber2) {
      let outputNumber = inputNumber1 * inputNumber2;
      return outputNumber;
    }
    
    console.log(multiply(2, 3));
    console.log(multiply(2, multiply(2,3)));
    console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction
    ```
    
-   JavaScript nous permet de déclarer d'autres façons nos fonctions. Par exemple par le biais de fonctions anonymes (sans nom) que l'on peut ensuite affecter à une variable en faisant `myVariable = function(entrée1, ...){ }`! C'est un mode de fonctionnement que tu n'as jamais vu en Ruby. Illustration :
    
    ```js
    const multiply = function(inputNumber1, inputNumber2) {
      let outputNumber = inputNumber1 * inputNumber2;
      return outputNumber;
    }
    
    console.log(multiply(2, 3));
    
    const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
    console.log(otherMultiply(2, 3));
    ```
    
-   Enfin, sachez que depuis les dernières mises à jour ES, on peut également déclarer les fonctions anonymes de façon plus épurée avec l'opérateur `=>`. Pour reprendre l'exemple ci-dessus, cela donnerait :
    
    ```js
    const multiply = (inputNumber1, inputNumber2) => {
      let outputNumber = inputNumber1 * inputNumber2;
      return outputNumber;
    }
    ```
    

Pour avoir une liste presque exhaustive des fonctions les plus utiles sur chaque type d'objet JS, passe par [la doc de MDN (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). Le menu à gauche sous "Built-in objects" te permet d'avoir, par type d'objet (string, array, number, etc.) un listing des fonctions et leur utilisation.

## 4. Points importants à retenir

Cette ressource est déjà une énorme cheatsheet en elle-même. Du coup on va pas vraiment pouvoir faire plus condensé dans cette section. Par contre on peut te conseiller d'avoir sous la main [cette cheatsheet JS là](https://htmlcheatsheet.com/js/). Tu devrais y trouver, en un coup d’œil, à peu près toutes les formes de syntaxe dont tu aurais besoin pour coder en JS. Aussi, on ne peut que te recommander le tutoriel de [JavaScript.info](https://javascript.info/) qui est la ressource principale de ES6.

## 5. Pour aller plus loin

Pour ceux qui veulent s'échauffer encore un peu plus en JS, voici plusieurs ressources :

-   LA ressource où aller pour se mettre à jour sur JavaScript et être au fait des dernières tendances du langage est [JavaScript.info](https://javascript.info/). De rien 🐧
-   La track [Learn JavaScript](https://www.codecademy.com/en/learn/learn-javascript) de CodeCademy reste un classique.
-   Udacity ont [une track JavaScript](https://www.udacity.com/course/javascript-basics--ud804) avec quelques travaux pratiques.
-   Pour ceux qui aiment bien le format e-book, [eloquant JavaScript](http://eloquentjavascript.net/) est une référence en la matière.
-   LA doc de [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) très bien faite

# Projets : JavaScript - Exercices basiques

-   [](https://www.thehackingproject.org/fr/dashboard/courses/1/projects/92/project_submissions/new)
 -   
 -   

# JavaScript - Exercices basiques

Quelques exercices de base afin de te mettre à JavaScript

## 1. Introduction

Dans ce projet, nous allons te faire pratiquer JavaScript pour que tu maîtrises la syntaxe de base du langage. Ce projet contiendra essentiellement des déclarations de variables, boucles et autres joyeusetés présentées dans la ressource du jour. Le but est de maitriser les bases avant de t'apprendre comment animer ton site en JS. On va commencer léger et tu auras juste à créer une page `index.html` qui appellera le fichier `script.js` contenant ton code de la journée.

## 2. Le projet

Pour ce projet, nous allons reprendre des exercices basiques de programmation que tu as déjà effectués pendant tes premières semaines chez THP. Ce sera l'occasion pour toi de voir le progrès que tu as réalisé et le chemin parcouru car ta problématique ne sera plus de résoudre le problème (tu l'as déja fait) mais de passer d'un langage à un autre.

### 2.1. Hello World

Qui dit nouveau langage dit "Hello world"

#### 2.1.1. Bonjour

Créé un script `script_1.js` qui affichera "Bonjour, monde !" dans la console. Voici les lignes que tu dois voir dans ta console :

```js
"Bonjour monde"
```

#### 2.1.2. Salut

Customise le script `script_1.js` qui te demandera ton prénom avec un prompt. Tu stockeras cette entrée dans une variable et tu afficheras : "Bonjour, prénom !" dans la console.

### 2.2. Opérations & boucles

#### 2.2.1 Calculs rapides

Créé un script `script_2.js` qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur. Petit exemple rapide : factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1

Voici ce que dois faire le script :

```shell
// Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"
```

#### 2.2.2 Pyramide de Mario

Ah la pyramide de Mario du pré-parcours. Que de bons souvenirs. Tu vas écrire un script appelé `script_3.js`

Voici ce que devra afficher la console :

```shell
"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
#####
```

### 2.3. Analyses de données

#### 2.3.1. Startup Nation

Tu es en train d'écrire un livre sur les entrepreneurs américains et tu te renseignes sur leurs dates de naissance pour voir si tu ne peux pas identifier un millésime à succès.

Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus et leurs dates de naissance.

```js
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
```

Réalise un script `script_4.js` qui affichera dans la console les questions suivantes et leur réponses :

-   Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
-   Sors une array qui contient le prénom et le nom des entrepreneurs ;
-   Quel âge aurait chaque inventeur aujourd'hui ?
-   Trie les entrepreneurs par ordre alphabétique du nom de famille.

#### 2.3.2. Bibliothécaire

C'est ton premier jour de stage au CDI du collège du coin. Tu dois aider la bibliothécaire à faire des statistiques dans la base de données de livres du collège et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.

```js
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
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
```

Réalise un script `script_5.js` qui affichera dans la console les questions suivantes et leurs réponses :

-   Est-ce que tous les livres ont été au moins empruntés une fois ?
-   Quel est livre le plus emprunté ?
-   Quel est le livre le moins emprunté ?
-   Trouve le livre avec l'ID: `873495` ;
-   Supprime le livre avec l'ID: `133712` ;
-   Trie les livres par ordre alphabétique (sans celui avec l'ID `133712` car il est supprimé).

### 2.4. Creusons-nous la tête

Si tu as finis les exercices précédents, c'est que tu as le niveau pour un peu plus de réflexion !

#### 2.4.1. Code la vie

Tu as lu le titre ? Allez, tu as 1h... ok on rigole 😁.  
  
L'un des premiers codes dont tu as entendu parler est probablement le code génétique qui permet de traduire de l'ARN (c'est une copie de notre ADN) en protéines (qui constituent notre corps). Pourquoi ne pas faire un exercice là-dessus ?

D'abord quelques explications (on va pas te faire un cours de bio complet). Pour simplifier, l'ARN (comme l'ADN) est une suite de molécules appelées nucléotides et qu'on peut représenter par 4 lettres : A - U - G - C (pour l'ADN, remplacer U par T). Donc un morceau d'ARN peut se représenter sous la forme d'une suite de lettres : "UUACGCAGUAGA".

Notre corps est ensuite capable de lire cet ARN en le découpant par groupes de 3 lettres (appelés "codons"). Dans notre exemple ça donnerait : "UUA-CGC-AGU-AGA". Ensuite chaque codon peut être transformé en un "acide aminé" qui est juste un "morceau de protéine". Mais quelle est la règle qui dit que tel codon doit être remplacé par tel acide aminé ? C'est le fameux code génétique dont voici un extrait ci-dessous :

UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine  
  
CCU ou CCC ou CCA ou CCG => Proline  
  
UUA ou UUG => Leucine  
  
UUU ou UUC => Phénylalanine  
  
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine  
  
UAU ou UAC => Tyrosine

Notre exemple d'ARN "UUA-CGC-AGU-AGA" donnerait donc la protéine suivante : "Leucine-Arginine-Sérine-Arginine"

Le code génétique complet permet de transformer les 64 codons possibles en 20 acides aminés. On va se contenter, sur cet exercice, de prendre juste les 6 acides aminés ci-dessus avec leurs codons correspondants.

Je veux que tu codes un script `script_6.js` en JS qui puisse transformer un ARN présenté sous forme de string "UUACGCAGUAGA" en une suite d'acides aminés que tu imprimeras en console : "Leucine-Arginine-Sérine-Arginine"

Afin de comparer ton travail avec les autres moussaillons, voici 2 ARN à traduire en protéines :

-   CCGUCGUUGCGCUACAGC
-   CCUCGCCGGUACUUCUCG

#### 2.4.2. Acné-Bot

Maintenant on va implémenter une sorte de chat-bot dont on entend (bizarrement) très peu parler en ce moment : le bot adolescent. Après tout, il n'y a aucune raison que les bots ne passent pas, eux aussi, par cette phase ingrate de la vie.

Tu vas coder un script `script_7.js` qui va fonctionner de la façon suivante : pour s'adresser au bot, un fenêtre de prompt va s'ouvrir. L'utilisateur pourra y saisir sa phrase et le bot répondra via une impression en console.

Les règles de conversations du bot sont les suivantes (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :

-   Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
-   Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
-   Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
-   Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
-   Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

## 3. Rendu attendu

Un dossier qui contient un fichier `index.html` et les scripts demandés. Chaque script contient le code d'un des exercices. Pour tester, il faudra changer l'appel des scripts un par un.