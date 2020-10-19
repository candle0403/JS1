'use strict';
{
	const oneTask = document.getElementById('task');
	const tbody = document.querySelector('tbody');
	const allSelect = document.getElementById('allSelect');
	const nowSelect = document.getElementById('nowSelect');
	const compsSelect = document.getElementById('compsSelect');
	let done = false;
	let tasks = [];

	function filterTasks() {
		if (allSelect.checked) {
			const allTasks = tasks;
			return writeTask(allTasks);
		} else if (nowSelect.checked) {
			const workingTodo = tasks.filter((work) => {
				return work.status === '作業中';
			});
			console.log(workingTodo);
			return writeTask(workingTodo);
		} else if (compsSelect.checked) {
			const compsTodo = tasks.filter((comp) => {
				return comp.status === '完了';
			});
			return writeTask(compsTodo);
		}
		console.log(compsTodo);
	}

	function clearTr(index, deleteTd) {
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

	function changeStatus(statusTd, array, index) {
		statusTd.addEventListener('click', () => {
			if (done === true) {
				statusTd.textContent = '作業中';
				array[index].status = '作業中'
			} else {
				statusTd.textContent = '完了';
				array[index].status = '完了'
			}
			done = !done;
		});
	}

	function writeTask(tasksArray) {
		while (tbody.firstElementChild) {
			tbody.removeChild(tbody.firstElementChild);
		}
		tasksArray.forEach((task, index) => {
			const tr = document.createElement('tr');
			const idNumber = document.createElement('td');
			idNumber.textContent = index;
			tr.appendChild(idNumber);
			const commentTd = document.createElement('td');
			commentTd.textContent = task.comment;
			tr.appendChild(commentTd);

			const statusTd = document.createElement('td');
			addStatus(task, statusTd, tr);

			changeStatus(statusTd, tasksArray, index);

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
			filterTasks();
		});
	}
	addTask();

	const choices = document.getElementsByName('choices');
	choices.forEach(choice => {
		choice.addEventListener('click',()=>{
		filterTasks();
		})
	});
	console.log(tasks);
}
