export default class View {
    constructor() {

    }

    showResult(result){
        document.getElementById('content').innerHTML = result;
        document.getElementById('result-window').style.display = 'block';
    }

    closeWindow(){
        document.getElementById('result-window').style.display = 'none';
        location.reload();
    }
}
