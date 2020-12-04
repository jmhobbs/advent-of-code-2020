exports.passwordValid = ([posA, posB, character, password]) => {
  const posAValid = password[posA - 1] === character;
  const posBValid = password[posB - 1] === character;
  if (posAValid && posBValid) { return false; }
  return (posAValid && !posBValid) || (posBValid && !posAValid);
};
