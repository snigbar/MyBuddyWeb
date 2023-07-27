const jwt = require('jsonwebtoken')

const verifyJwt = (req, res, next) => {
    try {
        let token = req.header("Authorization")
        if(!token) res.status(403).send('Access Denied')

        if(token.startsWith('Bearer ')) token.slice(7, token.length).trimLeft()
        const verified = jwt.sign(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(500).json({error: error.message})   
    }
}

module.exports  = verifyJwt