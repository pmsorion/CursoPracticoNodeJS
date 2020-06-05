module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!', 
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'SrO1MvnVKa',
        password: process.env.MYSQL_PASS || 'NnAGe5YjGq',
        database: process.env.MYSQL_DB || 'SrO1MvnVKa',
    }
}