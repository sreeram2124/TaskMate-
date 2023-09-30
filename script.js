document.getElementById('taskForm').addEventListener('submit', function(e) {
	e.preventDefault();
	
	const taskDescription = document.getElementById('taskDescription').value;
	const priority = document.getElementById('priority').value;
	const deadline = document.getElementById('deadline').value;
	
	const taskItem = document.createElement('li');
	taskItem.innerHTML = `
	  <span>${taskDescription}</span>
	  <span>Priority: ${priority}</span>
	  <span>Deadline: ${deadline}</span>
	  <button onclick="deleteTask(this)">Delete</button>
	`;
  
	document.getElementById('taskList').appendChild(taskItem);
  });
  
  function deleteTask(button) {
	button.parentElement.remove();
  }
  