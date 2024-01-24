var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (object, path) => {
  let keys = path.split(".");
  // ["a","b","c"]
  for (let key of keys) {
    if (object.hasOwnProperty(key)) {
      object = object[key];
    } else {
      return undefined;
    }
  }
  return object;
};

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); // false
console.log(findPath(obj, "a.b.j.k")); // undefined
console.log(findPath(obj, "a.k")); // null
