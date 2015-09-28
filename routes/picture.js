/**
 * Created by mike on 15-8-18.
 */
var utils       = require( '../utils' );
var mongoose    = require( 'mongoose' );
var fs          = require( 'fs');
var Album = mongoose.model('Album');
exports.albumPictureIndex=function(req, res, next) {
    res.render('albumPictureIndex', { title: 'Express' });
};
exports.createAlbum=function(req,res,next){
    new Album(
        {   albumId:1,
            albumName:req.body.albumName,
            albumDescription:req.body.albumDescription
        }).save(function(err, album, count ){
            if( err ) return next( err );
            res.send({msg:'success'});
        });
};
exports.albumList=function(req,res,next){
    Album.find({},function(req,ablums,count){
        res.send({ablums:ablums});
    });
};
exports.upload=function(req,res,next){
    // req.body contains the text fields
    console.log(req.files);
    var extName = '';  //后缀名
    var data = req.files;
    for (var i=0;i<data.length;i++){
        var file = data[i];
        switch (file.mimetype) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }

        if(extName.length == 0){
            res.locals.error = '只支持png和jpg格式图片';
            res.render('index', { title: 'Express' });
            return;
        }

        var avatarName = Math.random() + '.' + extName;
        var newPath = file.destination + avatarName;

        console.log(newPath);
        fs.renameSync(file.path, newPath);  //重命名
    }
};
exports.albumPictureList = function ( req, res, next ){
    var data = [
        {
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },
        {
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },
        {
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },
        {
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        },{
            'id' : "1",
            'title' : "First image",
            'url' : "http://www.example.org/1",
            'width' : "200",
            'height' : "283",
            'image' : "../images/sample-images/image_8_big.jpg",
            'preview' : "../images/sample-images/image_8_big.jpg"
        }
    ];

    res.send({
        message:"success",
        data:data
    });
};




