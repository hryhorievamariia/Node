function add(num) {
  let sum = num;

  function innerAdd(nextNum) {
    if (nextNum === undefined) {
      return sum;
    }

    sum += nextNum;
    return innerAdd;
  }

  return innerAdd;
}

console.log(add(1)(2)(3)(4)(5)()); // 15

function areAnagrams(str1, str2) {
  // Перетворюємо рядки у масиви символів та сортуємо їх в алфавітному порядку
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();

  // Перетворюємо масиви символів назад у рядки та порівнюємо їх
  return arr1.join("") === arr2.join("");
}

console.log("\nTask2:\n", areAnagrams("hello", "elloh")); // true
console.log(areAnagrams("rello", "hello")); // false

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    // Якщо obj не є об'єктом, повертаємо його без змін
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    // Рекурсивно клонуємо кожен властивість об'єкта
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

obj = {
  surname: "Elton",
  name: "John",
  age: 73,
  isMarried: true,
  children: [
    {
      name: "John",
      age: 50,
      isMarried: true,
      children: [
        {
          name: "John",
          age: 30,
          isMarried: true,
          children: [
            {
              name: "John",
              age: 10,
              isMarried: false,
              children: [],
            },
            {
              name: "John",
              age: 5,
              isMarried: false,
              children: [],
            },
          ],
        },
        {
          name: "John",
          age: 25,
          isMarried: false,
          children: [],
        },
      ],
    },
  ],
};

console.log(
  "\nTask 3:\n",
  JSON.stringify(obj) === JSON.stringify(deepClone(obj))
); // true

function cacheFunction(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      console.log(`Result from cache: ${cache[key]}`);
      return cache[key];
    }

    const result = fn.apply(null, args);
    cache[key] = result;

    console.log(`Result calculated: ${result}`);
    return result;
  };
}

console.log("\nTask 4:");
const calc = (a, b, c) => a+b+c;
const cachedCalc = cacheFunction(calc);

cachedCalc(2,2,3); // Result calculated: 7, повертає 7
cachedCalc(5,8,1); // Result calculated: 14, повертає 14
cachedCalc(2,2,3); // Result from cache: 7, повертає 7
