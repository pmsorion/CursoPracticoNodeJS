module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3005,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!', 
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'SrO1MvnVKa',
        password: process.env.MYSQL_PASS || 'NnAGe5YjGq',
        database: process.env.MYSQL_DB || 'SrO1MvnVKa',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-15912.c114.us-east-1-4.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '15912',
        password: process.env.REDIS_PASS || 'MzdSTtRLsHbhAN9qwcc2DXzISitkjD0m'
    }
}