const express = require('express')

const router = express.Router()

const Template = require('./models/template_model')

router.get('/',async (req,res,next) => {
    res.status(200).json({
        'info': 'Template API end-point'
    })
})


module.exports = router