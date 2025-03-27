const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.header__burger') && !e.target.closest('.header__nav')) {
    burger.classList.remove('active');
    nav.classList.remove('active');
  }
});

const rangeInput = document.querySelector('.order__range');
const rangeValues = document.querySelectorAll('.order__range-values span');

rangeInput.addEventListener('input', () => {
    rangeValues[0].textContent = `${rangeInput.value}%`;
});


document.querySelectorAll('.custom-input-dropdown').forEach(dropdown => {
    const input = dropdown.querySelector('.custom-input-dropdown__input');

    input.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('custom-input-dropdown--active');
    });

    dropdown.querySelectorAll('.custom-input-dropdown__item').forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.textContent;
            dropdown.classList.remove('custom-input-dropdown--active');
        });
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('custom-input-dropdown--active');
    });
});