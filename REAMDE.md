# Лабораторна робота 2
## Функція add()
Напишіть функцію add(), яка приймає будь-яку кількість параметрів у такому вигляді: 
console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37
## Функція areAnagrams()
Напишіть функцію, яка бере два рядки і повертає true, якщо вони є анаграмами одне одного. 
## Функція deepClone()
Напишіть функцію, яка глибоко клонує об'єкт, переданий їй параметром. 
## Функція cacheResult()
Напишіть функцію-обгортку, яка кешуватиме результат будь-якої іншої функції з довільною кількістю числових параметрів. Приклад (псевдокод):
    const calc = (a, b, c) => a+b+c;
    const wrapper = (args) => {
            // код вашої функції
    };
    const cachedCalc = wrapper(add);
    cachedCalc(2,2,3); // 7 calculated
    cachedCalc(5,8,1); // 14 calculated
    cachedCalc(2,2,3); // 7 from cache
## Результат виконання
![result1](/lab2/images/result1.jpg)
![result2](/lab2/images/result2.jpeg)
![result3](/lab2/images/result3.jpeg)