export default require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'birdbase',
        charset: 'utf8'
    }
});