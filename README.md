# Getting started

Clone repository:

```
git clone <git template url> <project_name>
```

# Install dependencies:

```
cd <project_name>
npm install
```

# Run the project:

```
npm start
```

All homework is in index .ts, after starting the project, the result will be displayed in the console.

- ДЗ №0.1

Дано додатнє ціле число n. Знайдіть всі числа в діапазоні [1, n] включно, які діляться на 3, 5 або 7. Поверніть масив цих чисел.

Вхід: n = 7
Вихід: [3, 5, 6, 7]
Пояснення: Числа в діапазоні [1, 7], які діляться на 3, 5 або 7, це 3, 5, 6, 7. Сума цих чисел дорівнює 21.

- ДЗ №0.2

Дано ціле число x. Поверніть true, якщо число є паліндромом, і false в іншому випадку.

Вхід: x = 121
Вихід: true
Пояснення: 121 читається як 121 зліва направо і справа наліво.

Вхід: x = -121
Вихід: false
Пояснення: Зліва направо читається як -121. Справа наліво стає 121-, тому це не паліндром.

- ДЗ №0.3

Напишіть функцію delay(ms), яка повертає проміс, що виконується через ms мілісекунд.

```
delay(2000).then(() => console.log('Пройшло 2 секунди'));

function delay(ms) {
return new Promise((resolve) => {
// Ваш код
});
}

// Виклик функції
delay(2000).then(() => console.log('Пройшло 2 секунди'));
```

- ДЗ №0.4

Ланцюг математичних операцій з Promises.

Дано число 5.

Кожна операція повинна бути в окремому промісі, і ці проміси слід з'єднати ланцюгом. Спочатку подвоїти його, потім додати 10.

```
const value = 5;

// проміси тут

double(value)
.then(addTen)
.then((result) => {
console.log(result); // 20
});
```
