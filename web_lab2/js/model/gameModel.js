export default class Model {
  static playerOneObject = '<img src="css/image/player_0.png" alt="..." height="60">';
  static playerTwoObject = '<img src="css/image/player_1.png" alt="..." height="60">';

  constructor() {
      this.turn = 0;
  }

  onAreaClick(element){
    if(element.target.className == 'box'){
      if(element.target.innerHTML != Model.playerOneObject && element.target.innerHTML != Model.playerTwoObject){
        this.turn % 2 === 0 ? element.target.innerHTML = Model.playerOneObject : element.target.innerHTML = Model.playerTwoObject;
        element.target.style.pointerEvent = 'none';
        this.turn++;
      }
    }
    return this.checkBox();
  }


  checkBox(){
    const boxes = document.getElementsByClassName('box');
    const win_types = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(var i = 0; i < win_types.length; i++){
      if(boxes[win_types[i][0]].innerHTML == Model.playerOneObject &&
         boxes[win_types[i][1]].innerHTML == Model.playerOneObject &&
         boxes[win_types[i][2]].innerHTML == Model.playerOneObject){
        return this.getWinner('xрестики');
        }
      else if(boxes[win_types[i][0]].innerHTML == Model.playerTwoObject &&
              boxes[win_types[i][1]].innerHTML == Model.playerTwoObject &&
              boxes[win_types[i][2]].innerHTML == Model.playerTwoObject){
        return this.getWinner('нулики');
      }
    }
    return this.checkIfDraw();
  }

  checkIfDraw(){
    const boxes = document.getElementsByClassName('box');
    var count = 0;
    for(var i = 0; i < boxes.length; i++){
      if(boxes[i].innerHTML == Model.playerOneObject || boxes[i].innerHTML == Model.playerTwoObject){
        count++;
      }
    }
    if(count == 9){
      return "Нічия";
    }
    return null;
  }
      
  getWinner(winner){
    return 'Перемогли ' + winner + '!';
  }
}
