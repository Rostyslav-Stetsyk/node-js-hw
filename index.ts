// Завдання №1
// Вхід: n = 7
// Вихід: [3, 5, 6, 7]
// Пояснення: Числа в діапазоні [1, 7], які діляться на 3, 5 або 7, це 3, 5, 6, 7. Сума цих чисел дорівнює 21.

const n = 7;

const getArrayMultiplesNumbers = (numberCount: number) => {
  let arr: number[] = [];

  let i = 1;
  while (i <= numberCount) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      arr.push(i);
    }
    i++;
  }

  return arr;
};

console.log(getArrayMultiplesNumbers(n));

// Завдання №2
// Вхід: x = 121
// Вихід: true
// Пояснення: 121 читається як 121 зліва направо і справа наліво.
//
// Вхід: x = -121
// Вихід: false
// Пояснення: Зліва направо читається як -121. Справа наліво стає 121-, тому це не паліндром.

const x = 121;

const isPalindrome = (number: number) => {
  const str = number.toString();
  const strReverse = str.split('').reverse().join('');
  return str === strReverse;
};

console.log(isPalindrome(x));
