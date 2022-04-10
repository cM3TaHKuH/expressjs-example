const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('r1')
})

router.get('/r1', (req, res)=>{
    res.send('r1 r1')
})

module.exports = router