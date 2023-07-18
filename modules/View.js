
export default function View() {
    const createElement = (tag, classname) => {
        const element = document.createElement(tag);
        classname && element.classList.add(classname);
        return element;
    };

    const getElement = (selector) => {
        const element = document.querySelector(selector);
        return element;
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
        }
    };

    



    return { createElement,getElement,renderTodos };


}