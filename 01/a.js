exports.findNumberSums = (numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[j] + numbers[i] === 2020) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return null;
};
