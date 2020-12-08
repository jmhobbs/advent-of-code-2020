exports.passwordValid = ([min, max, character, password]) => {
  const matches = password.matchAll(character);
  const count = [...matches].length;
  return count >= min && count <= max;
};
