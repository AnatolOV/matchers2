export function rateParticipant(array) {
  array.sort((a, b) => (a.health > b.health ? -1 : 1));

  console.log(array);
}
