var multer = require('multer');

//multer.diskStorage() creates a storage space for storing files. 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, '../src/assets/uploads')
        cb(null, 'C:/images')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    var filetype = ['image/jpeg', 'image/png', 'image/jpg'];
    if (filetype.includes(file.mimetype)) {
        cb(null, true)
    } else {
        //reject file
        cb({ message: 'Unsupported file format' }, false)
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

module.exports = upload;