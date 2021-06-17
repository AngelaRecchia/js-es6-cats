/* Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto. */

// crea array di oggetti gatti
const cats = [
    {
        nome: "Celine",
        eta: 20,
        colore: "grey",
        sesso: "F"
    },
    {
        nome: "Phyus",
        eta: 7,
        colore: "black",
        sesso: "M"
    },
    {
        nome: "Tom",
        eta: 4,
        colore: "brown",
        sesso: "M"
    },
    {
        nome: "Pacio",
        eta: 15,
        colore: "cornsilk",
        sesso: "F"
    },
    {
        nome: "Mia",
        eta: 3,
        colore: "khaki",
        sesso: "F"
    },
    {
        nome: "Zulu",
        eta: 11,
        colore: "chocolate",
        sesso: "M"
    }
];

// stampa per ogni gatto nome e colore
let printCats = "";
cats.forEach((cat) => {
    printCats += `${cat.nome} <i class="fas fa-cat" style="color: ${cat.colore}"></i> <br>`;
});
document.getElementById("text").innerHTML = printCats;

// divide gatti in base a sesso
let catsF = cats.filter((cat) => cat.sesso == "F");
let catsM = cats.filter((cat) => cat.sesso == "M");

catsF.forEach(cat => {
    cat.fiocco = "pink",
    cat.opacita = cat.eta / 20
});
catsM.forEach(cat => {
    cat.fiocco = "blue",
    cat.opacita = cat.eta / 20
});

/* uso forEach perché non capisco come utilizzare l'array che map ritorna
catsF.map(cat => {
    cat.fiocco = "pink",
    cat.opacita = cat.eta / 20
});
catsM.map(cat => {
    cat.fiocco = "blue",
    cat.opacita = cat.eta / 20
}); */

console.log(catsF);

let gatte = "";
let gatti = "";
catsF.forEach(cat => {
    const {nome} = cat;
    gatte += nome + '<i class="fas fa-ribbon" style="color: ' + cat.fiocco + '; opacity: ' + cat.opacita + ';"></i> <br>';
});

catsM.forEach(cat => {
    const {nome} = cat;
    gatti += nome + '<i class="fas fa-ribbon" style="color: ' + cat.fiocco + '; opacity: ' + cat.opacita + ';"></i> <br>';
});

document.getElementById("ex").innerHTML = gatte + gatti;

/* value by reference! cancella le proprietà anche da catsF e catsM */
let allCats = [...catsF, ...catsM];
allCats.forEach(cat => {
    for(let k in cat) {
        if (k != "nome" && k != "fiocco" && k != "opacita") delete cat[k];
    }
});




