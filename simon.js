// 

// Global variables
let gameSql = [];
let userSql = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = [ "red","yellow", "green", "purple"];

// Start the game on keypress
document.addEventListener("click", function() {
  if (!started) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

// Flash animation for a given button
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 250);
}

// Increase level and flash a random button
function levelUp() {
  userSql=[];
  level++;
  h2.innerText = `Level ${level}`;

  // Generate a random index from 0 to 3
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];

  // Query the button element by color class (e.g., ".red")
  let randbtn = document.querySelector(`.${randColor}`);
  console.log("Chosen color:", randColor);
console.log(randbtn)
  // Flash the chosen button
  gameSql.push(randColor);
  console.log(gameSql);
  btnFlash(randbtn);

}


// function checkans(){
//   // console.log(`current level:`,level);

//   let idx = userSql.length-1;

//   if(userSql[idx]===gameSql[idx]){
//     if(userSql.length===gameSql.length){
//       setTimeout(levelUp,1000);
//     }
  
//   }else{
  
//     reset ();
//   }
// }
function checkans() {
  let idx = userSql.length - 1;

  if (userSql[idx] === gameSql[idx]) {
    if (userSql.length === gameSql.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    console.log("Wrong! Restarting the game...");
    h2.innerText = `Game Over! YOUR SCORE WAS ${level} Click to restart .`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },250);
    resetGame();
  }
}


function btnpress(){
    console.log(this);
    btnFlash(this);
    let  userColor = this.getAttribute("id");
    userSql.push(userColor);
    console.log(userColor); 

    checkans();
}

let allbtns = document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }


function resetGame(){
  started == false;
  userSql=[];
  gameSql = [];
  level =0;
}


// now this project i suploaded to the github



    