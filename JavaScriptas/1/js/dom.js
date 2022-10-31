
//siti realiai nenaudojami:
// const article = document.getElementById('vip');
// const articles = document.getElementsByTagName('article');
// const articulares = document.getElementsByClassName('purple');
//o sitie zeba:
// const allArticles = document.querySelectorAll('article');
// console.log(allArticles);

// const purple = document.querySelector('.purple');
// const button = document.querySelector('button')
//
// button.addEventListener('click', ()=>{
//     const color = document.querySelector('input').value;  //<- value kad paimt spalva
//     purple.style.backgroundColor = color;  //atributo pridejimas
// });

// const text = document.querySelector('.sect');
// console.log(text)
// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//     let link = document.querySelector('a')
//     text.style.textTransform = 'uppercase';
//     link.href = 'http://www.google.lt';
// });
// console.log(text)



//15min hakinimas
// let linksai = document.querySelectorAll('a');
// for (i=0;i<linksai.length;i++){    //primityvus loopas
//     linksai[i].href = 'http://www.google.lt';
// }

// let linksai = document.querySelectorAll('a');
// for (const link of linksai) {            //protingesnis loopas
//
//     link.href = 'http://www.google.lt';
// }
//
// const text = document.querySelectorAll('h4 a');
// for (const t of text){
//         t.textContent = "Change"
// }


//innerhtml    //<-keisti elementus

// const task = document.querySelector('input')
// const addTask = document.querySelector('button')
//
// addTask.addEventListener('click', ()=>{
//     const taskList = document.querySelector('ul');  //Task list in ul
//     let li = document.createElement('li');   //fiziskai sukuria li elementa
//     li.textContent = task.value;    //assign content to li
//     taskList.appendChild(li); //add li to ul
// })
//
// document.querySelector('.delete').addEventListener('click',()=>{
//     let taskList = document.querySelector('ul');
//     let li = document.querySelector('li:last-child');
//     taskList.removeChild(li);
// })

const col = document.querySelector('.col');
const row = document.querySelector('.row');
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    const tableMake = document.querySelector('.tablesect')
    let mainTable = document.createElement('table')
    let tblBody = document.createElement("tbody");
//     for (i=0;i<linksai.length;i++){}
})

