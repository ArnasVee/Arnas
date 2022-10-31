// class Gedimas{
//     constructor(name,description,priority,date) {
//         this.name=name;
//         this.description=description;
//         this.priority=priority;
//         this.date= date;
//     }
//
//     addError(){
//         console.log(`Klaidos pavadinimas: ${this.name}. Aprasymas: ${this.description}. Prioritetas: ${this.priority}. Data: ${this.date}`)
//     }
//     addName(){
//         console.log(`Klaidos pavadinimas: ${this.name}`)
//     }
//
//
// }
//
// let errorOneName = prompt('Klaidos pavadinimas?')
// console.log(errorOneName)
// let errorOneDescription = prompt('Klaidos aprasymas?')
// console.log(errorOneDescription)
// let errorOnePriority = prompt('Koks prioritetas?')
// let errorOneDate = new Date();
//
// const errorOne = new Gedimas(errorOneName,errorOneDescription,errorOnePriority,errorOneDate);
// errorOne.addError();
//
//
//
//
//
//
// // const errorOne = new Gedimas('Klaida1','Kazkas labai blogai');
// // const errorTwo = new Gedimas('Klaida2','Kazkas neveikia');
// // const errorThree = new Gedimas('Klaida3','Viskas sugedo');
// // errorOne.addName();
// // errorOne.addDescription();
// // errorTwo.addName();
// // errorTwo.addDescription();
// // errorThree.addName();
// // errorThree.addDescription();

class Support{
    constructor(id) {
        this.id=id;
        this.date = Date.now();
    }
    setTitle(title){   //seteris
        this.title = title
    }
    setDescription(description){
        this.description = description
    }
    setPriority(priority){
        this.priority = priority
    }

    getData(){     //geteris
        return[
            this.id,
            this.title,
            this.description,
            this.priority
        ]
    }
}

let issue = new Support(1);
issue.setTitle('Sugedo kompas');
issue.setDescription('Nesikrauna Windows');
issue.setPriority('Labai svarbu');
for(let data of issue.getData()){
    console.log(data)
}