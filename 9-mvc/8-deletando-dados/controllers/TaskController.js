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

    // função remover tarefa
    static async removeTask(req, res) {
        
        const id = req.body.id

        await Task.destroy({where: {id: id}})

        res.redirect('/tasks')

    }

    // função mostrar tarefas
    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }

}