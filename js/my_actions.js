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
  console.log(error);
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
  console.log(error);
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
  console.log(error);
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
  console.log(error);
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
  console.log(error);
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
  console.log(error);
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
  // console.log(error);
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
  console.log(range_btn1, range_btn2);

  function slideOne() {
    try {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();
    } catch (error) {
      console.log(error);
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
      console.log(error);
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
  console.log(error);
}
try {
  let filter_select = document.querySelectorAll('.filter_select');

  filter_select.forEach(item => {
    item.addEventListener('click', () => {
      filter_select.forEach(e => {
        if (e != item) e.classList.remove('drobon');
      });
      item.classList.toggle('drobon');

    });
  });
} catch (error) {
  console.log(error);
}
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
  console.log(error);
}


// calendar in sport


try {
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      titleFormat: { // will produce something like "Tuesday, September 18, 2018"
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        weekday: 'long'
      },
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: '2020-09-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function (arg) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      eventClick: function (arg) {
        console.log(arg);
        if (confirm('Are you sure you want to delete this event?')) {
          arg.event.remove()
        }
      },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      // eventColor: '#F14141',
      // eventBackgroundColor: '#37c7564f',
      // events: [{
      //     title: 'All Day Event',
      //     start: '2020-09-01'
      //   },
      //   {
      //     title: 'Long Event',
      //     start: '2020-09-07',
      //     end: '2020-09-10'
      //   },
      //   {
      //     groupId: 999,
      //     title: 'Repeating Event',
      //     start: '2020-09-09T16:00:00'
      //   },
      //   {
      //     groupId: 999,
      //     title: 'Repeating Event',
      //     start: '2020-09-16T16:00:00'
      //   },
      //   {
      //     title: 'Conference',
      //     start: '2020-09-11',
      //     end: '2020-09-13'
      //   },
      //   {
      //     title: 'Meeting',
      //     start: '2020-09-12T10:30:00',
      //     end: '2020-09-12T12:30:00'
      //   },
      //   {
      //     title: 'Lunch',
      //     start: '2020-09-12T12:00:00'
      //   },
      //   {
      //     title: 'Meeting',
      //     start: '2020-09-12T14:30:00'
      //   },
      //   {
      //     title: 'Happy Hour',
      //     start: '2020-09-12T17:30:00'
      //   },
      //   {
      //     title: 'Dinner',
      //     start: '2020-09-12T20:00:00'
      //   },
      //   {
      //     title: 'Birthday Party',
      //     start: '2020-09-13T07:00:00'
      //   },
      //   {
      //     title: 'Click for Google',
      //     url: 'http://google.com/',
      //     start: '2020-09-28'
      //   }
      // ]
    });

    console.log(calendar);

    calendar.render();
  });

} catch (error) {
  console.log(error);
}