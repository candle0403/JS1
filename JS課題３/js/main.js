"use strict";
{
	const oneTask = document.getElementById("task");

	const tasks = [];
	let i = -1;

	document.getElementById("add").addEventListener("click", () => {
		tasks.push({comment: oneTask.value, status: "作業中", status2: "削除"});
		i++;
		console.log(tasks);
		const tr = document.createElement("tr");
		const td = document.createElement("td");
		td.textContent = `${i}`;
		tr.appendChild(td);
		const td2 = document.createElement("td");
		td2.textContent = `${tasks[i].comment}`;
		tr.appendChild(td2);

		const td3 = document.createElement("td");
		td3.classList.add("working");
		td3.textContent = `${tasks[i].status}`;
		tr.appendChild(td3);

		const td4 = document.createElement("td");
		td4.classList.add("d_button");
		td4.textContent = `${tasks[i].status2}`;
		tr.appendChild(td4);
		document.querySelector("tbody").appendChild(tr);
		oneTask.value = "";
	});
}
