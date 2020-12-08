/* eslint-disable max-classes-per-file */
class IntRangeValidator {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  valid(value) {
    const v = parseInt(value, 10);
    return v >= this.min && v <= this.max;
  }
}

class RegexpValidator {
  constructor(regexp) {
    this.regexp = regexp;
  }

  valid(value) {
    return this.regexp.exec(value) !== null;
  }
}

class EnumValidator {
  constructor(...values) {
    this.values = values;
  }

  valid(value) {
    let valid = false;
    this.values.forEach((v) => {
      if (v === value) {
        valid = true;
        return false;
      }
      return true;
    });
    return valid;
  }
}

class HeightValidator {
  constructor() {
    this.regexp = /^(\d+)(cm|in)$/;
  }

  valid(value) {
    const match = value.match(this.regexp);
    if (match === null) {
      return false;
    }

    const qty = parseInt(match[1], 10);
    if (match[2] === 'cm') {
      return qty >= 150 && qty <= 193;
    }
    return qty >= 59 && qty <= 76;
  }
}

exports.BirthYear = new IntRangeValidator(1920, 2002);
exports.IssueYear = new IntRangeValidator(2010, 2020);
exports.ExpirationYear = new IntRangeValidator(2020, 2030);
exports.Height = new HeightValidator();
exports.HairColor = new RegexpValidator(/^#[a-f0-9]{6}$/);
exports.EyeColor = new EnumValidator('amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth');
exports.PassportID = new RegexpValidator(/^\d{9}$/);
