document.getElementById('play-button').addEventListener('click', function() {
  var audio = document.getElementById('background-music');
  if (audio.paused) {
      audio.play();
      this.textContent = 'Pause Music';
  } else {
      audio.pause();
      this.textContent = 'Play Music';
  }
});

function blowCandles() {
  var candles = document.querySelectorAll('.candle');
  candles.forEach(function(candle) {
      candle.style.backgroundColor = 'transparent';
  });
  alert('Make a wish!');
}

function createConfetti() {
  var confettiContainer = document.querySelector('.confetti');
  for (var i = 0; i < 100; i++) {
      var confetti = document.createElement('div');
      confetti.classList.add('heart-confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confettiContainer.appendChild(confetti);
  }
}

createConfetti();

var heart = document.querySelector('.heart');
heart.addEventListener('click', function() {
  showModal();
  heart.style.top = Math.random() * 90 + '%';
  heart.style.left = Math.random() * 90 + '%';
});

function moveHeart() {
  heart.style.animation = 'move 5s infinite';
}

moveHeart();

function showModal() {
  var modal = document.getElementById('wishes-modal');
  var span = document.getElementsByClassName('close')[0];

  modal.style.display = 'block';

  span.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}
