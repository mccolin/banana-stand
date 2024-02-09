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

router.on('/').render('pages/home')

router.group(() => {
  router.get('products', [ProductsController, 'index'])
  router.get('products/:id', [ProductsController, 'show'])
  router.post('products', [ProductsController, 'store'])
})
  