// Messing with the Shape class, that is in the bellow path (ctrl + click)
import Shape from "../CLASSES/_js-Classes.mjs";

const sh1 = new Shape(10, 20, "T");
const sh2 = new Shape();

// Calculating area for sh1
sh1.calcArea();
console.log(sh1.getArea);

sh1.setType = "R";
sh1.calcArea();
console.log(sh1.getArea);

sh1.setType = "E";
sh1.calcArea();
console.log(sh1.getArea);

// Defining sh2
sh2.setHeight = 23;
sh2.setWidth = 12;
sh2.setType = "R";
sh2.calcArea();
console.log(sh2.getArea);
