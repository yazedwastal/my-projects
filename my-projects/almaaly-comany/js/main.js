let heading4 = document.getElementsByTagName('h4');
let toggle = document.querySelector('.toggle');
let nav_img = document.querySelector('nav img');
let nav_btn = document.querySelector('nav button');
let nav = document.querySelector('.navbar ul');
let close = document.querySelector('.close');
let link1 = document.querySelector('.under-maal .an-maali');
let link2 = document.querySelector('.under-maal .ser');
let link3 = document.querySelector('.under-maal .phot-cent');
let nums = document.querySelectorAll('.number .num');
let section = document.querySelector('.clup');
let section2= document.querySelector('.mm');
let started = false;
/*Link1 */
// window.addEventListener('scroll',onscroll);
heading4[0].onclick = function(){
    link1.style.display='block';
}
link1.onmouseover = function(){
    link1.style.display='block';
}
link1.onmouseout = function(){
    link1.style.display='none';
}
/*Link2 */
heading4[1].onclick = function(){
    link2.style.display='block';
}
link2.onmouseover = function(){
    link2.style.display='block';
}
link2.onmouseout = function(){
    link2.style.display='none';
}
/*Link3 */
heading4[2].onclick = function(){
    link3.style.display='block';
}
link3.onmouseover = function(){
    link3.style.display='block';
}
link3.onmouseout = function(){
    link3.style.display='none';
}
/* */
toggle.onclick = function(){
    toggle.style.display='none';
    nav_btn.style.display='none';
    nav_img.style.display='none';
    nav.style.display='flex';
    close.style.display='block';
};
close.onclick = function(){
    nav.style.display='none';
    nav_btn.style.display='none';
    nav_img.style.display='block';
    toggle.style.display = 'block';
    close.style.display='none';
};



/* */
// let head_name = document.querySelectorAll('.head-name');
// window.onscroll = function(){
//     let boxes = document.querySelectorAll('.who');
//     boxes.forEach(box => {
//         if( box.offsetTop < window.scrollY){
//             box.classList.add('active');
//         }
//     })
// };


/*Section 1 */
gsap.from('.row-rtl',1.5, {opacity:0, y: -300, delay: .2});
gsap.from('.family-img',1.5, {opacity:0, x: -300, delay: .2});
/*Section 2 */
// gsap.from('.rtl-e3lan',1.5, {opacity:0, x: 300, delay: .2});
// gsap.from('.ltr-e3lan',1.5, {opacity:0, x: -300, delay: .2});
/*Section 3 */

/* */
window.onscroll = function (){
    if(window.scrollY >= section.offsetTop){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el){
    let goal =el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },200 /goal)
};

