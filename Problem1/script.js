const checkCount = (value) => {
  const ans = {};
  const allLetters = value.toUpperCase().split("");
  const uniqueLetter = new Set(value.toUpperCase().split(""));

  const filteredSpace = [...uniqueLetter].filter((e) => (e.trim() ? e : null));
  for (letter of filteredSpace) {
    let count = allLetters.reduce(
      (accum, e) => (e == letter ? accum + 1 : accum),
      0
    );
    ans[letter] = count;
  }
  return ans;
};
// console.log(checkCount("Amolya Sharma"));
console.log(checkCount("Chinmay Kulkarni"));
