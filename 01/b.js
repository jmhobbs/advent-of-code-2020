exports.findNumberSums = (numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const base = numbers[i] + numbers[j];
      if (base < 2020) {
        for (let k = j + 1; k < numbers.length; k += 1) {
          if (base + numbers[k] === 2020) {
            return [numbers[i], numbers[j], numbers[k]];
          }
        }
      }
    }
  }

  return null;
};
