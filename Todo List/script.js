document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => addTodoElement(todo));
    };

    const saveTodos = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getTodos = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const addTodoElement = (todo) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.className = todo.completed ? 'completed' : '';
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            const todos = getTodos();
            const index = todos.findIndex(t => t.text === todo.text);
            todos[index].completed = !todos[index].completed;
            saveTodos(todos);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            todoList.removeChild(li);
            const todos = getTodos().filter(t => t.text !== todo.text);
            saveTodos(todos);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    };

    addBtn.addEventListener('click', () => {
        const text = todoInput.value.trim();
        if (text) {
            const todo = { text, completed: false };
            addTodoElement(todo);
            const todos = getTodos();
            todos.push(todo);
            saveTodos(todos);
            todoInput.value = '';
        }
    });

    loadTodos();
});
