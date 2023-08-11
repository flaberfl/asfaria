// Підключення функціоналу "Чертоги Фрілансера"
import {
  isMobile
} from "./functions.js";
// Підключення списку активних модулів
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

// Скрипт квиза

const quiz = document.getElementById('quiz-form');
const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
const btnsNext = quiz.querySelectorAll('.button_next');


// let count = 0;
// quizItems[count].classList.add('_active');

btnsNext.forEach((btn) => {
  btn.disabled = true;
});


quizItems.forEach((quizItem, quizItemIndex) => {

  quizItem.addEventListener('change', (e) => {
    // console.log(count);
    const target = e.target;
    const inputsChecked = quizItem.querySelectorAll('input:checked');

    if (inputsChecked.length > 0) {
      // разблокировать кнопку именно эту
      btnsNext[quizItemIndex].disabled = false;
    } else {
      // заблокировать эту кнопку
      btnsNext[quizItemIndex].disabled = true;
    }

  })
});


const quizObj = {
  1: {
    'Для комфортной и безопасной жизни': '2',
    'Для инвестиций с доходностью 8%': '3'
  },
  2: {
    'Новостройка': '4',
    'Вторичное жильё': '4',
    'Таунхаус/Вилла': '5'
  },
  3: {
    'Новостройка': '4',
    'Апартаменты в управление': '4',
    'Таунхаус/Вилла': '5'
  },
  4: {
    '1 спальня': '6',
    '2 спальни': '6',
    '3 и более спален': '6'
  },
  5: {
    '2 спальни': '7',
    '3 и более спален': '7'
  },
  6: {
    '1 по 10 этажи': '8',
    '10 по 20 этажи': '8',
    'выше 20-ого': '8'
  },
  7: {
    '1 этаж': '8',
    '2 этажа': '8',
    '3 и более этажей': '8'
  },
  8: {
    'до $40 000': '9',
    '$40 000 - $100 000': '9',
    '$100 000 - $300 000': '9',
    'свыше $300 000': '9'
  }
};

const answers = [];

const nextButtons = document.querySelectorAll('.button_next');

nextButtons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const currentElement = event.currentTarget;
    const currentSlide = currentElement.closest('.quiz-form__fieldset');
    const currentSlideNumber = currentSlide.dataset.card;
    const selectedInputs = currentSlide.querySelector('input[type="radio"]:checked');
    // const currentSlideTitle = currentSlide.querySelector('.slide__title');

    if (!selectedInputs) return

    answers.push({
      id: currentSlideNumber,
      // question: currentSlideTitle.innerText,
      answer: selectedInputs.value
    });

    const nextSlideNumber = quizObj[currentSlideNumber][selectedInputs.value];

    const nextSlideElement = document.querySelector(`.quiz-form__fieldset[data-card='${nextSlideNumber}']`);

    if (nextSlideElement) {
      currentSlide.classList.add('hidden')
      nextSlideElement.classList.remove('hidden')
    }

    console.log(answers)
    console.log(nextSlideElement);

  });
})



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



const objects = document.querySelector('.object-popup__media');
const objectItems = objects.querySelectorAll('.object-popup__image-ibg');
const btnImageNext = document.querySelectorAll('.button-media-next');
const btnImagePrev = document.querySelectorAll('.button-media-prev');


let countImage = 0;
objectItems[countImage].classList.add('_active');

btnImageNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    countImage++;
    initObjectMedia();
    if (countImage >= objectItems.length) {
      countImage = 0;
      objectItems[countImage].classList.add('_active');
    }

    console.log(countImage);
  });
});

btnImagePrev.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    countImage--;
    console.log(countImage);
    console.log(objectItems.length);

    initObjectMedia();
    if (countImage < 0) {
      countImage = objectItems.length - 1;
      objectItems[countImage].classList.add('_active');
    }
  });
});

function initObjectMedia() {
  objectItems.forEach((element, i) => {
    element.classList.remove('_active')
    if (i === countImage) {
      element.classList.add('_active')
    }
  })
}







