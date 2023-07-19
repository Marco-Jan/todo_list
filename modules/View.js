
export default function View() {

    let _tempTodoText = "";
    const createElement = (tag, classname) => {
        const element = document.createElement(tag);
        classname && element.classList.add(classname);
        return element;
    };

    const getElement = (selector) => {
        const element = document.querySelector(selector);
        return element;
    };
    //input übergabe an model

    const handleValues = () => {
        const input = getElement("input");
        const todoText = () => input.value;
        const resetInput = () => input.value = "";
        return [todoText, resetInput];

    };



    const bindAddTodo = (handler) => {
        const form = getElement("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const [todoText, resetInput] = handleValues();
            handler(todoText());
            resetInput();

        });
    };

    const deleteTodo = (handler) => {
        const todoList = getElement(".todo-list");
        todoList.addEventListener("click", (event) => {
            if (event.target.className === "delete") {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }

        });
    };

    const toggleTodo = (handler) => {
        const editList = getElement(".todo-list");
        editList.addEventListener('change', (event) => {

        event.target.type === 'checkbox' && handler (parseInt(event.target.parentElement.id));

        });

    };
    const _intiTempListener = () => {
        const todoList = document.querySelector(".todo-list");
        todoList.addEventListener ("input", (event) => {
            if ( event.target.className === "editable") {
                _tempTodoText = event.target.innertext;
            }
        });
    };

    _intiTempListener();

    const bindEditTodos = (handler) => {
        const todoList = getElement(".todo-list");
        todoList.addEventListener("focusout", (event) => {
            const id = parseInt(event.target.parentElement.id);
            handler(id, _tempTodoText);

        });
    };



    const configure = () => {
        //create root
        const root = getElement("#root");
        //creat Title
        const title = createElement("h1", "title");
        title.textContent = "Todos";
        //create form
        const form = createElement("form");
        const input = createElement("input");
        input.type = "text";
        input.placeholder = "Add todo";
        input.name = "todo";
        //create button
        const submitButton = createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Add";
        //create list
        const todoList = createElement("ul", "todo-list");
        //append elements
        form.append(input, submitButton);
        root.append(title, form, todoList);

    };

    configure();

    const renderTodos = (todos) => {
        //delete all todos
        const todoList = document.querySelector(".todo-list");
        todoList.innerHTML = "";

        // /show a message if there are no todos
        if (todos.length === 0) {
            const message = createElement("p", "message");
            message.textContent = "No todos";
            todoList.append(message);
            return;
        } else {
            //render todos
            todos.forEach((todo) => {
                //create list element
                const listElement = document.createElement("li");
                listElement.id = todo.id;

                //create checkbox to toggle todo
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.completed;

                //span with contenteditable text
                const span = document.createElement("span");
                span.contentEditable = true;
                span.classList.add("editable");

                //strike trough completed todos
                if (todo.completed) {
                    const strike = document.createElement("s");
                    strike.textContent = todo.text;
                    span.appendChild(strike);
                }
                else {
                    span.textContent = todo.text;
                }

                //creat delet btn
                const deleteButton = createElement("button", 'delete');
                deleteButton.textContent = "Delete";

                //append elements to listElement
                listElement.append(checkbox, span, deleteButton);

                //append listElement to todoList
                todoList.append(listElement);
            });


        }

    };





    return { createElement, getElement, renderTodos, renderTodos, handleValues, bindAddTodo, deleteTodo, toggleTodo, bindEditTodos };


}