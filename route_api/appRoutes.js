var User = require('../models/user');
apiRouter = function (router) {
    router.post('/user', function (req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function (err) {
            if (err) {
                return console.log(err);
            }
        });
        res.send('User created !');
    });
    router.get('/', function (req, res) {
        res.send("Hello World");
    });

    router.get('/home', function (req, res) {
        res.send("Hello World from home directory");
    });
    
    return router;
}

module.exports = apiRouter;