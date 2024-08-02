const INPUT = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b * c,
  D: {
    E: (a, b, c) => a + b + c,
    F: (a, b, c) => a - b - c,
    G: (a, b, c) => a + b * c,
  },
};

function compute(a, b, c, inputObj, output) {
  for (let key in inputObj) {
    if (typeof inputObj[key] === "object") {
      output[key] = compute(a, b, c, inputObj[key], {});
    } else {
      output[key] = inputObj[key](a, b, c);
    }
  }
  return output;
}

console.log(compute(1, 1, 1, INPUT, {}));
