'use strict';
{
	const oneTask = document.getElementById('task');
	const tbody = document.querySelector('tbody');

	let done = false;
	const tasks = [];

	function clearTr(index, deleteTd) {
		console.log(index);
		deleteTd.addEventListener('click', () => {
			if (tasks.length === 1) {
				index = 0;
			}
			const tres = document.querySelectorAll('tbody > tr')[index];
			tres.remove();
			tasks.splice(index, 1);
		});
	}

	function addStatus(task, statusTd, tr) {
		statusTd.classList.add('working');
		statusTd.textContent = task.status;
		tr.appendChild(statusTd);
	}

	function addDelete(task, deleteTd, tr) {
		deleteTd.classList.add('d_button');
		deleteTd.textContent = task.delete_btn;
		tr.appendChild(deleteTd);
		tbody.appendChild(tr);
	}

	function writeTask() {
		while (tbody.firstElementChild) {
			tbody.removeChild(tbody.firstElementChild);
		}
		tasks.forEach((task, index) => {
			const tr = document.createElement('tr');
			const idNumber = document.createElement('td');
			idNumber.textContent = index;
			tr.appendChild(idNumber);
			const commentTd = document.createElement('td');
			commentTd.textContent = task.comment;
			tr.appendChild(commentTd);

			const statusTd = document.createElement('td');
			addStatus(task, statusTd, tr);

			const deleteTd = document.createElement('td');
			addDelete(task, deleteTd, tr);

			clearTr(index, deleteTd);

			oneTask.value = '';
		});
	}

	function addTask() {
		document.getElementById('add').addEventListener('click', () => {
			tasks.push({
				comment: oneTask.value,
				status: '作業中',
				delete_btn: '削除',
			});
			writeTask();
		});
	}
	addTask();
}
