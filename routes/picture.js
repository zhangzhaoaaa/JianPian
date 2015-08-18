/**
 * Created by mike on 15-8-18.
 */
var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );

exports.albumPictureIndex=function(req, res, next) {
    res.render('albumPictureIndex', { title: 'Express' });
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



