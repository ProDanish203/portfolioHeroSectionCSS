
const cursorCircle = document.querySelector(".cursor-circle");
const cursor = document.querySelectorAll(".cursor");
const elements = document.querySelectorAll(".getHover");
// const imageWrap = document.querySelector(".image-wrap");

window.addEventListener("mousemove", (e) =>{
    let xPosition = e.clientX;
    let yPosition = e.clientY;
    
    cursor.forEach((el) => {
        el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
        el.style.opacity = "1"
    });
});

elements.forEach(el => {
    el.addEventListener("mouseover", () => {
        cursorCircle.classList.add("biggerCursor");
    });
    el.addEventListener("mouseout", () => {
        cursorCircle.classList.remove("biggerCursor");
    });
});


let timeline = gsap.timeline();

timeline.to(".image-wrap", {
    height: "550px",
    backgroundSize: "100%" ,
    duration: 1.5,
    ease: "power4.inOut",
}).to(".image-wrap", {
    height: "250px",
    y: "0",
    backgroundPosition: "50%",
    duration: 1.3,
    ease: "power3.inOut",
}, 1.5)
.from(".big-name", 
{
    // y: getYDistance(".big-name"),
    y: "1000px",  
    duration: 1,
    ease: "power3.inOut",  
}, 1.5)
.from(".hide", 
{
    opacity: "0",
    duration: 1.3,
    ease: "power3.inOut"
}, 1.5)

function getYDistance(el) {
    return(
        window.innerHeight - document.querySelector(el).getBoundingClientrect().top
    );
}

// imageWrap.addEventListener("mousemove", (e) => {
//     let rect = imageWrap.getBoundingClientRect();
//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;
//     let xSpeed = .008;
//     let ySpeed = .02;

//     let xMoving = x - imageWrap.clientWidth / 2;
//     let yMoving = y - imageWrap.clientHeight / 2;

//     imageWrap.style.backgroundPosition = `calc(50% + ${xMoving * xSpeed}px calc(58% + ${yMoving + ySpeed}px))`
// });