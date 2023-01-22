const input = document.querySelector('[type=text]');
const btnAdd = document.querySelector('.btnAdd');
const list = document.querySelector('.listToDo');

btnAdd.addEventListener('click', () => {
    createTask(input.value);
});

const createTask = (text) => {
    // creaet all elements you need
    let li = document.createElement('li');
    let divTask = document.createElement('div');
    let divButtons = document.createElement('div');
    let buttonDone = document.createElement('button');
    let icon_done = document.createElement('i');
    let buttonDelete = document.createElement('button');
    let icon_delete = document.createElement('i');

    // set the attributes of each element
    divTask.setAttribute('class', 'task');
    divButtons.setAttribute('class', 'buttons');
    buttonDone.setAttribute('class', 'done');
    buttonDelete.setAttribute('class', 'delete');
    icon_done.setAttribute('class', 'fa-solid');
    icon_done.classList.add('fa-circle-check');
    icon_delete.setAttribute('class', 'fa-solid');
    icon_delete.classList.add('fa-trash');

    // append text to the div Task
    const newtext = document.createTextNode(text);
    divTask.appendChild(newtext);

    // append each element to the corresponding parent
    buttonDelete.appendChild(icon_delete);
    buttonDone.appendChild(icon_done);
    divButtons.append(buttonDone, buttonDelete);
    li.append(divTask,divButtons);
    list.appendChild(li);

    // add event click to delete button and done button
    buttonDone.addEventListener('click',() => {
        divTask.classList.toggle('line-through');
    })
    buttonDelete.addEventListener('click',() => {
        li.remove();
    })

}