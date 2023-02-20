const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);
async function getSalesProducts(){
    console.log('Conecting to SQL.......Coud Server');
    let  dbContext = await sql.connect(dbConnection);
    console.log('The Database connection was Successful');
    console.log('Getting data');
    let results = await dbCotext.request()
                        .query(`
                        SELECT TOP(20)
                             productId,
                             name,
                             productNumber,
                            color
                            listPrice
                        FROM    
                             salesLT.Product
                            `);
    console.log(`Returned SQL results`);
    return results;                       
}
module.exports = {getSalesProducts : getSalesProducts};
