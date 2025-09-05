export function getRandomId() {
  const randomId = (Math.floor(Math.random() * 1025) + 1);
  return randomId;
}

export function formatId(id: string) {
  return String(id).padStart(3, "0");
}