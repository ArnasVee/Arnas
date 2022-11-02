let photos = [
    {
        id: 0,
        source: 'img/pexels1.jpg'
    },
    {
        id: 1,
        source: 'img/pexels2.jpg'
    },
    {
        id: 2,
        source: 'img/pexels3.jpg'
    },
    {
        id: 3,
        source: 'img/pexels4.jpg'
    },
    {
        id: 4,
        source: 'img/pexels5.jpg'
    },
    {
        id: 5,
        source: 'img/pexels6.jpg'
    },
    {
        id: 6,
        source: 'img/pexels7.jpg'
    },
    {
        id: 7,
        source: 'img/pexels8.jpg'
    },
    {
        id: 8,
        source: 'img/pexels9.jpg'
    },
    {
        id: 9,
        source: 'img/pexels10.jpg'
    }
]
document.querySelector('.show').addEventListener('click',()=>{   
    let imgElements = document.querySelectorAll('img');
    for(i=0; imgElements.length;i++){
        imgElements[i].src= photos[i].source;
    } 
})

