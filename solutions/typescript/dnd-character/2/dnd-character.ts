function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class DnDCharacter {
  private static readonly INITIAL_HIT_POINTS = 10;
  private static readonly DICE_COUNT = 4;
  private static readonly DICE_SIDES = 6;

  readonly strength = DnDCharacter.generateAbilityScore();
  readonly dexterity = DnDCharacter.generateAbilityScore();
  readonly constitution = DnDCharacter.generateAbilityScore();
  readonly intelligence = DnDCharacter.generateAbilityScore();
  readonly wisdom = DnDCharacter.generateAbilityScore();
  readonly charisma = DnDCharacter.generateAbilityScore();
  readonly hitpoints =
    DnDCharacter.INITIAL_HIT_POINTS +
    DnDCharacter.getModifierFor(this.constitution);

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
