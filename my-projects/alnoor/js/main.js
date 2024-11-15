let profImg = document.querySelectorAll('.profImg');
let profImg2 = document.querySelector('.profImg2');
let ul = document.getElementById('ul');
let listRight = document.querySelectorAll('.listRight');
// let logoutBtn = document.getElementById('logoutBtn');
let logoutBtn2 = document.getElementById('logoutBtn2');
let list = document.querySelectorAll('#list');
let list2 = document.getElementById('list2');
let navMain = document.getElementById('navMain');
let closeList = document.getElementById('closeList');
let closeListMain = document.getElementById('closeListMain');

for(let i=0; i < profImg.length; i++){
    profImg[i].addEventListener('click' , function(){
        var logoutBtn = this.nextElementSibling;
            if(logoutBtn.style.display == 'none'){
                logoutBtn.style.display = 'flex';
            }else{
                logoutBtn.style.display = 'none';
            }
    });
}
for(let i=0; i < list.length; i++){
    list[i].addEventListener('click' , function(){
        var nav = this.nextElementSibling;
        for(let j=0; j < listRight.length; j++){
            nav.style.display = 'block';
            listRight[j].style.width = '235px';
            list[i].style.display = 'none';
        }
    });
}

// list.addEventListener('click' , function(){
//     listRight.style.width = '235px';
//     nav.style.display = 'block';
//     list.style.display = 'none';
//     closeList.style.display = 'block';
// });
// closeList.addEventListener('click' , function(){
//     listRight.style.width = '50px';
//     nav.style.display = 'none';
//     list.style.display = 'block';
//     closeList.style.display = 'none';
// });
// // 
// list2.addEventListener('click' , function(){
//     navMain.style.height = '160px';
//     navMain.style.display = 'block';
//     ul.style.display = 'flex';
//     ul.style.transitionDelay = '0.5s'
//     ul.style.marginTop = '20px';
//     ul.style.justifyContent = 'center';
//     ul.style.flexWrap = 'wrap';
//     ul.style.gap = '10px 0';
//     list2.style.display = 'none';
//     closeListMain.style.display = 'block';
// });
// closeListMain.addEventListener('click' , function(){
//     navMain.style.height = '60px';
//     navMain.style.display = 'flex';
//     ul.style.display = 'none';
//     ul.style.transitionDelay = '0.5s'
//     ul.style.marginTop = '0';
//     ul.style.justifyContent = 'none';
//     ul.style.flexWrap = 'nowrap';
//     ul.style.gap = '10px 0';
//     list2.style.display = 'block';
//     closeListMain.style.display = 'none';
// });
let arrowUp = document.getElementById('arrowUp');

onscroll =()=>{
    if(scrollY > 186){
        arrowUp.style.right = '20px';
        arrowUp.style.opacity = '1';
        arrowUp.style.transition = '0.3s';
    }else{
        arrowUp.style.right = '-50px';
        arrowUp.style.opacity = '0';
        arrowUp.style.transition = '0.3s';
    }
    arrowUp.onclick = ()=>{
        scroll({
            top: 0,
            behavior: "smooth"
        })
    }
}
var accordion = document.querySelectorAll('#accordion');

for(let i=0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        var desc = this.nextElementSibling;
            if(desc.style.maxHeight){
                desc.style.maxHeight = null;
            }else{
                desc.style.maxHeight = (desc.scrollHeight + 10) + 'px';
            }
     });

}


    

