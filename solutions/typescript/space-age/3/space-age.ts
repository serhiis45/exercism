const EARTH_YEAR_IN_SECONDS = 31_557_600;

const ORBIT_PERIODS = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} satisfies Record<string, number>;

type Planet = keyof typeof ORBIT_PERIODS;

export function age(planet: Planet, seconds: number): number {
  const earthYears = seconds / EARTH_YEAR_IN_SECONDS;
  const targetPlanetYears = earthYears / ORBIT_PERIODS[planet];

  return Math.round(targetPlanetYears * 100) / 100;
}
