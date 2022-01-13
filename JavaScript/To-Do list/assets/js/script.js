const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	if (inputField.value === '') {
		alert('Insira uma tarefa!');
	}else{
		addTask(inputField.value);
	}
	form.reset();
};

function addTask(description) {
	const taskCancel = document.createElement('span');
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const parent = newTask.parentNode;
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);
	const taskDescriptionCancel = document.createTextNode('highlight_off');

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);
	taskLabel.classList.add('txt-style')
    taskLabel.addEventListener('click', a = () => {
        taskLabel.classList.toggle('lineThrough');
        return false;
    });

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);
	taskContainer.appendChild(taskCancel);

	taskCancel.classList.add('material-icons');
	taskCancel.appendChild(taskDescriptionCancel);
	taskCancel.addEventListener('click', a = () => {
			parent.removeChild(newTask);
		return false;
	});

	taskList.appendChild(taskContainer);
}
