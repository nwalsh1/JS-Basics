     //when we load the page, we load the score from local storage
      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      updateScoreElement();

      // if (!score) {
      //   score = {
      //     wins: 0,
      //     losses: 0,
      //     ties: 0,
      //   };
      // }

      let isAutoPlaying = false;
      let intervalId;
      
      // const autoPlay = () => {

      // };
      //this is easier to read, and allows hoisting v
      function autoPlay(){
        if(!isAutoPlaying){
          intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying=false;
        }
      }

      document.querySelector('.js-rock-button')
      .addEventListener('click', () => {
        playGame('Rock');
      });
      //mistake to pass in playGame('rock') - undefined, need to make a function wrapper

      document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGame('Paper');
      });

      document.querySelector('.js-scissors-button')
      .addEventListener('click', () => {
        playGame('Scissors');
      });

      document.querySelector('.js-reset-button')
      .addEventListener('click', () => {
        resetButton();
      });

      document.querySelector('.js-auto-play-button')
      .addEventListener('click', () => {
        autoPlay();
      });

      document.body.addEventListener('keydown', (event) => {
        if(event.key=== 'r'){
          playGame('Rock');
        } else if(event.key === 'p'){
          playGame('Paper');
        }else if(event.key === 's'){
          playGame('Scissors');
        }
      });
      //eventlistener for onkeydown provides the event as a parameter

      function playGame(playerMove) {
        const compHand = pickComputerMove();

        let result = "";

        if (playerMove === "Rock") {
          if (compHand === "Rock") {
            result = "Tie.";
          } else if (compHand === "Paper") {
            result = "You Lose.";
          } else {
            result = "You Win.";
          }
        } else if (playerMove === "Paper") {
          if (compHand === "Rock") {
            result = "You Win.";
          } else if (compHand === "Paper") {
            result = "Tie.";
          } else {
            result = "You Lose.";
          }
        } else if (playerMove === "Scissors") {
          if (compHand === "Rock") {
            result = "You Lose.";
          } else if (compHand === "Paper") {
            result = "You Win.";
          } else {
            result = "Tie.";
          }
        }

        if (result === "You Win.") {
          score.wins += 1;
        } else if (result === "You Lose.") {
          score.losses += 1;
        } else if (result === "Tie.") {
          score.ties += 1;
        }
        //localStorage saves values even if you refresh, can only hold Strings
        localStorage.setItem("score", JSON.stringify(score));

        updateScoreElement();

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(
          ".js-moves"
        ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" />
      <img src="images/${compHand}-emoji.png" class="move-icon" />
      Computer`;

        //   alert(
        //     `You picked ${playerMove}. Computer picked ${compHand}. ${result}
        // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
        //   );
      }

      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        let compHand = "";
        const randomNum = Math.random();

        if (randomNum < 1 / 3) {
          compHand = "Rock";
        } else if (randomNum < 2 / 3) {
          compHand = "Paper";
        } else {
          compHand = "Scissors";
        }
        //return a "return value", ends function immediately
        return compHand;
      }

      function resetButton() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem("score");
        updateScoreElement();
      }