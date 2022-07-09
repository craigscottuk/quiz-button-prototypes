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

document.addEventListener('click', answBtnUpDown);
