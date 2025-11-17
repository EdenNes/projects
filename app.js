document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('btn6');
  const hiddenSection = document.getElementById('hiddenSection');

  
  button.addEventListener('click', function() {
    // Toggle arrow
    if (button.textContent === '⬇') {
      button.textContent = '⬆';
    } else {
      button.textContent = '⬇';
    }

    if (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') {
      hiddenSection.style.display = 'block';
    } else {
      hiddenSection.style.display = 'none';
    }

    if (btn5.style.marginBottom == '100px') {
        btn5.style.marginBottom = '0px';
    };
})});
