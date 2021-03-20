// global constants
const buttonCount = 6;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxHealth = 3;


//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var guessCounter = 0;
var health = maxHealth;

function randomizePattern(){
  for (let i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * (buttonCount - 1) + 1);
  }
}

function startGame(){
    //initialize game variables
    progress = 0;
    health = maxHealth;
    randomizePattern();
    gamePlaying = true;
    clueHoldTime = 1000;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //change game variables
    gamePlaying = false;
    progress = 0;
    // swap the Start and Stop buttons
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("wrong1").classList.add("hidden");
    document.getElementById("wrong2").classList.add("hidden");
}

function loseHealth(){
  health--;
  if (health==0){
    loseGame();
  }
  else{
   document.getElementById("wrong"+(maxHealth-health)).classList.remove("hidden"); 
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost!");
}

function winGame(){
  stopGame();
  alert("You won!!");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (btn == pattern[guessCounter]){
    if (guessCounter==progress){
      progress++;
      clueHoldTime-=(700/pattern.length);
      if (progress==pattern.length){
        winGame();
      }
      playClueSequence();
    }
    else{
     guessCounter++; 
    }
  }
  else{
    loseHealth();
  }

  // add game logic here
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 232.2,
  2: 367.3,
  3: 458.8,
  4: 600,
  5: 784.9,
  6: 893.1
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)