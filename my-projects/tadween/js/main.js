let logo = document.getElementById('logo');
let loginDar = document.getElementById('loginDar');
let login = document.getElementById('login');
let footer = document.getElementById('footer');
let more = document.getElementById('more');
let less = document.getElementById('less');
let hidenMore = document.getElementById('hide-more');
let foodPro = document.getElementById('foodPro');
let threePoint = document.getElementById('threePoint');
let settAccList = document.getElementById('settAccList');
let settAccListUser = document.getElementById('settAccListUser');
let moreNoti = document.getElementById('moreNoti');
let settNoti = document.getElementById('settNoti');
let onloadLogo = document.getElementById('onloadLogo');
let allMain = document.getElementById('allMain');
let hideUser = document.getElementById('hideUser');
let arrow = document.getElementById('arrow');
let menuMob = document.getElementById('menu-mob');
let listNav = document.getElementById('listNav');
let listNav2 = document.getElementById('listNav2');
let closeMenue = document.getElementById('close');
let onloadMain = document.getElementById('onloadMain');
let peopleCard = document.getElementById('peopleCard');
let backHome = document.getElementById('backHome');
let backHomeMess = document.getElementById('backHomeMess');
let addTadweena = document.getElementById('addTadweena');
let countGift = document.getElementById('countGift');
let boxGift = document.getElementById('boxGift');
let closeGift = document.getElementById('closeGift');
let closeCardBtn = document.getElementById('closeCardBtn');
let infUserRighPag = document.getElementById('infUserRighPag');
let allBlockUser = document.getElementById('allBlockUser');
let blockUser = document.getElementById('blockUser');
let mainPageI = document.getElementById('mainPageI');
let mainPageA = document.getElementById('mainPageA');
let giftBtn = document.getElementById('giftBtn');
let closeGift2 = document.getElementById('closeGift2');
let toGift2 = document.getElementById('toGift2');
let lessList = document.getElementById('lessList');
let moreList = document.getElementById('moreList');
let hiddenList = document.getElementById('hiddenList');
let header = document.getElementById('header');
let removeBlockBtn = document.getElementById('removeBlockBtn');
let centerCvAcc = document.getElementById('centerCvAcc');
let usergroupMess = document.getElementById('usergroupMess');
let centerDardasha = document.getElementById('centerDardasha');


document.body.classList.remove('nav-open');


// let backPrev = document.getElementById('backPrev');
// backPrev.addEventListener('click' , ()=>{
//     history.back();
// });


// Start Jquery Code

// $(document).ready(function() {
//     $(document).ready(function() {
//         $(".owl-carousel").owlCarousel({
//             loop:false,
//             margin:10,
//             responsiveClass:true,
//             responsive:{
//                 0:{
//                     items:1,
//                     nav:true
//                 },
//                 600:{
//                     items:1,
//                     nav:false
//                 },
//                 1000:{
//                     items:1,
//                     nav:true,
//                     loop:false
//                 }
//         }
//         });
//     });
// });


let swiperSlide = new Swiper('.swiper' , {
    loop: false,
    spaceBetween: 30,
    grabCursor: true,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
});

// End Jquery Code 



// If Reload The Site Dont Prev To The Home Page 
// backPrev.addEventListener('click' , ()=>{
//     addEventListener('beforeunload' , ()=>{
//         localStorage.setItem('lastPage' , location.href);
//     });
//     addEventListener('load' , ()=>{
//         const lastPage = localStorage.lastPage;
//         if(lastPage && lastPage !== location.href){
//             location.href = lastPage;
//         }
//     })
// });






// function saveScrollPosition(page) {
//     // Save the scroll position to localStorage for the given page
//     localStorage.setItem('scrollPosition' + page, window.scrollY);
// }
// // Function to restore scroll position
// function restoreScrollPosition(page) {
//     // Retrieve the saved scroll position from localStorage
//     const savedScrollY = localStorage.getItem('scrollPosition' + page);
//     if (savedScrollY !== null) {
//         // Scroll to the saved position
//         window.scrollTo(0, parseInt(savedScrollY, 10));
//     }
// }

// // // Call this function on page load
// function handlePageLoad() {
//     // Assuming your pages have unique IDs or names like "page1", "page2", etc.
//     const currentPage = document.body.getAttribute('data-page'); // Set this attribute on your body or a container
//     if (currentPage) {
//         restoreScrollPosition(currentPage);
//     }
// }

// // // Call this function before leaving the page
// function handlePageUnload() {
//     // Again, assuming your pages have unique IDs or names
//     const currentPage = document.body.getAttribute('data-page');
//     if (currentPage) {
//         saveScrollPosition(currentPage);
//     }
// }

// Attach events



let centerFollowAdd = document.getElementById('centerFollowAdd');
let centerFollowingAdd = document.getElementById('centerFollowingAdd');
// If Onclick The showMore Button
let showMore = document.querySelectorAll('#show-more');
let followingYour = document.getElementById('followingYour');
showMore[0].addEventListener('click' , ()=>{
    centerFollowAdd.style.display = 'block';
    centerFollowingAdd.style.display = 'none';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    noticationBtnA.style.color = 'black';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    messgeBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerDardasha.style.display = 'none';
});
showMore[1].addEventListener('click' , ()=>{
    centerFollowAdd.style.display = 'block';
    centerFollowingAdd.style.display = 'none';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    noticationBtnA.style.color = 'black';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    messgeBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerDardasha.style.display = 'none';
});
followingYour.addEventListener('click' , ()=>{
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'block';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    noticationBtnA.style.color = 'black';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    messgeBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerDardasha.style.display = 'none';
});


// If Onclick Close Image Button
let closeImgIcon = document.querySelectorAll('#closeImgIcon');
let closeImgIcon2 = document.getElementById('closeImgIcon2');
let imgIcon = document.querySelectorAll('#imgIcon');

closeImgIcon[0].addEventListener('click', ()=>{
    imgIcon[0].style.display = 'none';
});
closeImgIcon[1].addEventListener('click', ()=>{
    imgIcon[1].style.display = 'none';
});

// more Button
hidenMore.style.display = 'none';
less.style.display = 'none';
more.style.display = 'block';
more.onclick = function(){
    hidenMore.style.display = 'block';
    hidenMore.style.transition = '0.2s';
    more.style.display = 'none';
    less.style.display = 'block';
};
// less Button
less.onclick = function(){
    hidenMore.style.display = 'none';
    hidenMore.style.transition = '0.2s';
    less.style.display = 'none';
    more.style.display = 'block';
};
// more Button List
moreList.onclick = function(){
    hiddenList.style.display = 'block';
    hiddenList.style.transition = '0.2s';
    moreList.style.display = 'none';
    lessList.style.display = 'block';
};
// less Button List
lessList.onclick = function(){
    hiddenList.style.display = 'none';
    hiddenList.style.transition = '0.2s';
    lessList.style.display = 'none';
    moreList.style.display = 'block';
};




// Food Pro
// center.addEventListener('click' , function(){
//     foodPro.style.display = 'none';
//     foodPro.style.transition = '0.2s';
// });

foodPro.style.display = 'none';
threePoint.addEventListener('click' ,()=>{
    if(foodPro.style.display == 'none'){
        foodPro.style.display = 'block';
    }else{
        foodPro.style.display = 'none';
    }
});
settAccListUser.style.display = 'none';
settAccList.addEventListener('click' ,()=>{
    if(settAccListUser.style.display == 'none'){
        settAccListUser.style.display = 'block';
    }else{
        settAccListUser.style.display = 'none';
    }
});

let followUser = document.getElementById('followUser');
let waitingBox = document.getElementById('waitingBox');
let egnore = document.getElementById('egnore');
let closeWaitBtn = document.getElementById('closeWaitBtn');
let canselBlockBtn = document.getElementById('canselBlockBtn');
let canselBlockBtn1 = document.getElementById('canselBlockBtn1');
let blockBtn = document.getElementById('blockBtn');
let centerFoll = document.getElementById('centerFoll');
let tadwBtn = document.getElementById('tadwBtn');
let allInfoUser = document.getElementById('allInfoUser');
let follInf = document.getElementById('follInf');
let messShowBlock = document.getElementById('messShowBlock');
let blockUserOff = document.getElementById('blockUserOff');
let showProf = document.getElementById('showProf');
let allRemoBlockUser = document.getElementById('allRemoBlockUser');
followUser.innerHTML = 'متابعة';
followUser.addEventListener('click' ,()=>{
    if(followUser.innerHTML == 'متابعة'){
        followUser.innerHTML = 'قيد الانتظار';
        followUser.style.background = 'white';
        followUser.style.color = 'black';
    }else if(followUser.innerHTML == 'قيد الانتظار'){
        followUser.innerHTML = 'متابعة';
        followUser.style.background = '#44a7e0';
        followUser.style.color = 'white';
    }else if(followUser.innerHTML == 'محظور'){
        followUser.innerHTML = 'محظور';
        followUser.style.background = 'white';
        followUser.style.color = 'red';
        blockUser.style.display = 'block';
        blockUserOff.style.display = 'none';
        centerFoll.style.display = 'block';
        allBlockUser.style.display = 'none';
        tadwBtn.style.display = 'flex';
        allInfoUser.style.display = 'block';
        settAccListUser.style.display = 'none';
        settAccList.style.display = 'block';
        settAccList.style.marginRight = '0';
        follInf.style.display = 'none';
        messShowBlock.style.display = 'none';
        followUser.style.display = 'block';
        allRemoBlockUser.style.display = 'flex';
    }
       
});
removeBlockBtn.addEventListener('click' ,()=>{
        blockUser.style.display = 'block';
        blockUserOff.style.display = 'none';
        allRemoBlockUser.style.display = 'none';
        centerFoll.style.display = 'block';
        allBlockUser.style.display = 'none';
        tadwBtn.style.display = 'flex';
        allInfoUser.style.display = 'block';
        settAccListUser.style.display = 'none';
        settAccList.style.display = 'block';
        settAccList.style.marginRight = '0';
        follInf.style.display = 'block';
        messShowBlock.style.display = 'none';
        followUser.style.display = 'block';
        followUser.innerHTML = 'متابعة' ;
        followUser.style.color = 'white';
        followUser.style.border = '1px solid #44a7e0d0';
        followUser.style.background = '#44a7e0d0';
});

egnore.addEventListener('click' ,()=>{
    followUser.innerHTML = 'متابعة';
    waitingBox.style.display = 'none';
    followUser.style.background = '#44a7e0';
    followUser.style.color = 'white';
});
closeWaitBtn.addEventListener('click' , ()=>{
    waitingBox.style.display = 'none';
});
blockUser.addEventListener('click' , ()=>{
    allBlockUser.style.display = 'flex';
    settAccListUser.style.display = 'none';
});
canselBlockBtn.addEventListener('click' , ()=>{
    allBlockUser.style.display = 'none';
});
canselBlockBtn1.addEventListener('click' , ()=>{
    allRemoBlockUser.style.display = 'none';
});

// If CLick Block Button
blockBtn.addEventListener('click' , ()=>{
    blockUser.style.display = 'none';
    blockUserOff.style.display = 'block';
    centerFoll.style.display = 'none';
    allBlockUser.style.display = 'none';
    tadwBtn.style.display = 'none';
    allInfoUser.style.display = 'none';
    settAccListUser.style.display = 'none';
    settAccList.style.display = 'block';
    settAccList.style.marginRight = '47px';
    follInf.style.display = 'none';
    messShowBlock.style.display = 'flex';
    followUser.style.display = 'block';
    followUser.innerHTML = 'محظور' ;
    followUser.style.color = 'red';
    followUser.style.border = '1px solid red';
    followUser.style.background = 'white';

});
// If CLick Cansel Block Button
blockUserOff.addEventListener('click' , ()=>{
    blockUser.style.display = 'block';
    blockUserOff.style.display = 'none';
    centerFoll.style.display = 'none';
    allBlockUser.style.display = 'none';
    tadwBtn.style.display = 'none';
    allInfoUser.style.display = 'none';
    settAccListUser.style.display = 'none';
    settAccList.style.display = 'block';
    settAccList.style.marginRight = '47px';
    follInf.style.display = 'none';
    messShowBlock.style.display = 'flex';
    followUser.style.display = 'block';
    allRemoBlockUser.style.display = 'flex';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';d
});
showProf.addEventListener('click' , ()=>{
    blockUser.style.display = 'block';
    blockUserOff.style.display = 'none';
    allRemoBlockUser.style.display = 'none';
    centerFoll.style.display = 'block';
    allBlockUser.style.display = 'none';
    tadwBtn.style.display = 'flex';
    allInfoUser.style.display = 'block';
    settAccListUser.style.display = 'none';
    settAccList.style.display = 'block';
    settAccList.style.marginRight = '0';
    follInf.style.display = 'none';
    messShowBlock.style.display = 'none';
    followUser.style.display = 'block';
    followUser.innerHTML = 'محظور' ;
    followUser.style.color = 'red';
    followUser.style.border = '1px solid red';
    followUser.style.background = 'white';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
});


moreNoti.style.display = 'none';
settNoti.addEventListener('click' , function(){
    if(moreNoti.style.display == 'none'){
        moreNoti.style.display = 'block';
        moreNoti.style.transition = '0.2s';
    }else{
        moreNoti.style.display = 'none';
    }
});
// onload
setInterval(function(){
    onloadLogo.style.display = 'none';
    allMain.style.display = 'flex';
},2000);
setInterval(function(){
    onloadMain.style.display = 'none';
    peopleCard.style.display = 'block';
},3000);
// Show More Button
// arrow icon to up the main page
let scrollTopSmooth = ()=>{
    scroll({
        top:0,
        behavior: "smooth"
    });
}
// onscroll = ()=>{
//     if(scrollY > 333){
//         arrow.style.display = "block";
//     }else{
//         arrow.style.display = "none";
//     }
// };
let searchPage = document.getElementById('searchPage');
// OnScroll To Search Btn 

let tadTitle =document.getElementById('tadTitle');
// OnScroll To Center User Profile
searchPage.style.top = '125px';
onscroll = ()=>{
    if(scrollY >= 416.79998779296875){
        tadTitle.style.position = 'fixed';
        tadTitle.style.top = '69px';
        // tadTitle.style.width = '60%';
        tadwBtn.style.position = 'fixed';
        tadwBtn.style.top = '69px';
        tadwBtn.style.width = '102%';
        tadTitle.style.transition = '0.3s';
        tadwBtn.style.transition = '0.3s';
        // tadwe.style.width = 'calc(100%/6.6)';
        // rodod.style.width = 'calc(100%/6.6)';
        // media.style.width = 'calc(100%/6.6)';
        // likes.style.width = 'calc(100%/6.6)';
        
    }else{   
        tadwBtn.style.position = 'relative';
        tadwBtn.style.top = '0';
        tadwBtn.style.width = '100%';
        tadTitle.style.position = 'relative';
        tadTitle.style.top = '0';
        tadTitle.style.width = '100%'; 
        tadTitle.style.transition = '0.3s'; 
        tadwBtn.style.transition = '0.3s';  
        // tadwe.style.width = 'calc(100%/4)';
        // rodod.style.width = 'calc(100%/4)';
        // media.style.width = 'calc(100%/4)';
        // likes.style.width = 'calc(100%/4)';
    }
     if(scrollY > 333){
        arrow.style.display = "block";
    }else{
        arrow.style.display = "none";
    }
    if(scrollY > 20){
        searchPage.style.top = '53px';
        searchPage.style.transition = '0.4s';
        // hashtaqSear.style.margin = '129px 0 0';
        // userSearch.style.margin = '129px 0 0';
        // peopleCard4.style.margin = '129px 0 0';
        // firstUp.style.margin = '129px 0 0';
        // newSearch.style.margin = '129px 0 0';
        // peopleSearch.style.margin = '129px 0 0';
        // mediaSearch.style.margin = '129px 0 0';
        hashSear.style.top = '53px';
        hashSear.style.transition = '0.4s';
        // header3.style.display = 'none';
        header3.style.transition = '0.4s';
        messSearDar.style.transition = '0.4s';
        messSearDar.style.top = '0';

    }else{
        messSearDar.style.top = '71px';
        searchPage.style.top = '126px';
        // hashtaqSear.style.margin = '160px 0 0';
        // userSearch.style.margin = '160px 0 0';
        // peopleCard4.style.margin = '160px 0 0';
        // firstUp.style.margin = '160px 0 0';
        // newSearch.style.margin = '160px 0 0';
        // peopleSearch.style.margin = '160px 0 0';
        // mediaSearch.style.margin = '160px 0 0';
        hashSear.style.top = '126px';
        // header3.style.display = 'flex';
        header3.style.transition = '0.4s';
        searchPage.style.transition = '0.4s';
        messSearDar.style.transition = '0.4s';
    }
    
}


arrow.onclick = ()=>{
    scrollTopSmooth();
};
// List In Right Page From (Ibad & Labtop)
menuMob.addEventListener('click' , ()=>{
    listNav.style.right = '0';
    closeMenue.style.display = 'block';
    document.body.classList.add('nav-open');
});
window.addEventListener('click' , function(event){
    if(event.target === listNav){
        listNav.style.right = '-10000px';
        document.body.classList.remove('nav-open');
    }
});
//  close Menu
closeMenue.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    listNav.style.transition = '0.4s';
    closeMenue.style.display = 'none';
    document.body.classList.remove('nav-open');
});
let imgMess = document.getElementById('imgMess');
let imgNoti = document.getElementById('imgNoti');
let imgYour = document.getElementById('imgYour');
let imgSear = document.getElementById('imgSear');
// List In Right Page From (Ibad & Labtop)(Message)
imgMess.addEventListener('click' , ()=>{
    listNav.style.right = '0';
    listNav.style.transition = '0.4s';
    closeMenue.style.display = 'block';
    document.body.classList.add('nav-open');
});
// List In Right Page From (Ibad & Labtop)(Notification)
imgNoti.addEventListener('click' , ()=>{
    listNav.style.right = '0';
    listNav.style.transition = '0.4s';
    closeMenue.style.display = 'block';
    document.body.classList.add('nav-open');
});
// List In Right Page From (Ibad & Labtop)(Your Profile)
// imgYour.addEventListener('click' , ()=>{
//     listNav.style.right = '0';
//     listNav.style.transition = '0.4s';
//     closeMenue.style.display = 'block';
// });
// List In Right Page From (Ibad & Labtop)(Search)
imgSear.addEventListener('click' , ()=>{
    listNav.style.right = '0';
    listNav.style.transition = '0.4s';
    closeMenue.style.display = 'block';
    document.body.classList.add('nav-open');
});

let prev = document.getElementById('prev');
let lgoMain = document.getElementById('lgo-main');
let lgoMain2 = document.getElementById('lgo-main2');
let lgoMain3 = document.getElementById('lgo-main3');
let lgoMain4 = document.getElementById('lgo-main4');
let lgoMain5 = document.getElementById('lgo-main5');
let lgoMain6 = document.getElementById('lgo-main6');
let lgoMain7 = document.getElementById('lgo-main7');
let centerMain = document.getElementById('centerMain');
let BookMarkBtn = document.getElementById('BookMarkBtn');
let LogOutBtn = document.getElementById('LogOutBtn');
let allLogoutDis = document.getElementById('allLogoutDis');
let centerReplMark = document.getElementById('centerReplMark');
let centerNoti = document.getElementById('centerNoti');
let centerMess = document.getElementById('centerMess');
let centerSear = document.getElementById('centerSear');
let noticationBtn = document.getElementById('noticationBtn');
let centerProf = document.getElementById('centerProf');
let notePer = document.getElementById('notePer');
let notePerList = document.getElementById('notePerList');
let messgeBtn = document.getElementById('messgeBtn');
let searchBtn = document.getElementById('searchBtn');
let tadwe = document.getElementById('tadwe');
let media = document.getElementById('media');
let likes = document.getElementById('likes');
let rodod = document.getElementById('rodod');
let tadwe2 = document.getElementById('tadwe2');
let rodod2 = document.getElementById('rodod2');
let media2 = document.getElementById('media2');
let likes2 = document.getElementById('likes2');
let tadwe4 = document.getElementById('tadwe4');
let hashtaq4 = document.getElementById('hashtaq4');
let users4 = document.getElementById('users4');
let media4 = document.getElementById('media4');
let likes4 = document.getElementById('likes4');
let peopleCard2 = document.getElementById('peopleCard2');
let peopleCard3 = document.getElementById('peopleCard3');
let peopleCard4 = document.getElementById('peopleCard4');
let peopleCard5 = document.getElementById('peopleCard5');
let centerUserMdeia = document.getElementById('centerUserMdeia');
let centerUserLike = document.getElementById('centerUserLike');
let centerUserMdeia3 = document.getElementById('centerUserMdeia3');
let replaingPage = document.getElementById('replaingPage');
let replaingPage2 = document.getElementById('replaingPage2');
let centerUserLike3 = document.getElementById('centerUserLike3');
let centerUserMdeia4 = document.getElementById('centerUserMdeia4');
let centerUserLike4 = document.getElementById('centerUserLike4');
let closeImg = document.getElementById('closeImg');
let onclickImg = document.getElementById('onclickImg');
let centerAnotherUser = document.getElementById('centerAnotherUser');
let yourProf = document.getElementById('yourProf');
let yourProf1 = document.getElementById('yourProf1');
let replayToUser = document.getElementById('replayToUser');
let userFol = document.getElementById('userFol');
let yourProfTad = document.getElementById('yourProfTad');
let yourProfMed = document.getElementById('yourProfMed');
let yourProfLike = document.getElementById('yourProfLike');
let countPost = document.getElementById('countPost');
let countPost2 = document.getElementById('countPost2');
let postText = document.getElementById('post-text');
let postText2 = document.getElementById('post-text2');
let allPostNew = document.getElementById('allPostNew');
let newTad = document.getElementById('newTad');
let closePost = document.getElementById('closePost');
let notiList = document.getElementById('notiList');
let notiListSma = document.getElementById('notiListSma');
let messgeList = document.getElementById('messgeList');
let messListSma = document.getElementById('messListSma');
let searchList = document.getElementById('searchList');
let bookMarkList = document.getElementById('bookMarkList');
let logoutBTnList = document.getElementById('logoutBTnList');
let cardPayList = document.getElementById('cardPayList');
let goYourProfile = document.getElementById('goYourProfile');
let notePerA = document.getElementById('notePerA');
let notePerI = document.getElementById('notePerI');
let noticationBtnA = document.getElementById('noticationBtnA');
let noticationBtnI = document.getElementById('noticationBtnI');
let messgeBtnI = document.getElementById('messgeBtnI');
let messgeBtnA = document.getElementById('messgeBtnA');
let searchBtnI = document.getElementById('searchBtnI');
let searchBtnA = document.getElementById('searchBtnA');
let userSearch = document.getElementById('userSearch');
let follow = document.getElementById('follow');
let unFollow = document.getElementById('unFollow');
let centerSugges = document.getElementById('centerSugges');
let hashtaqSear = document.getElementById('hashtaqSear');
let toSearchHash = document.getElementById('toSearchHash');
let toSearchHash2 = document.getElementById('toSearchHash2');
let toSearchHash3 = document.getElementById('toSearchHash3');
let toSearchHash4 = document.getElementById('toSearchHash4');
let mainPage = document.getElementById('mainPage');
let allNewMessGr = document.getElementById('allNewMessGr');
let newMassOpen = document.getElementById('newMassOpen');
let closeMess = document.getElementById('closeMess');
let suggesIcon = document.getElementById('suggesIcon');
let suggesIconA = document.getElementById('suggesIconA');
let suggesIconI = document.getElementById('suggesIconI');
let SettAccountBtn = document.getElementById('SettAccountBtn');
let SettAccountBtnA = document.getElementById('SettAccountBtnA');
let SettAccountBtnI = document.getElementById('SettAccountBtnI');
let BookMarkBtnA = document.getElementById('BookMarkBtnA');
let BookMarkBtnI = document.getElementById('BookMarkBtnI');
let LogOutBtnA = document.getElementById('LogOutBtnA');
let LogOutBtnI = document.getElementById('LogOutBtnI');
let SettAccountBtnList = document.getElementById('SettAccountBtnList');
let centerSettingAcc = document.getElementById('centerSettingAcc');
let centerUpdaAcc = document.getElementById('centerUpdaAcc');
let centerEmailAcc = document.getElementById('centerEmailAcc');
let centerUrlAcc = document.getElementById('centerUrlAcc');
let nameUser = document.getElementById('nameUser');
let urlAdd = document.getElementById('urlAdd');
let emailAdd = document.getElementById('emailAdd');
let centerGenAcc = document.getElementById('centerGenAcc');
let centerPassAcc = document.getElementById('centerPassAcc');
let cvAcc = document.getElementById('cvAcc');
let gender = document.getElementById('gender');
let passAcc = document.getElementById('passAcc');
let langAcc = document.getElementById('langAcc');
let centerLangAcc = document.getElementById('centerLangAcc');
let countryAcc = document.getElementById('countryAcc');
let cityAcc = document.getElementById('cityAcc');
let VerificationAcc = document.getElementById('VerificationAcc');
let PrivateAcc = document.getElementById('PrivateAcc');
let centerChanotiAcc = document.getElementById('centerChanotiAcc');
let centerFoodAccount = document.getElementById('centerFoodAccount');
let DeleteAcc = document.getElementById('DeleteAcc');
let creditCard = document.getElementById('creditCard');
let creditcardIcon = document.getElementById('creditcardIcon');
let widthSett = document.getElementById('widthSett');
let centerChanDeleteAcc = document.getElementById('centerChanDeleteAcc');
let centerChanPrivrAcc = document.getElementById('centerChanPrivrAcc');
let NotivicationAcc = document.getElementById('NotivicationAcc');
let InformationAcc = document.getElementById('InformationAcc');
let centerChanInfAcc = document.getElementById('centerChanInfAcc');
let centerChanVeriAcc = document.getElementById('centerChanVeriAcc');
let centerChanCounrAcc = document.getElementById('centerChanCounrAcc');
let centerChanCityAcc = document.getElementById('centerChanCityAcc');
let allAddAnother = document.getElementById('allAddAnother');
let pointBtnAnother = document.getElementById('pointBtnAnother');
let pointBtnAnotherList = document.getElementById('pointBtnAnotherList');
let closeSignInBtn = document.getElementById('closeSignInBtn');
let homeIcon = document.getElementById('homeIcon');
let searchIcon = document.getElementById('searchIcon');
let searIconList = document.getElementById('searIconList');
let followList = document.getElementById('followList');
let owlStage = document.getElementsByClassName('owl-stage');
let editProfile = document.getElementById('editProfile');
let CenterEditProfile = document.getElementById('CenterEditProfile');


// Follow Button 
follow.innerHTML = 'متابعة';
follow.addEventListener('click' , ()=>{
    if(follow.innerHTML == 'متابعة'){
        follow.innerHTML = 'إلغاء المتابعة';
        follow.style.background = 'white';
        follow.style.color = 'black';
        follow.style.border = '1px solid #44a7e0';
        follow.style.width = '67px';
        follow.style.height = '32px';
        follow.style.padding = '0px';
        follow.style.fontSize = '11px';
    }else{
        follow.style.background = '#44a7e0';
        follow.style.color = 'white';
        follow.innerHTML = 'متابعة';
    }
        
});
newMassOpen.addEventListener('click' , ()=>{
    allNewMessGr.style.display = 'flex';
    addEventListener('click' , (event)=>{
        if(event.target === allNewMessGr){
            allNewMessGr.style.display = 'none';
        }
    });
});
closeMess.addEventListener('click' , ()=>{
    allNewMessGr.style.display = 'none';
});
// Open New Tadweena From Site Logo  
allPostNew.style.right = '-10000px';
newTad.addEventListener('click' ,()=> {
    allPostNew.style.right = '0';
    allPostNew.style.transition = '0.4s';
    document.body.classList.add('nav-open');
});
window.addEventListener('click' , function(event){
    if(event.target === allPostNew){
        allPostNew.style.right = '-10000px';
        document.body.classList.remove('nav-open');
    }
});
// Open New Tadweena From (new tadweena Button)  
addTadweena.addEventListener('click' ,()=> {
    allPostNew.style.right = '0';
    allPostNew.style.transition = '0.4s';
});
newTad.addEventListener('click' ,()=> {
    allPostNew.style.right = '0';
    allPostNew.style.transition = '0.4s';
    document.body.classList.add('nav-open');
});
closePost.addEventListener('click' ,()=> {
    allPostNew.style.right = '-10000px';
    allPostNew.style.transition = '0.4s';
    document.body.classList.remove('nav-open');
});

postText.onkeyup = ()=>{
    countPost.textContent = postText.value.length;
}

postText2.onkeyup = ()=>{
    countPost2.textContent = postText2.value.length;
}




let optiName2 = document.getElementById('optiName2');
let cvCount = document.getElementById('cvCount');

optiName2.onkeyup = ()=>{
    cvCount.textContent = optiName2.value.length;
}
// If Onclick User Name Move To The Index(user name)
let userNameSett = document.getElementById('userNameSett');
let usernameL = document.getElementById('usernameL');
let usernameAcc = document.getElementById('usernameAcc');
nameUser.addEventListener('click' , ()=>{
    usernameL.setAttribute('value' , usernameAcc.innerHTML )
});
// If Onclick Email Address Move To The Index
let emailAddSett = document.getElementById('emailAddSett');
let EmailNameL = document.getElementById('EmailNameL');
emailAdd.addEventListener('click' , ()=>{
    EmailNameL.setAttribute('value' , emailAddSett.innerHTML )
});
let closeLogout = document.getElementById('closeLogout');
closeLogout.addEventListener('click' , ()=>{
    allLogoutDis.style.right = '-10000px';
});






notePer.addEventListener('click', ()=>{
    // owlStage[0].style.left = '-1980px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'block';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    peopleCard3.style.display = 'block';
    peopleCard5.style.display = 'none';
    // centerUserMdeia.style.display = 'none';
    // centerUserMdeia3.style.display = 'block';
    // replaingPage.style.display = 'none';
    // centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    notePerA.style.color = '#44a7e0d0';
    creditcardIconA.style.color = 'black';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    tadwe2.style.background = '#f4f4f4';
    tadwe2.style.borderBottom = '2px solid #44a7e0d0';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});



notePerList.addEventListener('click', ()=>{
    tadwe2.style.background = '#f4f4f4';
    rodod2.style.background = 'white';
    media2.style.background = 'white';
    likes2.style.background = 'white';
    tadwe2.style.borderBottom = '2px solid #44a7e0d0';
    rodod2.style.borderBottom = 'none';
    media2.style.borderBottom = 'none';
    likes2.style.borderBottom = 'none';
    centerMain.style.display = 'none';
    listNav.style.right = '-10000px'
    centerProf.style.display = 'block';
    people4.style.display = 'block';
    centerAnotherDar2.style.display = 'block';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    // replaingPage.style.display = 'none';
    // centerUserMdeia.style.display = 'none';
    // centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerEmailAcc.style.display = 'none';
    centerUpdaAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    notiIconList.style.color = 'black';
    messIconList.style.color = 'black';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
let homeIconList = document.getElementById('homeIconList');
let notiIconList = document.getElementById('notiIconList');
let messIconList = document.getElementById('messIconList');
homeIcon.addEventListener('click', ()=>{
    centerAnotherUser.style.display = 'none';
    centerMain.style.display = 'block';
    homeIconList.style.color = '#44a7e0d0';
    searIconList.style.color = 'black';
    notiIconList.style.color = 'black';
    messIconList.style.color = 'black';
    menuMob.style.display = 'block';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUpdaAcc.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerCvAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
    
});
// Media AND Films 
media.addEventListener('click', ()=>{
    // owlStage[1].style.left = '-660px';
    // owlStage[1].style.transition = '0.3s';
//     centerMain.style.display = 'none';
//     peopleCard2.style.display = 'none';
//     peopleCard5.style.display = 'none';
//     // centerUserMdeia.style.display = 'block';
//     // centerUserLike.style.display = 'none';
//     // replaingPage.style.display = 'none';
//     replaingPage2.style.display = 'none';
//     centerNoti.style.display = 'none';
//     centerMess.style.display = 'none';
//     centerSear.style.display = 'none';
//     showCommentMain.style.display = 'none';
//     centerGiftNum.style.display = 'none';
//     boxGift.style.display = 'none';
    tadwe.style.background = 'white';
    rodod.style.background = 'white';
    media.style.background = '#f4f4f4';
    likes.style.background = 'white';
    tadwe.style.borderBottom = 'none';
    rodod.style.borderBottom = 'none';
    media.style.borderBottom = '2px solid #44a7e0d0';
    likes.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// Tadweeenat 
tadwe.addEventListener('click', ()=>{
    // owlStage[1].style.left = '-1980px';
    // owlStage[1].style.transition = '0.3s';
//     centerMain.style.display = 'none';
//     peopleCard2.style.display = 'block';
//     peopleCard5.style.display = 'none';
//     // centerUserMdeia.style.display = 'block';
//     // centerUserLike.style.display = 'none';
//     // replaingPage.style.display = 'none';
//     replaingPage2.style.display = 'none';
//     centerNoti.style.display = 'none';
//     centerMess.style.display = 'none';
//     centerSear.style.display = 'none';
//     showCommentMain.style.display = 'none';
//     centerGiftNum.style.display = 'none';
//     boxGift.style.display = 'none';
    tadwe.style.background = '#f4f4f4';
    rodod.style.background = 'white';
    media.style.background = 'white';
    likes.style.background = 'white';
    tadwe.style.borderBottom = '2px solid #44a7e0d0';
    rodod.style.borderBottom = 'none';
    media.style.borderBottom = 'none';
    likes.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
    
});
// Replaying 
rodod.addEventListener('click', ()=>{
    // owlStage[1].style.left = '-1320px';
    // owlStage[1].style.transition = '0.3s';
//     centerMain.style.display = 'none';
//     peopleCard2.style.display = 'none';
//     peopleCard3.style.display = 'none';
//     peopleCard5.style.display = 'none';
//     centerUserMdeia.style.display = 'none';
//     centerUserLike.style.display = 'none';
//     centerUserMdeia3.style.display = 'none';
//     replaingPage.style.display = 'none';
//     replaingPage2.style.display = 'block';
//     centerUserLike3.style.display = 'none';
//     centerNoti.style.display = 'none';
//     centerMess.style.display = 'none';
//     centerSear.style.display = 'none';
//     showCommentMain.style.display = 'none';
//     centerGiftNum.style.display = 'none';
//     boxGift.style.display = 'none';
    tadwe.style.background = 'white';
    rodod.style.background = '#f4f4f4';
    media.style.background = 'white';
    likes.style.background = 'white';
    tadwe.style.borderBottom = 'none';
    rodod.style.borderBottom = '2px solid #44a7e0d0';
    media.style.borderBottom = 'none';
    likes.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// Likes 
likes.addEventListener('click', ()=>{
    // owlStage[1].style.left = '0px';
    // owlStage[1].style.transition = '0.3s';
//     centerMain.style.display = 'none';
//     peopleCard2.style.display = 'none';
//     peopleCard5.style.display = 'none';
//     centerUserMdeia.style.display = 'none';
//     centerUserLike.style.display = 'block';
//     replaingPage.style.display = 'none';
//     replaingPage2.style.display = 'none';
//     centerNoti.style.display = 'none';
//     centerMess.style.display = 'none';
//     centerSear.style.display = 'none';
//     showCommentMain.style.display = 'none';
//     centerGiftNum.style.display = 'none';
//     boxGift.style.display = 'none';
    tadwe.style.background = 'white';
    rodod.style.background = 'white';
    media.style.background = 'white';
    likes.style.background = '#f4f4f4';
    tadwe.style.borderBottom = 'none';
    rodod.style.borderBottom = 'none';
    media.style.borderBottom = 'none';
    likes.style.borderBottom = '2px solid #44a7e0d0';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// 
// handlePageLoad();
//     handlePageUnload();
//     window.addEventListener('load', handlePageLoad);
//     window.addEventListener('beforeunload', handlePageUnload);  


if(localStorage.length > 0){
    centerUserMdeia3.scrollY = localStorage.saveScroll;
    centerUserLike3.scrollY = localStorage.saveScroll4;
    peopleCard3.scrollY = localStorage.saveScroll3;
    replaingPage.scrollY = localStorage.saveScroll2;
}


// Media2 AND Films 


// if(owlStage[0].style.left = '-660px'){
//     tadwe2.style.background = 'white';
//     rodod2.style.background = 'white';
//     media2.style.background = '#f4f4f4';
//     likes2.style.background = 'white';
//     tadwe2.style.borderBottom = 'none';
//     rodod2.style.borderBottom = 'none';
//     media2.style.borderBottom = '2px solid #44a7e0d0';
//     likes2.style.borderBottom = 'none';
// }


// function resizeCarouselMedia2(){
//     if(window.innerWidth < 575){
//         owlStage[0].style.left = '-320px';
//         owlStage[0].style.transition = '0.3s';
//     }else{
//         owlStage[0].style.left = '-660px';
//         owlStage[0].style.transition = '0.3s';
//     }
// }
media2.addEventListener('click', ()=>{
    // resizeCarouselMedia2();
    // addEventListener('resize' , resizeCarouselMedia2);
    
//     centerUserMdeia3.scrollY = localStorage.setItem('saveScroll' , scrollY);

//     // saveScrollPosition('page3');
//     // restoreScrollPosition('page3');
//     // centerUserMdeia3.scroll({
//     //     top: saveScrollPosition('page3'),
//     //     behavior: "smooth"
//     // });

    tadwe2.style.background = 'white';
    rodod2.style.background = 'white';
    media2.style.background = '#f4f4f4';
    likes2.style.background = 'white';
    tadwe2.style.borderBottom = 'none';
    rodod2.style.borderBottom = 'none';
    media2.style.borderBottom = '2px solid #44a7e0d0';
    likes2.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard3.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerUserMdeia3.style.display = 'block';
    replaingPage.style.display = 'none';
    replaingPage2.style.display = 'none';
    centerUserLike3.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// Tadweeenat2 



// if(owlStage[0].style.left = '-1320px'){
//     rodod2.style.background = 'red';
// }

// function resizeCarouselTadwe2(){
//     if(window.innerWidth < 575){
//         owlStage[0].style.left = '-997px';
//         owlStage[0].style.transition = '0.3s';
//     }else{
//         owlStage[0].style.left = '-1980px';
//         owlStage[0].style.transition = '0.3s';
        
//     }
// }

tadwe2.addEventListener('click', ()=>{
    // resizeCarouselTadwe2();
    // addEventListener('resize' , resizeCarouselTadwe2);
        
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard3.style.display = 'block';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerUserMdeia3.style.display = 'block';
    replaingPage.style.display = 'none';
    replaingPage2.style.display = 'block';
    centerUserLike3.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    tadwe2.style.background = '#f4f4f4';
    rodod2.style.background = 'white';
    media2.style.background = 'white';
    likes2.style.background = 'white';
    tadwe2.style.borderBottom = '2px solid #44a7e0d0';
    rodod2.style.borderBottom = 'none';
    media2.style.borderBottom = 'none';
    likes2.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
    // peopleCard3.scrollY = localStorage.setItem('saveScroll2' , scrollY);

});

// function resizeCarouselRodood2(){
//     if(window.innerWidth < 575){
//         owlStage[0].style.left = '-637px';
//         owlStage[0].style.transition = '0.3s';
//     }else{
//         owlStage[0].style.left = '-1320px';
//         owlStage[0].style.transition = '0.3s';
//     }
// }

// Replaying 2
rodod2.addEventListener('click', ()=>{
    // resizeCarouselRodood2();
    // addEventListener('resize' , resizeCarouselRodood2);

    
    // replaingPage.scrollY = localStorage.setItem('saveScroll3' , scrollY);
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard3.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerUserMdeia3.style.display = 'none';
    replaingPage.style.display = 'block';
    replaingPage2.style.display = 'none';
    centerUserLike3.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    tadwe2.style.background = 'white';
    rodod2.style.background = '#f4f4f4';
    media2.style.background = 'white';
    likes2.style.background = 'white';
    tadwe2.style.borderBottom = 'none';
    rodod2.style.borderBottom = '2px solid #44a7e0d0';
    media2.style.borderBottom = 'none';
    likes2.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});


// function resizeCarouselLikes2(){
//     if(window.innerWidth < 575){
//         owlStage[0].style.left = '14px';
//         owlStage[0].style.transition = '0.3s';
//     }else{
//         owlStage[0].style.left = '0px';
//         owlStage[0].style.transition = '0.3s';
//     }
// }

// Likes2 
likes2.addEventListener('click', ()=>{
    // resizeCarouselLikes2();
    // addEventListener('resize' , resizeCarouselLikes2);
//     centerUserLike3.scrollY = localStorage.setItem('saveScroll4' , scrollY);
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard3.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerUserMdeia3.style.display = 'none';
    centerUserLike3.style.display = 'block';
    replaingPage2.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    tadwe2.style.background = 'white';
    rodod2.style.background = 'white';
    media2.style.background = 'white';
    likes2.style.background = '#f4f4f4';
    tadwe2.style.borderBottom = 'none';
    rodod2.style.borderBottom = 'none';
    media2.style.borderBottom = 'none';
    likes2.style.borderBottom = '2px solid #44a7e0d0';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
let searOf = document.getElementById('searOf');
let searOf2 = document.getElementById('searOf2');
let hashSear = document.getElementById('hashSear');
let firstUp = document.getElementById('firstUp');
let explore = document.getElementById('explore');
let newSearch = document.getElementById('newSearch');
let newSearchBtn = document.getElementById('newSearchBtn');
let peopleSearch = document.getElementById('peopleSearch');
let peopleSearchBtn = document.getElementById('peopleSearchBtn');
let mediaSearch = document.getElementById('mediaSearch');
let mediaSearchBtn = document.getElementById('mediaSearchBtn');

hashSear.style.display = 'none';
firstUp.style.display = 'none';
peopleSearch.style.display = 'none';
mediaSearch.style.display = 'none';
newSearch.style.display = 'none';
searOf.onkeyup = ()=>{
    if(searOf.value.includes('#غزة')){
        searchPage.style.display = 'none';
        peopleCard4.style.display = 'none';
        userSearch.style.display = 'none';
        hashtaqSear.style.display = 'none';
        newSearch.style.display = 'none';
        mediaSearch.style.display = 'none';
        mediaSearchBtn.style.background = 'white';
         mediaSearchBtn.style.borderBottom = '0';
        hashSear.style.display = 'flex';
        firstUp.style.display = 'block';
        peopleSearch.style.display = 'none';
        explore.style.background = '#f4f4f4';
        explore.style.borderBottom = '2px solid #44a7e0';
    }else if(searOf.value.includes('#')){
        searchPage.style.display = 'flex';
        hashtaqSear.style.display = 'block';
        hashSear.style.display = 'none';
        firstUp.style.display = 'none';
        newSearch.style.display = 'none';
        mediaSearch.style.display = 'none';
        peopleSearch.style.display = 'none'; 
    }
};
// 
newSearchBtn.onclick = ()=>{
    firstUp.style.display = 'none';
    explore.style.background = 'white';
    explore.style.borderBottom = '0';
    peopleSearchBtn.style.background = 'white';
    peopleSearchBtn.style.borderBottom = '0';
    mediaSearchBtn.style.background = 'white';
    mediaSearchBtn.style.borderBottom = '0';
    boxGift.style.display = 'none';
    newSearch.style.display = 'block';
    firstUp.style.display = 'none';
    peopleSearch.style.display = 'none';
    mediaSearch.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
};
explore.onclick = ()=>{
    newSearch.style.display = 'none';
    firstUp.style.display = 'block';
    newSearch.style.display = 'none';
    peopleSearch.style.display = 'none';
    mediaSearch.style.display = 'none';
    explore.style.background = '#f4f4f4';
    explore.style.borderBottom = '2px solid #44a7e0';
    peopleSearchBtn.style.background = 'white';
    peopleSearchBtn.style.borderBottom = '0';
    mediaSearchBtn.style.background = 'white';
    mediaSearchBtn.style.borderBottom = '0';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
};
peopleSearchBtn.onclick = ()=>{
    explore.style.background = 'white';
    explore.style.borderBottom = '0';
    newSearch.style.display = 'none';
    firstUp.style.display = 'none';
    peopleSearch.style.display = 'block';
    newSearch.style.display = 'none';
    firstUp.style.display = 'none';
    mediaSearch.style.display = 'none';
    peopleSearchBtn.style.background = '#f4f4f4';
    peopleSearchBtn.style.borderBottom = '2px solid #44a7e0';
    mediaSearchBtn.style.background = 'white';
    mediaSearchBtn.style.borderBottom = '0';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
};
mediaSearchBtn.onclick = ()=>{
    explore.style.background = 'white';
    explore.style.borderBottom = '0';
    newSearch.style.display = 'none';
    firstUp.style.display = 'none';
    peopleSearch.style.display = 'none';
    mediaSearch.style.display = 'block';
    newSearch.style.display = 'none';
    firstUp.style.display = 'none';
    peopleSearch.style.display = 'none';
    peopleSearchBtn.style.background = 'white';
    peopleSearchBtn.style.borderBottom = '0';
    mediaSearchBtn.style.background = '#f4f4f4';
    mediaSearchBtn.style.borderBottom = '2px solid #44a7e0';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
};


// Tadweeenat 4
tadwe4.addEventListener('click', ()=>{
    peopleCard4.style.display = 'block';
    peopleCard5.style.display = 'none';
    userSearch.style.display = 'none';
    hashtaqSear.style.display = 'none';
    boxGift.style.display = 'none';
    tadwe4.style.background = '#f4f4f4';
    tadwe4.style.borderBottom = '2px solid #44a7e0d0';
    users4.style.background = 'white';
    users4.style.borderBottom = 'none';
    hashtaq4.style.background = 'white';
    hashtaq4.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// users4 4
users4.addEventListener('click', ()=>{
    peopleCard4.style.display = 'none';
    peopleCard5.style.display = 'none';
    userSearch.style.display = 'block';
    hashtaqSear.style.display = 'none';
    users4.style.background = '#f4f4f4';
    users4.style.borderBottom = '2px solid #44a7e0d0';
    hashtaq4.style.background = 'white';
    hashtaq4.style.borderBottom = 'none';
    tadwe4.style.background = 'white';
    tadwe4.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// hashtaq 4
hashtaq4.addEventListener('click', ()=>{
    peopleCard4.style.display = 'none';
    peopleCard5.style.display = 'none';
    userSearch.style.display = 'none';
    hashtaqSear.style.display = 'block';
    hashtaq4.style.background = '#f4f4f4';
    hashtaq4.style.borderBottom = '2px solid #44a7e0d0';
    tadwe4.style.background = 'white';
    tadwe4.style.borderBottom = 'none';
    users4.style.background = 'white';
    users4.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
let tadHash = document.getElementById('tadHash');
let tadHash2 = document.getElementById('tadHash2');
let tadHash3 = document.getElementById('tadHash3');
let tadHash4 = document.getElementById('tadHash4');
toSearchHash.addEventListener('click', ()=>{
    hashtaqSear.style.display = 'block';
    searOf.setAttribute('value' , tadHash.innerHTML);
});
toSearchHash2.addEventListener('click', ()=>{
    hashtaqSear.style.display = 'block';
    searOf.setAttribute('value' , tadHash2.innerHTML);
});
toSearchHash3.addEventListener('click', ()=>{
    hashtaqSear.style.display = 'block';
    searOf.setAttribute('value' , tadHash3.innerHTML);
});
toSearchHash4.addEventListener('click', ()=>{
    hashtaqSear.style.display = 'block';
    searOf.setAttribute('value' , tadHash4.innerHTML);
});
// Notification Page ( NO Found Any Notification ) 
noticationBtn.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'block';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    noticationBtnA.style.color = '#44a7e0d0';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    messgeBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
    
});
// Notification Page List Mobile ( NO Found Any Notification ) 
notiList.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'block';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    listNav.style.right = '-10000px'
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    messIconList.style.color = 'black';
    notiIconList.style.color = '#44a7e0d0';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
notiListSma.addEventListener('click', ()=>{
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    notiIconList.style.color = '#44a7e0d0';
    messIconList.style.color = 'black';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'block';
    menuMob.style.display = 'block';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// Center Message Page
messgeList.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'block';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    listNav.style.right = '-10000px';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    notiIconList.style.color = 'black';
    messIconList.style.color = '#44a7e0d0';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
messListSma.addEventListener('click', ()=>{
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    notiIconList.style.color = 'black';
    messIconList.style.color = '#44a7e0d0';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'block';
    menuMob.style.display = 'block';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    listNav.style.right = '-10000px';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
searchIcon.addEventListener('click', ()=>{
    searchPage.style.display = 'flex';
    firstUp.style.display = 'none';
    newSearch.style.display = 'none';
    peopleSearch.style.display = 'none';
    mediaSearch.style.display = 'none';
    homeIconList.style.color = 'black';
    searIconList.style.color = '#44a7e0d0';
    notiIconList.style.color = 'black';
    messIconList.style.color = 'black';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    menuMob.style.display = 'block';
    centerSear.style.display = 'block';
    centerProf.style.display = 'none';
    listNav.style.right = '-10000px';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    userSearch.style.display = 'none';
    peopleCard4.style.display = 'none';
    hashSear.style.display = 'none';
    hashtaqSear.style.display = 'block';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    hashtaq4.style.background = '#f4f4f4';
    hashtaq4.style.borderBottom = '2px solid #44a7e0d0';
    tadwe4.style.background = 'white';
    tadwe4.style.borderBottom = 'none';
    users4.style.background = 'white';
    users4.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
messgeBtn.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'block';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = '#44a7e0d0';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    suggesIconI.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
SettAccountBtn.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'block';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = 'black';
    SettAccountBtnA.style.color = '#44a7e0d0';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
suggesIcon.addEventListener('click', ()=>{  
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSugges.style.display = 'block';
    peopleCard5.style.display = 'block';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    suggesIconI.style.color = '#44a7e0d0';
    BookMarkBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
followList.addEventListener('click', ()=>{  
    centerSugges.style.display = 'block';
    peopleCard5.style.display = 'block';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    hashtaqSear.style.display = 'none';
    userSearch.style.display = 'none';
    peopleCard4.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    listNav.style.right = '-10000px';
    centerSettingAcc.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    notiIconList.style.color = 'black';
    messIconList.style.color = 'black';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// Center Search Page
searchList.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    hashtaqSear.style.display = 'block';
    userSearch.style.display = 'none';
    peopleCard5.style.display = 'none';
    peopleCard4.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'block';
    centerProf.style.display = 'none';
    listNav.style.right = '-10000px';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    homeIconList.style.color = 'black';
    searIconList.style.color = '#44a7e0d0';
    notiIconList.style.color = 'black';
    messIconList.style.color = 'black';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
bookMarkList.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    listNav.style.right = '-10000px';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'block';
    heroBoxCard.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    notiIconList.style.color = 'black';
    messIconList.style.color = 'black';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
cardPayList.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    heroBoxCard.style.display = 'none';
    creditCard.style.display = 'flex';
    document.body.classList.remove('nav-open');
    // homeIconList.style.color = 'black';
    // searIconList.style.color = 'black';
    // notiIconList.style.color = 'black';
    // messIconList.style.color = 'black';
});
logoutBTnList.addEventListener('click', ()=>{
    allLogoutDis.style.right = '0';
    listNav.style.right = '-10000px';
    homeIconList.style.color = 'black';
    searIconList.style.color = 'black';
    notiIconList.style.color = 'black';
    messIconList.style.color = 'black';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
});
searchBtn.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    peopleCard4.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'block';
    hashtaqSear.style.display = 'block';
    userSearch.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    searchBtnA.style.color = '#44a7e0d0';
    BookMarkBtnA.style.color = 'black';
    messgeBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    suggesIconI.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    infUserRighPag.style.display = 'block';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    hashtaq4.style.background = '#f4f4f4';
    hashtaq4.style.borderBottom = '2px solid #44a7e0d0';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
mainPage.addEventListener('click', ()=>{
    centerMain.style.display = 'block';
    infUserRighPag.style.display = 'block';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    hashtaqSear.style.display = 'none';
    userSearch.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    mainPageA.style.color = '#44a7e0d0';
    messgeBtnA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    BookMarkBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
SettAccountBtn.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'block';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    infUserRighPag.style.display = 'block';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
SettAccountBtnList.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'block';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    document.body.classList.remove('nav-open');
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
BookMarkBtn.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    BookMarkBtnA.style.color = '#44a7e0d0';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    suggesIconI.style.color = 'black';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'block';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
LogOutBtn.addEventListener('click', ()=>{
    messgeBtnA.style.color = 'black';
    SettAccountBtnA.style.color = 'black';
    BookMarkBtnA.style.color = 'black';
    LogOutBtnA.style.color = '#44a7e0d0';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    allLogoutDis.style.right = '0';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
});
nameUser.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'block';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
emailAdd.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'block';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
urlAdd.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'block';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    noticationBtnI.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
cvAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    centerCvAcc.style.display = 'block';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
gender.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'block';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
passAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'block';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    noticationBtnI.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
langAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'block';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    noticationBtnI.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
countryAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'block';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
cityAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerReplMark.style.display = 'none';
    centerSugges.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'block';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
VerificationAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerReplMark.style.display = 'none';
    centerSugges.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'block';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
PrivateAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'block';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
NotivicationAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'block';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
InformationAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'block';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
DeleteAcc.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'block';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    noticationBtnI.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
foodPro.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerFoodAccount.style.display = 'block';
    foodPro.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    CenterEditProfile.style.display = 'none';
    centerDardasha.style.display = 'none';
});
// Edit Profile Page 
editProfile.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    CenterEditProfile.style.display = 'block';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    peopleCard3.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    infUserRighPag.style.display = 'block';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});





let creditcardIconI = document.getElementById('creditcardIconI');
let creditcardIconA = document.getElementById('creditcardIconA');
let heroBoxCard = document.getElementById('heroBoxCard');
let choosePayBtn = document.getElementById('choosePayBtn');
let waitPay = document.getElementById('waitPay');
let closeBox = document.getElementById('closeBox');
creditcardIcon.addEventListener('click', ()=>{
    listNav.style.right = '-10000px';
    creditCard.style.display = 'flex';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    mainPageA.style.color = 'black';
    SettAccountBtn.style.color = 'black';
    creditcardIconA.style.color = '#44a7e0d0';
    showCommentMain.style.display = 'none';
    centerGiftNum.style.display = 'none';
    boxGift.style.display = 'none';
});
choosePayBtn.addEventListener('click', ()=>{
    setInterval(function(){
        waitPay.innerHTML += '.';
    },1000);
    setTimeout(function(){
        creditCard.style.display = 'none';
        heroBoxCard.style.display = 'flex';
    },3000);
        choosePayBtn.style.background = '#77b17a';
});

closeCardBtn.addEventListener('click' , ()=>{
    creditCard.style.display = 'none';
});
closeBox.addEventListener('click' , ()=>{
    heroBoxCard.style.display = 'none';
});

let blackColorCircle = document.getElementById('blackColorCircle');
let whiteColorCircle = document.getElementById('whiteColorCircle');
let offOnBtnCircle = document.getElementById('offOnBtnCircle');
let all2 = document.getElementById('all2');
let head3 = document.getElementById('head3');
let setIcon = document.getElementById('setIcon');
let setIcon2 = document.getElementById('setIcon2');
let setIconWhite2 = document.getElementById('setIconWhite2');
let setIconWhite = document.getElementById('setIconWhite');
let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');
let post1 = document.getElementById('post1');
let post2 = document.getElementById('post2');
let rightPageMain = document.getElementById('rightPageMain');
let rightPageMore = document.getElementById('rightPageMore');
let controlLoaA = document.getElementById('controlLoaA');
let moreA = document.getElementById('moreA');
let lessA = document.getElementById('lessA');
let allPostNewbac = document.getElementById('allPostNewbac');
let search = document.getElementById('search');
let whoFollDar = document.getElementById('whoFollDar');
let impYOuDark = document.getElementById('impYOuDark');
let tadDar = document.getElementById('tadDar');
let KhawaterDar = document.getElementById('KhawaterDar');
let zekerDar = document.getElementById('zekerDar');
let gazaDar = document.getElementById('gazaDar');
let footerDar = document.getElementById('footerDar');
let langDar = document.getElementById('langDar');
let alladdDar = document.getElementById('alladdDar');
let header2 = document.getElementById('header2');
let head4 = document.getElementById('head4');
let porfileInfDar = document.getElementById('porfileInfDar');
let centerAnotherDar = document.getElementById('centerAnotherDar');
let centerAnotherDar2 = document.getElementById('centerAnotherDar2');
let replay1 = document.getElementById('replay1');
let people2 = document.getElementById('people2');
let people21 = document.getElementById('people21');
let people3 = document.getElementById('people3');
let people31 = document.getElementById('people31');
let people4 = document.getElementById('people4');
let people5 = document.getElementById('people5');
let replay3 = document.getElementById('replay3');
let replay2 = document.getElementById('replay2');
let people6 = document.getElementById('people6');
let people7 = document.getElementById('people7');
let header3 = document.getElementById('header3');
let messSearDar = document.getElementById('messSearDar');
let iconDar = document.getElementById('iconDar');
let hash1 = document.getElementById('hash1');
let hash2 = document.getElementById('hash2');
let hash3 = document.getElementById('hash3');
let hash4 = document.getElementById('hash4');
let moreBtnDar = document.getElementById('moreBtnDar');
let moreBtnDar2 = document.getElementById('moreBtnDar2');
let notiFound = document.getElementById('notiFound');
let head5 = document.getElementById('head5');
let people8 = document.getElementById('people8');
let people9 = document.getElementById('people9');
let header5 = document.getElementById('header5');
let notiDark = document.getElementById('notiDark');
let notiIconDar = document.getElementById('notiIconDar');
let notFoundDar = document.getElementById('notFoundDar');
let header6 = document.getElementById('header6');
let serOfMessDar = document.getElementById('serOfMessDar');
let iconMesDark = document.getElementById('iconMesDark');
let notiFoundMessD = document.getElementById('notiFoundMessD');
let iconMessDar = document.getElementById('iconMessDar');
let messFoundDar = document.getElementById('messFoundDar');
let newMessDar = document.getElementById('newMessDar');
let serMessDar = document.getElementById('serMessDar');
let head6 = document.getElementById('head6');
let centerSettDar = document.getElementById('centerSettDar');
let head7 = document.getElementById('head7');
let abdateDar = document.getElementById('abdateDar');
let firstNameDar = document.getElementById('firstNameDar');
let secNameDar = document.getElementById('secNameDar');
let head8 = document.getElementById('head8');
let ubdateDar2 = document.getElementById('ubdateDar2');
let head9 = document.getElementById('head9');
let ubdateDar3 = document.getElementById('ubdateDar3');
let optiNameDar = document.getElementById('optiNameDar');
let head10 = document.getElementById('head10');
let updatDar4 = document.getElementById('updatDar4');
let head11 = document.getElementById('head11');
let ubdatGenDar = document.getElementById('ubdatGenDar');
let genderNameDar = document.getElementById('genderNameDar');
let head12 = document.getElementById('head12');
let ubdateAccDar5 = document.getElementById('ubdateAccDar5');
let optiPassDar = document.getElementById('optiPassDar');
let optiPassDar1 = document.getElementById('optiPassDar1');
let optiPassDar2 = document.getElementById('optiPassDar2');
let head13 = document.getElementById('head13');
let ubdateAccDar4 = document.getElementById('ubdateAccDar4');
let optiLanDar = document.getElementById('optiLanDar');
let head14 = document.getElementById('head14');
let ubdateAccDar3 = document.getElementById('ubdateAccDar3');
let optiCountDar = document.getElementById('optiCountDar');
let head15 = document.getElementById('head15');
let ubdateAccDar2 = document.getElementById('ubdateAccDar2');
let CityNameDar = document.getElementById('CityNameDar');
let head16 = document.getElementById('head16');
let ubdateAccDar6 = document.getElementById('ubdateAccDar6');
let ComNamNameDar = document.getElementById('ComNamNameDar');
let MessNameDar = document.getElementById('MessNameDar');
let FileNameDar = document.getElementById('FileNameDar');
let head17 = document.getElementById('head17');
let ubdateAccDar7 = document.getElementById('ubdateAccDar7');
let stateAccDar = document.getElementById('stateAccDar');
let whoAccDar = document.getElementById('whoAccDar');
let whoRepDar = document.getElementById('whoRepDar');
let viewProDar = document.getElementById('viewProDar');
let contantDar = document.getElementById('contantDar');
let allGeneralDar = document.getElementById('allGeneralDar');
let head18 = document.getElementById('head18');
let notiNameDar = document.getElementById('notiNameDar');
let head19 = document.getElementById('head19');
let allGeneralDar2 = document.getElementById('allGeneralDar2');
let infChaDar = document.getElementById('infChaDar');
let heaD20 = document.getElementById('heaD20');
let ubdateAccDar8 = document.getElementById('ubdateAccDar8');
let passDar = document.getElementById('passDar');
let passUser = document.getElementById('passUser');
let gernAllDar = document.getElementById('gernAllDar');
let creaditDar = document.getElementById('creaditDar');
let boxCardDar = document.getElementById('boxCardDar');
let moneyDar = document.getElementById('moneyDar');
let cartNumDar = document.getElementById('cartNumDar');
let dateDar = document.getElementById('dateDar');
let saveNumDar = document.getElementById('saveNumDar');
let cardNameDar = document.getElementById('cardNameDar');
let payBtnDar = document.getElementById('payBtnDar');
let head21 = document.getElementById('head21');
let people10 = document.getElementById('people10');
let people11 = document.getElementById('people11');
let head22 = document.getElementById('head22');
let people32 = document.getElementById('people32');
let people33 = document.getElementById('people33');
let logOutDar = document.getElementById('logOutDar');
let signUpDar = document.getElementById('signUpDar');
let userNameDar = document.getElementById('userNameDar');
let PleEnterPassDar = document.getElementById('PleEnterPassDar');
let emailaddDar = document.getElementById('PleEnterPassDar');
let pleEnterEmDar = document.getElementById('pleEnterEmDar');
let passDar2 = document.getElementById('passDar2');
let pleEnterPasDar = document.getElementById('pleEnterPasDar');
let againPassDar = document.getElementById('againPassDar');
let pleEnterAgDar = document.getElementById('pleEnterAgDar');
let closeSignUpBtn = document.getElementById('closeSignUpBtn');
let userDar = document.getElementById('userDar');
let passDar3 = document.getElementById('passDar3');
let closeAddAnotherAcc = document.getElementById('closeAddAnotherAcc');
let createNewAcc = document.getElementById('createNewAcc');
let addAnotherUser = document.getElementById('addAnotherUser');
let heroAdd = document.getElementById('heroAdd');
let heroSignup = document.getElementById('hero-signup');
let closeCard = document.getElementById('closeCard');
let people22 = document.getElementById('people22');
let people23 = document.getElementById('people23');
let people24 = document.getElementById('people24');
let people25 = document.getElementById('people25');
let people26 = document.getElementById('people26');
let people27 = document.getElementById('people27');
let people28 = document.getElementById('people28');
let people29 = document.getElementById('people29');
let people30 = document.getElementById('people30');
let people34 = document.getElementById('people34');
let people35 = document.getElementById('people35');
let header7 = document.getElementById('header7');
let header8 = document.getElementById('header8');
let header9 = document.getElementById('header9');
let answerDar = document.getElementById('answerDar');
let header10 = document.getElementById('header10');
let messRep = document.getElementById('messRep');
let messRep2 = document.getElementById('messRep2');
let img = document.getElementsByTagName('img');
let imgTe = document.getElementsByTagName('imgTe');
let main = document.getElementsByTagName('main');
let rotateTad = document.getElementById('rotateTad');
let rotateTad3 = document.getElementById('rotateTad3');
let rotateTadVie3 = document.getElementById('rotateTadVie3');
let replMan = document.getElementById('replMan');
let replMan2 = document.getElementById('replMan2');
let repMan3 = document.getElementById('repMan3');
let rotate = document.getElementById('rotate');
let rotateBook = document.getElementById('rotateBook');
let rotateBookList = document.getElementById('rotateBookList');
let rotateTadLike = document.getElementById('rotateTadLike');
let rotateTadLike2 = document.getElementById('rotateTadLike');
let rotateTadMed = document.getElementById('rotateTadMed');
let rotateTadMed2 = document.getElementById('rotateTadMed');
let rotateTadTad = document.getElementById('rotateTadTad');
let rotateTadTad2 = document.getElementById('rotateTadTad2');
let body = document.getElementById('body');
let five = document.getElementById('five');
let likeIcon = document.getElementById('likeIcon');
let iqtebasPost = document.getElementById('iqtebasPost');
let navSmall = document.getElementById('navSmall');
let langSite = document.getElementById('langSite');
let arrowElse = document.getElementById('arrowElse');
let proInfElse = document.getElementById('proInfElse');
let people36 = document.getElementById('people36');
let people37 = document.getElementById('people37');
let people38 = document.getElementById('people38');
let people39 = document.getElementById('people39');
let people40 = document.getElementById('people40');
let people41 = document.getElementById('people41');
let people42 = document.getElementById('people42');
let people43 = document.getElementById('people43');
let header11 = document.getElementById('header11');
let blockUSerBox = document.getElementById('blockUSerBox');
let blockUSerBox2 = document.getElementById('blockUSerBox2');
let peopleRe39 = document.getElementById('peopleRe39');
let peopleRe38 = document.getElementById('peopleRe38');
let boxNewHead = document.getElementById('boxNewHead');
let toGift3 = document.getElementById('toGift3');
let toGift5 = document.getElementById('toGift5');
let toGift4 = document.getElementById('toGift4');


// let userEnterDar = document.getElementById('userEnterDar');
// let passEnterDar = document.getElementById('passEnterDar');


// Function Dark And Light Mode ( Waiting Soon ... )


// if(localStorage.length > 0){
//     // Balck Color 
//     onloadLogo.style.background = localStorage.color;
//     header.style.background = localStorage.color;
//     boxNewHead.style.background = localStorage.color;
//     post1.style.background = localStorage.color;
//     post2.style.background = localStorage.color;
//     allMain.style.background = localStorage.color5;
//     tadwe2.style.background = localStorage.color;
//     rodod2.style.background = localStorage.color;
//     media2.style.background = localStorage.color;
//     likes2.style.background = localStorage.color;
//     header2.style.background = localStorage.color;
//     porfileInfDar.style.background = localStorage.color;
//     rightPageMain.style.background = localStorage.color;
//     rightPageMore.style.background = localStorage.color;
//     allPostNewbac.style.background = localStorage.color;
//     search.style.background = localStorage.color;
//     whoFollDar.style.background = localStorage.color;
//     impYOuDark.style.background = localStorage.color;
//     tadDar.style.background = localStorage.color;
//     KhawaterDar.style.background = localStorage.color;
//     zekerDar.style.background = localStorage.color;
//     gazaDar.style.background = localStorage.color;
//     footerDar.style.background = localStorage.color;
//     langDar.style.background = localStorage.color;
//     alladdDar.style.background = localStorage.color;
//     listNav2.style.background = localStorage.color;
//     centerAnotherDar.style.background = localStorage.color;
//     centerAnotherDar2.style.background = localStorage.color;
//     people2.style.background = localStorage.color;
//     people21.style.background = localStorage.color;
//     people3.style.background = localStorage.color;
//     people31.style.background = localStorage.color;
//     people4.style.background = localStorage.color;
//     people5.style.background = localStorage.color;
//     people6.style.background = localStorage.color;
//     people7.style.background = localStorage.color;
//     header3.style.background = localStorage.color;
//     messSearDar.style.background = localStorage.color;
//     hashtaq4.style.background = localStorage.color;
//     users4.style.background = localStorage.color;
//     tadwe4.style.background = localStorage.color;
//     explore.style.background = localStorage.color;
//     newSearchBtn.style.background = localStorage.color;
//     peopleSearchBtn.style.background = localStorage.color;
//     mediaSearchBtn.style.background = localStorage.color;
//     searOf.style.background = localStorage.color;
//     hash1.style.background = localStorage.color;
//     hash2.style.background = localStorage.color;
//     hash3.style.background = localStorage.color;
//     hash4.style.background = localStorage.color;
//     notiFound.style.background = localStorage.color;
//     people8.style.background = localStorage.color;
//     people9.style.background = localStorage.color;
//     header5.style.background = localStorage.color;
//     notiDark.style.background = localStorage.color;
//     notiIconDar.style.background = localStorage.color;
//     backHome.style.background = localStorage.color;
//     notFoundDar.style.background = localStorage.color;
//     header6.style.background = localStorage.color;
//     moreNoti.style.background = localStorage.color;
//     foodPro.style.background = localStorage.color;
//     serOfMessDar.style.background = localStorage.color;
//     notiFoundMessD.style.background = localStorage.color;
//     iconMessDar.style.background = localStorage.color;
//     backHomeMess.style.background = localStorage.color;
//     messFoundDar.style.background = localStorage.color;
//     newMessDar.style.background = localStorage.color;
//     serMessDar.style.background = localStorage.color;
//     head6.style.background = localStorage.color;
//     centerSettDar.style.background = localStorage.color;
//     head7.style.background = localStorage.color;
//     abdateDar.style.background = localStorage.color;
//     firstNameDar.style.background = localStorage.color;
//     secNameDar.style.background = localStorage.color;
//     usernameL.style.background = localStorage.color;
//     head8.style.background = localStorage.color;
//     ubdateDar2.style.background = localStorage.color;
//     EmailNameL.style.background = localStorage.color;
//     head9.style.background = localStorage.color;
//     optiNameDar.style.background = localStorage.color;
//     ubdateDar3.style.background = localStorage.color;
//     head10.style.background = localStorage.color;
//     updatDar4.style.background = localStorage.color;
//     optiName2.style.background = localStorage.color;
//     head11.style.background = localStorage.color;
//     ubdatGenDar.style.background = localStorage.color;
//     genderNameDar.style.background = localStorage.color;
//     head12.style.background = localStorage.color;
//     ubdateAccDar5.style.background = localStorage.color;
//     optiPassDar.style.background = localStorage.color;
//     optiPassDar1.style.background = localStorage.color;
//     optiPassDar2.style.background = localStorage.color;
//     head13.style.background = localStorage.color;
//     ubdateAccDar4.style.background = localStorage.color;
//     optiLanDar.style.background = localStorage.color;
//     head14.style.background = localStorage.color;
//     ubdateAccDar3.style.background = localStorage.color;
//     optiCountDar.style.background = localStorage.color;
//     head15.style.background = localStorage.color;
//     ubdateAccDar2.style.background = localStorage.color;
//     CityNameDar.style.background = localStorage.color;
//     head16.style.background = localStorage.color;
//     ubdateAccDar6.style.background = localStorage.color;
//     ComNamNameDar.style.background = localStorage.color;
//     MessNameDar.style.background = localStorage.color;
//     FileNameDar.style.background = localStorage.color;
//     head17.style.background = localStorage.color;
//     ubdateAccDar7.style.background = localStorage.color;
//     stateAccDar.style.background = localStorage.color;
//     whoAccDar.style.background = localStorage.color;
//     whoRepDar.style.background = localStorage.color;
//     viewProDar.style.background = localStorage.color;
//     contantDar.style.background = localStorage.color;
//     head18.style.background = localStorage.color;
//     allGeneralDar.style.background = localStorage.color;
//     notiNameDar.style.background = localStorage.color;
//     head19.style.background = localStorage.color;
//     allGeneralDar2.style.background = localStorage.color;
//     infChaDar.style.background = localStorage.color;
//     heaD20.style.background = localStorage.color;
//     ubdateAccDar8.style.background = localStorage.color;
//     passDar.style.background = localStorage.color;
//     gernAllDar.style.background = localStorage.color5;
//     creaditDar.style.background = localStorage.color;
//     boxCardDar.style.background = localStorage.color;
//     moneyDar.style.background = localStorage.color;
//     cartNumDar.style.background = localStorage.color;
//     dateDar.style.background = localStorage.color;
//     saveNumDar.style.background = localStorage.color;
//     cardNameDar.style.background = localStorage.color;
//     head21.style.background = localStorage.color;
//     people10.style.background = localStorage.color;
//     people11.style.background = localStorage.color;
//     head22.style.background = localStorage.color;
//     people32.style.background = localStorage.color;
//     people33.style.background = localStorage.color;
//     logOutDar.style.background = localStorage.color;
//     signupInf.style.background = localStorage.color;
//     PleEnterPassDar.style.background = localStorage.color;
//     pleEnterEmDar.style.background = localStorage.color;
//     pleEnterPasDar.style.background = localStorage.color;
//     pleEnterAgDar.style.background = localStorage.color;
//     emailaddDar.style.background = localStorage.color;
//     passDar2.style.background = localStorage.color;
//     againPassDar.style.background = localStorage.color;
//     loginDar.style.background = localStorage.color;
//     userDar.style.background = localStorage.color;
//     passDar3.style.background = localStorage.color;
//     signUpDar.style.background = localStorage.color;
//     people22.style.background = localStorage.color;
//     people23.style.background = localStorage.color;
//     people24.style.background = localStorage.color;
//     people25.style.background = localStorage.color;
//     people26.style.background = localStorage.color;
//     people27.style.background = localStorage.color;
//     people28.style.background = localStorage.color;
//     people29.style.background = localStorage.color;
//     people30.style.background = localStorage.color;
//     people34.style.background = localStorage.color;
//     people35.style.background = localStorage.color;
//     answerDar.style.background = localStorage.color;
//     header8.style.background = localStorage.color;
//     header9.style.background = localStorage.color;
//     header7.style.background = localStorage.color;
//     header10.style.background = localStorage.color;
//     messRep.style.background = localStorage.color;
//     messRep2.style.background = localStorage.color;
//     rotateTad.style.background = localStorage.color;
//     rotateTad3.style.background = localStorage.color;
//     iqtebasPost.style.background = localStorage.color;
//     navSmall.style.background = localStorage.color;
//     header11.style.background = localStorage.color;
//     arrowElse.style.background = localStorage.color;
//     proInfElse.style.background = localStorage.color;
//     tadwe.style.background = localStorage.color;
//     rodod.style.background = localStorage.color;
//     likes.style.background = localStorage.color;
//     media.style.background = localStorage.color;
//     messRep.style.background = localStorage.color;
//     people36.style.background = localStorage.color;
//     people37.style.background = localStorage.color;
//     people38.style.background = localStorage.color;
//     people39.style.background = localStorage.color;
//     people40.style.background = localStorage.color;
//     people41.style.background = localStorage.color;
//     people42.style.background = localStorage.color;
//     people43.style.background = localStorage.color;
//     peopleRe38.style.background = localStorage.color;
//     peopleRe39.style.background = localStorage.color;
//     settAccListUser.style.background = localStorage.color;
//     blockUSerBox.style.background = localStorage.color;
//     blockUSerBox2.style.background = localStorage.color;
//     boxGift.style.background = localStorage.color;
//     toGift5.style.background = localStorage.color;
//     toGift3.style.background = localStorage.color;
//     toGift4.style.background = localStorage.color;
    
    
//     // userEnterDar.style.background = localStorage.color;
//     // passEnterDar.style.background = localStorage.color;
    
    
//     // White Color
//     header2.style.color = localStorage.color2;
//     head4.style.color  = localStorage.color2;
//     porfileInfDar.style.color = localStorage.color2;
//     tadwe2.style.color = localStorage.color6;
//     rodod2.style.color = localStorage.color6;
//     media2.style.color = localStorage.color6;
//     likes2.style.color = localStorage.color6;
//     head3.style.color = localStorage.color2;
//     post1.style.color = localStorage.color2;
//     post2.style.color = localStorage.color2;
//     rightPageMain.style.color = localStorage.color2;
//     rightPageMore.style.color = localStorage.color2;
//     notePerA.style.color = localStorage.color2;
//     mainPageA.style.color = localStorage.color2;
//     searchBtnA.style.color = localStorage.color2;
//     noticationBtnA.style.color = localStorage.color2;
//     SettAccountBtnA.style.color = localStorage.color2;
//     controlLoaA.style.color = localStorage.color2;
//     messgeBtnA.style.color = localStorage.color2;
//     creditcardIconA.style.color = localStorage.color2;
//     suggesIconI.style.color = localStorage.color2;
//     BookMarkBtnA.style.color = localStorage.color2;
//     LogOutBtnA.style.color = localStorage.color2;
//     moreA.style.color = localStorage.color2;
//     lessA.style.color = localStorage.color2;
//     allPostNewbac.style.color = localStorage.color2;
//     postText2.style.color = localStorage.color2;
//     postText.style.color = localStorage.color2;
//     footerDar.style.color = localStorage.color2;
//     langDar.style.color = localStorage.color2;
//     tadDar.style.color = localStorage.color2;
//     KhawaterDar.style.color = localStorage.color2;
//     zekerDar.style.color = localStorage.color2;
//     gazaDar.style.color = localStorage.color2;
//     whoFollDar.style.color = localStorage.color2;
//     alladdDar.style.color = localStorage.color2;
//     listNav2.style.color = localStorage.color2;
//     centerAnotherDar.style.color = localStorage.color2;
//     centerAnotherDar2.style.color = localStorage.color2;
//     people2.style.color = localStorage.color2;
//     people21.style.color = localStorage.color2;
//     people3.style.color = localStorage.color2;
//     people31.style.color = localStorage.color2;
//     people4.style.color = localStorage.color2;
//     people5.style.color = localStorage.color2;
//     people6.style.color = localStorage.color2;
//     people7.style.color = localStorage.color2;
//     header3.style.color = localStorage.color2;
//     messSearDar.style.color = localStorage.color2;
//     hashtaq4.style.color = localStorage.color2;
//     users4.style.color = localStorage.color2;
//     tadwe4.style.color = localStorage.color2;
//     explore.style.color = localStorage.color2;
//     newSearchBtn.style.color = localStorage.color2;
//     peopleSearchBtn.style.color = localStorage.color2;
//     mediaSearchBtn.style.color = localStorage.color2;
//     iconDar.style.color = localStorage.color2;
//     hash1.style.color = localStorage.color2;
//     hash2.style.color = localStorage.color2;
//     hash3.style.color = localStorage.color2;
//     hash4.style.color = localStorage.color2;
//     head5.style.color = localStorage.color2;
//     people8.style.color = localStorage.color2;
//     people9.style.color = localStorage.color2;
//     notePerA.style.color = localStorage.color2;
//     mainPageA.style.color = localStorage.color2;
//     searchBtnA.style.color = localStorage.color2;
//     SettAccountBtnA.style.color = localStorage.color2;
//     creditcardIconA.style.color = localStorage.color2;
//     suggesIconI.style.color = localStorage.color2;
//     BookMarkBtnA.style.color = localStorage.color2;
//     LogOutBtnA.style.color = localStorage.color2;
//     lessA.style.color = localStorage.color2;
//     moreA.style.color = localStorage.color2;
//     header5.style.color = localStorage.color2;
//     notiDark.style.color = localStorage.color2;
//     backHome.style.color = localStorage.color2;
//     notFoundDar.style.color = localStorage.color2;
//     header6.style.color = localStorage.color2;
//     searOf.style.color = localStorage.color2;
//     serOfMessDar.style.color = localStorage.color2;
//     iconMesDark.style.color = localStorage.color2;
//     notiFoundMessD.style.color = localStorage.color2;
//     backHomeMess.style.color = localStorage.color2;
//     messFoundDar.style.color = localStorage.color2;
//     newMessDar.style.color = localStorage.color2;
//     serMessDar.style.color = localStorage.color2;
//     head6.style.color = localStorage.color2;
//     centerSettDar.style.color = localStorage.color2;
//     head7.style.color = localStorage.color2;
//     abdateDar.style.color = localStorage.color2;
//     firstNameDar.style.color = localStorage.color2;
//     secNameDar.style.color = localStorage.color2;
//     usernameL.style.color = localStorage.color2;
//     head8.style.color = localStorage.color2;
//     ubdateDar2.style.color = localStorage.color2;
//     EmailNameL.style.color = localStorage.color2;
//     head9.style.color = localStorage.color2;
//     optiNameDar.style.color = localStorage.color2;
//     ubdateDar3.style.color = localStorage.color2;
//     head10.style.color = localStorage.color2;
//     updatDar4.style.color = localStorage.color2;
//     optiName2.style.color = localStorage.color2;
//     head11.style.color = localStorage.color2;
//     ubdatGenDar.style.color = localStorage.color2;
//     genderNameDar.style.color = localStorage.color2;
//     head12.style.color = localStorage.color2;
//     ubdateAccDar5.style.color = localStorage.color2;
//     optiPassDar.style.color = localStorage.color2;
//     optiPassDar1.style.bcolor = localStorage.color2;
//     optiPassDar2.style.color = localStorage.color2;
//     head13.style.color = localStorage.color2;
//     ubdateAccDar4.style.bcolor = localStorage.color2;
//     optiLanDar.style.color = localStorage.color2;
//     head14.style.color = localStorage.color2;
//     ubdateAccDar3.style.color = localStorage.color2;
//     optiCountDar.style.color = localStorage.color2;
//     head15.style.color = localStorage.color2;
//     ubdateAccDar2.style.color = localStorage.color2;
//     CityNameDar.style.color = localStorage.color2;
//     head16.style.color = localStorage.color2;
//     ubdateAccDar6.style.color = localStorage.color2;
//     ComNamNameDar.style.color = localStorage.color2;
//     MessNameDar.style.color = localStorage.color2;
//     FileNameDar.style.color = localStorage.color2;
//     head17.style.color = localStorage.color2;
//     ubdateAccDar7.style.color = localStorage.color2;
//     stateAccDar.style.color = localStorage.color2;
//     whoAccDar.style.color = localStorage.color2;
//     whoRepDar.style.color = localStorage.color2;
//     viewProDar.style.color = localStorage.color2;
//     contantDar.style.color = localStorage.color2;
//     head18.style.color = localStorage.color2;
//     allGeneralDar.style.color = localStorage.color2;
//     notiNameDar.style.color = localStorage.color2;
//     head19.style.color = localStorage.color2;
//     allGeneralDar2.style.color = localStorage.color2;
//     infChaDar.style.color = localStorage.color2;
//     heaD20.style.color = localStorage.color2;
//     ubdateAccDar8.style.color = localStorage.color2;
//     passDar.style.color = localStorage.color2;
//     gernAllDar.style.color = localStorage.color2;
//     creaditDar.style.color = localStorage.color2;
//     boxCardDar.style.color = localStorage.color2;
//     moneyDar.style.color = localStorage.color2;
//     cartNumDar.style.color = localStorage.color2;
//     dateDar.style.color = localStorage.color2;
//     saveNumDar.style.color = localStorage.color2;
//     cardNameDar.style.color = localStorage.color2;
//     head21.style.color = localStorage.color2;
//     people10.style.color = localStorage.color2;
//     people11.style.color = localStorage.color2;
//     head22.style.color = localStorage.color2;
//     people32.style.color = localStorage.color2;
//     people33.style.color = localStorage.color2;
//     logOutDar.style.color = localStorage.color2;
//     signupInf.style.color = localStorage.color2;
//     PleEnterPassDar.style.color = localStorage.color2;
//     pleEnterEmDar.style.color = localStorage.color2;
//     pleEnterPasDar.style.color = localStorage.color2;
//     pleEnterAgDar.style.color = localStorage.color2;
//     userNameDar.style.color = localStorage.color2;
//     emailaddDar.style.color = localStorage.color2;
//     passDar2.style.color = localStorage.color2;
//     againPassDar.style.color = localStorage.color2;
//     closeSignUpBtn.style.color = localStorage.color2;
//     loginDar.style.color = localStorage.color2;
//     userDar.style.color = localStorage.color2;
//     passDar3.style.color = localStorage.color2;
//     closeSignInBtn.style.color = localStorage.color2;
//     centerMain.style.color = localStorage.color2;
//     people22.style.color = localStorage.color2;
//     people23.style.color = localStorage.color2;
//     people24.style.color = localStorage.color2;
//     people25.style.color = localStorage.color2;
//     people26.style.color = localStorage.color2;
//     people27.style.color = localStorage.color2;
//     people28.style.color = localStorage.color2;
//     people29.style.color = localStorage.color2;
//     people30.style.color = localStorage.color2;
//     people34.style.color = localStorage.color2;
//     people35.style.color = localStorage.color2;
//     answerDar.style.color = localStorage.color2;
//     header8.style.color = localStorage.color2;
//     header9.style.color = localStorage.color2;
//     header7.style.color = localStorage.color2;
//     header10.style.color = localStorage.color2;
//     messRep.style.color = localStorage.color2;
//     messRep2.style.color = localStorage.color2;
//     rotateTad.style.color = localStorage.color2;
//     rotateTad3.style.color = localStorage.color2;
//     navSmall.style.color = localStorage.color2;
//     iqtebasPost.style.color = localStorage.color2;
//     langSite.style.color = localStorage.color2;
//     header11.style.color = localStorage.color2;
//     arrowElse.style.color = localStorage.color2;
//     proInfElse.style.color = localStorage.color2;
//     tadwe.style.color = localStorage.color6;
//     rodod.style.color = localStorage.color6;
//     likes.style.color = localStorage.color6;
//     media.style.color = localStorage.color6;
//     messRep.style.color = localStorage.color2;
//     people36.style.color = localStorage.color2;
//     people37.style.color = localStorage.color2;
//     people38.style.color = localStorage.color2;
//     people39.style.color = localStorage.color2;
//     people40.style.color = localStorage.color2;
//     people41.style.color = localStorage.color2;
//     people42.style.color = localStorage.color2;
//     people43.style.color = localStorage.color2;
//     peopleRe38.style.color = localStorage.color2;
//     peopleRe39.style.color = localStorage.color2;
//     settAccListUser.style.color = localStorage.color2;
//     blockUSerBox.style.color = localStorage.color2;
//     blockUSerBox2.style.color = localStorage.color2;
//     canselBlockBtn.style.color = localStorage.color2;
//     canselBlockBtn1.style.color = localStorage.color2;
//     blockBtn.style.color = localStorage.color2;
//     removeBlockBtn.style.color = localStorage.color2;
//     messShowBlock.style.color = localStorage.color2;
//     boxGift.style.color = localStorage.color2;
//     toGift5.style.color = localStorage.color2;
//     toGift3.style.color = localStorage.color2;
//     toGift4.style.color = localStorage.color2;
//     homeIconList.style.color = localStorage.color2;
//     searIconList.style.color = localStorage.color2;
//     notiIconList.style.color = localStorage.color2;
//     messIconList.style.color = localStorage.color2;
//     // userEnterDar.style.color = localStorage.color2;
//     // passEnterDar.style.color = localStorage.color2;
    
//     // border White Color
//     userDar.style.borderBottom = localStorage.color42;
//     passDar3.style.borderBottom = localStorage.color42;
//     PleEnterPassDar.style.borderBottom = localStorage.color42;
//     pleEnterEmDar.style.borderBottom = localStorage.color42;
//     pleEnterPasDar.style.borderBottom = localStorage.color42;
//     pleEnterAgDar.style.borderBottom = localStorage.color42;
//     // white Background
//     header.style.background = localStorage.color4;
//     boxNewHead.style.background = localStorage.color4;
//     post1.style.background = localStorage.color4;
//     post2.style.background = localStorage.color4;
//     // centerMain.style.background = localStorage.color41;
//     allMain.style.background = localStorage.color41;
//     // passUser.style.background = localStorage.color41;
//     header2.style.background =localStorage.color4;
//     porfileInfDar.style.background = localStorage.color4;
//     tadwe2.style.background = localStorage.color4;
//     rodod2.style.background = localStorage.color4;
//     media2.style.background = localStorage.color4;
//     likes2.style.background = localStorage.color4;
//     rightPageMain.style.background = localStorage.color4;
//     rightPageMore.style.background = localStorage.color4;
//     allPostNewbac.style.background = localStorage.color4;
//     search.style.background = localStorage.color4;
//     whoFollDar.style.background = localStorage.color4;
//     impYOuDark.style.background = localStorage.color4;
//     tadDar.style.background = localStorage.color4;
//     KhawaterDar.style.background = localStorage.color4;
//     zekerDar.style.background = localStorage.color4;
//     // gazaDar.style.background = llocalStorage.color4;
//     footerDar.style.background = localStorage.color4;
//     langDar.style.background = localStorage.color4;
//     alladdDar.style.background =localStorage.color4;
//     listNav2.style.background = localStorage.color4;
//     centerAnotherDar.style.background = localStorage.color4;
//     centerAnotherDar2.style.background = localStorage.color4;
//     people2.style.background = localStorage.color4;
//     people21.style.background = localStorage.color4;
//     people3.style.background = localStorage.color4;
//     people31.style.background = localStorage.color4;
//     people4.style.background = localStorage.color4;
//     people5.style.background = localStorage.color4;
//     people6.style.background = localStorage.color4;
//     people7.style.background = localStorage.color4;
//     header3.style.background = localStorage.color4;
//     messSearDar.style.background = localStorage.color4;
//     hashtaq4.style.background = localStorage.color4;
//     users4.style.background = localStorage.color4;
//     tadwe4.style.background = localStorage.color4;
//     explore.style.background = localStorage.color4;
//     newSearchBtn.style.background = localStorage.color4;
//     peopleSearchBtn.style.background = localStorage.color4;
//     mediaSearchBtn.style.background = localStorage.color4;
//     searOf.style.background = localStorage.color4;
//     hash1.style.background = localStorage.color4;
//     hash2.style.background = localStorage.color4;
//     hash3.style.background = localStorage.color4;
//     hash4.style.background = localStorage.color4;
//     notiFound.style.background = localStorage.color4;
//     people8.style.background = localStorage.color4;
//     people9.style.background = localStorage.color4;
//     header5.style.background = localStorage.color4;
//     notiDark.style.background = localStorage.color4;
//     notiIconDar.style.background = localStorage.color4;
//     backHome.style.background = localStorage.color4;
//     notFoundDar.style.background = localStorage.color4;
//     header6.style.background = localStorage.color4;
//     moreNoti.style.background = localStorage.color4;
//     foodPro.style.background = localStorage.color4;
//     serOfMessDar.style.background = localStorage.color4;
//     notiFoundMessD.style.background = localStorage.color4;
//     iconMessDar.style.background = localStorage.color4;
//     backHomeMess.style.background = localStorage.color4;
//     messFoundDar.style.background = localStorage.color4;
//     newMessDar.style.background = localStorage.color4;
//     serMessDar.style.background = localStorage.color4;
//     head6.style.background = localStorage.color4;
//     centerSettDar.style.background = localStorage.color4;
//     head7.style.background = localStorage.color4;
//     abdateDar.style.background = localStorage.color4;
//     firstNameDar.style.background = localStorage.color4;
//     secNameDar.style.background = localStorage.color4;
//     usernameL.style.background = localStorage.color4;
//     head8.style.background = localStorage.color4;
//     ubdateDar2.style.background = localStorage.color4;
//     EmailNameL.style.background = localStorage.color4;
//     head9.style.background = localStorage.color4;
//     optiNameDar.style.background = localStorage.color4;
//     ubdateDar3.style.background = localStorage.color4;
//     head10.style.background = localStorage.color4;
//     updatDar4.style.background = localStorage.color4;
//     optiName2.style.background = localStorage.color4;
//     head11.style.background = localStorage.color4;
//     ubdatGenDar.style.background = localStorage.color4;
//     genderNameDar.style.background = localStorage.color4;
//     head12.style.background = localStorage.color4;
//     ubdateAccDar5.style.background = localStorage.color4;
//     optiPassDar.style.background = localStorage.color4;
//     optiPassDar1.style.background = localStorage.color4;
//     optiPassDar2.style.background = localStorage.color4;
//     head13.style.background = localStorage.color4;
//     ubdateAccDar4.style.background = localStorage.color4;
//     optiLanDar.style.background = localStorage.color4;
//     head14.style.background = localStorage.color4;
//     ubdateAccDar3.style.background = localStorage.color4;
//     optiCountDar.style.background = localStorage.color4;
//     head15.style.background = localStorage.color4;
//     ubdateAccDar2.style.background = localStorage.color4;
//     CityNameDar.style.background = localStorage.color4;
//     head16.style.background = localStorage.color4;
//     ubdateAccDar6.style.background = localStorage.color4;
//     ComNamNameDar.style.background = localStorage.color4;
//     MessNameDar.style.background = localStorage.color4;
//     FileNameDar.style.background = localStorage.color4;
//     head17.style.background = localStorage.color4;
//     ubdateAccDar7.style.background = localStorage.color4;
//     stateAccDar.style.background = localStorage.color4;
//     whoAccDar.style.background = localStorage.color4;
//     whoRepDar.style.background = localStorage.color4;
//     viewProDar.style.background = localStorage.color4;
//     contantDar.style.background = localStorage.color4;
//     head18.style.background = localStorage.color4;
//     allGeneralDar.style.background = localStorage.color4;
//     notiNameDar.style.background = localStorage.color4;
//     head19.style.background = localStorage.color4;
//     allGeneralDar2.style.background = localStorage.color4;
//     infChaDar.style.background = localStorage.color4;
//     heaD20.style.background = localStorage.color4;
//     ubdateAccDar8.style.background = localStorage.color4;
//     passDar.style.background = localStorage.color4;
//     gernAllDar.style.background = localStorage.color4;
//     creaditDar.style.background = localStorage.color4;
//     boxCardDar.style.background = localStorage.color4;
//     moneyDar.style.background = localStorage.color4;
//     cartNumDar.style.cbackground = localStorage.color4;
//     dateDar.style.background = localStorage.color4;
//     saveNumDar.style.background = localStorage.color4;
//     cardNameDar.style.background = localStorage.color4;
//     head21.style.background = localStorage.color4;
//     people10.style.background = localStorage.color4;
//     people11.style.background = localStorage.color4;
//     head22.style.background = localStorage.color4;
//     people32.style.background = localStorage.color4;
//     people33.style.background = localStorage.color4;
//     logOutDar.style.background = localStorage.color4;
//     signupInf.style.background = localStorage.color4;
//     PleEnterPassDar.style.background = localStorage.color4;
//     pleEnterEmDar.style.background = localStorage.color4;
//     pleEnterPasDar.style.background = localStorage.color4;
//     pleEnterAgDar.style.background = localStorage.color4;
//     emailaddDar.style.background = localStorage.color4;
//     passDar2.style.background = localStorage.color4;
//     againPassDar.style.background = localStorage.color4;
//     loginDar.style.background = localStorage.color41;
//     userDar.style.background = localStorage.color4;
//     passDar3.style.background = localStorage.color4;
//     signUpDar.style.background = localStorage.color41;
//     people22.style.background = localStorage.color4;
//     people23.style.background = localStorage.color4;
//     people24.style.background = localStorage.color4;
//     people25.style.background = localStorage.color4;
//     people26.style.background = localStorage.color4;
//     people27.style.background = localStorage.color4;
//     people28.style.background = localStorage.color4;
//     people29.style.background = localStorage.color4;
//     people30.style.background = localStorage.color4;
//     people34.style.background = localStorage.color4;
//     people35.style.background = localStorage.color4;
//     answerDar.style.background = localStorage.color4;
//     header8.style.background = localStorage.color4;
//     header9.style.background = localStorage.color4;
//     header7.style.background = localStorage.color4;
//     header10.style.background = localStorage.color4;
//     messRep.style.background = localStorage.color4;
//     messRep2.style.background = localStorage.color4;
//     rotateTad.style.background = localStorage.color4;
//     rotateTad3.style.background = localStorage.color4;
//     iqtebasPost.style.background = localStorage.color4;
//     navSmall.style.background = localStorage.color4;
//     header11.style.background = localStorage.color4;
//     arrowElse.style.background = localStorage.color4;
//     proInfElse.style.background = localStorage.color4;;
//     tadwe.style.background = localStorage.color4;
//     rodod.style.background = localStorage.color4;
//     likes.style.background = localStorage.color4;
//     media.style.background = localStorage.color4;
//     messRep.style.background = localStorage.color4;
//     people36.style.background = localStorage.color4;
//     people37.style.background = localStorage.color4;
//     people38.style.background = localStorage.color4;
//     people39.style.background = localStorage.color4;
//     people40.style.background = localStorage.color4;
//     people41.style.background = localStorage.color4;
//     people42.style.background = localStorage.color4;
//     people43.style.background = localStorage.color4;
//     peopleRe38.style.background = localStorage.color4;
//     peopleRe39.style.background = localStorage.color4;
//     settAccListUser.style.background = localStorage.color4;
//     blockUSerBox.style.background = localStorage.color4;
//     blockUSerBox2.style.background = localStorage.color4;
//     boxGift.style.background = localStorage.color4;
//     toGift5.style.background = localStorage.color4;
//     toGift3.style.background = localStorage.color4;
//     toGift4.style.background = localStorage.color4;
//     navSmall.style.background = localStorage.color4;
//     // userEnterDar.style.background = localStorage.color4;
//     // passEnterDar.style.background = localStorage.color4;
//     // // Black color
// }
// Function If Onclick White Mode
// let whiteMode = ()=>{
    
//      // white Background
//      header.style.background = 'white';
//      boxNewHead.style.background = 'white';
//      post1.style.background = 'white';
//      post2.style.background = 'white';
//      allMain.style.background = '#f4f4f4';
//      header2.style.background = 'white';
//      porfileInfDar.style.background = 'white';
//      tadwe2.style.background = 'white';
//      rodod2.style.background = 'white';
//      media2.style.background = 'white';
//      likes2.style.background = 'white';
//      rightPageMain.style.background = 'white';
//      rightPageMore.style.background = 'white';
//      allPostNewbac.style.background = 'white';
//      search.style.background = 'white';
//      whoFollDar.style.background = 'white';
//      impYOuDark.style.background = 'white';
//      tadDar.style.background = 'white';
//      KhawaterDar.style.background = 'white';
//      zekerDar.style.background = 'white';
//      gazaDar.style.background = 'white';
//      footerDar.style.background = 'white';
//      langDar.style.background = 'white';
//      alladdDar.style.background = 'white';
//      listNav2.style.background = 'white';
//      centerAnotherDar.style.background ='white';
//      centerAnotherDar2.style.background = 'white';
//      people2.style.background = 'white';
//      people21.style.background = 'white';
//      people3.style.background = 'white';
//      people31.style.background = 'white';
//      people4.style.background = 'white';
//      people5.style.background = 'white';
//      people6.style.background = 'white';
//      people7.style.background = 'white';
//      header3.style.background ='white';
//      messSearDar.style.background = 'white';
//      hashtaq4.style.background = 'white';
//      users4.style.background = 'white';
//      tadwe4.style.background = 'white';
//      explore.style.background = 'white';
//      newSearchBtn.style.background = 'white';
//      peopleSearchBtn.style.background = 'white';
//      mediaSearchBtn.style.background = 'white';
//      searOf.style.background = 'white';
//      hash1.style.background = 'white';
//      hash2.style.background = 'white';
//      hash3.style.background = 'white';
//      hash4.style.background = 'white';
//      notiFound.style.background = 'white';
//      people8.style.background = 'white';
//      people9.style.background = 'white';
//      header5.style.background = 'white';
//      notiDark.style.background = 'white';
//      notiIconDar.style.background = 'white';
//      backHome.style.background = 'white';
//      notFoundDar.style.background = 'white';
//      header6.style.background = 'white';
//      foodPro.style.background = 'white';
//      moreNoti.style.background = 'white';
//      serOfMessDar.style.background = 'white';
//      notiFoundMessD.style.background = 'white';
//      iconMessDar.style.background = 'white';
//      backHomeMess.style.background = 'white';
//      messFoundDar.style.background = 'white';
//      newMessDar.style.background = 'white';
//      serMessDar.style.background = 'white';
//      head6.style.background = 'white';
//      centerSettDar.style.background = 'white';
//      head7.style.background = 'white';
//      abdateDar.style.background = 'white';
//      firstNameDar.style.background = 'white';
//      secNameDar.style.background = 'white';
//      usernameL.style.background = 'white';
//      head8.style.background = 'white';
//      ubdateDar2.style.background = 'white';
//      EmailNameL.style.background = 'white';
//      head9.style.background = 'white';
//      optiNameDar.style.background = 'white';
//      ubdateDar3.style.background = 'white';
//      head10.style.background = 'white';
//      updatDar4.style.background = 'white';
//      optiName2.style.background = 'white';
//      head11.style.background = 'white';
//      ubdatGenDar.style.background = 'white';
//      genderNameDar.style.background = 'white';
//      head12.style.background = 'white';
//      ubdateAccDar5.style.background = 'white';
//      optiPassDar.style.background = 'white';
//      optiPassDar1.style.background = 'white';
//      optiPassDar2.style.background = 'white';
//      head13.style.background = 'white';
//      ubdateAccDar4.style.background = 'white';
//      optiLanDar.style.background = 'white';
//      head14.style.background = 'white';
//      ubdateAccDar3.style.background = 'white';
//      optiCountDar.style.background = 'white';
//      head15.style.background = 'white';
//      ubdateAccDar2.style.background = 'white';
//      CityNameDar.style.background = 'white';
//      head16.style.background = 'white';
//      ubdateAccDar6.style.background = 'white';
//      ComNamNameDar.style.background = 'white';
//      MessNameDar.style.background = 'white';
//      FileNameDar.style.background = 'white';
//      head17.style.background = 'white';
//      ubdateAccDar7.style.background = 'white';
//      stateAccDar.style.background = 'white';
//      whoAccDar.style.background = 'white';
//      whoRepDar.style.background = 'white';
//      viewProDar.style.background = 'white';
//      contantDar.style.background = 'white';
//      head18.style.background = 'white';
//      allGeneralDar.style.background = 'white';
//      notiNameDar.style.background = 'white';
//      head19.style.background = 'white';
//      allGeneralDar2.style.background = 'white';
//      infChaDar.style.background = 'white';
//      heaD20.style.background = 'white';
//      ubdateAccDar8.style.background = 'white';
//      passDar.style.background = 'white';
//     //  passUser.style.background = 'white';
//      gernAllDar.style.background = 'white';
//      creaditDar.style.background = 'white';
//      boxCardDar.style.background = 'white';
//      moneyDar.style.background = 'white';
//      cartNumDar.style.background = 'white';
//      dateDar.style.background = 'white';
//      saveNumDar.style.background = 'white';
//      cardNameDar.style.background = 'white';
//      head21.style.background = 'white';
//      people10.style.background = 'white';
//      people11.style.background = 'white';
//      head22.style.background = 'white';
//      people32.style.background = 'white';
//      people33.style.background = 'white';
//      logOutDar.style.background = 'white';
//      signupInf.style.background = 'white';
//      PleEnterPassDar.style.background = 'white';
//      pleEnterEmDar.style.background = 'white';
//      pleEnterPasDar.style.background = 'white';
//      pleEnterAgDar.style.background = 'white';
//      emailaddDar.style.background = 'white';
//      passDar2.style.background = 'white';
//      againPassDar.style.background = 'white';
//      loginDar.style.background = '#f4f4f4';
//      userDar.style.background = 'white';
//      passDar3.style.background = 'white';
//      signUpDar.style.background = '#f4f4f4';
//      people22.style.background = 'white';
//      people23.style.background = 'white';
//      people24.style.background = 'white';
//      people25.style.background = 'white';
//      people26.style.background = 'white';
//      people27.style.background = 'white';
//      people28.style.background = 'white';
//      people29.style.background = 'white';
//      people30.style.background = 'white';
//      people34.style.background = 'white';
//      people35.style.background = 'white';
//      answerDar.style.background = 'white';
//     header8.style.background ='white';
//     header9.style.background = 'white';
//     header7.style.background = 'white';
//     header10.style.background = 'white';
//     messRep.style.background = 'white';
//     messRep2.style.background = 'white';
//     rotateTad.style.background = 'white';
//     rotateTad3.style.background = 'white';
//     navSmall.style.background = 'white';
//     iqtebasPost.style.background = 'white';
//     header11.style.background = 'white';
//     arrowElse.style.background = 'white';
//     proInfElse.style.background = 'white';
//     tadwe.style.background = 'white';
//     rodod.style.background = 'white';
//     likes.style.background = 'white';
//     media.style.background = 'white';
//     messRep.style.background = 'white';
//     people36.style.background = 'white';
//     people37.style.background = 'white';
//     people38.style.background = 'white';
//     people39.style.background = 'white';
//     people40.style.background = 'white';
//     people41.style.background = 'white';
//     people42.style.background = 'white';
//     people43.style.background = 'white';
//     peopleRe38.style.background = 'white';
//     peopleRe39.style.background = 'white';
//     settAccListUser.style.background = 'white';
//     blockUSerBox.style.background = 'white';
//     blockUSerBox2.style.background = 'white';
//     boxGift.style.background = 'white';
//     toGift5.style.background = 'white';
//     toGift3.style.background = 'white';
//     toGift4.style.background = 'white';
//      // userEnterDar.style.background = 'white';
//      // passEnterDar.style.background = 'white';

//      // Black color
//      header2.style.color = 'black';
//      head4.style.color = 'black';
//      porfileInfDar.style.color = 'black';
//      tadwe2.style.color = 'black';
//      rodod2.style.color = 'black';
//      media2.style.color = 'black';
//      likes2.style.color = 'black';
//      head3.style.color = 'black';
//      post1.style.color = 'black';
//      post2.style.color = 'black';
//      centerMain.style.color = 'black';
//      rightPageMain.style.color = 'black';
//      rightPageMore.style.color = 'black';
//      notePerA.style.color = 'black';
//      mainPageA.style.color = 'black';
//      searchBtnA.style.color = 'black';
//      noticationBtnA.style.color = 'black';
//      SettAccountBtnA.style.color = 'black';
//      controlLoaA.style.color = 'black';
//      messgeBtnA.style.color = 'black';
//      creditcardIconA.style.color = 'black';
//      suggesIconI.style.color = 'black';
//      BookMarkBtnA.style.color = 'black';
//      LogOutBtnA.style.color = 'black';
//      moreA.style.color = 'black';
//      lessA.style.color = 'black';
//      allPostNewbac.style.color = 'black';
//      postText2.style.color = 'black';
//      postText.style.color = 'black';
//      footerDar.style.color = 'black';
//      langDar.style.color = 'black';
//      tadDar.style.color = 'black';
//      KhawaterDar.style.color = 'black';
//      zekerDar.style.color = 'black';
//      gazaDar.style.color = 'black';
//      whoFollDar.style.color = 'black';
//      alladdDar.style.color = 'black';
//      listNav2.style.color = 'black';
//      centerAnotherDar.style.color = 'black';
//      centerAnotherDar2.style.color = 'black';
//      people2.style.color = 'black';
//      people21.style.color = 'black';
//      people3.style.color = 'black';
//      people31.style.color = 'black';
//      people4.style.color = 'black';
//      people5.style.color = 'black';
//      people6.style.color = 'black';
//      people7.style.color = 'black';
//      header3.style.color = 'black';
//      messSearDar.style.color = 'black';
//      hashtaq4.style.color = 'black';
//      users4.style.color = 'black';
//      tadwe4.style.color = 'black';
//      explore.style.color = 'black';
//      newSearchBtn.style.color = 'black';
//      peopleSearchBtn.style.color = 'black';
//      mediaSearchBtn.style.color = 'black';
//      iconDar.style.color = 'black';
//      hash1.style.color = 'black';
//      hash2.style.color = 'black';
//      hash3.style.color = 'black';
//      hash4.style.color = 'black';
//      head5.style.color = 'black';
//      people8.style.color = 'black';
//      people9.style.color = 'black';
//      notePerA.style.color = 'black';
//      mainPageA.style.color = 'black';
//      searchBtnA.style.color = 'black';
//      SettAccountBtnA.style.color = 'black';
//      creditcardIconA.style.color = 'black';
//      suggesIconI.style.color = 'black';
//      BookMarkBtnA.style.color = 'black';
//      LogOutBtnA.style.color = 'black';
//      lessA.style.color = 'black';
//      moreA.style.color = 'black';
//      header5.style.color = 'black';
//      notiDark.style.color = 'black';
//      backHome.style.color = 'black';
//      notFoundDar.style.color = 'black';
//      header6.style.color = 'black';
//      searOf.style.color = 'black';
//      serOfMessDar.style.color = 'black';
//      iconMesDark.style.color = 'black';
//      notiFoundMessD.style.color = 'black';
//      backHomeMess.style.color = 'black';
//      messFoundDar.style.color = 'black';
//      newMessDar.style.color = 'black';
//      serMessDar.style.color = 'black';
//      head6.style.color = 'black';
//      centerSettDar.style.color = 'black';
//      head7.style.color = 'black';
//      abdateDar.style.color = 'black';
//      firstNameDar.style.color = 'black';
//      secNameDar.style.color = 'black';
//      usernameL.style.color = 'black';
//      head8.style.color = 'black';
//      ubdateDar2.style.color = 'black';
//      EmailNameL.style.color = 'black';
//      head9.style.color = 'black';
//      optiNameDar.style.color = 'black';
//      ubdateDar3.style.color = 'black';
//      head10.style.color = 'black';
//      updatDar4.style.color = 'black';
//      optiName2.style.color = 'black';
//      head11.style.color = 'black';
//      ubdatGenDar.style.color = 'black';
//      genderNameDar.style.color = 'black';
//      head12.style.color = 'black';
//      ubdateAccDar5.style.color = 'black';
//      optiPassDar.style.color = 'black';
//      optiPassDar1.style.color = 'black';
//      optiPassDar2.style.color = 'black';
//      head13.style.color = 'black';
//      ubdateAccDar4.style.color = 'black';
//      optiLanDar.style.color = 'black';
//      head14.style.color = 'black';
//      ubdateAccDar3.style.color = 'black';
//      optiCountDar.style.color = 'black';
//      head15.style.color = 'black';
//      ubdateAccDar2.style.color = 'black';
//      CityNameDar.style.color = 'black';
//      head16.style.color = 'black';
//      ubdateAccDar6.style.color = 'black';
//      ComNamNameDar.style.color = 'black';
//      MessNameDar.style.bcolor = 'black';
//      FileNameDar.style.color = 'black';
//      head17.style.color = 'black';
//      ubdateAccDar7.style.color = 'black';
//      stateAccDar.style.color = 'black';
//      whoAccDar.style.color = 'black';
//      whoRepDar.style.color = 'black';
//      viewProDar.style.color = 'black';
//      contantDar.style.color = 'black';
//      head18.style.color = 'black';
//      allGeneralDar.style.color = 'black';
//      notiNameDar.style.color = 'black';
//      head19.style.color = 'black';
//      allGeneralDar2.style.color = 'black';
//      infChaDar.style.color = 'black';
//      heaD20.style.color = 'black';
//      ubdateAccDar8.style.color = 'black';
//      passDar.style.color = 'black';
//      gernAllDar.style.color = 'black';
//      creaditDar.style.color = 'black';
//      boxCardDar.style.color = 'black';
//      moneyDar.style.color = 'black';
//      cartNumDar.style.color = 'black';
//      dateDar.style.color = 'black';
//      saveNumDar.style.color = 'black';
//      cardNameDar.style.color = 'black';
//      head21.style.color = 'black';
//      people10.style.color = 'black';
//      people11.style.color = 'black';
//      head22.style.color = 'black';
//      people32.style.color = 'black';
//      people33.style.color = 'black';
//      logOutDar.style.color = 'black';
//      signupInf.style.color = 'black';
//      PleEnterPassDar.style.color = 'black';
//      pleEnterEmDar.style.color = 'black';
//      pleEnterPasDar.style.color = 'black';
//      pleEnterAgDar.style.color = 'black';
//      userNameDar.style.color = 'black';
//      emailaddDar.style.color = 'black';
//      passDar2.style.color = 'black';
//      againPassDar.style.color = 'black';
//      closeSignUpBtn.style.color = 'black';
//      loginDar.style.color = 'black';
//      userDar.style.color = 'black';
//      passDar3.style.color = 'black';
//      closeSignInBtn.style.color = 'black';

//      people22.style.color = 'black';
//      people23.style.color = 'black';
//      people24.style.color = 'black';
//      people25.style.color = 'black';
//      people26.style.color = 'black';
//      people27.style.color = 'black';
//      people28.style.color = 'black';
//      people29.style.color = 'black';
//      people30.style.color = 'black';
//      people34.style.color = 'black';
//      people35.style.color = 'black';
//      answerDar.style.color = 'black';
//     header8.style.color = 'black';
//     header9.style.color = 'black';
//     header7.style.color = 'black';
//     header10.style.color = 'black';
//     messRep.style.color = 'black';
//     messRep2.style.color = 'black';
//     rotateTad.style.color = 'black';
//     rotateTad3.style.color = 'black';
//     navSmall.style.color = 'black';
//     iqtebasPost.style.color = 'black';
//     langSite.style.color = 'black';
//     header11.style.color = 'black';
//     arrowElse.style.color = 'black';
//     proInfElse.style.color = 'black';
//     tadwe.style.color = 'black';
//     rodod.style.color = 'black';
//     likes.style.color = 'black';
//     media.style.color = 'black';
//     messRep.style.color = 'black';
//     people36.style.color = 'black';
//     people37.style.color = 'black';
//     people38.style.color = 'black';
//     people39.style.color = 'black';
//     people40.style.color = 'black';
//     people41.style.color = 'black';
//     people42.style.color = 'black';
//     people43.style.color = 'black';
//     peopleRe38.style.color = 'black';
//     peopleRe39.style.color = 'black';
//     settAccListUser.style.color = 'black';
//     blockUSerBox.style.color = 'black';
//     blockUSerBox2.style.color = 'black';
//     canselBlockBtn.style.color = 'black';
//     canselBlockBtn1.style.color = 'black';
//     blockBtn.style.color = 'black';
//     removeBlockBtn.style.color = 'black';
//     messShowBlock.style.color = 'black';
//     boxGift.style.color = 'black';
//     toGift5.style.color = 'black';
//     toGift3.style.color = 'black';
//     toGift4.style.color = 'black';
//     homeIconList.style.color = 'black';
//     searIconList.style.color = 'black';
//     notiIconList.style.color = 'black';
//     messIconList.style.color = 'black';
//      // userEnterDar.style.color = 'black';
//      // passEnterDar.style.color = 'black';
//      // border White 
    
//      setIcon.style.display = 'block';
//      setIconWhite.style.display = 'none';
//      setIcon2.style.display = 'block';
//      setIconWhite2.style.display = 'none';
//      localStorage.setItem('color4' , 'white');
//     localStorage.setItem('color41' , '#f4f4f4');
//     localStorage.clear()
     
// }

// Function If Onclick Dark Mode
// let darkMode = ()=>{
//      // Black Background
//      onloadLogo.style.background = '#161b25';
//      header.style.background = '#161b25';
//      boxNewHead.style.background = '#161b25';
//      post1.style.background = '#161b25';
//      post2.style.background = '#161b25';
//      allMain.style.background = '#2f3b50';
//      header2.style.background = '#161b25';
//      porfileInfDar.style.background = '#161b25';
//      tadwe2.style.background = '#161b25';
//      rodod2.style.background = '#161b25';
//      media2.style.background = '#161b25';
//      likes2.style.background = '#161b25';
//      rightPageMain.style.background = '#161b25';
//      rightPageMore.style.background = '#161b25';
//      allPostNewbac.style.background = '#161b25';
//      search.style.background = '#161b25';
//      whoFollDar.style.background = '#161b25';
//      impYOuDark.style.background = '#161b25';
//      tadDar.style.background = '#161b25';
//      KhawaterDar.style.background = '#161b25';
//      zekerDar.style.background = '#161b25';
//      gazaDar.style.background = '#161b25';
//      footerDar.style.background = '#161b25';
//      langDar.style.background = '#161b25';
//      alladdDar.style.background = '#161b25';
//      listNav2.style.background = '#161b25';
//      centerAnotherDar.style.background = '#161b25';
//      centerAnotherDar2.style.background = '#161b25';
//      people2.style.background = '#161b25';
//      people21.style.background = '#161b25';
//      people3.style.background = '#161b25';
//      people31.style.background = '#161b25';
//      people4.style.background = '#161b25';
//      people5.style.background = '#161b25';
//      people6.style.background = '#161b25';
//      people7.style.background = '#161b25';
//      header3.style.background ='#161b25';
//      messSearDar.style.background = '#161b25';
//      hashtaq4.style.background = '#161b25';
//      users4.style.background = '#161b25';
//      tadwe4.style.background = '#161b25';
//      explore.style.background = '#161b25';
//      newSearchBtn.style.background = '#161b25';
//      peopleSearchBtn.style.background = '#161b25';
//      mediaSearchBtn.style.background = '#161b25';
//      searOf.style.background = '#161b25';
//      hash1.style.background = '#161b25';
//      hash2.style.background = '#161b25';
//      hash3.style.background = '#161b25';
//      hash4.style.background = '#161b25';
//      notiFound.style.background =  '#161b25';
//      people8.style.background = '#161b25';
//      people9.style.background = '#161b25';
//      header5.style.background = '#161b25';
//      notiDark.style.background = '#161b25';
//      notiIconDar.style.background = '#161b25';
//      backHome.style.background = '#161b25';
//      notFoundDar.style.background = '#161b25';
//      header6.style.background = '#161b25';
//      moreNoti.style.background = '#161b25';
//      foodPro.style.background = '#161b25';
//      serOfMessDar.style.background = '#161b25';
//      notiFoundMessD.style.background = '#161b25';
//      iconMessDar.style.background = '#161b25';
//      backHomeMess.style.background = '#161b25';
//      messFoundDar.style.background = '#161b25';
//      newMessDar.style.background = '#161b25';
//      serMessDar.style.background = '#161b25';
//      head6.style.background = '#161b25';
//      centerSettDar.style.background = '#161b25';
//      head7.style.background = '#161b25';
//      abdateDar.style.background = '#161b25';
//      firstNameDar.style.background = '#161b25';
//      secNameDar.style.background = '#161b25';
//      usernameL.style.background = '#161b25';
//      head8.style.background = '#161b25';
//      ubdateDar2.style.background = '#161b25';
//      EmailNameL.style.background = '#161b25';
//      head9.style.background = '#161b25';
//      optiNameDar.style.background = '#161b25';
//      ubdateDar3.style.background = '#161b25';
//      head10.style.background = '#161b25';
//      updatDar4.style.background = '#161b25';
//      optiName2.style.background = '#161b25';
//      head11.style.background = '#161b25';
//      ubdatGenDar.style.background = '#161b25';
//      genderNameDar.style.background = '#161b25';
//      head12.style.background = '#161b25';
//      ubdateAccDar5.style.background = '#161b25';
//      optiPassDar.style.background = '#161b25';
//      optiPassDar1.style.background = '#161b25';
//      optiPassDar2.style.background = '#161b25';
//      head13.style.background = '#161b25';
//      ubdateAccDar4.style.background = '#161b25';
//      optiLanDar.style.background ='#161b25';
//      head14.style.background = '#161b25';
//      ubdateAccDar3.style.background = '#161b25';
//      optiCountDar.style.background = '#161b25';
//      head15.style.background = '#161b25';
//      ubdateAccDar2.style.background = '#161b25';
//      CityNameDar.style.background = '#161b25';
//      head16.style.background = '#161b25';
//      ubdateAccDar6.style.background = '#161b25';
//      ComNamNameDar.style.background = '#161b25';
//      MessNameDar.style.background = '#161b25';
//      FileNameDar.style.background = '#161b25';
//      head17.style.background = '#161b25';
//      ubdateAccDar7.style.background = '#161b25';
//      stateAccDar.style.background = '#161b25';
//      whoAccDar.style.background = '#161b25';
//      whoRepDar.style.background = '#161b25';
//      viewProDar.style.background = '#161b25';
//      contantDar.style.background = '#161b25';
//      head18.style.background = '#161b25';
//      allGeneralDar.style.background = '#161b25';
//      notiNameDar.style.background = '#161b25';
//      head19.style.background = '#161b25';
//      allGeneralDar2.style.background = '#161b25';
//      infChaDar.style.background = '#161b25';
//      heaD20.style.background = '#161b25';
//      ubdateAccDar8.style.background = '#161b25';
//      passDar.style.background = '#161b25';
//     //  passUser.style.background = '#161b25';
//      gernAllDar.style.background = '#2f3b50';
//      creaditDar.style.background = '#161b25';
//      boxCardDar.style.background = '#161b25';
//      moneyDar.style.background = '#161b25';
//      cartNumDar.style.background = '#161b25';
//      dateDar.style.background = '#161b25';
//      saveNumDar.style.background = '#161b25';
//      cardNameDar.style.background = '#161b25';
//      head21.style.background = '#161b25';
//      people10.style.background = '#161b25';
//      people11.style.background = '#161b25';
//      head22.style.background = '#161b25';
//      people32.style.background = '#161b25';
//      people33.style.background = '#161b25';
//      logOutDar.style.background = '#161b25';
//      signupInf.style.background = '#161b25';
//      PleEnterPassDar.style.background = '#161b25';
//      pleEnterEmDar.style.background = '#161b25';
//      pleEnterPasDar.style.background = '#161b25';
//      pleEnterAgDar.style.background = '#161b25';
//      emailaddDar.style.background = '#161b25';
//      passDar2.style.background = '#161b25';
//      againPassDar.style.background = '#161b25';
//      loginDar.style.background = '#161b25';
//      userDar.style.background = '#161b25';
//      passDar3.style.background = '#161b25';
//      people22.style.background = '#161b25';
//      people23.style.background = '#161b25';
//      people24.style.background = '#161b25';
//      people25.style.background = '#161b25';
//      people26.style.background = '#161b25';
//      people27.style.background = '#161b25';
//      people28.style.background = '#161b25';
//      people29.style.background = '#161b25';
//      people30.style.background = '#161b25';
//      people34.style.background = '#161b25';
//      people35.style.background = '#161b25';
//      answerDar.style.background = '#161b25';
//     header8.style.background = '#161b25';
//     header9.style.background = '#161b25';
//     header7.style.background = '#161b25';
//     header10.style.background = '#161b25';
//     messRep.style.background = '#161b25';
//     messRep2.style.background = '#161b25';
//     rotateTad.style.background = '#161b25';
//     rotateTad3.style.background = '#161b25';
//     navSmall.style.background = '#161b25';
//     iqtebasPost.style.background = '#161b25';
//     header11.style.background = '#161b25';
//     arrowElse.style.background = '#161b25';
//     proInfElse.style.background = '#161b25';
//     tadwe.style.background = '#161b25';
//     rodod.style.background = '#161b25';
//     likes.style.background = '#161b25';
//     media.style.background = '#161b25';
//     messRep.style.background = '#161b25';
//     people36.style.background = '#161b25';
//     people37.style.background = '#161b25';
//     people38.style.background = '#161b25';
//     people39.style.background = '#161b25';
//     people40.style.background = '#161b25';
//     people41.style.background = '#161b25';
//     people42.style.background = '#161b25';
//     people43.style.background = '#161b25';
//     peopleRe38.style.background = '#161b25';
//     peopleRe39.style.background = '#161b25';
//     settAccListUser.style.background = '#161b25';
//     blockUSerBox.style.background = '#161b25';
//     blockUSerBox2.style.background = '#161b25';
//     boxGift.style.background = '#161b25';
//     toGift5.style.background = '#161b25';
//     toGift3.style.background = '#161b25';
//     toGift4.style.background = '#161b25';
//      // userEnterDar.style.background = 'black';
//      // passEnterDar.style.background = 'black';
//          // white color
//      header2.style.color = 'white';
//      head4.style.color = 'white';
//      porfileInfDar.style.color = 'white';
//      tadwe2.style.color = '#8a96a3';
//      rodod2.style.color = '#8a96a3';
//      media2.style.color = '#8a96a3';
//      likes2.style.color = '#8a96a3';
//      head3.style.color = 'white';
//      post1.style.color = 'white';
//      post2.style.color = 'white';
//      centerMain.style.color = 'white';
//      rightPageMain.style.color = 'white';
//      rightPageMore.style.color = 'white';
//      notePerA.style.color = 'white';
//      mainPageA.style.color = 'white';
//      searchBtnA.style.color = 'white';
//      noticationBtnA.style.color = 'white';
//      SettAccountBtnA.style.color = 'white';
//      controlLoaA.style.color = 'white';
//      messgeBtnA.style.color = 'white';
//      creditcardIconA.style.color = 'white';
//      suggesIconI.style.color = 'white';
//      BookMarkBtnA.style.color = 'white';
//      LogOutBtnA.style.color = 'white';
//      moreA.style.color = 'white';
//      lessA.style.color = 'white';
//      allPostNewbac.style.color = 'white';
//      postText2.style.color = 'white';
//      postText.style.color = 'white';
//      footerDar.style.color = 'white';
//      langDar.style.color = 'white';
//      tadDar.style.color = 'white';
//      KhawaterDar.style.color = 'white';
//      zekerDar.style.color = 'white';
//      gazaDar.style.color = 'white';
//      whoFollDar.style.color = 'white';
//      alladdDar.style.color = 'white';
//      listNav2.style.color = 'white';
//      centerAnotherDar.style.color = 'white';
//      centerAnotherDar2.style.color = 'white';
//      people2.style.color = 'white';
//      people21.style.color = 'white';
//      people3.style.color = 'white';
//      people31.style.color = 'white';
//      people4.style.color = 'white';
//      people5.style.color = 'white';
//      people6.style.color = 'white';
//      people7.style.color = 'white';
//      header3.style.color = 'white';
//      messSearDar.style.color = 'white';
//      hashtaq4.style.color = 'white';
//      users4.style.color = 'white';
//      tadwe4.style.color = 'white';
//      explore.style.color = 'white';
//      newSearchBtn.style.color = 'white';
//      peopleSearchBtn.style.color = 'white';
//      mediaSearchBtn.style.color = 'white';
//      iconDar.style.color = 'white';
//      hash1.style.color = 'white';
//      hash2.style.color = 'white';
//      hash3.style.color = 'white';
//      hash4.style.color = 'white';
//      head5.style.color = 'white';
//      people8.style.color = 'white';
//      people9.style.color = 'white';
//      notePerA.style.color = 'white';
//      mainPageA.style.color = 'white';
//      searchBtnA.style.color = 'white';
//      SettAccountBtnA.style.color = 'white';
//      creditcardIconA.style.color = 'white';
//      suggesIconI.style.color = 'white';
//      BookMarkBtnA.style.color = 'white';
//      LogOutBtnA.style.color = 'white';
//      lessA.style.color = 'white';
//      moreA.style.color = 'white';
//      header5.style.color = 'white';
//      notiDark.style.color = 'white';
//      backHome.style.color = 'white';
//      notFoundDar.style.color = 'white';
//      header6.style.color = 'white';
//      searOf.style.color = 'white';
//      serOfMessDar.style.color = 'white';
//      iconMesDark.style.color = 'white';
//      notiFoundMessD.style.color = 'white';
//      backHomeMess.style.color = 'white';
//      messFoundDar.style.color = 'white';
//      newMessDar.style.color = 'white';
//      serMessDar.style.color = 'white';
//      head6.style.color = 'white';
//      head6.style.color = 'white';
//      centerSettDar.style.color = 'white';
//      head7.style.color = 'white';
//      abdateDar.style.color = 'white';
//      firstNameDar.style.color = 'white';
//      secNameDar.style.color = 'white';
//      usernameL.style.color = 'white';
//      head8.style.color = 'white';
//      ubdateDar2.style.color = 'white';
//      EmailNameL.style.color = 'white';
//      head9.style.color = 'white';
//      optiNameDar.style.color = 'white';
//      ubdateDar3.style.color = 'white';
//      head10.style.color = 'white';
//      updatDar4.style.color = 'white';
//      optiName2.style.color = 'white';
//      head11.style.color = 'white';
//      ubdatGenDar.style.color = 'white';
//      genderNameDar.style.color = 'white';
//      head12.style.color = 'white';
//      ubdateAccDar5.style.color = 'white';
//      optiPassDar.style.color = 'white';
//      optiPassDar1.style.color = 'white';
//      optiPassDar2.style.color = 'white';
//      head13.style.color = 'white';
//      ubdateAccDar4.style.color = 'white';
//      optiLanDar.style.color = 'white';
//      head14.style.color = 'white';
//      ubdateAccDar3.style.color = 'white';
//      optiCountDar.style.color = 'white';
//      head15.style.color = 'white';
//      ubdateAccDar2.style.color = 'white';
//      CityNameDar.style.color = 'white';
//      head16.style.color = 'white';
//      ubdateAccDar6.style.color = 'white';
//      ComNamNameDar.style.color = 'white';
//      MessNameDar.style.color = 'white';
//      FileNameDar.style.color = 'white';
//      head17.style.color = 'white';
//      ubdateAccDar7.style.color = 'white';
//      stateAccDar.style.color = 'white';
//      whoAccDar.style.color = 'white';
//      whoRepDar.style.color = 'white';
//      viewProDar.style.color = 'white';
//      contantDar.style.color = 'white';
//      head18.style.color = 'white';
//      allGeneralDar.style.color = 'white';
//      notiNameDar.style.color = 'white';
//      head19.style.color = 'white';
//      allGeneralDar2.style.color = 'white';
//      infChaDar.style.color = 'white';
//      heaD20.style.color = 'white';
//      ubdateAccDar8.style.color = 'white';
//      passDar.style.color = 'white';
//      passUser.style.color = 'white';
//      gernAllDar.style.color = 'white';
//      creaditDar.style.color = 'white';
//      boxCardDar.style.color = 'white';
//      moneyDar.style.color = 'white';
//      cartNumDar.style.color = 'white';
//      dateDar.style.color = 'white';
//      saveNumDar.style.color = 'white';
//      cardNameDar.style.color = 'white';
//      head21.style.color = 'white';
//      people10.style.color = 'white';
//      people11.style.color = 'white';
//      head22.style.color = 'white';
//      people32.style.color = 'white';
//      people33.style.color = 'white';
//      logOutDar.style.color = 'white';
//      signupInf.style.color = 'white';
//      PleEnterPassDar.style.color = 'white';
//      pleEnterEmDar.style.color = 'white';
//      pleEnterPasDar.style.color = 'white';
//      pleEnterAgDar.style.color = 'white';
//      userNameDar.style.color = 'white';
//      emailaddDar.style.color = 'white';
//      passDar2.style.color = 'white';
//      againPassDar.style.color = 'white';
//      closeSignUpBtn.style.color = 'white';
//      loginDar.style.color = 'white';
//      userDar.style.color = 'white';
//      passDar3.style.color = 'white';
//      closeSignInBtn.style.color = 'white';

//      people22.style.color = 'white';
//      people23.style.color = 'white';
//      people24.style.color = 'white';
//      people25.style.color = 'white';
//      people26.style.color = 'white';
//      people27.style.color = 'white';
//      people28.style.color = 'white';
//      people29.style.color = 'white';
//      people30.style.color = 'white';
//      people34.style.color = 'white';
//      people35.style.color = 'white';
//      answerDar.style.color = 'white';
//     header8.style.color = 'white';
//     header9.style.color = 'white';
//     header7.style.color = 'white';
//     header10.style.color = 'white';
//     messRep.style.color = 'white';
//     messRep2.style.color = 'white';
//     rotateTad.style.color = 'white';
//     rotateTad3.style.color = 'white';
//     navSmall.style.color = 'white';
//     iqtebasPost.style.color = 'white';
//     langSite.style.color = 'white';
//     header11.style.color = 'white';
//     arrowElse.style.color = 'white';
//     proInfElse.style.color = 'white';
//     tadwe.style.color = '#8a96a3';
//     rodod.style.color = '#8a96a3';
//     likes.style.color = '#8a96a3';
//     media.style.color = '#8a96a3';
//     messRep.style.color = 'white';
//     people36.style.color = 'white';
//     people37.style.color = 'white';
//     people38.style.color = 'white';
//     people39.style.color = 'white';
//     people40.style.color = 'white';
//     people41.style.color = 'white';
//     people42.style.color = 'white';
//     people43.style.color = 'white';
//     peopleRe38.style.color = 'white';
//     peopleRe39.style.color = 'white';
//     settAccListUser.style.color = 'white';
//     blockUSerBox.style.color = 'white';
//     blockUSerBox2.style.color = 'white';
//     canselBlockBtn.style.color = 'white';
//     canselBlockBtn1.style.color = 'white';
//     blockBtn.style.color = 'white';
//     removeBlockBtn.style.color = 'white';
//     messShowBlock.style.color = 'white';
//     boxGift.style.color = 'white';
//     toGift5.style.color = 'white';
//     toGift3.style.color = 'white';
//     toGift4.style.color = 'white';
//     homeIconList.style.color = 'white';
//     searIconList.style.color = 'white';
//     notiIconList.style.color = 'white';
//     messIconList.style.color = 'white';

//     // Border Color
//     userDar.style.borderBottom = '2px solid #44a7e0';
//     passDar3.style.borderBottom = '2px solid #44a7e0';
//     PleEnterPassDar.style.borderBottom = '2px solid #44a7e0';
//     pleEnterEmDar.style.borderBottom = '2px solid #44a7e0';
//     pleEnterPasDar.style.borderBottom = '2px solid #44a7e0';
//     pleEnterAgDar.style.borderBottom = '2px solid #44a7e0';

//      setIcon.style.display = 'none';
//      setIconWhite.style.display = 'block';
//      setIcon2.style.display = 'none';
//      setIconWhite2.style.display = 'block';

//      localStorage.setItem('color' , '#161b25');
//          localStorage.setItem('color2' , 'white');
//          localStorage.setItem('color5' , '#2f3b50');
//          localStorage.setItem('color6' , '#8a96a3');
//          localStorage.setItem('color42' , '#44a7e0');
     
//  // localStorage.setItem('color4' , 'white');
// }

// setIcon.addEventListener('click' , ()=>{
//         darkMode(); 
//         searchBtn.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             searchBtnA.style.color = '#44a7e0d0';
//         });
//         notePer.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             notePerA.style.color = '#44a7e0d0';
//         });
//         mainPage.addEventListener('click' , ()=>{
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             mainPageA.style.color = '#44a7e0d0';
//         });
//         noticationBtn.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             noticationBtnA.style.color = '#44a7e0d0';
//         });
//         messgeBtn.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             messgeBtnA.style.color = '#44a7e0d0';
//         });
//         SettAccountBtn.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = '#44a7e0d0';
//         });
//         creditcardIcon.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             creditcardIconA.style.color = '#44a7e0d0';
//         });
//         suggesIcon.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             suggesIconI.style.color = '#44a7e0d0';
//         });
//         BookMarkBtn.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             BookMarkBtnA.style.color = '#44a7e0d0';
//         });
//         LogOutBtn.addEventListener('click' , ()=>{
//             mainPageA.style.color = 'white';
//             notePerA.style.color = 'white';
//             noticationBtnA.style.color = 'white';
//             messgeBtnA.style.color = 'white';
//             SettAccountBtnA.style.color = 'white';
//             suggesIconI.style.color = 'white';
//             BookMarkBtnA.style.color = 'white';
//             searchBtnA.style.color = 'white';
//             LogOutBtnA.style.color = 'white';
//             LogOutBtnA.style.color = '#44a7e0d0';
//         });
//         homeIconList.addEventListener('click' ,()=>{
//             homeIconList.style.color = '#44a7e0d0'; 
//             searIconList.style.color = 'white'; 
//             notiIconList.style.color = 'white'; 
//             messIconList.style.color = 'white'; 
//         });
//         searIconList.addEventListener('click' ,()=>{
//             searIconList.style.color = '#44a7e0d0'; 
//             notiIconList.style.color = 'white'; 
//             messIconList.style.color = 'white'; 
//             homeIconList.style.color = 'white'; 
//         });
//         notiIconList.addEventListener('click' ,()=>{
//             notiIconList.style.color = '#44a7e0d0'; 
//             searIconList.style.color = 'white'; 
//             messIconList.style.color = 'white'; 
//             homeIconList.style.color = 'white'; 
//         });
//         messIconList.addEventListener('click' ,()=>{
//             messIconList.style.color = '#44a7e0d0'; 
//             searIconList.style.color = 'white'; 
//             notiIconList.style.color = 'white'; 
//             homeIconList.style.color = 'white'; 
//         });
// });  
// setIconWhite.addEventListener('click' , ()=>{
//     whiteMode();
//     searchBtn.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         searchBtnA.style.color = '#44a7e0d0';
//     });
//     notePer.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         notePerA.style.color = '#44a7e0d0';
//     });
//     mainPage.addEventListener('click' , ()=>{
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         mainPageA.style.color = '#44a7e0d0';
//     });
//     noticationBtn.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         noticationBtnA.style.color = '#44a7e0d0';
//     });
//     messgeBtn.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         messgeBtnA.style.color = '#44a7e0d0';
//     });
//     SettAccountBtn.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = '#44a7e0d0';
//     });
//     creditcardIcon.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         creditcardIconA.style.color = '#44a7e0d0';
//     });
//     suggesIcon.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         suggesIconI.style.color = '#44a7e0d0';
//     });
//     BookMarkBtn.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = 'black';
//         BookMarkBtnA.style.color = '#44a7e0d0';
//     });
//     LogOutBtn.addEventListener('click' , ()=>{
//         mainPageA.style.color = 'black';
//         notePerA.style.color = 'black';
//         noticationBtnA.style.color = 'black';
//         messgeBtnA.style.color = 'black';
//         SettAccountBtnA.style.color = 'black';
//         suggesIconI.style.color = 'black';
//         BookMarkBtnA.style.color = 'black';
//         searchBtnA.style.color = 'black';
//         LogOutBtnA.style.color = '#44a7e0d0';

//     });
//     homeIconList.addEventListener('click' ,()=>{
//         homeIconList.style.color = '#44a7e0d0'; 
//         searIconList.style.color = 'black'; 
//         notiIconList.style.color = 'black'; 
//         messIconList.style.color = 'black'; 
//     });
//     searIconList.addEventListener('click' ,()=>{
//         searIconList.style.color = '#44a7e0d0'; 
//         notiIconList.style.color = 'black'; 
//         messIconList.style.color = 'black'; 
//         homeIconList.style.color = 'black'; 
//     });
//     notiIconList.addEventListener('click' ,()=>{
//         notiIconList.style.color = '#44a7e0d0'; 
//         searIconList.style.color = 'black'; 
//         messIconList.style.color = 'black'; 
//         homeIconList.style.color = 'black'; 
//     });
//     messIconList.addEventListener('click' ,()=>{
//         messIconList.style.color = '#44a7e0d0'; 
//         searIconList.style.color = 'black'; 
//         notiIconList.style.color = 'black'; 
//         homeIconList.style.color = 'black'; 
//     });
// });
// List ( Mobile & Ipad )
// setIcon2.addEventListener('click' , ()=>{
//     darkMode();   
// });  
// setIconWhite2.addEventListener('click' , ()=>{
//        whiteMode();
// });

// whiteColorCircle.addEventListener('click' , ()=>{
//     whiteColorCircle.style.display = 'none';
//     blackColorCircle.style.display = 'block';
//     offOnBtn.style.background = 'black';
// });

goYourProfile.addEventListener('click', ()=>{
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'block';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    centerDardasha.style.display = 'none';
});
let pointAnotherAccBtn = ()=>{
    allAddAnother.style.bottom = '-15px';
    allAddAnother.style.transition = '0.3s';
    addEventListener('click' , function(event){
        if(event.target === allAddAnother){
            allAddAnother.style.bottom = '-3000px';
        }
    })
};
pointBtnAnother.addEventListener('click', ()=>{
    pointAnotherAccBtn();
});
pointBtnAnotherList.addEventListener('click', ()=>{
    pointAnotherAccBtn();
});


closeAddAnotherAcc.addEventListener('click', ()=>{
    allAddAnother.style.bottom = '-3000px';
    allAddAnother.style.transition = '0.3s';
});
createNewAcc.addEventListener('click', ()=>{
    allAddAnother.style.bottom = '-3000px';
    allAddAnother.style.transition = '0.3s';
    heroAdd.style.right = '-10000px';
    heroSignup.style.right = '0px';
    listNav.style.right = '-10000px';
});
addAnotherUser.addEventListener('click', ()=>{
    allAddAnother.style.bottom = '-3000px';
    allAddAnother.style.transition = '0.3s';
    heroSignup.style.right = '-10000px';
    heroAdd.style.right = '0px';
    listNav.style.right = '-10000px';
});
closeSignInBtn.addEventListener('click', ()=>{
    allAddAnother.style.bottom = '-3000px';
    allAddAnother.style.transition = '0.3s';
    heroAdd.style.right = '-10000px';
});
closeSignUpBtn.addEventListener('click', ()=>{
    allAddAnother.style.bottom = '-3000px';
    allAddAnother.style.transition = '0.3s';
    heroSignup.style.right = '-10000px';
});
// closeCard.addEventListener('click', ()=>{
//     creditCard.style.right = '-10000px';
//     allAddAnother.style.transition = '0.3s';
// });

// Back To The Home Page 

let backToTheHome = ()=>{
    centerMain.style.display = 'block';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    centerGiftNum.style.display = 'none';
    foodPro.style.display = 'none';
    notePerI.style.color = 'black';
    notePerA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnI.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    searchBtnI.style.color = 'black';
    mainPageI.style.color = '#44a7e0d0';
    mainPageA.style.color = '#44a7e0d0';
    messgeBtnA.style.color = 'black';
    messgeBtnI.style.color = 'black';
    noticationBtnA.style.color = 'black';
    noticationBtnI.style.color = 'black';
    infUserRighPag.style.display = 'block';
    boxGift.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
}

backHome.addEventListener('click', ()=>{
    backToTheHome();
});
backHomeMess.addEventListener('click', ()=>{
    backToTheHome();
});
lgoMain.addEventListener('click', ()=>{
    backToTheHome();
});
lgoMain2.addEventListener('click', ()=>{
    backToTheHome();
});
lgoMain4.addEventListener('click', ()=>{
    backToTheHome();
});
lgoMain5.addEventListener('click', ()=>{
    backToTheHome();
});
lgoMain6.addEventListener('click', ()=>{
    backToTheHome();
});
lgoMain7.addEventListener('click', ()=>{
    backToTheHome();
});
// user Another Your Account 
let goUserPro = function(){
    mainPageA.style.color = 'black';
    centerMain.style.display = 'none';
    peopleCard2.style.display = 'block';
    centerUserMdeia.style.display = 'block';
    centerAnotherUser.style.display = 'block';
    peopleCard5.style.display = 'none';
    centerUserLike.style.display = 'block';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSear.style.display = 'none';
    centerProf.style.display = 'none';
    tadwe.style.background = '#f4f4f4';
    rodod.style.background = 'white';
    media.style.background = 'white';
    likes.style.background = 'white';
    tadwe.style.borderBottom = '2px solid #44a7e0d0';
    rodod.style.borderBottom = 'none';
    media.style.borderBottom = 'none';
    likes.style.borderBottom = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
};
prev.addEventListener('click' , ()=>{
    centerMain.style.display = 'block';
    peopleCard2.style.display = 'none';
    peopleCard5.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerNoti.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
})

yourProf.addEventListener('click', ()=>{
    goUserPro();
});
yourProf1.addEventListener('click', ()=>{
    goUserPro();
});
replayToUser.addEventListener('click', ()=>{
    goUserPro();
});

// userFol.addEventListener('click', ()=>{
//     goUserPro();
// });
// yourProfTad.addEventListener('click', ()=>{
//     goUserPro();
// });
// yourProfMed.addEventListener('click', ()=>{
//     goUserPro();
// });
// yourProfLike.addEventListener('click', ()=>{
//     goUserPro();
// });
// Close Image 

let likeIconBook = document.getElementById('likeIconBook');
let rotateMo2 = document.getElementById('rotateMo2');

closeImg.onclick = ()=>{
    onclickImg.style.display = 'none';
};
rotateTad.style.display = 'none';
rotate.addEventListener('click' , ()=>{
    if(rotateTad.style.display == 'none'){
        rotate.style.color = 'green';
        rotateTad.style.display = 'block';
    }else{
        rotateTad.style.display = 'none';
        rotate.style.color = '#a0b3d4';
    }
});  




// rotateTadVie3.style.display = 'none';
// rotateTad3.addEventListener('click' , ()=>{
//     if(rotateTadVie3.style.display == 'none'){
//         rotateTad3.style.color = 'green';
//         rotateTadVie3.style.display = 'block';
//     }else{
//         rotateTadVie3.style.display = 'none';
//         rotateTad3.style.color = '#a0b3d4';
//     }
// });  
rotateBookList.style.display = 'none';
rotateBook.addEventListener('click' , ()=>{
    if(rotateBookList.style.display == 'none'){
        rotateBook.style.color = 'green';
        rotateBookList.style.display = 'block';
    }else{
        rotateBookList.style.display = 'none';
        rotateBook.style.color = '#a0b3d4';
    }
});   
// likeIconBook.style.color = '#a0b3d4';
// likeIconBook.addEventListener('click' , ()=>{
//     if(likeIconBook.style.color == '#a0b3d4'){
//         likeIconBook.style.color = 'red';
//     }else{
//         likeIconBook.style.color = '#a0b3d4';
//     }
// });   
let likeIconn = document.getElementById('likeIconn');
let likeIcon2 = document.getElementById('likeIcon2');
let againRotate = document.getElementById('againRotate');
let viewIcon = document.getElementById('viewIcon');
let view2 = document.getElementById('view2');
let view3 = document.getElementById('view3');
let againRotate2 = document.getElementById('againRotate2');
let nasher = document.getElementById('nasher');
let iqtebas = document.getElementById('iqtebas');

let closeIqtebas = document.getElementById('closeIqtebas');
let againNasher = document.getElementById('againNasher');
let iqtebasPost2 = document.getElementById('iqtebasPost2');
let closeIqtebas2 = document.getElementById('closeIqtebas2');
let allPostNew2 = document.getElementById('allPostNew2');

// Iqtebas 
iqtebas.addEventListener('click' , ()=>{
    rotateTad.style.display = 'none';
    iqtebasPost.style.display = 'flex';
    iqtebasPost2.style.display = 'flex';
    allPostNew.style.right = '0';
    postText2.setAttribute('placeholder' , 'إضافة تعليق ...');
    againNasher.innerHTML = 'إعادة نشر';
    document.body.classList.add('nav-open');
});
closeIqtebas.addEventListener('click' , ()=>{
    iqtebasPost.style.display = 'none';
    postText2.setAttribute('placeholder' , 'دوّن يومياتك يا T.abed , ماذا حصل لك اليوم ؟');
    againNasher.innerHTML = 'نشر';
    
});
closeIqtebas2.addEventListener('click' , ()=>{
    iqtebasPost.style.display = 'none';
    iqtebasPost2.style.display = 'none';
    postText2.setAttribute('placeholder' , 'دوّن يومياتك يا T.abed , ماذا حصل لك اليوم ؟');
    againNasher.innerHTML = 'نشر';
});


likeIconn.style.color = '#a0b3d4';
likeIconn.addEventListener('click' , ()=>{
        if(likeIconn.style.color == '#a0b3d4'){
            likeIconn.style.color = '#a0b3d4';
        }else{
            likeIconn.style.color = 'red';
        }
});  
likeIcon2.style.color = '#a0b3d4';
likeIcon2.addEventListener('click' , ()=>{
    if(likeIcon2.style.color == '#a0b3d4'){
        likeIcon2.style.color = '#a0b3d4';
    }else{
        likeIcon2.style.color = 'red';
    }
});
view3.style.display = 'none';
nasher.style.display = 'none';
againRotate.addEventListener('click' , ()=>{
    view3.style.display = 'flex';
    view2.style.display = 'none';
    rotateTad.style.display = 'none';
    nasher.style.display = 'block';
})
againRotate2.addEventListener('click' , ()=>{
    view2.style.display = 'flex';
    view3.style.display = 'none';
    rotateTad.style.display = 'none';
    nasher.style.display = 'none';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
})
// againRotate.innerHTML ='إعادة النشر';
// againRotate.addEventListener('click' , ()=>{
//     if(againRotate.innerHTML ='إعادة النشر'){
//         rotateTad.style.display = 'none';
//         againRotate.innerHTML ='إلغاء إعادة النشر';
//     }else if(againRotate.innerHTML ='إلغاء إعادة النشر'){
//         rotateTad.style.display = 'none';
//         againRotate.innerHTML ='إعادة النشر';
//     }

// });



let showCommentMain = document.getElementById('showCommentMain');
let post3 = document.getElementById('post3');
let centerGiftNum = document.getElementById('centerGiftNum');
let toGift = document.getElementById('toGift');
let messRepBox = document.getElementById('messRepBox');
let messReplay = document.getElementById('messReplay');
let userMess = document.getElementById('userMess');
let userMess2 = document.getElementById('userMess2');
let messRepBox2 = document.getElementById('messRepBox2');
// If Onclick Any Tadwena
post3.addEventListener('click' , ()=>{
    centerMain.style.display = 'none';
    boxGift.style.display = 'none';
    showCommentMain.style.display = 'block';
    centerGiftNum.style.display = 'none';
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    messgeBtnI.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnI.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    searchBtnI.style.color = 'black';
    noticationBtnA.style.color = 'black';
    noticationBtnI.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    notePerI.style.color = 'black';
    mainPageI.style.color = 'black';
    mainPageA.style.color = 'black';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
toGift.addEventListener('click' , ()=>{
    centerMain.style.display = 'none';
    showCommentMain.style.display = 'none';
    boxGift.style.display = 'none';
    centerGiftNum.style.display = 'block';
    listNav.style.right = '-10000px';
    centerMain.style.display = 'none';
    centerProf.style.display = 'none';
    centerNoti.style.display = 'none';
    centerMess.style.display = 'none';
    centerSettingAcc.style.display = 'none';
    centerSugges.style.display = 'none';
    centerReplMark.style.display = 'none';
    heroBoxCard.style.display = 'none';
    allLogoutDis.style.right = '-10000px';
    centerUpdaAcc.style.display = 'none';
    centerSear.style.display = 'none';
    centerUserMdeia.style.display = 'none';
    centerUserLike.style.display = 'none';
    centerAnotherUser.style.display = 'none';
    centerEmailAcc.style.display = 'none';
    centerUrlAcc.style.display = 'none';
    centerCvAcc.style.display = 'none';
    centerGenAcc.style.display = 'none';
    centerPassAcc.style.display = 'none';
    centerLangAcc.style.display = 'none';
    centerChanCounrAcc.style.display = 'none';
    centerChanCityAcc.style.display = 'none';
    centerChanVeriAcc.style.display = 'none';
    centerChanPrivrAcc.style.display = 'none';
    centerChanotiAcc.style.display = 'none';
    centerChanInfAcc.style.display = 'none';
    centerChanDeleteAcc.style.display = 'none';
    centerFoodAccount.style.display = 'none';
    foodPro.style.display = 'none';
    messgeBtnA.style.color = 'black';
    searchBtnA.style.color = 'black';
    LogOutBtnA.style.color = 'black';
    noticationBtnA.style.color = 'black';
    notePerA.style.color = 'black';
    creditcardIconA.style.color = 'black';
    mainPageA.style.color = 'black';
    centerFollowAdd.style.display = 'none';
    centerFollowingAdd.style.display = 'none';
    centerDardasha.style.display = 'none';
});
messRepBox.style.display = 'none';
messReplay.addEventListener('click' , ()=>{
    if(messRepBox.style.display == 'none'){
        messReplay.style.color = 'red';
        messRepBox.style.display = 'block';
        messRep.setAttribute('value' , 'ردا على ' + userMess.innerHTML)  ;
    }else{
        messReplay.style.color = '#a0b3d4';
        messRepBox.style.display = 'none';
    }
});
messRepBox2.style.display = 'none';
userMess2.addEventListener('click' , ()=>{
    if(messRepBox2.style.display == 'none'){
        userMess2.style.color = 'red';
        messRepBox2.style.display = 'block';
        messRep.setAttribute('value' , 'ردا على ' + userMess.innerHTML)  ;
    }else{
        userMess2.style.color = '#a0b3d4';
        messRepBox2.style.display = 'none';
    }
});
giftBtn.addEventListener('click' , ()=>{
    boxGift.style.display = 'block';
});
closeGift2.addEventListener('click' , ()=>{
    boxGift.style.display = 'none';
});
// toGift2.addEventListener('click' , ()=>{
//     centerGiftNum.style.display = 'block';
//     centerMain.style.display = 'none';
//     showCommentMain.style.display = 'none';
//     boxGift.style.display = 'none';
//     listNav.style.right = '-10000px';
//     centerMain.style.display = 'none';
//     centerProf.style.display = 'none';
//     centerNoti.style.display = 'none';
//     centerMess.style.display = 'none';
//     centerSettingAcc.style.display = 'none';
//     centerSugges.style.display = 'none';
//     centerReplMark.style.display = 'none';
//     heroBoxCard.style.display = 'none';
//     allLogoutDis.style.right = '-10000px';
//     centerUpdaAcc.style.display = 'none';
//     centerSear.style.display = 'none';
//     centerUserMdeia.style.display = 'none';
//     centerUserLike.style.display = 'none';
//     centerAnotherUser.style.display = 'none';
//     centerEmailAcc.style.display = 'none';
//     centerUrlAcc.style.display = 'none';
//     centerCvAcc.style.display = 'none';
//     centerGenAcc.style.display = 'none';
//     centerPassAcc.style.display = 'none';
//     centerLangAcc.style.display = 'none';
//     centerChanCounrAcc.style.display = 'none';
//     centerChanCityAcc.style.display = 'none';
//     centerChanVeriAcc.style.display = 'none';
//     centerChanPrivrAcc.style.display = 'none';
//     centerChanotiAcc.style.display = 'none';
//     centerChanInfAcc.style.display = 'none';
//     centerChanDeleteAcc.style.display = 'none';
//     centerFoodAccount.style.display = 'none';
//     foodPro.style.display = 'none';
//     messgeBtnA.style.color = 'black';
//     searchBtnA.style.color = 'black';
//     LogOutBtnA.style.color = 'black';
//     noticationBtnA.style.color = 'black';
//     noticationBtnI.style.color = 'black';
//     notePerA.style.color = 'black';
//     creditcardIconA.style.color = 'black';
//     mainPageA.style.color = 'black';
// });

// new Add People Group 
let newAddGroup = document.getElementById('newAddGroup');
let closeGroupAdd = document.getElementById('closeGroupAdd');
let groupAdd1 = document.getElementById('groupAdd1');
let groupAdd2 = document.getElementById('groupAdd2');
let showChooseImg = document.getElementById('showChooseImg');
let chooseImg = document.querySelectorAll('#chooseImg');

newAddGroup.addEventListener('click' , ()=>{
    closeGroupAdd.style.display = 'block';
    groupAdd1.style.display = 'block';
    groupAdd2.style.display = 'block';
});
closeGroupAdd.addEventListener('click' , ()=>{
    closeGroupAdd.style.display = 'none';
    groupAdd1.style.display = 'none';
    groupAdd2.style.display = 'none';
});

showChooseImg.style.display = 'none';
for(let i=0; i < chooseImg.length; i++){
    chooseImg[i].addEventListener('click' , function(){
        if(showChooseImg.style.display == 'none'){
            showChooseImg.style.display = 'flex';
            document.body.classList.add('nav-open');
        }else{
            showChooseImg.style.display = 'none';
            document.body.classList.remove('nav-open');
        }
    });
}
addEventListener('click' , function(event){
    if(event.target === showChooseImg ){
        showChooseImg.style.display = 'none';
        document.body.classList.remove('nav-open');
    }
});

// Send Dardasha button

let sendDar = document.querySelectorAll('#send-dar');
let startMess = document.getElementById('startMess');
let boxMess = document.getElementById('boxMess');
let mic = document.getElementById('mic');
let bottom0 = document.getElementById('bottom0');
let settPro = document.getElementById('sett-pro');
let fgEmojiContainer = document.querySelectorAll('.fg-emoji-container');

// Dardasha Page If Onclick usergroup Btn


for(let i=0; i < sendDar.length; i++){
        if(startMess.value !== ''){             
            boxMess.innerHTML = '';
        }else {
            sendDar[i].style.display = 'block';
            sendDar[i].addEventListener('click' , function(){
                bottom0.scrollY = '0px'
                boxMess.innerHTML += "<h2>" + startMess.value + "</h2>";
                startMess.value = ''; 
                startMess.focus()
                boxMess.scrollTop = boxMess.scrollHeight;
            });
            
        } 
};

let userGroupMessage = function(){
    centerDardasha.style.display = 'block';
    centerMess.style.display = 'none';
    allNewMessGr.style.display = 'none';
}
usergroupMess.addEventListener('click' , function(){
    userGroupMessage()
});
settPro.addEventListener('click' , function(){
    userGroupMessage();
    centerAnotherUser.style.display = 'none'
});








// document.addEventListener('DOMContentLoaded' , ()=>{
//     let rotateTad = document.getElementById('rotateTad');
//     let rotate = document.getElementById('rotate');
//     rotate.addEventListener('click' , function(event){
//         event.stopPropagation();
//         rotateTad.classList.toggle('open');
//     });
//     document.addEventListener('click' , ()=>{
//         if(rotateTad.classList.contains('open')){
//             rotateTad.classList.remove('open');
//         }
//     });
//     rotateTad.addEventListener('click' , function(event){
//         event.stopPropagation();
//     });
// });

// imgTe.onclick = ()=>{
//     onclickImg.style.display = 'flex';
// }

