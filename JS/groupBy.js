function groupBy(obj) {
  const result = {};
  obj.forEach((o) => {
    if (result.hasOwnProperty(o.key)) {
      result[o.key].push(o);
    } else {
      result[o.key] = [o];
    }
  });

  return result;
}

const obj = [
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 1",
    data: "Data2",
  },
  {
    key: "Sample 2",
    data: "Data3",
  },
  {
    key: "Sample 2",
    data: "Data4",
  },
  {
    key: "Sample 3",
    data: "Data5",
  },
  {
    key: "Sample 3",
    data: "Data6",
  },
];

console.log(groupBy(obj));
