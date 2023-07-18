import Controller from "./modules/Controller.js";
import Model from "./modules/Model.js";
import View from "./modules/View.js";

const app = Controller(Model(), View());

console.log(app.model.addTodo('jsdfsdf'));
console.log(app.model.getTodos());
// console.log(app.model.toggleTodo());