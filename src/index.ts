/**
 * @typedef {function(number=): (number|AddFn)} AddFn
 */

/**
 * @param {number} sum
 * @returns {AddFn}
 */
function add(sum = 0) {
  // @ts-ignore
  const inner = (value) => {
    if (typeof value === "number") {
      return add(sum + value);
    } else {
      return sum;
    }
  };
  return inner;
}

//@ts-ignore
console.log("Task 1:\n", add(2)(5)(7)(1)(6)(5)(11)()); // 37

function areAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = new Map<string, number>();

  for (let char of str1) {
    const count = charCount.get(char) ?? 0;
    charCount.set(char, count + 1);
  }

  for (let char of str2) {
    const count = charCount.get(char);
    if (count === undefined || count === 0) {
      return false;
    }
    charCount.set(char, count - 1);
  }

  return true;
}

console.log("\nTask 2:\n", areAnagrams("anagram", "nagaram")); // true
console.log(areAnagrams("rat", "car")); // false

function deepCopy<T>(obj: T): T {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const newArray = [];
    for (const element of obj) {
      newArray.push(deepCopy(element));
    }
    return newArray as unknown as T;
  }

  const newObj = {} as T;
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}

const obj = {
  name: "John",
  age: 25,
  friends: ["Ann", "Mike"],
  work: {
    position: "manager",
    company: {
      name: "Google",
      address: "USA",
    },
  },
};

console.log("\nTask 3:\n", obj);
console.log(deepCopy(obj));
console.log(obj === deepCopy(obj));

function cacheResult<T extends (...args: number[]) => number>(fn: T): T {
  const cache = new Map<string, number>();

  return function (...args: number[]) {
    const cacheKey = JSON.stringify(args);

    if (cache.has(cacheKey)) {
      console.log(`Using cached result for (${args.join(", ")})`);
      return cache.get(cacheKey)!;
    }

    const result = fn(...args);
    cache.set(cacheKey, result);
    console.log(`Calculated result (${result}) for (${args.join(", ")})`);

    return result;
  } as T;
}

console.log("\nTask 4:\n");
const calc = (a: number, b: number, c: number) => a + b + c;

const cachedCalc = cacheResult(calc);
cachedCalc(1, 2, 3); // Calculated result (6) for (1, 2, 3)
cachedCalc(1, 2, 3); // Using cached result for (1, 2, 3)
cachedCalc(1, 2, 4); // Calculated result (7) for (1, 2, 4)
cachedCalc(1, 2, 4); // Using cached result for (1, 2, 4)
