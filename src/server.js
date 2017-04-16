import Hapi from 'hapi';
import routes from './routes';

const server = new Hapi.Server();

server.connection({
    host: (process.env.HOST || 'localhost'),
    port: (process.env.PORT || 3000),
    routes: {
        cors: true
    }
});

server.register(require('hapi-auth-jwt'), (err) => {
    server.auth.strategy('token', 'jwt', {
        key: 'benikoyumunyagmurlarindayikasinlar',
        verifyOptions: {
            algorithms: ['HS256'],
        }
    });


    routes.forEach((route) => {
        console.log(`attaching ${ route.path }`);
        server.route(route);
    });

});

server.start(err => {
    if (err) {
        console.error('Error was handled!')
        console.error(err);
    }

    console.log(`Server started at ${ server.info.uri }`);
})