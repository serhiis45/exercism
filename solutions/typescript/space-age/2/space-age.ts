const EARTH_YEAR_IN_SECONDS = 31_557_600;

const orbit_periods = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} satisfies Record<string, number>;

type Planet = keyof typeof orbit_periods;

export function age(planet: Planet, seconds: number): number {
  return (
    Math.round(
      (seconds / EARTH_YEAR_IN_SECONDS / orbit_periods[planet]) * 100,
    ) / 100
  );
}
