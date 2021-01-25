const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();



function TicTacToeGame(){
  const board = new Board();
  const humanPlayer = new HumanPlayer();
  const computerPlayer = new ComputerPlayer();
  let turn = 0;
	
  this.start = function(){
     const config = { childList: true};
     const observer = new MutationObserver(() => takeTurn());
     board.positions.forEach((el) => observer.observer(el,config));


  }

	function takeTurn(){
             console.log("Something Changed");
	}



}



function Board(){
 this.positions = Array.from(document.querySelectorAll('.col'));
 console.log(this.positions);


}


function HumanPlayer(){



}



function ComputerPlayer(){


}
