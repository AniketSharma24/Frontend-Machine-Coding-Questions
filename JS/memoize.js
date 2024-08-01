const add = (a, b) => a + b;
const sub = (a, b) => a - b;

function memoizeOne(fn) {
  const memoizedObject = new Map();

  return function (...args) {
    const key = args.join("-");
    if (memoizedObject.has(key)) {
      console.log("Retrieving from cache");
      return memoizedObject.get(key);
    } else {
      console.log("Setting cache");
      const result = fn(...args);
      memoizedObject.set(key, result);
      return result;
    }
  };
}

const memoizedAdd = memoizeOne(add);
const memoizedSub = memoizeOne(sub);
console.log("MEMOIZED", memoizedAdd(1, 2));
console.log("MEMOIZED", memoizedAdd(1, 2));
console.log("MEMOIZED", memoizedAdd(2, 3));
console.log("MEMOIZED", memoizedAdd(2, 3));
console.log("MEMOIZED", memoizedAdd(1, 2));

console.log("MEMOIZED", memoizedSub(1, 2));
console.log("MEMOIZED", memoizedSub(1, 2));
console.log("MEMOIZED", memoizedSub(2, 3));
console.log("MEMOIZED", memoizedSub(2, 3));

/**
 * const add = (a,b) => a + b;
 * const memoized = memoizeOne(add);
 * memoized(1,2); -> 3
 */
