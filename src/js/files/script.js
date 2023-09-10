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


// Скрипт квиза

function quizPlanes() {
  const quiz = document.querySelector('.quiz-form__planes');
  const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
  const btnsNext = quiz.querySelectorAll('.button_next');
  const btnsPrev = quiz.querySelectorAll('.button_back');
  const answer = document.getElementById('answer');
  const inputCheck = document.getElementById('input-check');
  const planesPrice = document.getElementById('planes-price');


  let count = 0;
  quizItems[count].classList.add('_active');

  btnsNext.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count++;
      initQuiz();
    });

    btn.disabled = true;

    inputCheck.disabled = true;
    answer.oninput = ValueInp;

    function ValueInp() {

      calculatePrice(this.value);
      console.log(calculatePrice(this.value))

      if (this.value !== '') {
        inputCheck.disabled = false;

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
    changeHeaderPlanes();

    planesPrice.innerHTML = calculatePrice(answer.value, 26, 3200, 25);
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

}

function quizYachts() {
  const quiz2 = document.querySelector('.quiz-form__yachts');
  const quizItems2 = quiz2.querySelectorAll('.quiz-form__fieldset');
  const btnsNext2 = quiz2.querySelectorAll('.button_next');
  const btnsPrev2 = quiz2.querySelectorAll('.button_back');
  const answer2 = document.getElementById('answer2');
  const inputCheck2 = document.getElementById('input-check2');
  const yachtsPrice = document.getElementById('yachts-price');

  let count2 = 0;
  quizItems2[count2].classList.add('_active');

  btnsNext2.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count2++;
      initQuiz2();
    });

    btn.disabled = true;

    inputCheck2.disabled = true;
    answer2.oninput = ValueInp;

    function ValueInp() {

      if (this.value !== '') {
        inputCheck2.disabled = false;

      } else {
        inputCheck2.disabled = true;
      }
    }
  });

  btnsPrev2.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count2--;
      initQuiz2();
    });
  });

  function initQuiz2() {
    quizItems2.forEach((element, i) => {
      element.classList.remove('_active')
      if (i === count2) {
        element.classList.add('_active')
      }
    })
    changeHeaderYachts();

    yachtsPrice.innerHTML = calculatePrice(answer2.value, 38, 4300, 70);
  }

  quizItems2.forEach((quizItem, quizItemIndex) => {

    quizItem.addEventListener('change', (e) => {
      const target = e.target;
      const inputsChecked = quizItem.querySelectorAll('input:checked:not(.not-input)');

      if (inputsChecked.length > 0) {
        // разблокировать кнопку именно эту
        btnsNext2[quizItemIndex].disabled = false;
      } else {
        // заблокировать эту кнопку
        btnsNext2[quizItemIndex].disabled = true;
      }


      if (answer2.value !== '') {
        btnsNext2[quizItemIndex].disabled = false;
      }
    })
  });


}

function quizOffices() {
  const quiz3 = document.querySelector('.quiz-form__offices');
  const quizItems3 = quiz3.querySelectorAll('.quiz-form__fieldset');
  const btnsNext3 = quiz3.querySelectorAll('.button_next');
  const btnsPrev3 = quiz3.querySelectorAll('.button_back');
  const answer3 = document.getElementById('answer3');
  const inputCheck3 = document.getElementById('input-check3');
  let officePrice = document.getElementById('office-price');


  let count3 = 0;
  quizItems3[count3].classList.add('_active');

  btnsNext3.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count3++;
      initQuiz3();
    });

    btn.disabled = true;

    inputCheck3.disabled = true;
    answer3.oninput = ValueInp;

    function ValueInp() {

      if (this.value !== '') {
        inputCheck3.disabled = false;

      } else {
        inputCheck3.disabled = true;
      }
    }

  });

  btnsPrev3.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count3--;
      initQuiz3();
    });
  });

  function initQuiz3() {
    quizItems3.forEach((element, i) => {
      element.classList.remove('_active')
      if (i === count3) {
        element.classList.add('_active')
      }
    })
    changeHeaderOffices();
    officePrice.innerHTML = calculatePrice(answer3.value, 1600, 3200, 1.8);
  }

  quizItems3.forEach((quizItem, quizItemIndex) => {

    quizItem.addEventListener('change', (e) => {
      const target = e.target;
      const inputsChecked = quizItem.querySelectorAll('input:checked:not(.not-input)');

      if (inputsChecked.length > 0) {
        // разблокировать кнопку именно эту
        btnsNext3[quizItemIndex].disabled = false;
      } else {
        // заблокировать эту кнопку
        btnsNext3[quizItemIndex].disabled = true;
      }

      if (answer3.value !== '') {
        btnsNext3[quizItemIndex].disabled = false;
      }
    })
  });

}

function quizApartments() {
  const quiz4 = document.querySelector('.quiz-form__apartments');
  const quizItems4 = quiz4.querySelectorAll('.quiz-form__fieldset');
  const btnsNext4 = quiz4.querySelectorAll('.button_next');
  const btnsPrev4 = quiz4.querySelectorAll('.button_back');
  const answer4 = document.getElementById('answer4');
  const inputCheck4 = document.getElementById('input-check4');
  const apartmentsPrice = document.getElementById('apartments-price');

  let count4 = 0;
  quizItems4[count4].classList.add('_active');

  btnsNext4.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count4++;
      initQuiz4();
    });

    btn.disabled = true;

    inputCheck4.disabled = true;
    answer4.oninput = ValueInp;

    function ValueInp() {

      if (this.value !== '') {
        inputCheck4.disabled = false;

      } else {
        inputCheck4.disabled = true;
      }
    }
  });

  btnsPrev4.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count4--;
      initQuiz4();
    });
  });

  function initQuiz4() {
    quizItems4.forEach((element, i) => {
      element.classList.remove('_active')
      if (i === count4) {
        element.classList.add('_active')
      }
    })
    changeHeaderApartments();
    apartmentsPrice.innerHTML = calculatePrice(answer4.value, 1900, 3200, 1.3);
  }

  quizItems4.forEach((quizItem, quizItemIndex) => {

    quizItem.addEventListener('change', (e) => {
      const target = e.target;
      const inputsChecked = quizItem.querySelectorAll('input:checked:not(.not-input)');

      if (inputsChecked.length > 0) {
        // разблокировать кнопку именно эту
        btnsNext4[quizItemIndex].disabled = false;
      } else {
        // заблокировать эту кнопку
        btnsNext4[quizItemIndex].disabled = true;
      }

      if (answer4.value !== '') {
        btnsNext4[quizItemIndex].disabled = false;
      }
    })
  });

}

function changeHeaderPlanes() {
  const quiz = document.querySelector('.quiz-form__planes');
  const elementsForm = quiz.querySelectorAll('.quiz-form__fieldset_finish');
  const subVisible = quiz.querySelectorAll('[sub-visible]');
  const subHidden = quiz.querySelectorAll('[sub-hidden]');

  console.log(quiz);

  subVisible.forEach(element => {
    element.hidden = false;
    console.log('Rjhjxt');
  });

  subHidden.forEach(element => {
    element.hidden = true;
  });

  elementsForm.forEach(elementForm => {
    console.log(elementForm);

    if (elementForm.classList.contains('_active')) {

      subVisible.forEach(element => {
        element.hidden = true;
      });

      subHidden.forEach(element => {
        element.hidden = false;
      });
    }
  });

}

function changeHeaderYachts() {
  const quiz = document.querySelector('.quiz-form__yachts');
  const elementsForm = quiz.querySelectorAll('.quiz-form__fieldset_finish');
  const subVisible = quiz.querySelectorAll('[sub-visible]');
  const subHidden = quiz.querySelectorAll('[sub-hidden]');

  console.log(quiz);

  subVisible.forEach(element => {
    element.hidden = false;
    console.log('Rjhjxt');
  });

  subHidden.forEach(element => {
    element.hidden = true;
  });

  elementsForm.forEach(elementForm => {
    console.log(elementForm);

    if (elementForm.classList.contains('_active')) {

      subVisible.forEach(element => {
        element.hidden = true;
      });

      subHidden.forEach(element => {
        element.hidden = false;
      });
    }
  });

}

function changeHeaderOffices() {
  const quiz = document.querySelector('.quiz-form__offices');
  const elementsForm = quiz.querySelectorAll('.quiz-form__fieldset_finish');
  const subVisible = quiz.querySelectorAll('[sub-visible]');
  const subHidden = quiz.querySelectorAll('[sub-hidden]');

  subVisible.forEach(element => {
    element.hidden = false;
  });

  subHidden.forEach(element => {
    element.hidden = true;
  });

  elementsForm.forEach(elementForm => {
    console.log(elementForm);

    if (elementForm.classList.contains('_active')) {

      subVisible.forEach(element => {
        element.hidden = true;
      });

      subHidden.forEach(element => {
        element.hidden = false;
      });
    }
  });

}

function changeHeaderApartments() {
  const quiz = document.querySelector('.quiz-form__apartments');
  const elementsForm = quiz.querySelectorAll('.quiz-form__fieldset_finish');
  const subVisible = quiz.querySelectorAll('[sub-visible]');
  const subHidden = quiz.querySelectorAll('[sub-hidden]');

  subVisible.forEach(element => {
    element.hidden = false;
    console.log('Rjhjxt');
  });

  subHidden.forEach(element => {
    element.hidden = true;
  });

  elementsForm.forEach(elementForm => {
    console.log(elementForm);

    if (elementForm.classList.contains('_active')) {

      subVisible.forEach(element => {
        element.hidden = true;
      });

      subHidden.forEach(element => {
        element.hidden = false;
      });
    }
  });

}

quizPlanes();
quizYachts();
quizOffices();
quizApartments();

// console.log(calculatePriceOffice(32, 26, 3200, 25));
// (calculatePriceOffice(Длина(площадь объекта), Лимит, Старт.стоимость, Доплата за каждый фут сверху));

function calculatePrice(length, ftValue, priceVlalue, moreValue) {
  if (length <= ftValue) {
    return priceVlalue;
  } else {
    let extraMeters = length - ftValue;
    let pricePerMeter = moreValue;
    return pricePerMeter * extraMeters + priceVlalue;
  }
}

// document.addEventListener("afterPopupOpen", function (e) {
//   // Попап
//   const currentPopup = e.detail.popup;
//   console.log(currentPopup.hash);
//   // if (currentPopup.hash === '#quiz-popup-planes') {
//   //   quizPlanes();
//   // }
//   if (currentPopup.hash === '#quiz-popup-yachts') {
//   }
// });


// answer.oninput = function () {
//   this.value = this.value.substr(0, 5);
// };

// input.onchange = function() {
//   this.value = this.value.substring(0, 5); // ограничить ввод до 5 цифр
// };



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




// // Получаем элемент text
// const text = document.getElementById("text");

// // Получаем элемент element
// const element = document.getElementsByClassName("_active")[0];

// // Проверяем, есть ли у элемента class _active
// if (element.classList.contains("_active")) {
//   // Если есть, меняем текст элемента text на новый
//   text.innerHTML = "Новый текст";
// } else {
//   // Иначе оставляем старый текст элемента text
//   text.innerHTML = "Старый текст";
// }



// Скрипт Google Maps

// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//   // Basic options for a simple Google Map
//   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//   var mapOptions = {
//     // How zoomed in you want the map to start at (always required)
//     zoom: 11,

//     // The latitude and longitude to center the map (always required)
//     center: new google.maps.LatLng(40.6941562, -73.9914844, 18.97), // New York

//     // How you would like to style the map. 
//     // This is where you would paste any style found on Snazzy Maps.
//     styles: [{ "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#e5c163" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#c4c4c4" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#e5c163" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }, { "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "geometry", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#e5c163" }, { "lightness": "0" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "color": "#e5c163" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#575757" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [{ "color": "#2c2c2c" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#999999" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]
//   };

//   // Get the HTML DOM element that will contain your map 
//   // We are using a div with id="map" seen below in the <body>
//   var mapElement = document.querySelector('.js-map');

//   // Create the Google Map using our element and options defined above
//   var map = new google.maps.Map(mapElement, mapOptions);
//   // Let's also add a marker while we're at it
//   // map.setOptions({ draggableCursor: "url(http://s3.amazonaws.com/besport.com_images/status-pin.png), auto" })
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(40.6700, -73.9400),
//     map: map,
//     title: 'Snazzy!'
//   });
// }


