// let fish = [
//     { species: "Swordtail", count: 2 },
//     { species: "Pearl Gourami", count: 1 },
//     { species: "Rummynose Tetra", count: 12 },
//     { species: "Neon Tetra", count: 30 },
//     { species: "Guppy", count: 8 },
//     { species: "Kribensis", count: 1 },
//     { species: "Angelfish", count: 1 },
//     { species: undefined, count: 5 },
// ];
let fish = [
    { species: undefined, count: 2 },
    { species: undefined, count: 1 },
    { species: undefined, count: 12 },
    { species: undefined, count: 30 },
    { species: undefined, count: 8 },
    { species: undefined, count: 1 },
    { species: undefined, count: 1 },
    { species: undefined, count: 5 },
];

function percentUnknown(fish) {
    for (let i = 0; i < fish.length; i++) {
        if (fish[i].species == undefined) {
            let total = fish.reduce((acc, curr) => acc + curr.count, 0);
            return Math.floor((fish[i].count / total) * 100);
        }
    }
}

console.log(percentUnknown(fish));
