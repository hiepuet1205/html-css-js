const slide = document.getElementsByClassName('slider')[0];

const imgslide = slide.getElementsByTagName('img')[0];

const slider_text = document.getElementsByClassName('slider_text')[0];

const slider_text_h3 = slider_text.getElementsByTagName('h3')[0];

const slider_text_p = slider_text.getElementsByTagName('p')[0];

const imgs = ["./assests/img/chicago.jpg", "./assests/img/ny.jpg", "./assests/img/la.jpg"]

const slideData = [
    {
        img: "./assests/img/chicago.jpg",
        title: "Chicago",
        desc: "Thank you, Chicago - A night we won't forget."
    },
    {
        img: "./assests/img/ny.jpg",
        title: "New York",
        desc: "The atmosphere in New York is lorem ipsum."
    },
    {
        img: "./assests/img/la.jpg",
        title: "Los Angeles",
        desc: "We had the best time playing at Venice Beach!"
    }
]

console.log(slide)
console.log(imgslide)
console.log(slider_text)
console.log(slider_text_h3)
console.log(slider_text_p)

let i = 0;

setInterval(() => {
    imgslide.src = slideData[i].img;
    slider_text_h3.innerText = slideData[i].title;
    slider_text_p.innerText = slideData[i].desc ;
    i++;
}, 3000)