const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slider = $('.slider');

const sliderMain = $('.slider-main'); 

const sliderItems = $$('.slider-item');

const nextBtn = $('.slider-next');

const prevBtn = $('.slider-prev');

const dotItems = $$('.slider-dot-item');

const modal = $('.js-modal');

const modalContainer = $('.js-modal-container');

const modalOpen = $('.js-modal-open');

const modalClose = $('.js-modal-close'); 

const sliderItemWidth = sliderItems[0].offsetWidth;

const sliderLength = sliderItems.length;

let positionX = 0;

let index = 0;

window.addEventListener("load", function() {
    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1);
    });

    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1);
    });

    [...dotItems].forEach(item => item.addEventListener("click",function(e) {
        [...dotItems].forEach(sw => sw.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex; // gán vị trí click hiện tại vào index
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`; 
    }));

    handleChangeSlide = function(dir) {
        if(dir === 1) {
            if(index >= sliderLength - 1) {
                index = sliderLength  - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`; 
            console.log('next slide');
            index++;
        } else if(dir === -1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`; 
            console.log('prev slide');
            index--;
        }
        [...dotItems].forEach(sw => sw.classList.remove("active"));
        dotItems[index].classList.add("active");
    } 

    modalOpen.addEventListener("click", function() {
        handleOpen();
    });

    modalClose.addEventListener("click", function() {
        handleClose();
    });

    modal.addEventListener("click", function() {
        handleClose();
    });
    
    modalContainer.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    handleOpen = function() {
        modal.classList.add('open');
    }

    handleClose = function() {
        modal.classList.remove('open');
    }
});

