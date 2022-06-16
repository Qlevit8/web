export default class Controller {

  constructor(Model, View) {
    this.model = Model;
    this.view = View; 
  }

  onAreaClick(element){
    var result = this.model.onAreaClick(element);
    if(typeof(result) == "string"){
      this.view.showResult(result);
    }
  }

  closeWindow(){
    this.view.closeWindow();
  }
}


