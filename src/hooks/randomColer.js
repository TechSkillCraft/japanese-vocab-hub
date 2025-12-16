export function getRandomColor() {
  // returns pastel-ish color
  const hue = Math.floor(Math.random() * 360);
  const sat = 60 + Math.floor(Math.random() * 20); // 60-80%
  const light = 65 + Math.floor(Math.random() * 10); // 65-75%
  return `hsl(${hue} ${sat}% ${light}%)`;
}
