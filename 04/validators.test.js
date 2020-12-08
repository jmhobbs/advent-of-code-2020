const validators = require('./validators.js');

test('byr', () => {
  expect(validators.BirthYear.valid('2002')).toEqual(true);
  expect(validators.BirthYear.valid('2003')).toEqual(false);
});

test('iyr', () => {
  expect(validators.IssueYear.valid('2010')).toEqual(true);
  expect(validators.IssueYear.valid('2020')).toEqual(true);
  expect(validators.IssueYear.valid('2009')).toEqual(false);
  expect(validators.IssueYear.valid('2021')).toEqual(false);
});

test('eyr', () => {
  expect(validators.ExpirationYear.valid('1979')).toEqual(false);
  expect(validators.ExpirationYear.valid('2003')).toEqual(false);
  expect(validators.ExpirationYear.valid('2020')).toEqual(true);
  expect(validators.ExpirationYear.valid('2030')).toEqual(true);
});

test('hgt', () => {
  expect(validators.Height.valid('60in')).toEqual(true);
  expect(validators.Height.valid('190cm')).toEqual(true);
  expect(validators.Height.valid('190in')).toEqual(false);
  expect(validators.Height.valid('190')).toEqual(false);
});

test('hcl', () => {
  expect(validators.HairColor.valid('#123abc')).toEqual(true);
  expect(validators.HairColor.valid('#123abz')).toEqual(false);
  expect(validators.HairColor.valid('123abc')).toEqual(false);
});

test('ecl', () => {
  expect(validators.EyeColor.valid('brn')).toEqual(true);
  expect(validators.EyeColor.valid('wat')).toEqual(false);
});

test('pid', () => {
  expect(validators.PassportID.valid('000000001')).toEqual(true);
  expect(validators.PassportID.valid('0123456789')).toEqual(false);
});
