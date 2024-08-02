function computeAmount() {
  this.amount = 0;

  this.thousand = function (num) {
    this.amount += num * 1000;
    return this;
  };

  this.lacs = function (num) {
    this.amount += num * 100000;
    return this;
  };

  this.crore = function (num) {
    this.amount += num * 10000000;
    return this;
  };

  this.value = function () {
    return this.amount;
  };

  return this;
}

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);