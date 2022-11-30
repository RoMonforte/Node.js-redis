module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret: process.env.API_PORT ||  'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'sql9.freemysqlhosting.net',
        user: process.env.MYSQL_USER || 'sql9581389',
        password: process.env.MYSQL_PASSWORD || 'd19D3IBFpt', 
        database: process.env.MYSQL_DB || 'sql9581389',        
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,

    }

} 