const express = require("express")
const app = express()
const db = require("./db")
app.listen(5555)

app.get("/ping", (req,res)=>{
        res.send({fecha:new Date()})
})

app.get("/products/:id", async (req,res)=>{
    try {
        const {recordset} = await db.q("select * from Products where ProductID = @id", {id: req.params.id})
        console.log("recordset",recordset)
        res.send(recordset[0])
    } catch (error) {
        res.send(error)
    }

})

app.get("/products/", async (req,res)=>{
    try {
        const {recordset} = await db.q("select * from Products")
        res.send(recordset)
    } catch (error) {
        res.send(error)
    }

})