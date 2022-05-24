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
        lazy: 'click',
        autofix: true,
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
            placeholderChar: 'y',
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