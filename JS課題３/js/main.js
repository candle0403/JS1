'use strict';
{
	const oneTask = document.getElementById('task');
	const tbody = document.querySelector('tbody');
	const deleteTd = document.createElement('td');

	const tasks = [];

	function clearTr(index) {
		deleteTd.addEventListener('click', () => {
			if (tasks.length === 1) {
				index = 0;
			}
			const tres = document.querySelectorAll('tbody > tr')[index];
			tres.remove();
			tasks.splice(index, 1);
			console.log(index);
		});
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
			statusTd.classList.add('working');
			statusTd.textContent = task.status;
			tr.appendChild(statusTd);

			const deleteTd = document.createElement('td');
			deleteTd.classList.add('d_button');
			deleteTd.textContent = task.delete_btn;
			tr.appendChild(deleteTd);
			tbody.appendChild(tr);

			clearTr(index);

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
