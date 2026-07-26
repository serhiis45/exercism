function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class DnDCharacter {
  private static readonly INITIAL_HIT_POINTS = 10;
  private static readonly DICE_COUNT = 4;
  private static readonly DICE_SIDES = 6;

  #strength: number;
  #dexterity: number;
  #constitution: number;
  #intelligence: number;
  #wisdom: number;
  #charisma: number;
  #hitpoints: number;

  constructor() {
    this.#strength = DnDCharacter.generateAbilityScore();
    this.#dexterity = DnDCharacter.generateAbilityScore();
    this.#constitution = DnDCharacter.generateAbilityScore();
    this.#intelligence = DnDCharacter.generateAbilityScore();
    this.#wisdom = DnDCharacter.generateAbilityScore();
    this.#charisma = DnDCharacter.generateAbilityScore();
    this.#hitpoints =
      DnDCharacter.INITIAL_HIT_POINTS +
      DnDCharacter.getModifierFor(this.#constitution);
  }

  get strength() {
    return this.#strength;
  }

  get dexterity() {
    return this.#dexterity;
  }

  get constitution() {
    return this.#constitution;
  }

  get intelligence() {
    return this.#intelligence;
  }

  get wisdom() {
    return this.#wisdom;
  }

  get charisma() {
    return this.#charisma;
  }

  get hitpoints() {
    return this.#hitpoints;
  }

  public static generateAbilityScore(): number {
    return Array.from({ length: DnDCharacter.DICE_COUNT }, () =>
      getRandomInt(1, DnDCharacter.DICE_SIDES),
    )
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((sum, value) => sum + value, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
