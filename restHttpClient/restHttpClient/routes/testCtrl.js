module.exports = function (app) {


    //http://127.0.0.1:3000/testCtrl
    app.get('/testCtrl/', function (req, res) {
        return res.send(200,"HooRay");
    });

    //http://127.0.0.1:3000/testCtrl/test
    app.get("/testCtrl/:id/",
        function(req, res) {
            return res.send(200, "this is also a meothod:  " + req.params.id);
        });

    
}