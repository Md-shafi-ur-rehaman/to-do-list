const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('.list'); 
const body = document.querySelector('#body');

const addTask = ()=>{
    const taskText = taskInput.value;
    if(taskText !== ''){
        const li = document.createElement('li');
        const a = document.createElement('a');
        const p = document.createElement('p');
        p.textContent = taskText;
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = 'checkBox';
        

        a.textContent = 'remove';
        a.addEventListener('click', deleteTask);
        checkBox.addEventListener('click',completeTask);
        li.addEventListener('click', completeTask);
        
        li.appendChild(checkBox);
        li.appendChild(p);
        li.appendChild(a);
        taskList.appendChild(li);

        taskInput.value = '';
    } 
}
body.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        addTask();
    }
    taskInput.focus();
});

const deleteTask = (e)=>{
    const task = e.target.parentElement;
    taskList.removeChild(task);
}

const completeTask = (e)=>{
    const task = e.target;
    if(task.checked == true){
        task.parentElement.classList.add('completed');
    }
    else{
        task.parentElement.classList.remove('completed');
    }
}