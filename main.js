function answBtnUpDown(event) {
  let answBtn = document.getElementById(event.target.id);

  if (answBtn.classList.contains('answbtn--down')) {
    answBtn.classList.remove('answbtn--down');
    answBtn.textContent = 'This btn is up';
  } else {
    answBtn.classList.add('answbtn--down');
    answBtn.textContent = 'This btn is down';
  }
}

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', appHeight);
appHeight();

document.addEventListener('click', answBtnUpDown);
