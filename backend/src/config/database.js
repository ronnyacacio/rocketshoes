module.exports = {
  connection: 'pg',

  pg: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5434',
      user: 'postgres',
      password: 'docker',
      database: 'rocketshoes',
    },
  },
};
