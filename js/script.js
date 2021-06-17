/* Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto. */

// crea array di oggetti gatti
const cats = [
    {
        nome: "Celine",
        eta: 20,
        colore: "grigio",
        sesso: "F"
    },
    {
        nome: "Phyus",
        eta: 6,
        colore: "nero",
        sesso: "M"
    },
    {
        nome: "Tom",
        eta: 4,
        colore: "tigrato",
        sesso: "M"
    },
    {
        nome: "Pacio",
        eta: 15,
        colore: "bianco e grigio",
        sesso: "F"
    },
    {
        nome: "Mia",
        eta: 2,
        colore: "bianco e nero",
        sesso: "F"
    },
    {
        nome: "Zulu",
        eta: 11,
        colore: "arancione",
        sesso: "M"
    }
]

// stampa per ogni gatto nome e colore
let printCats = "";
cats.forEach((cat) => {
    printCats += `${cat.nome} è di colore ${cat.colore}<br>`;
});
document.getElementById("text").innerHTML = printCats;

// divide gatti in base a sesso
let catsF = cats.filter((cat) => cat.sesso == "F");
let catsM = cats.filter((cat) => cat.sesso == "M");