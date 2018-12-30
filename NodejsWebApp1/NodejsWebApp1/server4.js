var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'mail.seielect.com',
    port: 25
    //auth: {
    //    user: 'youremail@gmail.com',
    //    pass: 'yourpassword'
    //}
});

var mailOptions = {
    from: 'nodetest@seielect.com',
    to: 'ebrenton@seielect.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

http.createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            res.write('File uploaded - ' + files.filetoupload.path + '<br />');
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/ebrenton/NodeJS/NodejsWebApp1/uploads/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}).listen(8080);