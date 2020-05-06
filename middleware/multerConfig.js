var multer = require('multer');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'do8ujullm',
    api_key: '276121795183361',
    api_secret: 'p5tF0tDi8R-RYXXQFjM4zBcU3gk'
});
const cloudinaryStorage=require("multer-storage-cloudinary");
//multer.diskStorage() creates a storage space for storing files. 
var storageForCloudinary = cloudinaryStorage({
    cloudinary:cloudinary,
    folder:'Images',
    allowedFormats:['jpg','jpeg','png'],
    filename: function (req, file, cb) {
        cb(null,file.fieldname +'-'+Date.now())
    }
});

const upload = multer({
    storage: storageForCloudinary,
})

module.exports = upload;
