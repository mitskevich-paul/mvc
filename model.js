export class Model {
    constructor() {
    }
    start() {
        this.timer = setInterval(() => {
            this.myView.update();
        }, 1000)
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
    begin(view) {
        this.myView = view;
    }
}
