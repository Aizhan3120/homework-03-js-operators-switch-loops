// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert.

alert("task 1");
let userInfo = {
  name: "",
  age: "",
  gender: "",
};

alert("Welcome! We need more information about you");

alert("You are a new User! We need more information about you");
const name = prompt("Set your name, please", "");
userInfo.name = name;
let age = prompt("Your age", "");
userInfo.age = age;
let gender = confirm("Your gender?");
if (gender == true) {
  userInfo.gender = "Man";
} else {
  userInfo.gender = "Female";
}
console.log(userInfo);

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert.

alert("task 2");
let years = prompt("How old are you?");
if (years <= 32) {
  alert(years + " years only, You are so young!");
} else {
  alert(
    "You are only" +
      years +
      "Тридцать лет… Было время, когда мне казалось, что я никак не доживу до двадцати, так хотелось поскорее стать взрослым. А потом!"
  );
}

// Перепишите этот блок кода с использованием оператора switch.
alert("task 3");
let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}

//Работа с циклами(loops).
alert("task 4");
let result = 0;
for (let i = 1; i < 101; i++) {
  i++;
  result += i;
}
console.log(result);

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
