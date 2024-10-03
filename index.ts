// Завдання №1
// Вхід: n = 7
// Вихід: [3, 5, 6, 7]
// Пояснення: Числа в діапазоні [1, 7], які діляться на 3, 5 або 7, це 3, 5, 6, 7. Сума цих чисел дорівнює 21.

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

const n = 7;
console.log(getArrayMultiplesNumbers(n));

// Завдання №2
// Вхід: x = 121
// Вихід: true
// Пояснення: 121 читається як 121 зліва направо і справа наліво.
//
// Вхід: x = -121
// Вихід: false
// Пояснення: Зліва направо читається як -121. Справа наліво стає 121-, тому це не паліндром.

const isPalindrome = (number: number) => {
  const str = number.toString();
  const strReverse = str.split('').reverse().join('');
  return str === strReverse;
};

const x = 121;
console.log(isPalindrome(x));

// Завдання №3
// Напишіть функцію delay(ms), яка повертає проміс, що виконується через ms мілісекунд.

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Виклик функції
delay(2000).then(() => console.log('Пройшло 2 секунди'));

// Завдання №4
// Ланцюг математичних операцій з Promises.
// Дано число 5.
// Кожна операція повинна бути в окремому промісі, і ці проміси слід з'єднати ланцюгом. Спочатку подвоїти його, потім додати 10.

// проміси тут
const double = (number: number) => {
  return new Promise((resolve) => {
    resolve(number * 2);
  });
};

const addTen = (number: number) => {
  return new Promise((resolve) => {
    resolve(number + 10);
  });
};

const value = 5;

double(value)
  .then(addTen)
  .then((result) => {
    console.log(result); // 20
  });
