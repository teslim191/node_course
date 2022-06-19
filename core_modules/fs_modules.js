const fs = require("fs");
const path = require("path");

// create a folder
// fs.mkdir(path.join(__dirname, 'fs'), {}, err => {
//     if (err) throw err
//     console.log('folder created successfully..')
// })

// console.log('async')

// create and write into a file
// fs.writeFile(
//   path.join(__dirname, "fs", "index.txt"),
//   "nodejs for backend development",
//   (err) => {
//     if (err) throw err;
//     console.log("file written into...");
//   }
// );


// append into file
// fs.writeFile(
//   path.join(__dirname, "fs", "index.txt"),
//   "nodejs for backend development",
//   (err) => {
//     if (err) throw err;

//     // append into file
//     fs.appendFile(path.join(__dirname, "fs", "index.txt"), " on aptLearn", err => {
//         if (err) throw err
//         console.log('file edited successfully...')
//     })
//   }
// );


// read file
// fs.readFile(path.join(__dirname, "fs", "index.txt"), "utf8", (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// rename file
// fs.rename(path.join(__dirname, "fs", "index.txt"), path.join(__dirname, "fs", "home.txt"), err => {
//     if (err) throw err
//     console.log('file renamed')
// })


// create a folder
// fs.mkdir(path.join(__dirname, 'fs2'), {}, err => {
//     if (err) throw err
//     console.log('folder created successfully..')
// })

// delete folder
// if (!fs.existsSync) {
//     fs.mkdir(path.join(__dirname, 'fs2'), {}, err => {
//         if (err) throw err
//         console.log('folder created successfully..')
//     })    
// }else{
//     fs.rmdir(path.join(__dirname, "fs2"), err =>{
//         if (err) throw err
//         console.log("folder deleted...")
//     })
// }

// delete a file
// fs.unlink(path.join(__dirname, "fs", "home.txt"), err => {
//     if (err) throw err
//     console.log("file deleted..")
// })