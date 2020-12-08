const passport = require('./passport.js');

const samples = [
  {
    input: ['ecl:gry pid:860033327 eyr:2020 hcl:#fffffd', 'byr:1937 iyr:2017 cid:147 hgt:183cm'],
    valid: true
  },
  {
    input: ['iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884', 'hcl:#cfa07d byr:1929'],
    valid: false
  },
  {
    input: ['hcl:#ae17e1 iyr:2013', 'eyr:2024', 'ecl:brn pid:760753108 byr:1931', 'hgt:179cm'],
    valid: true
  },
  {
    input: ['hcl:#cfa07d eyr:2025 pid:166559648', 'iyr:2011 ecl:brn hgt:59in'],
    valid: false
  }
];

samples.forEach((sample, idx) => {
  test(`Sample ${idx}`, () => {
    const p = new passport.Passport(sample.input);
    expect(p.valid()).toEqual(sample.valid);
  });  
});
