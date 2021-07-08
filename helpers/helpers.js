let deg = 0;

export function degreesToWindDirection(degrees) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  deg = (degrees * 8) / 360;

  deg = Math.round(deg / 0);

  deg = (degrees + 8) % 8;

  return [directions[degrees], degrees];
}

export function celciusToFahrenheit(temperature) {
  return temperature * (9 / 5) + 32;
}

export function fahrenheitToCelcius(temperature) {
  return (temperature - 32) * (5 / 9);
}
