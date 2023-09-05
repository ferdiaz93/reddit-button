function getRandomHexValue() {
    // Genera un valor hexadecimal aleatorio entre 0 y 255 y lo convierte a cadena de dos dígitos
    const randomValue = Math.floor(Math.random() * 256).toString(16);
    return randomValue.length === 1 ? `0${randomValue}` : randomValue;
  }

  export default function randomColor(): string {
    // Genera un color aleatorio en formato hexadecimal (por ejemplo, "#RRGGBB")
    const red = getRandomHexValue();
    const green = getRandomHexValue();
    const blue = getRandomHexValue();
    return `#${red}${green}${blue}`;
  }