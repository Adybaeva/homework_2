//1.количество секунд в часе

// const countSeconds = (hour) => {
//   let hourToSeconds;
//   hourToSeconds = hour * 3600;
//   console.log(`${hour} - ${hourToSeconds} секунд`);
// };

// countSeconds(5);

// 2.Создайте переменную myNumber и присвойте ей значение 2022. Выведите значение этой переменной на экран с помощью метода alert.

// const myNumber = 2022;
// alert(myNumber);

// 3. Спросите имя пользователя с помощью метода prompt. Выведите сообщение на страницу с помощью document.write : “Рад знакомству {имя пользователя}!”.

// const name = prompt("Введите имя: ");
// document.write(`Рад знакомству ${name}!`);

// 4.Даны два числа a, b. Написать программу, которая считает среднее арифметическое двух чисел.

// const avarageNum = (num1, num2) => {
//   let a = num1;
//   let b = num2;
//   let sum;
//   sum = (a + b) / 2;
//   console.log("среднее арифметическое двух чисел:" + " " + sum);
// };

// avarageNum(20, 40);

// 5.5. Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число. *Пример: Пользователь вводит число 10. Программа выводит число 11.*

// const nextNumber = (num) => {
//   let result = num + 1;
//   console.log(result);
// };

// nextNumber(10);

// 6.Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
// - Имя
// - Возраст
// - Список друзей
// - Почтовый адрес
// - Электронный адрес

// const user = {
//   name: "Tansuluu",
//   age: 1997,
//   friends: ["Aizirek", "Erkinay"],
//   postalCode: "34000 - 34990",
//   email: "tansulu.7@gmail.com",
// };

// 7.Создайте объект описывающий блог-пост на сайте:
// - Название поста
// - Автор поста
// - Дата публикации поста
// - Тело поста (содержит текст поста)
// - Картинка поста (содержит url картинки)
// - Теги поста

// const blogPost = {
//   name: "Kyrgyztan",
//   author: "Tansuluu",
//   publishedAt: 2022,
//   postBody:
//     "Kyrgyzstan, country of Central Asia. It is bounded by Kazakhstan on the northwest and north, by China on the east and south, and by Tajikistan and Uzbekistan on the south and west. ",
//   postImg:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelFSQ0GoLzKBVeSGzJgtUJMfu58lptMvWDg&usqp=CAU",
//   tagPost: '<img src="">',
// };

// 8. Создайте массив с именами пользователей.

let users = ["Tanya", "Aizi", "Argen", "Nurzhigit"];

// 9.Создайте массив с url адресами на разные картинки.

let url = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelFSQ0GoLzKBVeSGzJgtUJMfu58lptMvWDg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelFSQ0GoLzKBVeSGzJgtUJMfu58lptMvWDg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqwvYKZymu6FTYdWyQwE_FoRi7zoPoTdeNQ&usqp=CAU",
];

// 10. Создайте массив содержащий объекты описывающие блог-посты (схема объектов идентична как в пункте 7.

let blogPost = [
  { name: "Kyrgyztan" },
  { author: "Tansuluu" },
  { publishedAt: 2020 },
  {
    postImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelFSQ0GoLzKBVeSGzJgtUJMfu58lptMvWDg&usqp=CAU",
  },
  { postBody: "Kyrgyzstan, country of Central Asia." },
  { tagPost: '<img src="">' },
];
