let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}

for (let personaje in bart) {
    console.log(personaje + ": " + bart[personaje]);
};