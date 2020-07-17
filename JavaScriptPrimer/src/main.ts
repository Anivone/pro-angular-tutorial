import { TempConverter } from './tempConverter';

console.log(TempConverter.convertFtoC(38));
console.log(TempConverter.convertFtoC('38'));

let tuple: [string, string, string];
tuple = ['London', 'raining', TempConverter.convertFtoC('38')];

console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);

const cities: { [index: string]: [string, string] } = {};

cities['London'] = ['raining', TempConverter.convertFtoC('38')];
cities['Paris'] = ['sunny', TempConverter.convertFtoC('52')];
cities['Berlin'] = ['snowing', TempConverter.convertFtoC('23')];

for (let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}
