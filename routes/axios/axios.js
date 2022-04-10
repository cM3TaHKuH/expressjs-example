const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.sendFile(__dirname + "/axios.html")
})

router.post('/',(req, res)=>{
    let a = req.body
    console.log(a);
    res.send({value: "Привет, " + a.value})
})

module.exports = router