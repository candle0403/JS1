"use strict";
{
	function errorCheck() {
		let fizz = document.getElementById("fizz").value;
		let buzz = document.getElementById("buzz").value;
		fizz = Number(fizz);
		buzz = Number(buzz);
		if (!(Number.isInteger(fizz) && Number.isInteger(buzz))) {
			const li = document.createElement("li");
			li.textContent = "Error!(整数値を入力してね）";
			document.querySelector("ul").appendChild(li);
		}
	}

	function clearResult() {
		const ul = document.querySelector("ul");
		while (ul.firstElementChild) {
			ul.removeChild(ul.firstElementChild);
		}
	}

	function testBlank() {
		let fizz = document.getElementById("fizz").value;
		let buzz = document.getElementById("buzz").value;

		if (!fizz.trim() || !buzz.trim()) {
			const li = document.createElement("li");
			li.textContent = "Error!(空白です）";
			document.querySelector("ul").appendChild(li);
		}
	}

	function outPutFizzBuzz() {
		let fizz = document.getElementById("fizz").value;
		let buzz = document.getElementById("buzz").value;
		fizz = Number(fizz);
		buzz = Number(buzz);

		if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
			for (let i = 1; i < 100; i++) {
				const li = document.createElement("li");
				if (i % fizz === 0 && i % buzz === 0) {
					li.textContent = "FizzBuzz!" + i;
					document.querySelector("ul").appendChild(li);
				} else if (i % fizz === 0) {
					li.textContent = "Fizz!" + i;
					document.querySelector("ul").appendChild(li);
				} else if (i % buzz === 0) {
					li.textContent = "Buzz!" + i;
					document.querySelector("ul").appendChild(li);
				}
			}
		}
	}

	const btn = document.getElementById("btn");
	btn.addEventListener("click", () => {
		clearResult();
		errorCheck();
		testBlank();
		outPutFizzBuzz();
	});
}
