import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // @column()
  // @hasOne(() => User)
  //user: HasOne<typeof User>

  @column()
  declare title: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
