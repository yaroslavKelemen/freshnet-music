const contactBtns = document.querySelectorAll('.contact');
const modal = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const playBtns = document.querySelectorAll('.play');
const pauseBtns = document.querySelectorAll('.pause');
const musicIcons = document.querySelectorAll('.music__icon > i');
const forwardBtns = document.querySelectorAll('.forward');
const backwardBtns = document.querySelectorAll('.backward');

window.onload = () => {
  musicIcons.forEach((icon) => {
    icon.style.animationPlayState = 'paused';
  })
}

$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger, .header__menu').toggleClass('active');
  });
});

contactBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
      modal.style.opacity = '1';
      modal.style.pointerEvents = 'auto';
      document.body.style.overflowY = 'hidden';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  document.body.style.overflowY = 'auto';
});

const audioURLS = [
  'https://music2019.su/uploads/files/2020-12/bazanji-fed-up_456509625.mp3',
  'https://muzbear.net/files/mp3/07/neffex-revolution.mp3',
  'https://muzbear.net/files/mp3/02/eminem-venom.mp3',
  'https://dl.muzbom.com/files/music/2021/11/NEFFEX_-_Just_Breathing.mp3',
  'https://music2019.su/uploads/files/2021-06/bazanji-lights-go-down_79754295.mp3',
  'https://muzbear.net/files/mp3/01/masked-wolf-astronaut-in-the-ocean.mp3',
  'https://now.morsmusic.org/load/972699618/NEFFEX_-_NO_TURNING_BACK_(musmore.com).mp3'
];

const music = {}

const fedUp = new Audio();
fedUp.src = audioURLS[0];

const revolution = new Audio();
revolution.src = audioURLS[1];

const venom = new Audio();
venom.src = audioURLS[2];

const justBreathing = new Audio();
justBreathing.src = audioURLS[3];

const lightsGoDown = new Audio();
lightsGoDown.src = audioURLS[4];

const astronautInTheOcean = new Audio();
astronautInTheOcean.src = audioURLS[5];

const noTurningBack = new Audio();
noTurningBack.src = audioURLS[6];

music.fedUp = fedUp;
music.revolution = revolution;
music.justBreathing = justBreathing;
music.lightsGoDown = lightsGoDown;
music.noTurningBack = noTurningBack;
music.venom = venom;
music.astronautInTheOcean = astronautInTheOcean;


music.astronautInTheOcean.addEventListener('ended', () => {
  pauseBtns.forEach((btn) => btn.style.display = 'none');
  playBtns.forEach((btn) => btn.style.display = 'block');
});

music.fedUp.addEventListener('ended', () => {
  pauseBtns.forEach((btn) => btn.style.display = 'none');
  playBtns.forEach((btn) => btn.style.display = 'block');
});

music.venom.addEventListener('ended', () => {
  pauseBtns.forEach((btn) => btn.style.display = 'none');
  playBtns.forEach((btn) => btn.style.display = 'block');
});

music.lightsGoDown.addEventListener('ended', () => {
  pauseBtns.forEach((btn) => btn.style.display = 'none');
  playBtns.forEach((btn) => btn.style.display = 'block');
});

music.revolution.addEventListener('ended', () => {
  pauseBtns.forEach((btn) => btn.style.display = 'none');
  playBtns.forEach((btn) => btn.style.display = 'block');
});

music.justBreathing.addEventListener('ended', () => {
  pauseBtns.forEach((btn) => btn.style.display = 'none');
  playBtns.forEach((btn) => btn.style.display = 'block');
});

music.noTurningBack.addEventListener('ended', () => {
  pauseBtns.forEach((btn) => btn.style.display = 'none');
  playBtns.forEach((btn) => btn.style.display = 'block');
});

function playAndPause() {
  playBtns[0].addEventListener('click', () => {
    playBtns[0].style.display = 'none';
    pauseBtns[0].style.display = 'block';
    musicIcons[0].style.animationPlayState = 'running';
    fedUp.play();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    noTurningBack.pause();
    revolution.pause();
  });
  pauseBtns[0].addEventListener('click', () => {
    pauseBtns[0].style.display = 'none';
    playBtns[0].style.display = 'block';
    musicIcons[0].style.animationPlayState = 'paused';
    fedUp.pause();
  });
  playBtns[1].addEventListener('click', () => {
    playBtns[1].style.display = 'none';
    pauseBtns[1].style.display = 'block';
    musicIcons[1].style.animationPlayState = 'running';
    revolution.play();
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
  });
  pauseBtns[1].addEventListener('click', () => {
    pauseBtns[1].style.display = 'none';
    playBtns[1].style.display = 'block';
    musicIcons[1].style.animationPlayState = 'paused';
    revolution.pause();
  });
  playBtns[2].addEventListener('click', () => {
    playBtns[2].style.display = 'none';
    pauseBtns[2].style.display = 'block';
    musicIcons[2].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.play();
    justBreathing.pause();
    revolution.pause();
  });
  pauseBtns[2].addEventListener('click', () => {
    pauseBtns[2].style.display = 'none';
    playBtns[2].style.display = 'block';
    musicIcons[2].style.animationPlayState = 'paused';
    venom.pause();
  });
  playBtns[3].addEventListener('click', () => {
    playBtns[3].style.display = 'none';
    pauseBtns[3].style.display = 'block';
    musicIcons[3].style.animationPlayState = 'running';
    justBreathing.play();
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    revolution.pause();
  });
  pauseBtns[3].addEventListener('click', () => {
    pauseBtns[3].style.display = 'none';
    playBtns[3].style.display = 'block';
    musicIcons[3].style.animationPlayState = 'paused';
    justBreathing.pause();
  });
  playBtns[4].addEventListener('click', () => {
    playBtns[4].style.display = 'none';
    pauseBtns[4].style.display = 'block';
    musicIcons[4].style.animationPlayState = 'running';
    lightsGoDown.play();
    fedUp.pause();
    astronautInTheOcean.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
    revolution.pause();
  });
  pauseBtns[4].addEventListener('click', () => {
    pauseBtns[4].style.display = 'none';
    playBtns[4].style.display = 'block';
    musicIcons[4].style.animationPlayState = 'paused';
    lightsGoDown.pause();
  });
  playBtns[5].addEventListener('click', () => {
    playBtns[5].style.display = 'none';
    pauseBtns[5].style.display = 'block';
    musicIcons[5].style.animationPlayState = 'running';
    astronautInTheOcean.play();
    fedUp.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
    revolution.pause();
  });
  pauseBtns[5].addEventListener('click', () => {
    pauseBtns[5].style.display = 'none';
    playBtns[5].style.display = 'block';
    musicIcons[5].style.animationPlayState = 'paused';
    astronautInTheOcean.pause();
  });
  playBtns[6].addEventListener('click', () => {
    console.log(music.noTurningBack);
    playBtns[6].style.display = 'none';
    pauseBtns[6].style.display = 'block';
    musicIcons[6].style.animationPlayState = 'running';
    noTurningBack.play();
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    venom.pause();
    revolution.pause();
    justBreathing.pause();
  });
  pauseBtns[6].addEventListener('click', () => {
    pauseBtns[6].style.display = 'none';
    playBtns[6].style.display = 'block';
    musicIcons[6].style.animationPlayState = 'paused';
    noTurningBack.pause();
  });
}
playAndPause();

function forward() {
  forwardBtns[0].addEventListener('click', () => {
    revolution.play();
    playBtns[1].style.display = 'none';
    pauseBtns[1].style.display = 'block';

    musicIcons[1].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
  });
  forwardBtns[1].addEventListener('click', () => {
    venom.play();
    playBtns[2].style.display = 'none';
    pauseBtns[2].style.display = 'block';

    musicIcons[2].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    justBreathing.pause();
    revolution.pause();
  });
  forwardBtns[2].addEventListener('click', () => {
    justBreathing.play();
    playBtns[3].style.display = 'none';
    pauseBtns[3].style.display = 'block';
    
    musicIcons[3].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    revolution.pause();
  });
  forwardBtns[3].addEventListener('click', () => {
    lightsGoDown.play();
    playBtns[4].style.display = 'none';
    pauseBtns[4].style.display = 'block';

    musicIcons[4].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
    revolution.pause();
  });
  forwardBtns[4].addEventListener('click', () => {
    astronautInTheOcean.play();
    playBtns[5].style.display = 'none';
    pauseBtns[5].style.display = 'block';

    musicIcons[5].style.animationPlayState = 'running';
    fedUp.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
    revolution.pause();
  });
  forwardBtns[5].addEventListener('click', () => {
    noTurningBack.play();
    playBtns[6].style.display = 'none';
    pauseBtns[6].style.display = 'block';

    musicIcons[6].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    venom.pause();
    revolution.pause();
    justBreathing.pause();
  });
  forwardBtns[6].addEventListener('click', () => {
    fedUp.play();
    playBtns[0].style.display = 'none';
    pauseBtns[0].style.display = 'block';

    musicIcons[0].style.animationPlayState = 'running';
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    noTurningBack.pause();
    revolution.pause();
  });
}
forward();

function backward() {
  backwardBtns[0].addEventListener('click', () => {
    noTurningBack.play();
    playBtns[6].style.display = 'none';
    pauseBtns[6].style.display = 'block';

    musicIcons[6].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    venom.pause();
    revolution.pause();
    justBreathing.pause();
  });
  backwardBtns[1].addEventListener('click', () => {
    fedUp.play();
    playBtns[0].style.display = 'none';
    pauseBtns[0].style.display = 'block';

    musicIcons[0].style.animationPlayState = 'running';
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    noTurningBack.pause();
    revolution.pause();
  });
  backwardBtns[2].addEventListener('click', () => {
    revolution.play();
    playBtns[1].style.display = 'none';
    pauseBtns[1].style.display = 'block';

    musicIcons[1].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
  });
  backwardBtns[3].addEventListener('click', () => {
    venom.play();
    playBtns[2].style.display = 'none';
    pauseBtns[2].style.display = 'block';

    musicIcons[2].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    justBreathing.pause();
    revolution.pause();
  });
  backwardBtns[4].addEventListener('click', () => {
    justBreathing.play();
    playBtns[3].style.display = 'none';
    pauseBtns[3].style.display = 'block';
    
    musicIcons[3].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    revolution.pause();
  });
  backwardBtns[5].addEventListener('click', () => {
    lightsGoDown.play();
    playBtns[4].style.display = 'none';
    pauseBtns[4].style.display = 'block';

    musicIcons[4].style.animationPlayState = 'running';
    fedUp.pause();
    astronautInTheOcean.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
    revolution.pause();
  });
  backwardBtns[6].addEventListener('click', () => {
    astronautInTheOcean.play();
    playBtns[5].style.display = 'none';
    pauseBtns[5].style.display = 'block';

    musicIcons[5].style.animationPlayState = 'running';
    fedUp.pause();
    lightsGoDown.pause();
    noTurningBack.pause();
    venom.pause();
    justBreathing.pause();
    revolution.pause();
  });
}
backward();