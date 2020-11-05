let authSession = (req, res, next) => {
    next();
    // if (req.session.userId == 1) next();
    // else res.redirect("./404")
}


module.exports = {
    authSession: authSession
}