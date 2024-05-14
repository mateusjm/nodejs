// importando o model Task
const Task = require('../models/Task')

// vamos invocar os models sem instancia-los por métodos estáticos
module.exports = class TaskController {
// funções TaskController

    //função criar tarefa
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        // solicitando o model no Controller
        await Task.create(task)

        res.redirect('/tasks')
    }

    // função mostrar tarefas
    static showTasks(req, res) {
        res.render('tasks/all')
    }

}