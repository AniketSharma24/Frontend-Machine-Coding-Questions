Array.prototype.myReduce = function (fn, acc) {
  if (acc) {
    let res = acc;
    this.forEach((val) => {
      res = fn(res, val);
    });

    return res;
  } else {
    let res = this[0];
    for (let i = 1; i < this.length; i++) {
      res = fn(res, this[i]);
    }
    return res;
  }
};

console.log(
  [1, 2, 3].myReduce((acc, itm) => {
    acc = acc * itm;
    return acc;
  }, 2)
);
