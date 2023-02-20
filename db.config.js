const sqlConfig ={
    server:"sqlservercentralpublic.database.windows.net ",
    user: process.env.DBUSERNAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    pool:{
        idleTimoutMilllis:6000
    },
    options:{
        encrypted: true,
        trustServerCertifiicate:false,
        useUTC:true
    }
}
module.exports = sqlConfig;
