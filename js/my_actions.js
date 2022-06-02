AOS.init();



try {
  let colapsBar = document.getElementById('colapsBar');
  let mute_buttons = document.querySelectorAll('.mute_buttons');
  mute_buttons.forEach(function (item) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
} catch (error) {

}

try {
  let burgerButton = document.getElementById('burgerButton');
  burgerButton.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    colapsBar.classList.add('colapsed');
  });
  let closeNav = document.getElementById('closeNav');
  closeNav.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    colapsBar.classList.remove('colapsed');
  });
} catch (error) {

}

try {
  let tips__nav_item = document.querySelectorAll('.tips__nav_item');
  tips__nav_item.forEach(item => {
    item.addEventListener('click', () => {
      tips__nav_item.forEach(e => {
        e.classList.remove('active');
      });
      item.classList.add('active');
    });
  });

  let accardion = document.querySelectorAll('.accardion');
  accardion.forEach(item => {
    item.addEventListener('click', () => {
      accardion.forEach(e => {
        e.classList.add('closed');
      });
      item.classList.toggle('closed');
    });
  });
} catch (error) {

}

try {
  let seen__pasword = document.querySelectorAll('.seen__pasword');
  seen__pasword.forEach(item => {
    item.addEventListener('click', () => {
      if (item.parentElement.childNodes[3].type == 'text') item.parentElement.childNodes[3].type = 'password';
      else item.parentElement.childNodes[3].type = 'text';
    });
  });
} catch (error) {

}
try {
  let deta__input = document.querySelectorAll('.deta__input');
  deta__input.forEach(item => {
    let maskOptions = {
      deta: {
        mask: Date,
        autofix: false,
        blocks: {
          d: {
            mask: IMask.MaskedRange,
            placeholderChar: 'd',
            from: 1,
            to: 31,
            maxLength: 2
          },
          m: {
            mask: IMask.MaskedRange,
            placeholderChar: 'm',
            from: 1,
            to: 12,
            maxLength: 2
          },
          Y: {
            mask: IMask.MaskedRange,
            placeholderChar: 'Y',
            from: 1900,
            to: 2999,
            maxLength: 4
          }
        }
      }
    };
    if (item) {
      IMask(item, maskOptions.deta);
    }
  });

} catch (error) {

}
try {
  let phone__input = document.querySelectorAll('.phone__input');
  phone__input.forEach(item => {
    let maskOptions = {
      phone: {
        mask: "+998 (00) 000 00 00",
        lazy: false,
        placeholderChar: "-",
      },
    };
    if (item) {
      IMask(item, maskOptions.phone);
    }
  });

} catch (error) {

}
try {
  let radio__labels = document.querySelectorAll('.radio__labels');
  radio__labels.forEach(item => {
    item.addEventListener('click', () => {
      if (item.childNodes[1].value == 'on') {
        radio__labels.forEach(e => {
          e.childNodes[3].classList.remove('checked')
        });
        item.childNodes[3].classList.add('checked');
      }
    });
  });
} catch (error) {
  // 
}

try {
  window.onload = function () {
    slideOne();
    slideTwo();
  }

  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;
  let range_btn1 = sliderTrack.childNodes[1];
  let range_btn2 = sliderTrack.childNodes[3];

  function slideOne() {
    try {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();
    } catch (error) {

    }
  }

  function slideTwo() {
    try {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
      }
      displayValTwo.textContent = sliderTwo.value;
      fillColor();
    } catch (error) {

    }
  }

  function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    range_btn1.style.left = percent1 + "%";
    range_btn2.style.right = 100 - percent2 + "%";
    sliderTrack.style.background = `linear-gradient(to right, #fff ${percent1}% , #F16B41 ${percent1}% , #C51841 ${percent2}%, #fff ${percent2}%)`;
  }
} catch (error) {

}
try {
  let filter_select = document.querySelectorAll('.filter_select');
  let filter_select_body__items = filter_select[0].querySelectorAll('.filter__body label');
  let close__action = document.querySelector('.close__action');
  close__action.addEventListener('click', () => {
    filter_select.forEach(item => {
      item.classList.remove('drobon');
    });
    close__action.classList.remove('close__wait');
  });

  filter_select_body__items.forEach(item => {
    item.addEventListener('click', () => {
      filter_select_body__items = filter_select[0].querySelector('.value').innerText = item.querySelector('span').innerText
    });
  });


  filter_select.forEach(item => {
    item.addEventListener('click', () => {
      filter_select.forEach(e => {
        if (e != item) e.classList.remove('drobon');
      });
      close__action.classList.add('close__wait');
      item.classList.add('drobon');

    });
  });
} catch (error) {}




// swipper js
try {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} catch (error) {

}

// select time control

try {
  let select__time__con = document.querySelector('.filter_select .time .time_line');
  let time__cont_prev = select__time__con.querySelector('a.prev');
  let time__cont_next = select__time__con.querySelector('a.next');
  let time__cont_hour = select__time__con.querySelector('span.hour');
  let time__cont_min = select__time__con.querySelector('span.min');
  let time_line_submit = document.querySelector('.time_line_submit');

  time__cont_next.addEventListener('click', () => {
    time__cont_min.innerText = parseInt(time__cont_min.innerText) + 30;
    if (time__cont_min.innerText >= 60) {
      time__cont_min.innerText = 0;
      time__cont_hour.innerText = parseInt(time__cont_hour.innerText) + 1;
    }
    if (time__cont_hour.innerText >= 24) {
      time__cont_hour.innerText = 0;
    }
  });
  time__cont_prev.addEventListener('click', () => {
    time__cont_min.innerText = parseInt(time__cont_min.innerText) - 30;
    if (time__cont_min.innerText < 0) {
      time__cont_min.innerText = 30;
      time__cont_hour.innerText = parseInt(time__cont_hour.innerText) - 1;
    }
    if (time__cont_hour.innerText <= 0) {
      time__cont_hour.innerText = 23;
    }
  });
  let onsubmit = false;
  time_line_submit.addEventListener('click', () => {
    time_line_submit.parentElement.querySelectorAll('h3').forEach(item => {
      item.classList.toggle('full');
    });
    onsubmit = !onsubmit;
    if (onsubmit) {
      time_line_submit.innerText = 'Ok';
    } else {
      time_line_submit.innerText = 'Next';
    }
  });
  


} catch (error) {

}


// calendar in sport


try {
  let personal__navA = document.querySelectorAll('.personal__nav a');
  personal__navA.forEach(item => {
    item.addEventListener('click', () => {
      personal__navA.forEach(e => {
        e.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
} catch (error) {

}

try {
  let insport__tableRow = document.querySelectorAll('.insport__table tbody tr');
  insport__tableRow.forEach(item => {
    let mause_in = false;
    item.addEventListener('mousedown', () => {
      mause_in = true;
      let time_spans = document.querySelectorAll('.insport__table .bookeding span');
      if (mause_in) {
        time_spans.forEach(e => {
          e.addEventListener('mouseover', () => {
            if (mause_in) {
              e.classList.add('booked_now');
            }
          });
        });
      }
    });
    item.addEventListener('mouseup', () => {
      mause_in = false;
    });
    item.addEventListener('mouseleave', () => {
      mause_in = false;
    });
  });
} catch (error) {

}

try {
  let my__select = document.querySelectorAll('.my__select');
  my__select.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('select__open');
    });
  });
} catch (error) {

}
try {
  let checkbox__labels = document.querySelectorAll('.checkbox__labels');
  checkbox__labels.forEach(item => {
    item.addEventListener('click', () => {
      if (item.childNodes[1].value == 'work') {
        item.childNodes[3].classList.remove('checked');
        item.childNodes[1].value = 'off';
      } else {
        item.childNodes[3].classList.add('checked');
        item.childNodes[1].value = 'work';
      }
    });
  });
} catch (error) {

}

try {
  let imgWrap_kres = document.querySelectorAll('.img_wrap .kres img');
  imgWrap_kres.forEach(item => {
    item.addEventListener('click', () => {
      item.parentNode.parentNode.remove();
    });
  });
} catch (error) {

}
try {
  let data = [2000000, 900000, 561651, 5619656, 9000000, 10000000, 6000000, 6519616, 7165651, 19166512, 1655155, 9819156];
  let data2 = [72, 28]

  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [{
        label: 'Max:',
        data: data,
        backgroundColor: [
          '#0B6BFB'
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  let ctx2 = document.getElementById('myChart2');
  let myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      // labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [{
        data: data2,
        backgroundColor: [
          '#0B6BFB',
          'rgba(27, 27, 27, 0.5)'
        ],
        borderWidth: 0
      }]
    },
  });


} catch (error) {

}
try {
  let bus__week_nav_item = document.querySelectorAll('.bus__week_nav a');
  bus__week_nav_item.forEach(item => {
    item.addEventListener('click', () => {
      bus__week_nav_item.forEach(e => {
        e.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
} catch (error) {

}