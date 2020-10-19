module.exports = function check(str, bracketsConfig) {
  const bracketsPairs = bracketsConfig.map(e => e.join(""));
  let aString = str;
  let aLength;

  do {
      aLength = aString.length;
      bracketsPairs.forEach(e => {
          aString = aString.replace(e, "");
      });
  } while (aLength !== aString.length);

  return aString.length === 0;
};
