// function sum(a,b,fn){ //funkcija su paramentrais
//     fn()
//     return a+b;
// }
// console.log(sum(5,12,function(){console.log("Wu Tang Clan!")}))

// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(5,13))

// const sum = (a,b)=>{return a+b;} //Arrow function
// console.log(sum(5,14))

// (function () //IIFE imediately invoked function expression
// {
// let name = "Jonas";
// function showName(){
//     let name = "Tadas";
//     return name;
// }
// console.log(name)
// })()

// let users = [     /arba const
//     "Marius",
//     "Ieva",
//     "Darius",
//     "Migle"
// ];
// // function check(){
// //     for(let i=0;i<users.length;i++)
// //     {
// //         if (users[i].length>5)
// //         {
// //             console.log(users[i])
// //         }
// //     }
// // }
// // check();
//
// const print =(data)=>{
//     for (let user of data){
//         if (user.length>5){
//             console.log(user)
//         }
//     }
// }
// print(users)





//
// let students = [
//     {
//         name: "Jonas",
//         lastName: "Jonaitis",
//         email:"jonas@jonaitis.lt",
//         score: 125.8
//     },
//     {
//         name: "Vardenis",
//         lastName: "Pavardenis",
//         email:"vardenis@pavardenis.lt",
//         score: 25.8
//     },
//     {
//         name: "Petras",
//         lastName: "Petraitis",
//         email:"petras@petraitis.lt",
//         score: 35.33
//     }
// ]
//
// // for (let student in students){
// //     students = students.filter(student=>student.score>30)
// // }
// // console.log(students)
// //
// // students.sort((a,b) => {
// //     console.log(a)
// //     if (a.score < b.score){
// //         return -1;
// //     }
// //     if (a.score>b.score){
// //         return 1;
// //     }
// //     return 0;
// // });
// // console.log(students)
//
// // function sum (...numbers){            //reduceris
// //     const initialValue = 0;
// //     console.log(numbers)
// //     const sumWithInitial = numbers.reduce(
// //         (previousValue, currentValue) => previousValue + currentValue,
// //         initialValue
// //     );
// //     return sumWithInitial;
// // }
// // console.log(sum(23,24,14,15,28))
//
// const tottalPoints = students.reduce(
//     (previousValue , currentValue) => previousValue + currentValue.score, 0);
// console.log(tottalPoints)




let catalog= {
    grozine: [
        {
            isbn: 2345,
            leidimoMetai: 1985,
            Pavadinimas: "Altoriu Sesely",
            puslapiuSkaicius: 310
        },
        {
            isbn: 3215,
            leidimoMetai: 2022,
            Pavadinimas: "Ilgesys ir eglutės",
            puslapiuSkaicius: 189
        },
        {
            isbn: 4445,
            leidimoMetai: 1987,
            Pavadinimas: "Brisiaus Galas",
            puslapiuSkaicius: 666
        },
        {
            isbn: 9996,
            leidimoMetai: 2022,
            Pavadinimas: "Naujienele",
            puslapiuSkaicius: 99
        }

    ],
    detektyvas: [
        {
            isbn: 5195,
            leidimoMetai: 1985,
            Pavadinimas: "Serlokas Holmas",
            puslapiuSkaicius: 189
        },
        {
            isbn: 7898,
            leidimoMetai: 2022,
            Pavadinimas: "Naujausias Detektyvas",
            puslapiuSkaicius: 223
        }

    ],
    programavimas: [
        {
            isbn: 1234,
            leidimoMetai: 1999,
            Pavadinimas: "Programavimas su Paskaliu",
            puslapiuSkaicius: 99
        },
        {
            isbn: 4554,
            leidimoMetai: 2019,
            Pavadinimas: "Programavimas C++",
            puslapiuSkaicius: 333
        },
        {
            isbn: 8528,
            leidimoMetai: 2022,
            Pavadinimas: "Programavimo įvadas",
            puslapiuSkaicius: 303
        },
        {
            isbn: 2525,
            leidimoMetai: 2019,
            Pavadinimas: "Programavimas pradedantiesiems. Scratch",
            puslapiuSkaicius: 50
        },
        {
            isbn: 5252,
            leidimoMetai: 2019,
            Pavadinimas: "Slaptasis kodas. Pradedu programuoti",
            puslapiuSkaicius: 222
        },
        {
            isbn: 5555,
            leidimoMetai: 2019,
            Pavadinimas: "Programavimas JAVA. Pirmoji pažintis",
            puslapiuSkaicius: 188
        }
    ]
}
// console.log(catalog)


//console.log(catalog.detektyvas[1])

for (let kategorija in catalog)
{
    console.log("kategorija: " + kategorija + " (" + catalog[kategorija].length + " knygos)");
    console.log("         ")
        for (let item of catalog[kategorija])
        {
            for (let element in item)
            {
                if (item[element] == 2022)
                {
                    console.log(element + ": " + item[element] + " (nauja knyga)")
                }
                console.log(element + ": " + item[element])
            }
            console.log("      ")
        }
    // console.log(catalog[kategorija])
    console.log("------------")
}




// for(let kategorija in catalog)
// {
//     console.log("kategorija: " + kategorija);
//     for(item in kategorija)
//     {
//         console.log(item)
//     }
//
// }

