type gameType2 = {
  team1: string;
  team2: string;
  players: string[][];
  score: string;
  scored: string[];
  date: string;
  odds: {
    team1: number;
    x: number;
    team2: number;
  };
};

const game2: gameType2 = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const scoredEntries = game2.scored.entries();

for (const [i, el] of scoredEntries) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// 2.
const oddEntries = Object.values(game2.odds);
console.log(oddEntries);

let sum2 = 0;
for (const value of oddEntries) {
  sum2 += value;
}
console.log(sum2);
console.log(sum2 / oddEntries.length);

// 3.
for (const [team, odd] of Object.entries(game2.odds)) {
  const teamStr =
    team === "x"
      ? "draw"
      : `victory ${team === "team1" ? game2.team1 : game2.team2}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4.
const scorers: { [key: string]: number } = {};
for (const player of game2.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
