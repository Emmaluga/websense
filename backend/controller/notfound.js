const routesnotfound =  (req,res,next)=> {
    res.status(404).send('routes cannot be found')
}

module.exports = routesnotfound