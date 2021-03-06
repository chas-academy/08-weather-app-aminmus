import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faCloudRain,
  faSnowflake,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
} from '@fortawesome/free-solid-svg-icons';

/*
** This 'iconsLookup' object represents what icons should be used for what icon code.
** Keys are Darksky icon codes, values are font-awesome icon names.
** const icons = { darksky-icon-code: 'font-awesome icon name' }
*/
const iconsLookup = {
  'clear-day': 'sun',
  'clear-night': 'moon',
  rain: 'cloud-rain',
  snow: 'snowflake',
  sleet: 'snowflake',
  wind: 'wind',
  fog: 'smog',
  cloudy: 'cloud',
  'partly-cloudy-day': 'cloud-sun',
  'partly-cloudy-night': 'cloud-moon',
};

// Make these imported font-awesome icons available elsewhere in project
const loadIcons = () => library.add(
  faSun,
  faMoon,
  faCloudRain,
  faSnowflake,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
);

export { iconsLookup, loadIcons };
