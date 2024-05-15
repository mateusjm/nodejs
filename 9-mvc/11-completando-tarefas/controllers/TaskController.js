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

    // função editar tarefa
    static async updateTask(req, res) {

        // get id da url
        const id = req.params.id

        const task = await Task.findOne({where: {id: id}, raw:true})

        res.render('tasks/edit', {task})

    }

    // função salvar edição de tarefas
    static async updateTaskSave(req, res) {

        // post id do formulário
        const id = req.body.id

        const task = { 
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(task, {where: {id: id}})

        res.redirect('/tasks')

    }

    // função de marcar tarefa concluída
    static async toggleTaskStatus(req, res) {

        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false
        }

        await Task.update(task, {where: {id:id}})

        res.redirect('/tasks')

    }

    // função mostrar tarefas
    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }

}