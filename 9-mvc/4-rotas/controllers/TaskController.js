// importando o model Task
const Task = require('../models/Task')

// vamos invocar os models sem instancia-los por métodos estáticos
module.exports = class TaskController {
// funções TaskController

    //função criar tarefa
    static createTask(req, res) {
        res.render('tasks/create')
    }

    // função mostrar tarefas
    static showTasks(req, res) {
        res.render('tasks/all')
    }

}