const lights = document.querySelector("ul").children;
const lightRed = "#da8695";
const lightGreen = "a6f3a1";
const lightBlue = "97e4e6";
const lightOrange = "f5d495";

var animate = (lights) => {
	for (let i = 0; i < lights.length; i++) {
		if (i % 2 === 0) {
			lights[i].classList.toggle("fadeActionStart");
		} else {
			lights[i].classList.toggle("fadeActionDelay");
		}
	}
};

animate(lights);
