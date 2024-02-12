/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import ProductsController from '#controllers/products_controller'
import EmployeesController from '#controllers/employees_controller'

router.on('/').render('pages/home')

router.resource('products', ProductsController).only(['index', 'show']) // 'store', 'destroy'])
router.resource('employees', EmployeesController) 
