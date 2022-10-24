// //alert("Test")
// /*\
//  JS is gangsta!
// */
// "use strict" //pasakom kad naudojam modernu rezima

// //alert("Informatyvus komentaras")

// var name = "Arnas"; //globlus scopeas
// let lastName = "veeeeeeeeeeee"; //bloko scoupas
// let age = 89;
// let title = "ziauru852";
// let online = false;
// let items = ["Eve", false, 12];
// let users = [  
// {
//     name: "Arnoldas",
//     email: "mailas@internet.lt",
//     role: "hacker"
// },
// {
//     name: "gh",
//     email: "fghghhhs@internet.lt",
//     role: "hacke1r"
// },
// {
//     name: "Arnofdghfghldas",
//     email: "mafghfghas@internet.lt",
//     role: "hacke2r"
// }
// ]

// //scoupas - is kur galima pakviesti kintamaji

// console.log(name);
// console.log(lastName);

// //js info   - resursas
// //js games

// console.log(typeof(lastName));
// console.log(typeof(age));
// console.log(typeof(online));
// console.log(typeof(items));
// console.log(items);

// console.log(items[2]);

// console.log(users)
// console.log(users[1].email);
// age = String(age);
// console.log(typeof(age)) //duomenu tipo keitimas vadinasi casting'as

// title = Number(title)
// console.log(title)
// online = Boolean(1)
// console.log(online)

//--------------------
// "use strict"

// let count = 12;
// let price = 100.20;
// //let price = price +20;
// price += 20; //operaciju shorthandas, nereikia let nes deklaruota

// console.log("Suma: " + count*price);
// console.log(price++);//isveda ir tik po to padidina
// console.log(price)

// console.log(++price); //pre incrimentavimas; padidina ir tada isveda
// let title = "Movie: \"Jaws\""; // biski paignoruoja kabutes \
// console.log(title);

// let name = "Arnie";
// let lastName = "Vee";
// console.log(name + " " + lastName);
//----------------------------------------------------
// http://slides.com/martynas-kitm/js-pagrindai#/0/41

// 'use strict'

// var nameas = "Valerijonas";
// console.log(nameas.length);
// console.log(nameas[5]);
// console.log(nameas.indexOf('jonas'));
// console.log(nameas.slice(0,3))
// console.log(nameas.toLocaleLowerCase())
// console.log(nameas.toUpperCase())
// var niuneimas = nameas.replace("Va", "Boo")
// console.log(niuneimas)

// var mace = [99, "textas", true, 666, "dar kazkas"]
// console.log(mace.length)
// console.log(mace[2])
// var eile = "vienas,du,trys,keturi"
// var eileMace = eile.split(',')
// console.log(eileMace)
// var eilute = eileMace.join(',')
// console.log(eilute);
// mace.push("papildomai","last");
// // var mace.push("last");
// console.log(mace);
// mace.pop("last")
// console.log(mace);
// mace.shift(99)
// console.log(mace);
// mace.unshift("pirmas")
// console.log(mace);

// var babkes = 1000;
// var islaidos = 1000;
// if (babkes === islaidos){
//     console.log('niek neliek');
// }
// else
// {
//     console.log("kazkokia nesamone")
// }

// var kalba = "ELTIE";
// if (kalba === "lt"){
//     console.log("El labo!");
// }
// else if (kalba==='en')
// {
//     console.log("HEllio")
// }
// else{
//     console.log('u mad bro?')
// }
//--------------------------------------------------
'use strict'
// let items = ['printa','puta','phuon', function(){alert("JEEEEEEE")}]; //js'e masyve gali buti funkcijos
// console.log(items[3])
// items[3]() // issilukstenam is masyvo funkscija
// items[3] = 'Tabliete' //perrasom masyvo elemento reiksme
// console.log(items)
// console.log(items.length)
// items.push('smart tee vee')
// console.log(items)
// items.pop(items)
// console.log(items)
// items.unshift('POWAH!')
// console.log(items)
// items.shift()
// console.log(items)

// let users = "vienas,du,trys,keturi,penki,sesi,septyni"
// users = users.split(',')
// console.log(users)
// users = users.join(':')
// console.log(users)
// users = users.split(':')
// console.log(users)

// for(let i=0;i < users.length; i++){ //"klasikinis"
//     console.log(users[i])
// }

// for(let user in users){ //priskiria indexa
//     console.log(user)
// }

// for(let user in users){
//     console.log(users[user])
// }

// for(let user of users){  //priskiria reiksme
//     console.log(user)
// }

// let user = {     // cia vadinasi objektas
//     name: "Test",
//     email: "kas@nepatinka.com",     //o cia raktai objekte
//     role: "humun"
// };

// //of negalima naudoti ant objekto
// //

// for(let item in user){
//     console.log(user[item])
// }

// for (let item in user){
//     console.log(item+": "+user[item])
// }

let students = [
    {
        code: 1234,
        firstName: "Tadas",
        lastName: "Tadausklas",
        score: 9.5
    },
    {
        code: 2345,
        firstName: "Tomas",
        lastName: "Tomausklas",
        score: 2.5
    },{
        code: 3456,
        firstName: "Vladas",
        lastName: "Vladausklas",
        score: 7.5
    },
    {
        code: 4567,
        firstName: "Jurgis",
        lastName: "Jurginskas",
        score: 8.5
    },
    {
        code: 5678,
        firstName: "Arnas",
        lastName: "Arnausklas",
        score: 10.0
    }
]

for(let item of students)
{
    for(let element in item)
    {
        console.log(element + ": " + item[element])
    }
    console.log("----------")
}

//isvesti bendra score vidurki
