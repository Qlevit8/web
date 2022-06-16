import Model from './model/gameModel.js';
import Controller from './controller/gameController.js';
import View from './view/gameView.js';

let model = new Model();
let view = new View();

let controller = new Controller(model, view);


document.getElementById('area').addEventListener('click', e => {
    controller.onAreaClick(e);
})

document.getElementById('overlay').addEventListener('click', function(){
    controller.closeWindow();
});

document.getElementById('close-button').addEventListener('click', function(){
    controller.closeWindow();
});