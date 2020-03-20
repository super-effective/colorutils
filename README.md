# ColorUtil

A color utility to help with converting between formats and getting color details

## Functions

### `hexToRgb`
Converts a HEX color string to its RGB values

#### Example
```js
import { hexToRgb } from 'colorutil';

const rgb = hexToRgb('#ff0000');

console.log(rgb);
// Object { red: 255, green: 0, blue: 0 }
```



### `hsvToRgb`
Converts HSV color values to its RGB values

#### Example
```js
import { hsvToRgb } from 'colorutil';

const rgb = hsvToRgb(0.5, 1, 1);

console.log(rgb);
// Object { red: 0, green: 255, blue: 255 }
```



### `rgbToHex`
Converts RGB values to a HEX color string

#### Example
```js
import { rgbToHex } from 'colorutil';

const hex = rgbToHex(0, 255, 0);

console.log(hex);
// #00ff00
```



### `hsvToHex`
Converts HSV values to a HEX color string

#### Example
```js
import { hsvToHex } from 'colorutil';

const hex = hsvToHex(240, 1, 1);

console.log(hex);
// #0000ff
```



### `hexToHsv`
Converts a HEX color string to a HSV values

#### Example
```js
import { hexToHsv } from 'colorutil';

const hsv = hexToHsv('#ff00ff');

console.log(hsv);
// Object { hue: 300, saturation: 1, value: 1 }
```

### `getPerceivedLuminance`
Get the perceived brightness of a given color. 
See: https://www.w3.org/TR/AERT/#color-contrast

#### Example
```js
import { getPerceivedLuminance } from 'colorutil';

const percep = getPerceivedLuminance('#000000');

console.log(hsv);
// 0
```