import fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = fastify({ logger: true });

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening at ${address}`);
    }
);