// Function to animate the number count
function animateCount() {
  const counter = document.querySelector('.counter');
  const digits = counter.querySelectorAll('.digit');

  let currentNumber = 0;
  const interval = setInterval(() => {
    if (currentNumber === 1000) {
      clearInterval(interval);
      return;
    }

    const targetDigits = String(currentNumber).padStart(digits.length, '0').split('');

    digits.forEach((digit, index) => {
      const currentDigit = parseInt(digit.innerText);
      const targetDigit = parseInt(targetDigits[index]);
      if (currentDigit !== targetDigit) {
        digit.classList.add('slide-up', 'flip');
        setTimeout(() => {
          digit.innerText = targetDigit;
          digit.classList.remove('slide-up', 'flip');
        }, 500);
      }
    });

    currentNumber++;
  }, 100); 
}


animateCount();
