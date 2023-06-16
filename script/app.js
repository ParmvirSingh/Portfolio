let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 3;

if(document.body.clientWidth < 1000){
    
    elementsToShow = 1;
}
else if(document.body.clientWidth < 1500){
    
    elementsToShow = 2;
}

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition='margin';
slider.style.transitionDuration='1s';

for (let index = 0; index < cards.length; index++){

    const element = cards[index];
    element.style.width = cardWidth + 'px';
}

function prev(){

    const minMarginLeft = 0;
    const currentMarginLeft = parseInt(slider.style.marginLeft) || 0;
    const newMarginLeft = Math.min(currentMarginLeft + cardWidth, minMarginLeft);
    slider.style.marginLeft = newMarginLeft + 'px';

    updateButtonOpacity();
}

function next(){

    const maxMarginLeft = -(cardWidth * (cards.length - elementsToShow));
    const currentMarginLeft = parseInt(slider.style.marginLeft) || 0;
    const newMarginLeft = Math.max(currentMarginLeft - cardWidth, maxMarginLeft);
    slider.style.marginLeft = newMarginLeft + 'px';

    updateButtonOpacity();
}

function updateButtonOpacity(){

    const maxMarginLeft = -(cardWidth * (cards.length - elementsToShow));
    const currentMarginLeft = parseInt(slider.style.marginLeft) || 0;

    const leftButton = document.getElementById('leftButton');
    leftButton.style.opacity = currentMarginLeft >= 0 ? '0.1' : '1';

    const rightButton = document.getElementById('rightButton');
    rightButton.style.opacity = currentMarginLeft <= (maxMarginLeft + cardWidth) ? '0.1' : '1';
}

updateButtonOpacity();

function expandParagraph(paragraphId, button){

    var paragraph = document.getElementById(paragraphId);

    paragraph.classList.toggle("max-h-20");
    paragraph.classList.toggle("h-auto");

    if (paragraph.classList.contains("h-auto")){

        button.textContent = "Read Less";
    }
    else{
        
        button.textContent = "Read More";
    }
}

const html = document.querySelector("html");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

moon.addEventListener("click", ()=>{
    html.classList.toggle("dark");
});

sun.addEventListener("click", ()=>{
    html.classList.toggle("dark");
});