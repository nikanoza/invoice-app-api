export const generateId = () => {
  const alphaFirst = Math.floor(Math.random() * 26);
  const alphaSecond = Math.floor(Math.random() * 26);

  const idFirst =
    String.fromCharCode(65 + alphaFirst) +
    String.fromCharCode(65 + alphaSecond);

  const idSecondPart = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

  return idFirst + idSecondPart;
};
