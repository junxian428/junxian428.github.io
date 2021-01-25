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
     takeTurn();
  }

	function takeTurn(){
             if(turn % 2 == 0){
                 humanPlayer.takeTurn();
	     }else{
                 computerPlayer.takeTurn();
	     }
             turn++;
	}
}



function Board(){
 this.positions = Array.from(document.querySelectorAll('.col'));
 console.log(this.positions);

}


function HumanPlayer(){
 this.takeTurn = function(){

    console.log("human player turn")
 }
}



function ComputerPlayer(){
	this.takeTurn = function(){
          console.log("computer player turn")
	}
}
