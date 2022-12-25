// selecting all the buttons
const cleanBtn = document.querySelector(".clean");
const feadBtn = document.querySelector(".fead");
const playBtn = document.querySelector(".play");
const resetBtn = document.querySelector(".reset"); 

// when clicking th specific button, health should increase, hunger should decrease and happiness should increase, each by 10.
cleanBtn.addEventListener('click', () => {
  let health = document.getElementById('myHealth');
  health.value = (health.value === health.max) ? 0 : health.value + 10;
  
  resetBtn.addEventListener('click', () => {
        health.value = 0;
  });
});

feadBtn.addEventListener('click', () => {
    let fead = document.getElementById('myHunger');
    fead.value =  fead.value - 10;
    resetBtn.addEventListener('click', () => {
        fead.value = 100;
  });
});

playBtn.addEventListener('click', () => {
    let play = document.getElementById('myHappiness');
    play.value = (play.value === play.max) ? 0 : play.value + 10;
    resetBtn.addEventListener('click', () => {
        play.value = 0;
  });
    
});
