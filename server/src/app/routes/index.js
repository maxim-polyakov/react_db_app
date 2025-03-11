const Router = require('express')
const messages = require('../../db/schema.ts')
const messageRouter = require('./messsageRouter')
const router = new Router()

router.use('/', messageRouter)

module.exports = router