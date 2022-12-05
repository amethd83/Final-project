function validFormFieldInput(data) {
    const inputName = document.querySelector('#inputName');
    const name = inputName.value;
    const inputDescription = document.querySelector('#inputDescription');
    const description = inputDescription.value;
    const inputAssignedTo = document.querySelector('#inputAssignedTo');
    const assignedTo = inputAssignedTo.value;
    const inputDate = document.querySelector('#inputDate');
    const dueDate = inputDate.value;
    const inputStatus = document.querySelector('#inputStatus');
    const status = inputStatus.value;

    console.log(`name ${name}`);
    console.log(`description ${description}`);
    console.log(`assign: ${assignedTo}`);
    console.log(`date: ${dueDate}`);
    console.log(`status: ${status}`);
}





/*
let tasksList = document.querySelector('#taskList');
tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-btn')){
        let parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask);
        let taskId = Number(parentTask.id);
        console.log(taskId);
        let task = task1.getTaskById(taskId);
        task.status = 'DONE';
        task1.render();

    }
})
