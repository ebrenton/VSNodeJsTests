module.exports = function (app, sql) {

    //app.get('/exercises', (req, res) => {
    //    sql.connect(sqlConfig, function () {
    //        var request = new sql.Request();
    //        request.query('select * from exercises', function (err, recordset) {
    //            if (err) {
    //                console.log(err);
    //            } else {
    //                res.end(JSON.stringify(recordset)); // Result in JSON format 
    //            }
    //        });
            
    //    }); 

    //});

    app.post('/notes', (req, res) => {
        // You'll create your note here.
        console.log(req.body)
        res.send('Hello')
    });
};
