type gameType1 = {
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

const game1: gameType1 = {
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
const [players1, players2] = game1.players;
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers: string[] = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final: string[] = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game1.odds;
console.log(team1);
console.log(draw);
console.log(team2);

// 6.
const printGoals = function (...players: string[]): void {
  console.log(`${players.length} players were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game1.scored);

// 7.
console.log(team1 < team2 && `team1 wins with ${team1}`);
console.log(team1 > team2 && `team2 wins with ${team2}`);
