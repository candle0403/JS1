"use strict";
{
	function outPutFizzBuzz() {
		const fizz = document.getElementById("fizz").value;
		const buzz = document.getElementById("buzz").value;
		const blank = "";

		if (Number.isInteger(Number(fizz)) && Number.isInteger(Number(buzz))) {
			for (let i = 0; i < 100; i++) {
				if (i % fizz === 0 && i % buzz === 0) {
					const li = document.createElement("li");
					li.textContent = "FizzBuzz!" + i;
					document.querySelector("ul").appendChild(li);
				} else if (i % fizz === 0) {
					const li = document.createElement("li");
					li.textContent = "Fizz!" + i;
					document.querySelector("ul").appendChild(li);
				} else if (i % buzz === 0) {
					const li = document.createElement("li");
					li.textContent = "Buzz!" + i;
					document.querySelector("ul").appendChild(li);
				}
			}
		} else {
			const li = document.createElement("li");
			li.textContent = "Error!(整数値を入力してね）";
			document.querySelector("ul").appendChild(li);
		}
		if (!blank) {
			const li = document.createElement("li");
			li.textContent = "Error!(整数値を入力してね）";
			document.querySelector("ul").appendChild(li);
		}
	}

	const btn = document.getElementById("btn");
	btn.addEventListener("click", () => {
		outPutFizzBuzz();
	});
}
