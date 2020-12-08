const validators = require('./validators.js');

const requiredKeys = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'];

function cmpArr(a, b) {
  let equal = true;
  a.forEach((vA) => {
    let found = false;
    b.forEach((vB) => {
      if (vA === vB) {
        found = true;
        return false;
      }
      return true;
    });

    if (!found) {
      equal = false;
      return false;
    }

    return true;
  });

  return equal;
}

exports.Passport = class {
  constructor(lines) {
    this.attributes = {};
    lines.forEach((line) => {
      line.split(' ').forEach((pair) => {
        const [key, value] = pair.split(':');
        this.attributes[key] = value;
      });
    });
  }

  validA() {
    return cmpArr(
      requiredKeys,
      Object.keys(this.attributes).filter((v) => v !== 'cid')
    );
  }

  validB() {
    if (!this.validA()) {
      return false;
    }

    /* eslint-disable no-restricted-syntax */
    for (const [attr, value] of Object.entries(this.attributes)) {
      const attrValid = (() => {
        switch (attr) {
          case 'byr':
            return validators.BirthYear;
          case 'iyr':
            return validators.IssueYear;
          case 'eyr':
            return validators.ExpirationYear;
          case 'hgt':
            return validators.Height;
          case 'hcl':
            return validators.HairColor;
          case 'ecl':
            return validators.EyeColor;
          case 'pid':
            return validators.PassportID;
          default:
            return { valid: () => true };
        }
      })(attr).valid(value);

      if (!attrValid) {
        return false;
      }
    }

    return true;
  }
};
