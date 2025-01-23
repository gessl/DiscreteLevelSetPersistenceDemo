import { InstancedSketchSlide1, InstancedSketchSlide2, switch_slide1, switch_slide2 } from "./SubLevelPersistence.js";

const p_sublevel1 = new p5(InstancedSketchSlide1);
p_sublevel1.noLoop();
const p_sublevel2 = new p5(InstancedSketchSlide2);
p_sublevel2.noLoop();
window.p_sublevel1 = p_sublevel1;
window.p_sublevel2 = p_sublevel2;
window.switch_slide1 = switch_slide1;
window.switch_slide2 = switch_slide2;