// ipmportando pacotes
const express = require('express')
const router = express.Router()

// importando TaskController
const TaskController = require('../controllers/TaskController')

// criando TaskRoutes a partir das funções TaskController
router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskSave)
router.get('/', TaskController.showTasks)

// exportando router
module.exports = router