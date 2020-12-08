const requiredKeys = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'];

function cmpArr(a, b) {
  let equal = true;
  a.forEach((vA) => {
    let found = false;
    b.forEach((vB) => {
      if(vA === vB) {
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
    lines.forEach(line => {
      line.split(' ').forEach(pair => {
        const [key, value] = pair.split(':');
        this.attributes[key] = value;
      });
    });
  }

  valid() {
    return cmpArr(requiredKeys, Object.keys(this.attributes).filter(v =>  (v !== 'cid')));
  }
};
