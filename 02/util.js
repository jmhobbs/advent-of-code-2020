const passwordRegexp = /^(\d+)-(\d+) (\w): (.*)$/g;

exports.parsePasswordLine = (line) => {
  const match = [...line.matchAll(passwordRegexp)];
  return [parseInt(match[0][1], 10), parseInt(match[0][2], 10), match[0][3], match[0][4]];
}