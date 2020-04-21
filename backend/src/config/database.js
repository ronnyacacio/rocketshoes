module.exports = {
  connection: 'pg',

  pg: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'docker',
      database: 'rocketshoes',
    },
  },
};
