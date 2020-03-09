export class Controller {
    constructor(Model) {
        this.stopClock = function() {
            Model.stop();
        };
        this.startClock = function() {
            Model.start();
        };
    }
    begin() {
        this.stop = document.querySelector('.stop');
        this.stop.addEventListener('click', this.stopClock);
        this.start = document.querySelector('.start');
        this.start.addEventListener('click', this.startClock);
    }
}
