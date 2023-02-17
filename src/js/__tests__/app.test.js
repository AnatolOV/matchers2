import { rateParticipant } from '../app';

console.log(rateParticipant);

test('rateParticipant test', () => {
  const result = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
  ];
  const array = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  expect(rateParticipant(array)).toEqual(result);
});
