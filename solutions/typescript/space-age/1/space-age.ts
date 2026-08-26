const periods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} satisfies Record<string, number>;

const EARTH_YEAR_IN_SECONDS = 31_557_600;

type Planet = keyof typeof periods;

export function age(planet: Planet, seconds: number): number {
  return (
    Math.round((seconds * 100) / EARTH_YEAR_IN_SECONDS / periods[planet]) / 100
  );
}
