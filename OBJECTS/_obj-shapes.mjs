// Messing with the Shape class, that is in the bellow path (ctrl + click)
import Shape from "../CLASSES/_js-Classes.mjs";

const sh1 = new Shape(10, 20, "T");

sh1.calcArea();
console.log(sh1.getArea);

sh1.setType = "R";
sh1.calcArea();
console.log(sh1.getArea);

sh1.setType = "E";
sh1.calcArea();
console.log(sh1.getArea);
