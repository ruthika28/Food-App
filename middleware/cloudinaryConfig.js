const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'do8ujullm',
    api_key: '276121795183361',
    api_secret: 'p5tF0tDi8R-RYXXQFjM4zBcU3gk'
});

// exports.uploads = (file) => {
//     return new Promise(resolve => {
//         cloudinary.uploader.upload(file, (result) => {
//             resolve({ url: result.url, id: result.public_id })
//         }, { resource_type: "auto" })
//     })
// }

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}