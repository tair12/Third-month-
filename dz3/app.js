const wrapper = document.querySelector('.btns');
const newBtn = document.createElement('button');
wrapper.appendChild(newBtn);

wrapper.addEventListener('click', (event)=> {
    if (event.target.tagName === "BUTTON") {
        // console.log(event.target)
        // console.dir(event.target)
        if (event.target.classList.contains('red')){
            event.target.classList.remove('red')
        }else {
            event.target.classList.add('red')
        }
    }
})