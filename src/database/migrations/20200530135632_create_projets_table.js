
exports.up = knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('title', [25]).notNullable()
    table.string('subtitle', [70]).notNullable()
    table.text('content').notNullable()

    // relacionamentos
    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')

    table.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('projects');

