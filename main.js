// let matn = "Quyosh sharqdan chiqib q'arbga botadi!";

// document.write(matn.slice(-15));

//let son = 7;

//let matnSon = "8";

// document.write(typeof son.toString());
//document.write(typeof parseInt(matnSon));


// let list = [];

// list.push("Ozod")
// list.push("16 yoshda")
// list.push("Ozod")
// list.push("Ozod")
// list.push("Ozod")
// list.push("Ozod")
// console.log(list);

// let list = [];

// list.unshift("Ozod");
// list.unshift("16 yoshda")
// list.unshift("Ilhom");
// list.unshift("18 yoshda");
// list.unshift("Xulkar");
// list.unshift("20 yoshda");

// console.log(list.length);
// console.log(list);

// let donlar = ["Abbos","Johongir","Qodir","Behruz","Doston","Ramazon"]
// console.log(list.sort());
// console.log(list.sort().reverse());

// let tartiblanganSonlar = sonlar.sort(function(a,b){
//     return b-a; 
// })

// console.log(tartiblanganSonlar);

// let belgilar = "qwertyuiiopasdfghjklzxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM";

// function parolBer(){
//     let i=0;
//     let parol ="";
//     while(i < 8){
//         let son = parseInt(Math.random() * belgilar.length);
//         parol += belgilar[son];
//         i++;
//     }
//     document.querySelector("input").value = parol;
// }

document.querySelector(".tugma").addEventListener("click",function(){
    let ekran = document.querySelector(".ekran");
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});

document.querySelector(".nolga").addEventListener("click",function(){
    document.querySelector(".ekran").value = 0;
})





