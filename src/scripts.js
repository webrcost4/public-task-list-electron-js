let tasks = JSON.parse(localStorage.getItem('tasks'));

document.getElementById("form").addEventListener("submit", function(event){
  event.preventDefault();

    let titleInput = document.getElementById("titleInput").value;
	let descriptionInput = document.getElementById("descriptionInput").value;
	let urgencyInput = document.getElementById("urgencyInput").value;


  localStorage.setItem('tasks', JSON.stringify([...tasks, { titleInput, descriptionInput, urgencyInput }]));
  window.location = '';

});

(()=> {
	if (tasks){
		tasks.forEach((task, index)=>{
			document.getElementById('tasks').innerHTML += `
				<h1>${task.titleInput}</h1>
				<p>${task.descriptionInput}</p>
				<button onclick="removeOneTask(${index})">Remover tarefa</button>
				<hr />
			`;
		});
	}else {
		localStorage.setItem('tasks', JSON.stringify([]));
		window.location = ''
	}
})();



	


function removeOneTask(index) {
	tasks.splice(index, 1);
	localStorage.setItem('tasks', JSON.stringify(tasks));

	window.location = '';
}