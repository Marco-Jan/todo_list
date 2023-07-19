export default function Controller(model, view) {
    const onTodoChange = (todos) => {
        view.renderTodos(todos);
    };
    onTodoChange(model.getTodos());

    const _handleAddTodo = (todoText) => {
        model.addTodo(todoText);
    };



    const _handleRemoveTodo = (id) => {
        model.removeTodo(id);
    };

    const _handleEditTodo = (id, text) => {
        model.editTodos(id, text);
    };
    
    const _handleToggleTodo = (id) => {
        model.toggleTodo(id);
    };

    view.bindAddTodo(_handleAddTodo);
    model.bindTodoChange(onTodoChange);
    view.deleteTodo(_handleRemoveTodo);
    view.toggleTodo(_handleToggleTodo);
    view.bindEditTodos(_handleEditTodo);






    return { model, view };
}

