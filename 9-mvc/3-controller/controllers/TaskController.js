// importando o model Task
const Task = require('../models/Task')

// vamos invocar os models sem instancia-los por métodos estáticos
module.exports = class TaskController {

    static createTask(req, res) {
        res.render('tasks/create')
    }

}