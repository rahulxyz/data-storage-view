const slider = document.getElementById("slider");
const sliderValue = document.getElementById("tooltip");

slider.oninput = function(){
   sliderValue.innerHTML = this.value+ "<span>&nbsp;&nbsp;GB LEFT</span>";
};

['mousemove','touchmove'].forEach(evt=>
    slider.addEventListener(evt, function(){
        setSliderStyle();
    })
);

slider.addEventListener('mouseover',()=>{
    sliderValue.style.visibility = 'visible';
})

slider.addEventListener('mouseout',()=>{
    sliderValue.style.visibility = 'hidden';
})

setSliderStyle = () =>{
    let x = slider.value;
    x /= 10;

    let transparent = `linear-gradient(to right, transparent ${x}%, var(--very-dark-blue) ${x}%)`;
    let lin = `linear-gradient(to right, var(--light-pink) , var(--dark-pink))`;
    slider.style.background = transparent+","+lin;
}

// Run once at start
setSliderStyle();
