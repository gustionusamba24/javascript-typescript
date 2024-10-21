// Enum = fitur yang ada di typescript
enum Direction {
  Up = "UP", // 0
  Down = "DOWN", // 1
  Left = "LEFT", // 2
  Right = "RIGHT", // 3
}

let moveUp: Direction = Direction.Up;
console.log(moveUp);

enum Days {
  MONDAY = "mon",
  TUESDAY = "tue",
  WEDNESDAY = "wed",
  THURSDAY = "thu",
  FRIDAY = "fri",
  SATURDAY = "sat",
  SUNDAY = "sun",
}

function dayOfExam(participant: string, day: Days): void {
  console.log(`Your name is ${participant}, and your exam date will be ${day}`);
}

dayOfExam("Mas Agus", Days.THURSDAY);
