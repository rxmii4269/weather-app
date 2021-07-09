let result = '';
export function degreesToWindDirection(degrees) {
  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
    'N',
  ];

  return [directions[(degrees / 22.5).toFixed(0)], degrees + -44];
}

export function celciusToFahrenheit(temperature) {
  return temperature * (9 / 5) + 32;
}

export function fahrenheitToCelcius(temperature) {
  return Math.round((temperature - 32) * (5 / 9));
}

export function weatherToIcon(icon) {
  if (icon <= 232) {
    result = 'Thunderstorm.png';
  } else if (icon <= 321) {
    result = 'Shower.png';
  } else if (icon <= 501) {
    result = 'LightRain.png';
  } else if (icon <= 504) {
    result = 'HeavyRain.png';
  } else if (icon <= 511) {
    result = 'Snow.png';
  } else if (icon <= 521) {
    result = 'LightRain.png';
  } else if (icon <= 531) {
    result = 'HeavyRain.png';
  } else if (icon <= 602) {
    result = 'Snow.png';
  } else if (icon <= 613) {
    result = 'Sleet.png';
  } else if (icon <= 622) {
    result = 'Snow.png';
  } else if (icon <= 781) {
    result = 'HeavyCloud.png';
  } else if (icon === 800) {
    result = 'Clear.png';
  } else if (icon === 801) {
    result = 'LightCloud.png';
  } else if (icon <= 804) {
    result = 'HeavyCloud.png';
  } else {
    result = 'Clears.png';
  }
  return result;
}

export function unixToDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

export function metersToMiles(meters) {
  return Math.round(meters / 1609);
}

export function currentLocation() {
  const options = {
    enableHighAccuray: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
