export function test() {
  return "test";
}

export function getRandomId() {
  const stringNumber = (Math.floor(Math.random() * 1025) + 1).toString();
  return stringNumber;
}

export function formatId(id: string) {
  return String(id).padStart(3, "0");
}