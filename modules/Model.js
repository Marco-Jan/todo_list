export default function Model() {
    let _onTodoChange = () => { };


    let _todos = JSON.parse(localStorage.getItem("todos")) || [];
    /* { id: 1, text: "Learn JavaScript", completed: true },
    { id: 2, text: "Seek for a job", completed: false }, */


    const _pushTodos = (todos) => {
        _onTodoChange(_todos);
        localStorage.setItem("todos", JSON.stringify(_todos));
    }



    const getTodos = () => _todos;


    const addTodo = (text) => {
        const todo = {
            id: _todos.length + 1,
            text,
            completed: false,
        }

        _todos.push(todo);
        _pushTodos(_todos);
        // _onTodoChange(_todos);
    };

    const removeTodo = (id) => {
        _todos = _todos.filter((todo) => todo.id !== id);
        // _onTodoChange(_todos);
        _pushTodos(_todos);

    }

    const editTodos = (id, text) => {
        _todos = _todos.map((todo) => {
            _pushTodos(_todos);

            if (todo.id !== id) return todo;
            return { ...todo, text };


        });
    };

    const toggleTodo = (id) => {
        _todos = _todos.map((todo) => {
            // _onTodoChange(_todos);
            _pushTodos(_todos);


            if (todo.id !== id) return todo;
            return { ...todo, completed: !todo.completed };
        });
    };

    const bindTodoChange = (callback) => {
        _onTodoChange = callback;
    };



    return { addTodo, removeTodo, editTodos, toggleTodo, getTodos, bindTodoChange };


}
