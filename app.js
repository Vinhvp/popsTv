let banner_img = document.querySelectorAll(".banner__wrapper-img");

let bannerImgWidth = banner_img[0].offsetWidth;
let bannerImgLength = banner_img.length;
let banner_wrapper = document.querySelector(".banner__wrapper");
banner_wrapper.style = `width: ${bannerImgLength*bannerImgWidth}`;


let next = document.querySelector(".banner__control-next");
let prev = document.querySelector(".banner__control-prev");
let index = 0;
let number = 0;
next.addEventListener("click",()=>{
    showImg(1);
})

prev.addEventListener("click",()=>{
    showImg(-1);
})

function showImg(bool){
    if(bool == 1){
        if(index >= bannerImgLength - 1){
            index = bannerImgLength - 1;
            return;
        }
        number = number - bannerImgWidth;
        banner_wrapper.style = `transform: translateX(${number}px)`;
        index++;
    }
    else{
        
        if(index <= 0){
            index = 0;
            return;
        }
        number = number + bannerImgWidth;
        banner_wrapper.style = `transform: translateX(${number}px)`;
        index--;
    }
}
let flag = false
function autoShow(){
    if(!flag){
        if(index >= bannerImgLength-1){
            flag = true;
            return;
        }
        let sliderAuto = index*-1*bannerImgWidth
        banner_wrapper.style = `transform: translateX(${sliderAuto}px)`;
        index++;
    }
    else{
      
        if(index <= 0){
            flag = false;
            return;
        }
        let sliderAuto = index*-1*bannerImgWidth
        banner_wrapper.style = `transform: translateX(${sliderAuto}px)`;
        index--;
    }
}


setInterval(autoShow,2000);