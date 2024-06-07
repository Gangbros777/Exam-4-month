// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini


// let a = 5;
// let b = 2;
// let boluvchi = a % b;
// alert(`5 sonini 2 ga bo'ling va qoldig'i: ${boluvchi}`);


// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


// let randomNumber = Math.round(Math.random() * 10);
// alert(randomNumber)

// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


// let num = 12.510;
// console.log(Math.floor(num));



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 


// function Mars(a="MARS IT SCHOOL"){
//     let IT = a.length
//     alert(IT)
// }
// Mars()

// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering


// let original = ("Mars IT School")
// console.log(original.repeat(10));

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// console.log(harflar[8], harflar[0], harflar[10], harflar[13], harflar[10],harflar [7], harflar [2], harflar[2] ,harflar [7], harflar[12]);

// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering


// let Yosh = +prompt("Yoshingizni yozing");
// let Ortachayosh = 18; 
// if (Yosh >= Ortachayosh) {
//    alert ("Siz balag'ot yoshiga yetgansiz");
// } else {
//     alert ("siz balog'at yoshiga yetmagansiz");
// }



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering



// let name = prompt("Ismingizni kiriting:");
// let reversedName = name.split("").reverse().join("");
// console.log(`Ismingizning teskarisi: ${reversedName}`);




// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов




// Javob :Kodini yozib bering

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let Juft = [];

// for (let i = 0; i < sonlar.length; i++) {
//   if (sonlar[i] % 2 == 0) {
//     Juft.push(sonlar[i]);
//   }
// }
// console.log(Juft);