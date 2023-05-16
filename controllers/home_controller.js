module.exports.home = function(req,res){
    return res.end('<h1>Express is up.</h1>')
}
module.exports.homeWeb = function(req,res){
    return res.end('<h1>Currrently you are in "/home" tab</h1>')
}

// module.exports.actionName = function(req,res){}