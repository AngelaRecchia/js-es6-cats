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

// divide gatti in base a sesso, aggiunge e stampa fiocco
let catsF = cats
                .filter((cat) => cat.sesso == "F")
                .map(cat => {
                    cat.fiocco = {color: "pink", opacita: cat.eta / 20};
                    return cat
                });
let catsM = cats
                .filter((cat) => cat.sesso == "M")
                .map(cat => {
                    cat.fiocco = {color: "blue", opacita: cat.eta / 20};
                    return cat
                });

const catRibbon = (arrOfCats) => {
    let frase = "";
    arrOfCats.forEach(cat => {
        frase += `${cat.nome} <i class="fas fa-ribbon" style="color: ${cat.fiocco.color}; opacity: ${cat.fiocco.opacita}"></i> <br>`;
    });
    return frase;
}

document.getElementById("ex").innerHTML = catRibbon(catsF) + catRibbon(catsM);

/* value by reference? cancella le proprietà anche da catsF e catsM */
let allCats = [...catsF, ...catsM];
allCats.forEach(cat => {
    for(let k in cat) {
        if (k != "nome" && k != "fiocco") delete cat[k];
    }
});




