console.log('Train task is running on!')
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



// A-TASK MIT24 
function countLetter(word, letter ){
  let summ = 0;
  if(typeof word !== 'string' && typeof letter !== 'string'){
    console.log("Please, insert a string!")
  }else{
    const myWord = word.split("");
    for(let i=0; i < myWord.length; i++){
      if(myWord[i] === letter){
        summ ++;
      }
    }
  }
   console.log(summ);
}

countLetter('mashina', 'a');

// run("a", "alabay", (err, data) => {
//   if(err) console.log('ERROR:', err);
//   else{
//     console.log(data);
//   }
// })

// run();
// if(typeof letter !== "string" &&) callback("insert a number", null);
// else if (typeof word !== "string") callback("insert a number", null);
