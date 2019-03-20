module.exports = function middleware(req, res, next){
    if(req.body.name[0] >= 'A' && req.body.name[0] <= 'Z'){
        next();
    }else{
        res.status(400).json({ error: 'User name is not c apitalized!'});
    }
}