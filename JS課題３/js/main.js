"use strict";
{
	const oneTask = document.getElementById("task");
	const tbody = document.querySelector("tbody");

	const tasks = [];
	let i = -1;

	function addTask() {
		document.getElementById("add").addEventListener("click", () => {
			tasks.push({comment: oneTask.value, status: "作業中", status2: "削除"});
			console.log(tasks);
			while (tbody.firstElementChild) {
				tbody.removeChild(tbody.firstElementChild);
			}
			tasks.forEach((task, index) => {
				const tr = document.createElement("tr");
				const td = document.createElement("td");
				td.textContent = `${index}`;
				tr.appendChild(td);
				const td2 = document.createElement("td");
				td2.textContent = `${task.comment}`;
				tr.appendChild(td2);

				const td3 = document.createElement("td");
				td3.classList.add("working");
				td3.textContent = `${task.status}`;
				tr.appendChild(td3);

				const td4 = document.createElement("td");
				td4.classList.add("d_button");
				td4.textContent = `${task.status2}`;
				tr.appendChild(td4);
				tbody.appendChild(tr);

				td4.addEventListener("click", () => {
					if (tasks.length === 1) {
						index = 0;
					}
					const tres = document.querySelectorAll("tbody > tr")[index];
					tres.remove();
					tasks.splice(index, 1);
					console.log(index);
				});
			});

			oneTask.value = "";
		});
	}
	addTask();
}
