import type { HttpContext } from '@adonisjs/core/http'
import Employee from '#models/employee'

export default class EmployeesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const employees = await Employee.all()
    return { "employees": employees }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const id = params['id']
    const employee = await Employee.findBy('id', id)
    if (employee)
      return {
        "success": true,
        "employee": employee
      }
    else
      return { "success": false }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}