const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function generateRandomLetter(): string {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export class Robot {
  private _name: string;
  private static usedNames = new Set<string>();

  constructor() {
    this._name = Robot.generateRandomName();
  }

  private static generateRandomName(): string {
    let newName: string;
    do {
      newName =
        generateRandomLetter() +
        generateRandomLetter() +
        getRandomInt(10) +
        getRandomInt(10) +
        getRandomInt(10);
    } while (Robot.usedNames.has(newName));
    Robot.usedNames.add(newName);
    return newName;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.generateRandomName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}
