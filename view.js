export class ViewSVG {
    start(field) {
        let divClock = document.getElementById('clock');
        this.svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svgTag.classList = `svg${field}`
        this.svgTag.setAttribute('height', 700);
        this.svgTag.setAttribute('width', 700);
        divClock.append(this.svgTag);
        drawClock(field);
    }
    update() {
        updateTime();
    }
}

function drawClock(field) {
    this.svgTag = document.querySelector(`.svg${field}`)

    this.hour = document.createElementNS("http://www.w3.org/2000/svg",'polygon');
    this.hour.setAttribute("points","350,350 370,350 370,200 420,280 440,270 400,200 370,140 360,140 360,130 380,120 380,100 400,100 400,90 380,90 380,70 330,70 330,90 310,90 310,100 330,100 330,120 340,130 340,140 330,140 280,200 300,290 320,285 310,210 320,200 330,350 335,365 365,365 370,350");
    this.hour.style.transformOrigin = "50% 50%";
    svgTag.append(this.hour);

    this.secunde = document.createElementNS("http://www.w3.org/2000/svg",'polygon');
    this.secunde.setAttribute("points","350,350 350,460 320,570 350,620 345,630 280,560 320,460 330,350");
    this.secunde.style.transformOrigin = "50% 50%";
    svgTag.append(this.secunde);

    this.minute = document.createElementNS("http://www.w3.org/2000/svg",'polygon');
    this.minute.setAttribute("points","350,350 370,350 370,430 340,530 370,590 365,600 300,530 340,430 350,350");
    this.minute.style.transformOrigin = "50% 50%";
    svgTag.append(this.minute);

    drawRound(field);
    drawNumbers(field);
    updateTime();
}

function updateTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    secunde.style.transform = `rotate(${180 + seconds * 6}deg)`;
    minute.style.transform = `rotate(${180 + minutes * 6}deg)`;
    hour.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
}

function drawRound(field) {
    this.svgTag = document.querySelector(`.svg${field}`)

    this.clock = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    this.clock.setAttribute("stroke-width","30");
    this.clock.setAttribute("stroke","black");
    this.clock.setAttribute("stroke-dasharray","5,152");
    this.clock.setAttribute("fill","none");
    this.clock.setAttribute("r",300);
    this.clock.setAttribute("cx",350);
    this.clock.setAttribute("cy",350);
    svgTag.append(this.clock);
}

function drawNumbers(field) {
    this.svgTag = document.querySelector(`.svg${field}`)

    for (let i = 1; i <= 12; i++) {
        this.digit = document.createElementNS("http://www.w3.org/2000/svg",'text');
        svgTag.append(digit);
        digit.classList = "digit"
        digit.innerHTML = (i);
            switch (i) {
            case 1:
                digit.setAttribute("x",465);
                digit.setAttribute("y",145);
            break;

            case 2:
                digit.setAttribute("x",560);
                digit.setAttribute("y",240);
            break;

            case 3:
                digit.setAttribute("x",600);
                digit.setAttribute("y",370);
            break;

            case 4:
                digit.setAttribute("x",555);
                digit.setAttribute("y",500);
            break;

            case 5:
                digit.setAttribute("x",460);
                digit.setAttribute("y",590);
            break;

            case 6:
                digit.setAttribute("x",333);
                digit.setAttribute("y",620);
            break;

            case 7:
                digit.setAttribute("x",205);
                digit.setAttribute("y",590);
            break;

            case 8:
                digit.setAttribute("x",110);
                digit.setAttribute("y",500);
            break;

            case 9:
                digit.setAttribute("x",70);
                digit.setAttribute("y",365);
            break;

            case 10:
                digit.setAttribute("x",110);
                digit.setAttribute("y",230);
            break;

            case 11:
                digit.setAttribute("x",200);
                digit.setAttribute("y",150);
            break;

            case 12:
                digit.setAttribute("x",320);
                digit.setAttribute("y",120);
            break;
        }
    }
}
