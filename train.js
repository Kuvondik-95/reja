console.log('Train js is running on! It is D-TASK')
const moment = require("moment");
// D-TASK: 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

class Shop{
  #non;
  #lagmon;
  #cola;

  constructor(non, lagmon, cola){
    this.#non = non;
    this.#lagmon = lagmon;
    this.#cola = cola;
  }

  qoldiq(){
    console.log(`Hozir ${moment().format("DD-MM-YYYY hh:mm")} da non ${this.#non}ta, lagmon ${this.#lagmon}ta, cola ${this.#cola}ta bor`)
  }

  sotish(str, amount){
    if(str === 'non'){
      this.#non -= amount;
    }else if(str === 'lagmon'){
      this.#lagmon -= amount;
    }else if(str === 'cola'){
      this.#cola -= amount;
    }
  }

  qabul(str, amount){
    if(str === 'non'){
      this.#non += amount;
    }else if(str === 'lagmon'){
      this.#lagmon += amount;
    }else if(str === 'cola'){
      this.#cola += amount;
    }
  }

}

const my_shop = new Shop(4, 5, 6);

my_shop.qoldiq();
my_shop.qabul('non', 3);
my_shop.qoldiq();
my_shop.sotish('cola', 4);
my_shop.sotish('lagmon', 2);
my_shop.qoldiq();











// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;


// async function checkContent(word1, word2){
//   if(typeof word1 !== 'string' || typeof word2 !== 'string') throw new Error("Please insert only a word!");
//   else{
//     let check_string = true;
//     const myWord1 = word1.split("").sort();
//     const myWord2 = word2.split("").sort();

//     if(JSON.stringify(myWord1) === JSON.stringify(myWord2)){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }

// checkContent("mitgroup", "gmtiprou")
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// });












// B-TASK: 
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini
// bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// async function countDigits(text){
//   if(typeof text !== 'string') throw new Error("Please insert a string");
//   else {
//     let summ = 0;
//     const myText = text.split("");
//     myText.map((item)=>{
//       if(!isNaN(item)){
//         summ++;
//       }    
//     })

//     return summ;
//   }
// }


// const str = "s2ff3";
// // const str = 3; // for checking ERROR

// countDigits(str)
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })




























// // A-TASK MIT24 
// function countLetter(word, letter, callback){
//   let summ = 0;
//   if(typeof word !== 'string' || typeof letter !== 'string') callback("Please, insert a string!", null);
//   else{
//     const myWord = word.split("");
//     for(let i=0; i < myWord.length; i++){
//       if(myWord[i] === letter){
//         summ ++;
//       }
//     }
//     callback(null, summ);
//   }
// }

// countLetter('mashina', 'a', (err, data)=>{
//   if(err) console.log('ERROR:', err);
//   else console.log(data);
// });




















// const cpus = require("os"); //Computer yadrosi nechta ekanlikini bilib olsa bo'ladi.
// console.log(cpus); 

// console.log('Jack Ma maslahatlari!');
const list = [
  "Yaxshi talaba bo\'ling!", // 0-20,
  "to\'g\'ri boshliq tanlang va ko\'proq xato qiling!", // 20-30,
  "O\'zingizga ishlashni boshlang!", // 30-40,
  "Siz kuchli bo\'lgan narsalarni qiling!", // 40-50,
  "Yoshlarga investitsiya qiling!", // 50-60,
  "Endi dam oling, endi foydasi yo\'q!" // 60,
]

// CALLBACK function 
// function maslahatBering(a, callback){
//   if(typeof a !== "number") callback("insert a number", null);
//   else if (a <= 0) callback(null, list[0]);
//   else if(a > 20 && a <= 30) callback(null, list[1]);
//   else if(a > 30 && a <= 40) callback(null, list[2]);
//   else if(a > 40 && a <= 50) callback(null, list[3]);
//   else if(a > 50 && a <= 60) callback(null, list[4]);
//   else{
//     setTimeout(()=>{
//       callback(null, list[5]);
//     }, 5000)
    
//   }
// }
// console.log('passed here 0');
// maslahatBering(70, (err, data)=>{
//   if(err) console.log('ERROR:', err)
//     console.log('javob:', data);
// })

// console.log('passed here 1');



// Endi ASYNC function larni ko'rib chiqamiz
// async function maslahatBering(a){
//   if(typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 0) return list[0];
//   else if(a > 20 && a <= 30) return list[1];
//   else if(a > 30 && a <= 40) return list[2];
//   else if(a > 40 && a <= 50) return list[3];
//   else if(a > 50 && a <= 60) return list[4];
//   else{
//     return new Promise((resolve, reject) =>{
//       setTimeout(()=>{
//         resolve(list[5]); // Bu yerda resolve return bilan bir xil ish qiladi.
//       }, 3000);
//     })
//     // return list[5];
//     // setTimeout(()=>{
//     //   callback(null, list[5]);
//     // }, 5000)
    
//   }
// }
// console.log('passed here 0');

//  call via then and catch
// maslahatBering(20)
// .then((data) => {
//   console.log('javob: ', data )
// })
// .catch((err) => {
//   console.log('ERROR:', err);
// })

// call via ASYNC AWAIT
// async function run(){
//   let javob = await maslahatBering(70);
//   console.log('javob: ', javob);
//   // javob = await maslahatBering(30);
//   // console.log('javob: ', javob);
//   // javob = await maslahatBering(41);
//   // console.log('javob: ', javob);
// }
// run();

// console.log('passed here 1');