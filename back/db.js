const mssql = require("mssql");

config = {
    user:"sa",
    password: "My-secret-pw-1",
    database: "Northwind",
    server: "localhost",
    pool:{
        min:0,
        max:10,
        idleTimeoutMillis: 3000
    },
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
}

async function q(sql, parameters){ //adaptar funcion para que acepte parametros en la query
    try {
        
        await  mssql.connect(config)
        const request = new mssql.Request();
       
        // Agregar parámetros a la consulta
        if (parameters) {
           
            for (const param in parameters) {
                request.input(param, parameters[param]);
            }
        }
        
        const result = await request.query(sql)
        console.log("printing result", result) 
        return result
    } catch (error) {
        return {error}
    }
}

module.exports = {
    q
}

/* q("select TOP 2 * from customers;").then(res =>{
    console.log(res);
}).catch(e =>{
    console.log(e);
}) */

