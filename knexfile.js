module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "docker"
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
