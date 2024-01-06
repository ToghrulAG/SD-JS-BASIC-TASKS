//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// A

// Bir 'myArray' adli deyisen yaradin ve her hansi bir arrayi menimsedin .
// Algoritma girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.
// Example:
// input => [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ] => 
//   print:
//     5 -> 1 ədəd
//     2 -> 2 ədəd
//     salam -> 2 ədəd
//     necesen -> 1 ədəd
//     56 -> 1 ədəd
//     7 -> 3 ədəd

// const myArr = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7, 14, 14, 14];
// let checkerArr = [];

// for (let key of myArr) {
//     let repCounter = 0;

//     if (!checkerArr.includes(key)) {
//         for (let i = 0; i < myArr.length; i++) {
//             if (key === myArr[i]) {
//                 repCounter += 1;
//             }
//         }

//         checkerArr.push(key);
//         console.log(`${key} => ${repCounter} defe tekrarlandi`);
//     }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  B

//'firstArr' ve 'secondArr' adli iki deyisken yaradib, her hansi array menimsedin.

//Algoritma göndərilən iki arrayi qarşılaşdırıb içindəki elementlərin eyni olub olmadığını yoxlamalı və ona görə boolean dəyər ekrana çap etməlidir.

// Example:
//   [1, 2, 3], [1, 2, 3] => true
//   [1, 2, 3], [3, 2, 1] => true
//   [1, 2], [1, 2, 2] => false
//   ["salam", 2], ["salam", "2"] => false
//   [1, 4, "at"], ["at", 1, 4] => true
//   ["At", 1], [1, "aT"] => false


// const firstArr = ['4', '2', '4'];
// const secondArr = ['4', '2', '4', 'salam', 13];

// let sortedFirstArr = firstArr.sort();
// let sortedSecondArr = secondArr.sort();

// let checker = true;

// for (let i = 0; i < firstArr.length; i++) {
//     if (sortedFirstArr[i] !== sortedSecondArr[i]) {
//         checker = false;
//         break;  
//     }
// }
// console.log(checker);  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// C

//Bir number arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan ən böyük ikinci və ən kiçik ikinci ədədləri ekrana yazdırın.

// Example:
//     if array = [ -7, -71, 66, 11 ,3 , 8 , 67]  then print "Ən böyük ikinci: 66, Ən kiçik ikinci -7"  
//     if array = [ 1, 6, 0, 5 , 3 , 8 , 16]  then print "Ən böyük ikinci: 8, Ən kiçik ikinci 1"


// let myArray = [ -29, -942, 66, 11 ,-8 , 8 , 67, -52, -526, 2425, 1414];

// let sortedArray = myArray.sort(function(a,b){
//     return a - b

//     //Menfiler nezere alinaraq azdan coxa siralamaq   
// }) 
// console.log("Menfiden boyuye siralanmis array : \n",   sortedArray)

// let smallSecondNum = myArray[1];
// let bigSecondNum = myArray[myArray.length - 2] 
// console.log(`Ikinci kicik eded : ${smallSecondNum},\nIkinci boyuk eded : ${bigSecondNum}`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// D

// Bir number arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan sadəcə müsbət ədədləri ayrı, mənfi ədədləri ayrı toplayıb ekrana yazdırın.
//   Example:
//     if array = [ 1, 2, -5, 8, -3, 9 , -7 ]  then print "Müsbət toplam: 20 , Mənfi toplam: -15"
//     if array = [ -7, -3, 2, -8, 5 , -4 ]  then print "Müsbət toplam: 7 , Mənfi toplam: -22"

// let numberArr = [ 1, 2, -5, 8, -3, 9 , -7 ]; 

// let negativeNums = [];
// let positiveNums = [];

// for(let num of numberArr) {
//     if(num < 0) {
//         negativeNums.push(num)
//     }
//     else {
//         positiveNums.push(num)
//     }
// }
// console.log(negativeNums, positiveNums)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// E

// Bir number arrayı, 'limit' adlı bir number dəyişkən yaradın və bunlara dəyər mənimsədin.
// Arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurun və yeni arrayi ekrana yazdırın.
//   Example:
//     if array = [ 1, 2, -5, 8, -3, 9 , -7 ] and limit = 4  then print [8, 9]
//     if array = [ -7, -3, 2, -8, 5 , -4 ]  and limit = -4  then print [-3, 2, 5]

// let limit = -4;
// let myArr = [-7, -3, 2, -8, 5 , -4 ];
// let overLimitedNums = [];

// for(let value of myArr) {
//     if(value > limit){
//         overLimitedNums.push(value)
//     }
// }
// console.log(myArr, 'arrayi icerisinde limiti kecmis ededler', overLimitedNums);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// F.

// 1. Bir 'result' dəyişkəniniz olacaq ki başlanğəc dəyəri 1 olmalıdır. Bir arrayiniz olacaq ki içində boolean və integer dəyərlər olacaq. Hər zaman cüt indexlərdə integer'lər, tək indexlərdə boolean dəyərlər olacaq.
// 2. Arrayin içində olan dəyərlərə uyğun olaraq integerdan sonra gələn boolean true'dursa result dəyərinə vurulacaq. Və arraydəki bütün elementlərə bu uygulandıqdan sonra result ekrana yazdırılacaq.
// ÖNƏMLİ!! true, false burada boolean dəyərdir. String Deyil!!

//   Example:
//     if array = [2, true, 3, false, 7, true, 4 false] then print 14 (2 * 7)  
//         burada 2 və 7 nin qarşısında true olduğuna görə onlar sadəcə bir birinə vurulur.
//     if array = [8, false, 4, false, 11, false, 2 false] then print 1 
//     if array = [8, false, 3, true, 7, false, 1, true, 8, true] then print 24 (3*1*8)
//     if array = [5, false, 2, true, 7, true, 6, true, 9, false] then print 84 (2*7*6) 


// let myResult = 1;
 
// let myArr = [1, false, 4, true, 6, true, 18, false, 3, true];

// for(let i = 0; i < myArr.length; i++) {
//     if(typeof(myArr[i] == 'number') && myArr[i + 1] === true) {
//         myResult *= myArr[i];
//     }
// }
// console.log(myResult)

// BU KODU DERIN ARASDIRMA EDEREK YAZMISAM, CUNKI TASKA BASA DUSMURDUM MENDEN NE ISTENILIR. KOD MENE MEXSUS OLMASA
// BELE HER BIR SETRI BASA SALA BILEREM, YENI BU KODU BASA DUSUB  YAZMISAM.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// G.

// 1. Bir array yaradın və buna dəyər mənimsədin.
// 2. Arrayin içində olan dəyərləri təkrar eləməyəcək şəkildə ekrana yazdırın.
// Example:
// if array = [1, "salam", 1, true, true, false, false, false, 5, "5"] then print "1 salam true false 5"
// if array = [2, "class", 1, true, "class", 16, 17, 18,  "17"] then print "2 class 1 true 16 17 18"

let myArr = [1, "salam", 1, true, true, false, false, false, 5, "5", 6, 525, 525];
let uniqueElements = [];

for(let i = 0; i < myArr.length; i ++) {
    uniqueElements.push(myArr[i])
    for(let j = 0; j < myArr.length; j ++){
    }
   
}
console.log(uniqueElements)






































