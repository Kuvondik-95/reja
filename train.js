console.log('Train task is running on! It is B-TASK')
// B-TASK: 
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini
// bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

async function countDigits(text){
  if(typeof text !== 'string') throw new Error("Please insert a string");
  else {
    let summ = 0;
    const myText = text.split("");
    myText.map((item)=>{
      if(!isNaN(item)){
        summ++;
      }    
    })

    return summ;
  }
}


const str = "s2ff3";
// const str = 3; // for checking ERROR

countDigits(str)
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })




























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