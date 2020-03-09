import { Model } from './model';
import { ViewSVG } from './view';
import { Controller } from './controller';

let clock = new Model();
let clockSvg = new ViewSVG();
let controller = new Controller(clock);

clock.begin(clockSvg);
clockSvg.start(1);
clock.start();
controller.begin();
