import {
  isMobile
} from "./functions.js";

import {
  flsModules
} from "./modules.js";

let scrollpos = window.scrollY
let lastScroll = 0;
const scrollChange = 80
const defaultOffset = 80;
const add_class_on_scroll = () => header.classList.add("_header-bg")
const remove_class_on_scroll = () => header.classList.remove("_header-bg")
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('_hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add('_hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove('_hide');
  }
  lastScroll = scrollPosition();
})

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }
})

// Скрипт параллакса от мыши

// document.addEventListener('mouseover', e => {
//   Object.assign(document.documentElement, {
//     style: `
//     --move-x: ${(e.clientX) * -.04}deg;
//     --move-y: ${(e.clientY) * -.03}1deg;
//     `
//   })
// })

// --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
// --move-y: ${(e.clientY - window.innerWidth / 2) * -.01}1deg;

// Скрипт квиза

const quiz = document.getElementById('quiz-form');
const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
const btnsNext = quiz.querySelectorAll('.button_next');
const btnsPrev = quiz.querySelectorAll('.button_back');
const answer = document.getElementById('answer');
const inputCheck = document.getElementById('input-check');

let count = 0;
quizItems[count].classList.add('_active');

btnsNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    initQuiz();
  });

  console.log(count);
  btn.disabled = true;

  inputCheck.disabled = true;
  answer.oninput = ValueInp;

  function ValueInp() {
    console.log(this.value);

    if (this.value !== '') {
      inputCheck.disabled = false;
      console.log(inputCheck);

    } else {
      inputCheck.disabled = true;
    }
  }

});


btnsPrev.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count--;
    initQuiz();
  });
});

function initQuiz() {
  quizItems.forEach((element, i) => {
    element.classList.remove('_active')
    if (i === count) {
      element.classList.add('_active')
    }
  })
}


quizItems.forEach((quizItem, quizItemIndex) => {

  quizItem.addEventListener('change', (e) => {
    const target = e.target;
    const inputsChecked = quizItem.querySelectorAll('input:checked:not(.not-input)');





    if (inputsChecked.length > 0) {
      // разблокировать кнопку именно эту
      btnsNext[quizItemIndex].disabled = false;
    } else {
      // заблокировать эту кнопку
      btnsNext[quizItemIndex].disabled = true;
    }



    if (answer.value !== '') {
      btnsNext[quizItemIndex].disabled = false;
    }
  })
});



// Для Wordpress добавления порядкового номера объектам слайдера и попапам, зависящих от нимх

// const objPopupNewSpan = document.querySelectorAll('.object-popup-new-span');
// const objPopupOldSpan = document.querySelectorAll('.object-popup-old-span');
// const objPopupNew = document.querySelectorAll('.object-popup-new');
// const objPopupOld = document.querySelectorAll('.object-popup-old');

// // console.log(objPopupNew);

// for (var i = 0, b; b = document.getElementById('object-popup-new'); ++i) {
//   b.id += '-' + i;
//   console.log(b.id);
// }

// for (var i = 0, b; b = document.getElementById('object-popup-old'); ++i) {
//   b.id += '-' + i;
// }

// objPopupNewSpan.forEach((element, i) =>
//   element.setAttribute('data-popup', '#object-popup-new' + '-' + i));

// objPopupOldSpan.forEach((element, i) =>
//   element.setAttribute('data-popup', '#object-popup-old' + '-' + i));

// objPopupNew.forEach((element, i) =>
//   element.setAttribute('data-popup', '#object-popup-new' + '-' + i));

// objPopupOld.forEach((element, i) =>
//   element.setAttribute('data-popup', '#object-popup-old' + '-' + i));

// const objects = document.querySelector('.object-popup__media');
// const objectItems = objects.querySelectorAll('.object-popup__image-ibg');
// const btnImageNext = document.querySelectorAll('.button-media-next');
// const btnImagePrev = document.querySelectorAll('.button-media-prev');


// let countImage = 0;
// objectItems[countImage].classList.add('_active');

// btnImageNext.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     countImage++;
//     initObjectMedia();
//     if (countImage >= objectItems.length) {
//       countImage = 0;
//       objectItems[countImage].classList.add('_active');
//     }

//     console.log(countImage);
//   });
// });

// btnImagePrev.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     countImage--;
//     console.log(countImage);
//     console.log(objectItems.length);

//     initObjectMedia();
//     if (countImage < 0) {
//       countImage = objectItems.length - 1;
//       objectItems[countImage].classList.add('_active');
//     }
//   });
// });

// function initObjectMedia() {
//   objectItems.forEach((element, i) => {
//     element.classList.remove('_active')
//     if (i === countImage) {
//       element.classList.add('_active')
//     }
//   })
// }







