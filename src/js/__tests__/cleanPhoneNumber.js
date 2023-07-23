import cleanPhoneNumber from "../..";

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['8 123 456 7890', '+71234567890'],
  [' +86 123 456 7890', '+861234567890'],
  ['8 123 456 789 012', '+8123456789012'],
  ['1 800 123 4567', '+18001234567'],
])('cleanPhoneNumber returns correct result for input: "%s"', (phoneNumber, expected) => {
  const result = cleanPhoneNumber(phoneNumber);
  expect(result).toEqual(expected);
});
