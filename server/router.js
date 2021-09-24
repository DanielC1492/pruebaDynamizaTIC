const router = require('express').Router();
const dataRouter = require('./routers/data.router');

router.use('/data', dataRouter);

module.exports = router;